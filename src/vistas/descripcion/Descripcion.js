import React, { Fragment } from 'react';
import './Descripcion.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


import Logo from '../../imagenes/iconos/logo.png';
import tamanoCasa from '../../imagenes/iconos/tamano-de-la-casa.png';
import garaje from '../../imagenes/iconos/garaje.png';
import toilet from '../../imagenes/iconos/toilet.png';
import cama from '../../imagenes/iconos/cama.png';


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
                    <p>Mérida, Yucatán, México</p>
                </div>

                <div className="contenedor-slider-contacto">

                    <div className="contenedor-slider-datos">

                        <div className="contenedor-slider-caracteristicas">

                            <div className="contenedor-descripcion-slider">
                                <ImageGallery thumbnailPosition="bottom" showPlayButton={false} autoPlay={true} showIndex={true} showBullets={true} items={images} />
                            </div>

                        </div>

                        <div className="contenedor-detalles-venta">
                            <div className="contenedor-precio-predio">
                                <h3>7,498 MXN / Mensual</h3>
                            </div>

                            <div className="contenedor-id-tipo-venta">
                                <p>ID: <strong>272671</strong></p>
                                <h4>EN RENTA</h4>
                            </div>
                        </div>

                        <div className="contenedor-datos-predio">
                            <div className="cuadrado-datos"> 
                                 <div className="contenedor-imagen-predio-datos"> 
                                    <img src={tamanoCasa} />
                                 </div>

                                 <div className="contenedor-datos-texto-predio"> 
                                     <h4>20x10 m<sup>2</sup> </h4>
                                 </div>
                            </div> 

                            <div className="cuadrado-datos"> 
                                 <div className="contenedor-imagen-predio-datos"> 
                                    <img src={cama} />
                                 </div>

                                 <div className="contenedor-datos-texto-predio"> 
                                     <h4>20x10 m<sup>2</sup> </h4>
                                 </div>
                            </div> 


                            <div className="cuadrado-datos"> 
                                 <div className="contenedor-imagen-predio-datos"> 
                                    <img src={toilet} />
                                 </div>

                                 <div className="contenedor-datos-texto-predio"> 
                                     <h4>20x10 m<sup>2</sup> </h4>
                                 </div>
                            </div> 


                            <div className="cuadrado-datos"> 
                                 <div className="contenedor-imagen-predio-datos"> 
                                    <img src={garaje} />
                                 </div>

                                 <div className="contenedor-datos-texto-predio"> 
                                     <h4>20x10 m<sup>2</sup> </h4>
                                 </div>
                            </div> 
                        </div>

                    </div>


                    <div className="contenedor-descripcion-contacto">

                        <form autoComplete="off">
                            <label>Contáctanos:</label>

                            <img src={Logo} title="Logo" alt="logo" />

                            <div className="contenedor-nombre-telefono">
                                <h3>Nombre Inmobiliaria</h3>

                                <a href="tel:9991295931" title="Telefóno de contácto">
                                    <i className="fas fa-phone-alt"></i>
                                     (999) 129 5931
                                </a>

                            </div>

                            <input type="text" required placeholder="Nombre" />

                            <input type="email" required placeholder="Correo" />

                            <input type="text" required placeholder="Número de teléfono" />

                            <textarea required rows="5" />

                            <input type="submit" value="Enviar" />

                        </form>

                    </div>
                </div>

            </div>



            <Footer />
        </Fragment>
    )
}

export default Descripcion