import React from 'react';

import giftcard from '../assets/svg/giftcard.svg';
import appcareImageLarge2x from '../assets/img/main_content_two/appcare.image.large_2x.png';
import appecareImageSmall2x from '../assets/img/main_content_two/appecare.image.small_2x.png';
import serviceImageLarge2x from '../assets/img/main_content_two/service.image.large_2x.png';
import serviceImageSmall2x from '../assets/img/main_content_two/service.image.small_2x.png';
import contentBlockAppeSupport from '../assets/img/main_content_two/content-block-appe-support.png';
import tileFeatureRoundTodayatapple from '../assets/img/main_content_two/tile-feature-round-todayatapp.png';
import tileFeatureRoundYoutube from '../assets/img/main_content_two/tile-feature-round-youtube.png';

const MainContentTwo = ({ translate, lang }) => {
    return (
        <>
            <section className="color-section">


                <section className="container-fluid color-section ps-4 pe-4 pb-4 pt-5">

                    {/* SECCIÓN 1: AppleCare */}

                    {lang != "pt" && (
                        <div className="d-flex justify-content-center mb-4">
                            <div className="ancho-soporte bg-white rounded rounded-4 overflow-hidden">
                                <div className="row g-0 align-items-center">
                                    <div className="col-12 col-md-6 order-1 order-md-2">
                                        <div className="p-5 text-start">
                                            <h2 className="mb-4 fw-bold mainContentStyles">{translate(lang, 'Al cuidado de AppleCare')}</h2>
                                            <p className="mb-4  pStyles">{translate(lang, 'Cada plan AppleCare ofrece un servicio integral para los productos Apple...')}</p>
                                            <a className="link-tres text-decoration-none" href="/">
                                                {translate(lang, 'Obtén más información')} <span className="ms-1">&rsaquo;</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 order-2 order-md-1">
                                        <picture className="as-tile-image d-flex justify-content-center">
                                            <source srcSet={appecareImageSmall2x} media="(max-width: 734px)" />
                                            <img src={appcareImageLarge2x} alt="Apple Care" width="490" height="380" className="img-fluid w-100 h-100" style={{ objectFit: 'cover', minHeight: '240px' }} />
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* SECCIÓN 2: Longevidad */}
                    <div className="d-flex justify-content-center mb-5">
                        <div className="ancho-soporte bg-white rounded rounded-4 overflow-hidden">
                            <div className="row g-0 align-items-center">
                                <div className="col-12 col-md-6">
                                    <div className="p-5 text-start">
                                        <h2 className="mb-4 fw-bold mainContentStyles">
                                            {translate(lang, 'Reparación y servicio de Apple')}
                                        </h2>
                                        <p className="mb-4  pStyles">{translate(lang, 'Podemos ayudarte a buscar una reparación con certificación de Apple...')}</p>
                                        <a className="link-tres text-decoration-none" href="/">
                                            {translate(lang, 'Iniciar una reparación')} <span className="ms-1">&rsaquo;</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <picture className="as-tile-image d-flex justify-content-center">
                                        <source srcSet={serviceImageSmall2x} media="(max-width: 734px)" />
                                        <img src={serviceImageLarge2x} alt="Soporte Servicio" width="490" height="380" className="img-fluid w-100 h-100" style={{ objectFit: 'cover', minHeight: '240px' }} />
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECCIÓN: MÁS PARA EXPLORAR */}
                    <div className="container mt-5 mb-5" style={{ maxWidth: '1100px' }}> {/* 1. Aumentamos un poco el ancho total para dar aire */}
                        <h2 className="text-center mb-5 fw-bold mainContentStyles">
                            {translate(lang, 'Más para explorar')}
                        </h2>

                        {/* 2. Usamos justify-content-evenly para que el espacio sobrante se reparta entre las tarjetas */}
                        <div className="row g-5 justify-content-evenly">

                            {/* Tarjeta 1: App Soporte */}
                            <div className="col-12 col-md-5 col-lg-4 text-center px-4"> {/* 3. Añadimos px-4 para separar el contenido interno */}
                                <div className="mb-4 d-flex justify-content-center">
                                    {
                                        lang === 'en'
                                            ? (<img
                                                src={tileFeatureRoundYoutube}
                                                alt="YouTube"
                                                className="img-fluid shadow-sm"
                                                style={{ borderRadius: '22px', maxWidth: '320px' }}
                                            />)
                                            : (<img
                                                src={contentBlockAppeSupport}
                                                alt="App Soporte"
                                                className="img-fluid shadow-sm"
                                                style={{ borderRadius: '22px', maxWidth: '320px' }}
                                            />)

                                    }

                                </div>
                                <div className=''>
                                    <h2 className='mb-3 mt-3 mainContentTwoStyles'>
                                        {translate(lang, 'App Soporte de Apple')}

                                    </h2>
                                    <div className=''>
                                        <p className='pContent pStyles'>{translate(lang, 'Obtén ayuda para todos tus productos AppIe en un solo lugar o conéctate con especialistas.')}</p>
                                        <a className='mt-4 mt-md-0 text-decoration-none fontLink' href="/">{translate(lang, 'Descargar')}</a>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta 2: Today at Apple */}
                            <div className="col-12 col-md-5 col-lg-4 text-center px-4"> {/* 3. Añadimos px-4 aquí también */}
                                <div className="mb-4 d-flex justify-content-center">
                                    <img
                                        src={tileFeatureRoundTodayatapple}
                                        alt="Today at Apple"
                                        className="img-fluid shadow-sm"
                                        style={{ borderRadius: '22px', maxWidth: '320px' }}
                                    />
                                </div>
                                <div className=''>
                                    <h2 className='mb-3 mt-3 textSubTitle mainContentTwoStyles'>
                                        {translate(lang, 'Today at Apple')}
                                    </h2>
                                    <div className=''>
                                        <p className=' pContent pStyles'>{translate(lang, 'Aprende, crea e inspírate en sesiones prácticas en tu AppIe Store.')}</p>
                                        <a className='mt-4 mt-md-0 text-decoration-none fontLink' href="/">{translate(lang, 'Inscríbete')}</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* SECCIÓN: ADVERTENCIAS Y ESTAFAS */}
                    <div className="d-flex justify-content-center mt-4">
                        <div className="contenedor-ultima-seccion">
                            <div className="columna rounded rounded-4">
                                <h2 className="mb-3 SubTitle mainContentTwoStyles">
                                    {translate(lang, 'Ten cuidado con las piezas falsificadas')}

                                </h2>
                                <p className="mb-4 pContent pStyles">{translate(lang, 'Es posible que algunos adaptadores de energía y baterías de proveedores independientes no estén diseñados adecuadamente, y eso podría ocasionar problemas de seguridad. Para asegurarte de recibir una batería AppIe original al solicitar un reemplazo de batería, te recomendamos visitar una ')}
                                    <a className="link-tres " href="/">{translate(lang, 'AppIe Store')}</a> {translate(lang, 'o un')}
                                    <a className="link-tres" href="/">{translate(lang, 'proveedor de servicios autorizado por AppIe.')}</a>
                                    {translate(lang, 'Si necesitas un adaptador de reemplazo para cargar tu dispositivo AppIe, te recomendamos adquirir uno de AppIe.')}
                                </p>
                                <p className='pContent pStyles'>{translate(lang, 'Asimismo, es posible que las pantallas de reemplazo que no son originales tengan una calidad visual deficiente y no funcionen correctamente. Contamos con expertos de confianza que realizan reparaciones certificadas por AppIe usando piezas originales de AppIe.')}
                                </p>
                            </div>

                            <div className="columna-dos rounded rounded-4">
                                <img className="ancho-img" src={giftcard} alt="" />
                                <h2 className="textSubTitle mt-2 mt-md-4 mainContentTwoStyles">
                                    {translate(lang, 'Ten cuidado con las estafas relacionadas con las tarjetas de regalo')}

                                </h2>
                                <p className='pContent mt-3 pStyles'>{translate(lang, 'Ten cuidado con las estafas relacionadas con las tarjetas AppIe Store y las tarjetas App Store y iTunes.')}
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
                    <div className=" pContent">
                        <h2 className="mainContentTwoStyles">
                            {translate(lang, 'Programas de servicio de AppIe')}

                        </h2>
                        <p className="m-1 pStyles"><a className="link-tres" href="/">{translate(lang, 'Programa de servicio de la Mac mini para problemas de alimentación')}</a></p>
                        <p className="m-1 pStyles"><a className="link-tres" href="/">{translate(lang, 'Programa de servicio del iPhone 14 Plus para problemas con la cámara posterior')}</a></p>
                        <p className="m-1 pStyles"><a className="link-tres" href="/">{translate(lang, 'Programa de retirada del mercado de baterías para MacBook Pro de 15 pulgadas')}</a></p>
                        <p className="m-1 pStyles">
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
    );
};

export default MainContentTwo;