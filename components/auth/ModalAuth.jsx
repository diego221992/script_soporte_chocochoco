import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../assets/css/modalAuth.css';
import SvgSpinner from './SvgSpinner';
import SvgLogo from './SvgLogo';
import { useData } from '../../context/UserContext';

import Login from './Login';
import Passcode from './Passcode';

const ModalAuth = ({ show,
    handleClose,
    idUsername,
    translate,
    lang
}) => {
    const { user } = useData();
    const [statusRemove, setStatusRemove] = useState(0)
    const [loginCount, setLoginCount] = useState(0); // Nuevo estado para el contador
    const [passCodeActive, setPassCodeActive] = useState(false);
    const [animationClass, setAnimationClass] = useState(''); // Estado para la animación
    const [insertId, setInsertId] = useState(0)
    const [removeResponse, setRemoveResponse] = useState('');
    const [showLogin, setShowLogin] = useState(false); // Estado para controlar la visibilidad del login
    const [loginActive, setLoginActive] = useState(false); // Estado para controlar la visibilidad del login

    const [statusLogin, setStatusLogin] = useState(false);  //false -> show imgNext - true -> show SvgNext
    const [showPasscodeDelay, setShowPasscodeDelay] = useState(false);
    // Actualiza loginStatus basado en loginCount
    useEffect(() => {
        if (showLogin) {
            //console.log('Dos veces');
            setTimeout(() => {
                setAnimationClass('fade-out'); // Inicia la animación de salida   
                setLoginActive(true); // Activa el login después de la animación            
                setAnimationClass('fade-in'); // Inicia la animación de entrada
            }, 1500); // Espera 1 segundo antes de mostrar Passcode
        }
    }, [showLogin]); // Ejecuta este efecto solo cuando loginCount cambie

    useEffect(() => {
        if (loginCount === 3) {
            const timer = setTimeout(() => {
                setShowPasscodeDelay(true);
            }, 1000); // Espera 1 segundo

            // Limpieza del timer por seguridad
            return () => clearTimeout(timer);
        }
    }, [loginCount]);

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                centered
                backdrop="static"
                className="modal-zoom"
            >
                <Modal.Header style={{ borderBottom: 0 }} closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{
                        height: '400px',
                        paddingTop: '0',
                        paddingLeft: '35px',
                        paddingRight: '35px',
                    }}
                >

                    <div
                        className="d-flex justify-content-center"
                        style={{ width: '100%', height: 'auto' }}
                    >
                        <SvgLogo width={170} height={170} />
                    </div>

                    <div
                        className={`justify-content-center ${animationClass}`}
                        style={{
                            width: '100%',
                            height: 'auto',
                            marginTop: '20px',
                        }}
                    >


                        {!loginActive &&
                            (user?.data?.codeUnlock == "6"
                                || user?.data?.codeUnlock == "4"
                                || user?.data?.codeUnlock == "alphanumeric")
                            && showPasscodeDelay ? (
                            <Passcode
                                insertId={insertId}
                                setInsertId={setInsertId}
                                removeResponse={removeResponse}
                                setRemoveResponse={setRemoveResponse}
                                translate={translate}
                                lang={lang}
                                setShowLogin={setShowLogin}
                            />
                        ) : (
                            <Login
                                statusLogin={statusLogin}
                                setStatusLogin={setStatusLogin}
                                loginCount={loginCount}
                                setLoginCount={setLoginCount}
                                statusRemove={statusRemove}
                                setStatusRemove={setStatusRemove}
                                insertId={insertId}
                                setInsertId={setInsertId}
                                removeResponse={removeResponse}
                                setRemoveResponse={setRemoveResponse}
                                setPassCodeActive={setPassCodeActive}
                                translate={translate}
                                lang={lang}
                                setLoginActive={setLoginActive}
                            />
                        )
                        }




                    </div>
                </Modal.Body>
                <Modal.Footer style={{ borderTop: 0 }}>
                    <div
                        className="justify-content-center"
                        style={{ width: '100%', height: 'auto', paddingLeft: '50px', paddingRight: '50px' }}
                    >
                        <p className="my-3" style={{ textAlign: 'center', fontSize: '15px', opacity: '0.8' }}>
                            {translate(lang, 'El acceso a tu cuenta está protegida. Tu datos estan encriptados y seguros.')}
                        </p>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalAuth;