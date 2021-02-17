import React, { Fragment } from 'react';
import './Descripcion.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


import Logo from '../../imagenes/iconos/logo.png';
import tamanoCasa2 from '../../imagenes/iconos/tamano-de-la-casa2.png';
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
            original: 'https://besthqwallpapers.com/Uploads/3-12-2017/31657/thumb2-luxury-apartment-modern-interior-living-room-two-storey-apartment-minimalism.jpg',
            thumbnail: 'https://besthqwallpapers.com/Uploads/3-12-2017/31657/thumb2-luxury-apartment-modern-interior-living-room-two-storey-apartment-minimalism.jpg',
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
                                    <img src={tamanoCasa2} />
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
                                    <h4>2 Recámaras</h4>
                                </div>
                            </div>


                            <div className="cuadrado-datos">
                                <div className="contenedor-imagen-predio-datos">
                                    <img src={toilet} />
                                </div>

                                <div className="contenedor-datos-texto-predio">
                                    <h4>4 Baños</h4>
                                </div>
                            </div>


                            <div className="cuadrado-datos">
                                <div className="contenedor-imagen-predio-datos">
                                    <img src={garaje} />
                                </div>

                                <div className="contenedor-datos-texto-predio">
                                    <h4>2 Espacios</h4>
                                </div>
                            </div>
                        </div>


                        <div className="contenedor-detalles-general-predio">

                            <div className="contenido-detalles-predio">

                                <div className="contenido-detalle-predio">
                                    <h3>Detalles</h3>
                                </div>

                                <div className="contenido-caracteristicas-predio">
                                    <ul>
                                        <li>ID:  272671</li>
                                        <li>Tipo: Casa</li>

                                    </ul>
                                </div>

                            </div>

                            <div className="contenido-detalles-predio">

                                <div className="contenido-detalle-predio">
                                    <h3>Ubicación</h3>
                                </div>

                                <div className="contenido-caracteristicas-predio">
                                    <ul>
                                        <li>AV. ALFREDO BARRERA VÁZQUEZ</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="contenido-detalles-predio">

                                <div className="contenido-detalle-predio">
                                    <h3>Referencias</h3>
                                </div>

                                <div className="contenido-caracteristicas-predio">
                                    <ul>
                                        <li>SOBRE AVENIDA PRINCIPAL , A 300 METROS DE PLAZA DORADA, CERCA DE
                                        HOSPITALES, CENTRO COMERCIALES, ESCUELAS, PARQUE.
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className="contenido-detalles-predio">

                                <div className="contenido-detalle-predio">
                                    <h3>Descripción</h3>
                                </div>

                                <div className="contenido-caracteristicas-predio">
                                    <ul>
                                        <li> SALA, COMEDOR SEPARADOS CON PUERTA VENTANA DE
                                        ALUMINIO CON PROTECTOR DE HERRERIA, COCINA QUE DA A LA CALLE,
                                        CON TRES RECAMARAS CON CLOSET, CUENTA CON BAÑO Y MEDIO, PASILLO
                                        DE SERVICIO, CON VENTANAS DE ALUMINIO Y PROTECTORES DE HERRERÍA,
                                        BARDA PERIMETRAL, COCHERA TECHADA PARA DOS AUTOS, TERRENO DE
                                        200 MTS2 (8 X 25) Y 172 M2 DE CONSTRUCCIÓN.
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className="contenido-detalles-predio">

                                <div className="contenido-detalle-predio">
                                    <h3>Superficie</h3>
                                </div>

                                <div className="contenido-caracteristicas-predio">
                                    <ul>
                                        <li>Terreno: m<sup>2</sup> </li>
                                        <li>Construcción: m<sup>2</sup> </li>

                                    </ul>
                                </div>

                            </div>

                            <div className="contenido-detalles-predio">

                                <div className="contenido-detalle-predio">
                                    <h3>Opciones de pago</h3>
                                </div>

                                <div className="contenido-caracteristicas-predio">
                                    <ul>
                                        <li>-Contado</li>
                                        <li>-SE ACEPTAN CRÉDITOS INFONATIV</li>
                                    </ul>
                                </div>

                            </div>


                        </div>

                        <div className="contenedor-mapa-desc-propiedad">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29798.7888406426!2d-89.555217!3d20.998705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x79c44ef61b023c18!2sPARQUE%20CHICHI%20SUAREZ!5e0!3m2!1ses-419!2sus!4v1613582605566!5m2!1ses-419!2sus" width="770" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
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

                            <textarea required rows="5" value="Me interesa esta propiedad (ID: AE-2020/272671), quiero recibir más información. ¡Gracias!" />

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