import React, { Fragment } from 'react';
import './Descripcion.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Logo from '../../imagenes/iconos/logo.png';

import NavBar from '../../componentes/navBar/NavBar';
import Footer from '../../componentes/footer/Footer';

const Descripcion = () => {


    const images = [
        {
            original: 'https://besthqwallpapers.com/Uploads/3-12-2017/31657/thumb2-luxury-apartment-modern-interior-living-room-two-storey-apartment-minimalism.jpg',
            thumbnail: 'https://besthqwallpapers.com/Uploads/3-12-2017/31657/thumb2-luxury-apartment-modern-interior-living-room-two-storey-apartment-minimalism.jpg',
        },
        {
            original: 'https://i.pinimg.com/originals/29/53/47/2953470a7e1f90e07515a5d95e22854d.jpg',
            thumbnail: 'https://i.pinimg.com/originals/29/53/47/2953470a7e1f90e07515a5d95e22854d.jpg',
        },
        {
            original: 'https://besthqwallpapers.com/Uploads/12-7-2019/99635/thumb2-stylish-interior-design-living-room-apartments-minimalism-light-wooden-floor.jpg',
            thumbnail: 'https://besthqwallpapers.com/Uploads/12-7-2019/99635/thumb2-stylish-interior-design-living-room-apartments-minimalism-light-wooden-floor.jpg',
        },
    ];



    return (
        <Fragment>
            <NavBar />

            <div className="contenedor-descripcion-principal">

                <div className="contenedor-descripcion-titulo">
                    <h1>Nombre Casa</h1>
                    <p>Ubicación casa</p>
                </div>

                <div className="contenedor-slider-contacto">
                    <div className="contenedor-descripcion-slider">
                        <ImageGallery thumbnailPosition="left" showPlayButton={false} autoPlay={true} showIndex={true} showBullets={true} items={images} />
                    </div>

                    <div className="contenedor-descripcion-contacto">

                        <form autoComplete="off">
                            <label>Contáctenos:</label>
                            <img src={Logo} alt="logo" />
                        </form>

                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Descripcion