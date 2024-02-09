import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './styles.css';

function Fotos(){




    return (
        <>
        <Header />
        <div className="fotos-content-banner">
        <h1 id="titulo">confira as imagens</h1>
        <div className="fotos-content">
        <div className="foto banner-1-1"></div>
        <div className="foto banner-2-2"></div>
        <div className="foto banner-3-3"></div>
        </div>
        <div className="fotos-content">
        <div className="foto banner-4-4"></div>
        <div className="foto banner-5-5"></div>
        <div className="foto banner-6-6"></div>
        </div>

        </div>
        <Footer />
        </>
        


    );
}

export default Fotos;

