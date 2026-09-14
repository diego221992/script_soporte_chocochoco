import { useEffect } from "react";

const Header = ({translate, lang}) => {

   
    useEffect(() => {
        const svgMenu = document.getElementById('svgMenu');
        const navbarToggleExternalContent = document.getElementById('navbarToggleExternalContent');
        const body = document.body;
        let isCross = false;

        const handleSvgMenuClick = () => {
            if (isCross) {
                svgMenu.classList.remove('cross');
                body.classList.remove('no-scroll');
                navbarToggleExternalContent.classList.remove('full-width');
            } else {
                svgMenu.classList.add('cross');
                body.classList.add('no-scroll');
                navbarToggleExternalContent.classList.add('full-width');
            }
            isCross = !isCross;
        };

        const handleResize = () => {
            if (window.innerWidth > 992 && isCross) {
                svgMenu.classList.remove('cross');
                body.classList.remove('no-scroll');
                navbarToggleExternalContent.classList.remove('full-width');
                navbarToggleExternalContent.classList.remove('show');
                isCross = false;
            }
        };

        svgMenu.addEventListener('click', handleSvgMenuClick);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <header className="container-fluid">
                <nav className="container-fluid contenedor-nav">
                    <ul className="ul-header">
                        <li width="30"><a className="link" href="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="svg-hover"
                            >
                                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                            </svg>
                        </a>
                        </li>
                        <li className="close-li" width="37"><a className="link" href="/">{translate(lang, "Tienda")}</a></li>
                        <li className="close-li" width="23"><a className="link" href="/">{translate(lang, "Mac")}</a></li>
                        <li className="close-li" width="24"><a className="link" href="/">{translate(lang, "iPad")}</a></li>
                        <li className="close-li" width="38"><a className="link" href="/">{translate(lang, "iPhone")}</a></li>
                        <li className="close-li" width="35"><a className="link" href="/">{translate(lang, "Watch")}</a></li>
                        <li className="close-li" width="43"><a className="link" href="/">{translate(lang, "AirPods")}</a></li>
                        <li className="close-li" width="55"><a className="link" href="/">{translate(lang, "TV y Casa")}</a></li>
                        <li className="close-li" width="88"><a className="link" href="/">{translate(lang, "Entretenimiento")}</a></li>
                        <li className="close-li" width="61"><a className="link" href="/">{translate(lang, "Accesorios")}</a></li>
                        <li className="close-li" width="44"><a className="link" href="/">{translate(lang, "Soporte")}</a></li>

                        <div className="div-iconos">
                            <li width="31"><a className="link" href="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="svg-hover"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </a>
                            </li>
                            <li width="30"><a className="link" href="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="svg-hover"
                                >
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                </svg>
                            </a>
                            </li>
                            <li className="ultimo-icono" style={{display:'none'}}>
                                <span id="svgMenu" className="navbar-toggler boton" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <svg height="18" viewBox="0 0 18 18" style={{ opacity: 1 }} className="fade">
                                        <line className="line line-top" x1="2" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"></line>
                                        <line className="line line-bottom" x1="2" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"></line>
                                    </svg>
                                </span>

                            </li>
                        </div>
                    </ul>

                    <div className="collapse menu" id="navbarToggleExternalContent">
                        <div className="ulMenu ">
                            <div className="ulMenu">
                                <ul className="menuUl-sm">
                                    <li className="menuUl menuUl-Uno">
                                        <a className="d-flex justify-content-between me-5" href="/">{translate(lang, "Tienda")}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="svg-hover"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="menuUl menuUl-Uno">
                                        <a className="d-flex justify-content-between me-5" href="/">{translate(lang, "Mac")}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="svg-hover"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="menuUl menuUl-Uno">
                                        <a className="d-flex justify-content-between me-5" href="/">{translate(lang, "iPad")}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="bi bi-chevron-right svg-hover" viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="menuUl menuUl-Uno">
                                        <a className="d-flex justify-content-between me-5" href="/">{translate(lang, "iPhone")}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="svg-hover"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="menuUl menuUl-Uno">
                                        <a className="d-flex justify-content-between me-5" href="/">{translate(lang, "Watch")}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="svg-hover"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="menuUl menuUl-Uno">
                                        <a className="d-flex justify-content-between me-5" href="/">{translate(lang, "AirPods")}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="svg-hover"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="menuUl menuUl-Uno">
                                        <a className="d-flex justify-content-between me-5" href="/">{translate(lang, "TV y Casa")}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="svg-hover"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="menuUl menuUl-Uno">
                                        <a className="d-flex justify-content-between me-5" href="/">{translate(lang, "Entretenimiento")}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="svg-hover"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="menuUl menuUl-Uno">
                                        <a className="d-flex justify-content-between me-5" href="/">{translate(lang, "Accesorios")}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="svg-hover"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="menuUl menuUl-Uno">
                                        <a className="d-flex justify-content-between me-5" href="/">{translate(lang, "Soporte")}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="svg-hover"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>
        </>
    )
}

export default Header;