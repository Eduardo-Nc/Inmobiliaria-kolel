import React, { Fragment, useState } from 'react';
import {Redirect} from 'react-router-dom';
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

const Descripcion = (props) => {

    const [data, setData] = useState(props.location.item);
 
    if(data === undefined){
        window.location.href = "/"
    }

    const ventaorenta = data.nombre_tipo_oferta === "Renta" ? " / Mensual" : "" ;

    

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
            original: 'https://besthqwallpapers.com/Uploads/3-12-2017/31657/thumb2-luxury-apartment-modern-interior-living-room-two-storey-apartment-minimalism.jpg',
            thumbnail: 'https://besthqwallpapers.com/Uploads/3-12-2017/31657/thumb2-luxury-apartment-modern-interior-living-room-two-storey-apartment-minimalism.jpg',
        },
        
    ];



    return (
        <Fragment>

            <NavBar />

            <div className="contenedor-descripcion-principal">

                <div className="contenedor-descripcion-titulo">
                    <h1>{data.nombre_propiedad}</h1>
                    <p>{data.ciudad_estado_pais_propiedad}</p>
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
                                <h3>{data.precio_propiedad} {ventaorenta} </h3>
                            </div>

                            <div className="contenedor-id-tipo-venta">
                                <p>ID: <strong>{data.identificador_propiedad}</strong></p>
                                <h4>{data.nombre_tipo_oferta} </h4>
                            </div>
                        </div>

                        <div className="contenedor-datos-predio">
                            <div className="cuadrado-datos">
                                <div className="contenedor-imagen-predio-datos">
                                    <img src={tamanoCasa2} />
                                </div>

                                <div className="contenedor-datos-texto-predio">
                                    <h4>{data.construccion_propiedad} m<sup>2</sup> </h4>
                                </div>
                            </div>

                            <div className="cuadrado-datos">
                                <div className="contenedor-imagen-predio-datos">
                                    <img src={cama} />
                                </div>

                                <div className="contenedor-datos-texto-predio">
                                    <h4>{data.cantidad_recamaras_propiedad} Recámara(s)</h4>
                                </div>
                            </div>


                            <div className="cuadrado-datos">
                                <div className="contenedor-imagen-predio-datos">
                                    <img src={toilet} />
                                </div>

                                <div className="contenedor-datos-texto-predio">
                                    <h4>{data.cantidad_bano_propiedad} Baño(s)</h4>
                                </div>
                            </div>


                            <div className="cuadrado-datos">
                                <div className="contenedor-imagen-predio-datos">
                                    <img src={garaje} />
                                </div>

                                <div className="contenedor-datos-texto-predio">
                                    <h4>{data.cantidad_garaje_propiedad} Espacio(s)</h4>
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
                                        <li>ID: {data.identificador_propiedad}</li>
                                        <li>Tipo inmueble: {data.nombre_tipo_inmueble}</li>

                                    </ul>
                                </div>

                            </div>

                            <div className="contenido-detalles-predio">

                                <div className="contenido-detalle-predio">
                                    <h3>Ubicación</h3>
                                </div>

                                <div className="contenido-caracteristicas-predio">
                                    <ul>
                                        <li>{data.colonia_propiedad}</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="contenido-detalles-predio">

                                <div className="contenido-detalle-predio">
                                    <h3>Referencias</h3>
                                </div>

                                <div className="contenido-caracteristicas-predio">
                                    <ul>
                                        <li>
                                            {data.referencias_propiedad}
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
                                        <li> 
                                            {data.descripcion_propiedad}
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
                                        <li>Terreno: {data.terreno_propiedad} m<sup>2</sup> </li>
                                        <li>Construcción: {data.construccion_propiedad} m<sup>2</sup> </li>

                                    </ul>
                                </div>

                            </div>

                            <div className="contenido-detalles-predio">

                                <div className="contenido-detalle-predio">
                                    <h3>Opciones de pago</h3>
                                </div>

                                <div className="contenido-caracteristicas-predio">
                                    <ul>
                                        <li>{data.nombre_tipo_pago}</li>
                                    </ul>
                                </div>

                            </div>


                        </div>

                        <div className="contenedor-mapa-desc-propiedad">
                            <iframe src={data.mapa_propiedad} width="770" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
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

                            <textarea required rows="5" defaultValue={`Me interesa esta propiedad (ID: ${data.identificador_propiedad}), quiero recibir más información. ¡Gracias!`} />

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