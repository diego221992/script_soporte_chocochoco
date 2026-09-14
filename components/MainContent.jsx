import imageGridIphoneNav2x from '../assets/img/main_content/image-grid-iphone-nav_2x.png';
import imageGridMacNav2x from '../assets/img/main_content/image-grid-mac-nav_2x.png';
import imageGridIpadTn2x from '../assets/img/main_content/image-grid-ipad-tn_2x.png';
import imageGridWatch2x from '../assets/img/main_content/image-grid-watch_2x.png';
import imageGridAirpods2x from '../assets/img/main_content/image-grid-airpods_2x.png';
import imageGridTv2x from '../assets/img/main_content/image-grid-tv_2x.png';
import imageGridBillingSubscriptionsNav2x from '../assets/img/main_content/image-grid-billing-subscriptions-nav_2x.png';
import iconAccountPasswordOpen from '../assets/img/main_content/icon-account-password-open.svg';
import iconCalendarSubscription from '../assets/img/main_content/icon-calendar-subscription.svg';
import iconReceiptPurchaseHistory from '../assets/img/main_content/icon-receipt-purchase-history.svg';

const MainContent = ({ translate, lang, handleShow }) => {

    return (
        <>

            <section className="container-fluid px-0">
                {/* Equipos */}

                <div className="contenedor-Grid">
                    <div className="grid-item">
                        <div className="text-center" onClick={handleShow} style={{ cursor: 'pointer' }}>
                            <img src={imageGridIphoneNav2x} width="34" height="68" alt="" />
                            <p className="mt-2"><a className="link-dos" href="javascript:void(0)">{translate(lang, "iPhone")}</a></p>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="text-center" onClick={handleShow} style={{ cursor: 'pointer' }}>
                            <img src={imageGridMacNav2x} width="110" height="66" alt="" />
                            <p className="mt-2"><a className="link-dos" href="javascript:void(0)">{translate(lang, "Mac")}</a></p>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="text-center" onClick={handleShow} style={{ cursor: 'pointer' }}>
                            <img src={imageGridIpadTn2x} width="68" height="48" alt="" />
                            <p className="mt-2"><a className="link-dos" href="javascript:void(0)">{translate(lang, "iPad")}</a></p>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="text-center" onClick={handleShow} style={{ cursor: 'pointer' }}>
                            <img src={imageGridWatch2x} width="42" height="68" alt="" />
                            <p className="mt-2"><a className="link-dos" href="javascript:void(0)">{translate(lang, "Watch")}</a></p>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="text-center" onClick={handleShow} style={{ cursor: 'pointer' }}>
                            <img src={imageGridAirpods2x} width="72" height="68" alt="" />
                            <p className="mt-2"><a className="link-dos" href="javascript:void(0)">{translate(lang, "AirPods")}</a></p>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="text-center" onClick={handleShow} style={{ cursor: 'pointer' }}>
                            <img src={imageGridTv2x} width="72" height="68" alt="" />
                            <p className="mt-2"><a className="link-dos" href="javascript:void(0)">{translate(lang, "TV")}</a></p>
                        </div>
                    </div>

                    

                    
                </div>
            </section>
            <div className="container-fluid mt-5">
                {/* Reparacion, facturacion, contraseña */}
                <h2 className="d-flex justify-content-center my-5 mainContentStyles">
                    {translate(lang, 'Herramientas de soporte técnico')}
                </h2>
                <div className="container-fluid mb-5 d-flex justify-content-center">
                    <div className="contenedor-Grid-Dos mx-4">
                        <div className="shadow p-4 rounded rounded-4 img-article" style={{ fontSize: '17px', fontWeight: 400 }}>
                            {lang === 'en' && (<img className="mt-3" src={iconAccountPasswordOpen} width="60" height="60" alt="" />)}                            
                            <a className="link-tres my-4" href="/">{translate(lang, 'Restablecer la contraseña de la cuenta de Apple')}</a>
                        </div>
                        <div className="shadow p-4 rounded rounded-4 img-article" style={{ fontSize: '17px', fontWeight: 400 }}>
                            {lang === 'en' && (<img src={iconCalendarSubscription} width="60" height="60" alt="" />)}
                            <a className="link-tres my-4" href="/">{translate(lang, 'Verificar la garantía o el plan AppleCare')}</a>
                        </div>
                        <div className="shadow p-4 rounded rounded-4 img-article" style={{ fontSize: '17px', fontWeight: 400 }}>
                            {lang === 'en' && (<img src={iconReceiptPurchaseHistory} width="60" height="60" alt="" />)}
                            <a className="link-tres my-4" href="/">{translate(lang, 'Cambiar una suscripción')}</a>
                        </div>
                    </div>
                </div>
                {/*------------------------*/}
                {/*--Buscar--*/}
                <div className="container-fluid my-5">
                    <h2 className="d-flex justify-content-center my-5 pt-5 mainContentStyles">
                        {translate(lang, 'Buscar más temas')}
                    </h2>

                    <form className="container-fluid">
                        {/* Fila de Bootstrap para controlar el ancho */}
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-9 py-4"> {/* Aquí controlas el ancho (6 de 12 columnas en desktop) */}

                                {/* Contenedor Principal: Centrado y con ancho máximo */}
                                <div className="form-floating position-relative w-100 formInput">

                                    {/* Icono de búsqueda - POSICIÓN FIJA */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        className="bi bi-search position-absolute ms-3"
                                        viewBox="0 0 16 16"
                                        style={{
                                            opacity: 0.5,
                                            zIndex: 10,
                                            left: '10px',
                                            top: '24px'
                                        }}
                                    >
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>

                                    {/* Input de Búsqueda */}
                                    <input
                                        type="text"
                                        className="form-control ps-5 rounded rounded-4 shadow-sm" // Quité 'border-3' porque choca con tu style inline
                                        id="floatingInput"
                                        placeholder=" "
                                        data-bs-toggle="collapse"
                                        data-bs-target="#soporte-buscar"
                                        aria-expanded="false"
                                        aria-controls="soporte-buscar"
                                        style={{
                                            height: '65px',
                                            paddingTop: '1.5rem',
                                            borderColor: '#d1d1d6', // Gris suave de Apple
                                            borderWidth: '1px',     // El grosor más fino posible
                                            borderStyle: 'solid',
                                            outline: 'none',        // Evita el borde azul grueso al hacer clic
                                            boxShadow: 'none'       // Si quieres que se vea plano y limpio
                                        }}
                                    />
                                    {/* Etiqueta flotante alineada con la lupa */}
                                    <label
                                        htmlFor="floatingInput"
                                        className="ps-5 textInput"
                                        style={{ left: "12px", opacity: 0.7 }}
                                    >
                                        {translate(lang, 'Buscar en Soporte')}
                                    </label>

                                    {/* Menú Desplegable (Collapse) */}
                                    <div className="collapse mt-2 shadow-lg w-100" id="soporte-buscar">
                                        <div className="card card-body border-0 rounded-4 px-0 py-3">
                                            <p className="ps-4 fw-bold text-muted small mb-2">
                                                {translate(lang, 'Enlaces Rápidos')}
                                            </p>

                                            <div className="list-group list-group-flush text-start"> {/* text-start para alinear links a la izquierda */}
                                                <a className="list-group-item list-group-item-action border-0 ps-5 py-2" href="/">
                                                    {translate(lang, 'Si olvidaste la contraseña de tu AppIe ID')}
                                                </a>
                                                <a className="list-group-item list-group-item-action border-0 ps-5 py-2" href="/">
                                                    {translate(lang, 'Si olvidaste el código de tu iPhone, iPad o iPod touch')}
                                                </a>
                                                <a className="list-group-item list-group-item-action border-0 ps-5 py-2" href="/">
                                                    {translate(lang, 'Ver, cambiar o cancelar suscripciones')}
                                                </a>
                                                <a className="list-group-item list-group-item-action border-0 ps-5 py-2" href="/">
                                                    {translate(lang, 'Actualizar el iPhone, iPad o iPod touch')}
                                                </a>
                                                <a className="list-group-item list-group-item-action border-0 ps-5 py-2 mb-2" href="/">
                                                    {translate(lang, 'Contacto Soporte de AppIe')}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        </>
    )
}

export default MainContent;