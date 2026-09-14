import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Link, useNavigate } from 'react-router';
import { useData } from './context/UserContext';
import Index from './components/Index';
import Error403 from './components/Error403';
import Error404 from './components/Error404';

import geolocation from './services/geolocation';
import notifications from './services/notifications';
import responses from './services/responses';
import translator from './services/translator';

function App() {
  const { loading, isReady, verifyProcess, geoData } = useData();
  const [lang, setLang] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    verifyProcess();
  }, []);

  useEffect(() => {
    const detectLanguage = () => {
      const browserLang = navigator.language || navigator.languages[0];
      const shortLang = browserLang.split('-')[0];
      setLang(shortLang);
    };
    detectLanguage();
  }, []);

  useEffect(() => {
    document.title = translate(lang, 'Soporte técnico');
  }, [lang]);

  const translate = (lang, text) => {
    try {
      const response = translator.translate(lang, text);
      return response;
    } catch (error) {
      console.error('Translation error:', error);
      return null;
    }
  };

  const handleShow = () => {
    setShow(true);
    document.getElementById('root').style.filter = 'blur(8px)';
  };

  const handleClose = () => {
    setShow(false);
    document.getElementById('root').style.filter = 'none';
  };

  // Estilos actualizados: Fondo blanco y Spinner Negro
  const loaderStyles = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .spinner-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #ffffff; /* Fondo blanco puro */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
    .spinner-circle {
      width: 50px;
      height: 50px;
      border: 5px solid #e0e0e0; /* Gris claro para el fondo del círculo */
      border-top: 5px solid #000000; /* Negro para la parte que gira */
      border-radius: 50%;
      animation: spin 0.8s linear infinite; /* Un poco más rápido para mayor fluidez */
      margin-bottom: 20px;
    }
  `;

  return (
    <>
      <style>{loaderStyles}</style>

      {loading && (
        <div className="spinner-overlay">
          <div className="spinner-circle"></div>
          <h1 className="text-xl" style={{ color: "#000000", margin: 0, fontWeight: '500' }}>
          </h1>
        </div>
      )}

      {!loading && isReady === true && (
        <Routes>
          <Route
            path={'/'}
            element={
              <Index
                handleShow={handleShow}
                show={show}
                handleClose={handleClose}
                translate={translate}
                lang={lang}
              />
            }
          />
          <Route
            path="*"
            element={<Error404 translate={translate} lang={lang} />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;