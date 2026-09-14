import { useState } from 'react'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import MainContentTwo from './MainContentTwo';
import ModalAuth from './auth/ModalAuth';

import Button from 'react-bootstrap/Button';

import titleOne from '../assets/img/titleOne.png';
import titleOneSmall from '../assets/img/titleOneSmall.png';
import titleOneEn from '../assets/img/titleOneEn.png';
import titleOnePt from '../assets/img/titleOnePt.png';
import logoCircleBlue from '../assets/img/logo-circle-blue.png'

const Index = ({
  handleShow,
  show,
  handleClose,
  translate,
  lang
}) => {
  return (
    <>
      <Header translate={translate} lang={lang} />
      <main className="p-0">
        <section className="container-fluid">

          {/* 1. LOGO AZUL (ARRIBA) */}
          {/* 1. LOGO AZUL (ESTÁTICO) */}
          <div
            className="img-header"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: '40px',
              width: '100%'
            }}
          >
            <img
              src={logoCircleBlue}
              alt="Logo"
              style={{
                width: '160px',   /* <--- Tamaño fijo en píxeles */
                height: '160px',  /* <--- Altura fija para asegurar que no varíe */
                objectFit: 'contain' /* Mantiene la forma del logo dentro del cuadro */
              }}
            />
          </div>

          {/* 2. TÍTULOS (DEBAJO DEL LOGO) */}
          <div className='d-flex flex-column align-items-center my-5'
          >
            <h1 className='titleInit'
            >
              {translate(lang, 'Soporte técnico de Apple')}
            </h1>
            <p className='subTitleInit'>
              {translate(lang, '¿Necesitas ayuda? Comienza aquí.')}
            </p>
          </div>

          {/* 3. CONTENIDO RESTANTE */}
          <div className="d-flex justify-content-center my-0">
            <ModalAuth
              show={show}
              handleClose={handleClose}
              translate={translate}
              lang={lang}
            />
          </div>

          <MainContent translate={translate} lang={lang} handleShow={handleShow} />
        </section>

        <MainContentTwo translate={translate} lang={lang} />
      </main>
      <Footer translate={translate} lang={lang} />
    </>
  )
}

export default Index;