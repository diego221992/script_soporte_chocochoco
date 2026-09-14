import React from 'react';

import supportXXL from '../assets/img/support-XXL.png';
import supportXL from '../assets/img/support-XL.png';
import supportLG from '../assets/img/support-LG.png';
import supportMD from '../assets/img/support-MD.png';
import nuevoSM from '../assets/img/nuevo-sm.jpg';
import supportApp from '../assets/img/supportapp.png';
import homePromo from '../assets/img/home-promo.png';
import plus from '../assets/img/plus.png';
import giftcard from '../assets/svg/giftcard.svg';

const MainContentTwo = ({translate, lang}) => {
    return (
        <>
           <section className="color-section">
            <section className="container-fluid color-section p-4">

                <div className="d-flex justify-content-center">
                    <div className="ancho-soporte pt-3 px-0 text-center bg-white rounded rounded-4">
                        <div className="mt-4 mb-5 mb-lg-2 mb-md-0 pb-sm-3 px-2">
                            <h2 className="px-2">{translate(lang, 'Soporte técnico de AppIe en YouTube')}</h2>
                            <p className="px-5">{translate(lang, 'Echa un vistazo a nuestro canal oficial de YouTube para aprovechar al máximo las últimas funciones, dispositivos y servicios.')}
                            </p>
                            <a className="mb-5 link-tres" href="/">
                                {translate(lang, 'Visita el soporte técnico de AppIe en YouTube')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                </svg>
                            </a>
                        </div>
                        <div className="img-home">
                        </div>
                        <img className="img-fluid img-home-dos" src={homePromo} alt="" />

                    </div>
                </div>
            </section>
           
            <section className="grid-soporte">
                <div className="content-soporte-nuevo text-center bg-white">
                    <div className="mt-5 pt-3">
                        <h2 className="h1">{translate(lang, 'Obtener soporte técnico')}</h2>
                        <p className="px-4">{translate(lang, 'Bríndanos algunos detalles y te ofreceremos la mejor solución. Puedes comunicarte por teléfono, chat, correo electrónico y mucho más.')}</p>
                        <button className="btn btn-dark rounded rounded-5">{translate(lang, 'Empieza ahora')}</button>
                    </div>

                    <img className="img-nuevo-uno" style={{display:'none'}} src={supportXXL}idth="262" height="262"
                        alt="" />
                    <img className="img-nuevo-cero" style={{display:'none'}} src={supportXL} width="262" height="262"
                        alt="" />
                    <img className="img-nuevo-tres" style={{display:'none'}} src={supportLG} width="262" height="262"
                        alt="" />
                    <img className="img-nuevo-cuatro" style={{display:'none'}} src={supportMD} width="262"
                        height="262" alt="" />
                    <img className="img-nuevo-cinco" style={{display:'none'}} src={supportMD} width="262" height="262"
                        alt=""/>

                </div>

                <div className="content-soporte-nuevo text-center bg-white">
                    <div className="mt-5 pt-3">
                        <h3 className="h1">{translate(lang, 'App Soporte de AppIe')}</h3>
                        <p className="px-4">{translate(lang, 'Obtén ayuda para todos tus productos AppIe en un solo lugar o conéctate con especialistas.')}
                        </p>
                        <div>
                            <a className="dos-link" href="/">{translate(lang, 'Descargar')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                </svg>
                            </a>
                        </div>
                        <div className="mb-5 mt-2">
                            <a className="dos-link" href="/">{translate(lang, 'Conoce la app Soporte de AppIe')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <img className="img-nuevo-dos" src={supportApp} width="262" height="262" alt="" />


                </div>
            </section>

           
            <section className="container-fluid color-section mt-5">
                <div className="d-flex justify-content-center p-4">
                    <div className="ancho-soporte text-center bg-white rounded rounded-4">
                        <div className="my-5">
                            <h2 className="m-3">{translate(lang, 'Mi soporte')}</h2>
                            <p className="">{translate(lang, 'Obtén información sobre la garantía, consulta el estado de la cobertura o busca una reparación existente.')}
                            </p>
                            <a className="mb-4 link-tres" href="/">
                                {translate(lang, 'Inicia sesión con tu cuenta de AppIe')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
           
            <section className="container-fluid color-section ps-4 pe-4 pb-4 pt-0">

                <div className="d-flex justify-content-center">
                    <div className="ancho-soporte pt-3 px-0 text-center bg-white rounded rounded-4">
                        <div className="mt-4 mb-5 mb-lg-2 mb-md-0 pb-sm-3 px-2">
                            <h2 className="px-2">{translate(lang, 'AppIeCare+')}</h2>
                            <p className="px-5">{translate(lang, 'Obtén reparaciones ilimitadas para tener protección por daño accidental, acceso prioritario a los expertos de AppIe y mucho más.')}
                            </p>
                            <a className="mb-5 link-tres" href="/">
                                {translate(lang, 'Obtener más información')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </a>
                        </div>
                        <img className="img-fluid img-plus" src={plus} alt="" />

                    </div>
                </div>
            </section>
          
            <section className="container-fluid color-section ps-4 pe-4 pb-4 pt-0">

                <div className="d-flex justify-content-center">
                    <div className="ancho-soporte pt-3 px-0 text-center bg-white rounded rounded-4">
                        <div className="mt-4 mb-5 mb-lg-2 mb-md-0 pb-sm-3 px-2">
                            <h2 className="px-2">{translate(lang, 'Diseño para la longevidad')}</h2>
                            <p className="px-5">{translate(lang, 'En AppIe, siempre trabajamos para crear la mejor experiencia para nuestros clientes, por eso diseñamos productos que duran. Diseñar para la longevidad es un esfuerzo de toda la empresa, que informa nuestras primeras decisiones mucho antes de que se construya el primer prototipo y se guía por los datos históricos de uso del cliente y las predicciones sobre el uso futuro. Requiere lograr un equilibrio entre durabilidad y reparabilidad, sin comprometer la seguridad, la protección y la privacidad.')}</p>
                            <p className="px-5">{translate(lang, 'Obtén más información sobre el enfoque de AppIe para diseñar para la longevidad, que incluye el acceso a reparaciones seguras y confiables.')}</p>
                            <a className="mb-5 link-tres" href="/">
                                {translate(lang, 'Ver (PDF)')}
                            </a>
                        </div>
                    </div>
                </div>



                <div className="d-flex justify-content-center mt-4">
                    <div className="contenedor-ultima-seccion">
                        <div className="columna rounded rounded-4">
                            <h3 className="mb-3">{translate(lang, 'Ten cuidado con las piezas falsificadas')}</h3>
                            <p className="mb-4">{translate(lang,'Es posible que algunos adaptadores de energía y baterías de proveedores independientes no estén diseñados adecuadamente, y eso podría ocasionar problemas de seguridad. Para asegurarte de recibir una batería AppIe original al solicitar un reemplazo de batería, te recomendamos visitar una ')} 
                                <a className="link-tres" href="/">{translate(lang, 'AppIe Store')}</a> {translate(lang, 'o un')}
                                <a className="link-tres" href="/">{translate(lang, 'proveedor de servicios autorizado por AppIe.')}</a>
                                {translate(lang, 'Si necesitas un adaptador de reemplazo para cargar tu dispositivo AppIe, te recomendamos adquirir uno de AppIe.')}
                            </p>
                            <p>{translate(lang, 'Asimismo, es posible que las pantallas de reemplazo que no son originales tengan una calidad visual deficiente y no funcionen correctamente. Contamos con expertos de confianza que realizan reparaciones certificadas por AppIe usando piezas originales de AppIe.')}
                            </p>
                        </div>

                        <div className="columna-dos rounded rounded-4">
                            <img className="ancho-img" src={giftcard} alt="" />
                            <h4>{translate(lang, 'Ten cuidado con las estafas relacionadas con las tarjetas de regalo')}</h4>
                            <p>{translate(lang, 'Ten cuidado con las estafas relacionadas con las tarjetas AppIe Store y las tarjetas App Store y iTunes.')}
                            </p>
                            <a className="link-tres" href="/">{translate(lang, 'Obtén más información')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>
            </section>
         
            <section className="pre-footer bg-white">
                <div className="">
                    <h3 className="">{translate(lang, 'Programas de servicio de AppIe')}</h3>
                    <p className="m-1"><a className="link-tres" href="/">{translate(lang, 'Programa de servicio de iPhone 14 Plus para problemas con la cámara posterior')}</a></p>
                    <p className="m-1"><a className="link-tres" href="/">{translate(lang, 'Programa de servicio para los dispositivos iPhone 12 y iPhone 12 Pro con problemas de falta de sonido')}
                    </a></p>
                    <p className="m-1"><a className="link-tres" href="/">{translate(lang, 'Programa de retirada del mercado de baterías para MacBook Pro de 15 pulgadas')}</a></p>
                    <p className="m-1"><a className="link-tres" href="/">{translate(lang, 'Programa de intercambio del adaptador de pared CA de tres puntas de AppIe')}</a></p>
                    <p className="m-1">
                        <a className="link-tres" href="/">{translate(lang, 'Ver todos los programas')}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </a>
                    </p>
                </div>
            </section>          
        </section>
        </>
    )
}

export default MainContentTwo;