import React, { Fragment } from 'react';
import './TarjetaCasa.css';
import {Link} from 'react-router-dom';

import tamanoCasa from '../../imagenes/iconos/tamano-de-la-casa.png';
import garaje from '../../imagenes/iconos/garaje.png';
import toilet from '../../imagenes/iconos/toilet.png';
import cama from '../../imagenes/iconos/cama.png';
import comentario from '../../imagenes/iconos/informacion2.png';

const TarjetaCasa = () => {


    return (
        <Fragment>
            <div className="contenedor-principal-tarjeta-casa">
                
                    <div className="contenedor-tarjeta-casa-titulo"> 
                        <h1>Últimas propiedades</h1>
                    </div>
                    
              
                <div className="contenedor-tarjeta-casa">
                    <Link to="/descripcion"> 
                    <div className="contenedor-tarjeta-arriba">

                        <div className="tarjeta-tipo-oferta" >
                            <h3>EN RENTA</h3>
                        </div>

                        <div className="contenedor-tarjeta-casa-imagen">
                            <img src="https://www.sadasi.com/SadasiR2/wp-content/uploads/2019/01/casa-modelo-montreal-las-americas-merida-yucatan.jpg" alt="" title="" />
                        </div>

                        <div className="contenedor-tarjeta-casa-descripcion">
                            <p>Casa en "Colonia", "Estado" </p>
                        </div>

                        <div className="contenedor-tarjeta-casa-precio">
                            <h3>$2,400.000 MXN</h3>
                        </div>

                        <div className="contenedor-tarjeta-boton">
                            <button type="button"> <img src={comentario} /> Cotizar</button>
                        </div>
                    </div>
                    <div className="contendor-principal-detalles-casa">

                        <div className="contendor-detalles-casa">
                            <div className="contendor-detalles-casa-imagen">
                                <img src={tamanoCasa} alt="Tamaño Terreno" title="Tamaño Terreno" />
                            </div>

                            <div className="contendor-detalles-casa-tamano">
                                <h4>20x10 m<sup>2</sup></h4>
                            </div>

                        </div>

                        <div className="contendor-detalles-casa">
                            <div className="contendor-detalles-casa-imagen">
                                <img src={cama} alt="Recámaras" title="Recámaras" />
                            </div>

                            <div>
                                <h4>3</h4>
                            </div>

                        </div>

                        <div className="contendor-detalles-casa">
                            <div className="contendor-detalles-casa-imagen">
                                <img src={toilet} alt="Baños" title="Baños" />
                            </div>

                            <div>
                                <h4>4</h4>
                            </div>

                        </div>

                        <div className="contendor-detalles-casa">
                            <div className="contendor-detalles-casa-imagen">
                                <img src={garaje} alt="Aforo garaje" title="Aforo garaje" />
                            </div>

                            <div>
                                <h4>2</h4>
                            </div>

                        </div>

                    </div>

                    <div>

                    </div>
                    </Link>
                </div>


                <div className="contenedor-tarjeta-casa">
                    <Link to="/descripcion"> 
                    <div className="contenedor-tarjeta-arriba">

                        <div className="tarjeta-tipo-oferta" >
                            <h3>EN RENTA</h3>
                        </div>

                        <div className="contenedor-tarjeta-casa-imagen">
                            <img src="https://www.sadasi.com/SadasiR2/wp-content/uploads/2019/01/casa-modelo-montreal-las-americas-merida-yucatan.jpg" alt="" title="" />
                        </div>

                        <div className="contenedor-tarjeta-casa-descripcion">
                            <p>Casa en "Colonia", "Estado" </p>
                        </div>

                        <div className="contenedor-tarjeta-casa-precio">
                            <h3>$2,400.000 MXN</h3>
                        </div>

                        <div className="contenedor-tarjeta-boton">
                            <button type="button"> <img src={comentario} /> Cotizar</button>
                        </div>
                    </div>
                    <div className="contendor-principal-detalles-casa">

                        <div className="contendor-detalles-casa">
                            <div className="contendor-detalles-casa-imagen">
                                <img src={tamanoCasa} alt="Tamaño Terreno" title="Tamaño Terreno" />
                            </div>

                            <div className="contendor-detalles-casa-tamano">
                                <h4>20x10 m<sup>2</sup></h4>
                            </div>

                        </div>

                        <div className="contendor-detalles-casa">
                            <div className="contendor-detalles-casa-imagen">
                                <img src={cama} alt="Recámaras" title="Recámaras" />
                            </div>

                            <div>
                                <h4>3</h4>
                            </div>

                        </div>

                        <div className="contendor-detalles-casa">
                            <div className="contendor-detalles-casa-imagen">
                                <img src={toilet} alt="Baños" title="Baños" />
                            </div>

                            <div>
                                <h4>4</h4>
                            </div>

                        </div>

                        <div className="contendor-detalles-casa">
                            <div className="contendor-detalles-casa-imagen">
                                <img src={garaje} alt="Aforo garaje" title="Aforo garaje" />
                            </div>

                            <div>
                                <h4>2</h4>
                            </div>

                        </div>

                    </div>

                    <div>

                    </div>
                    </Link>
                </div>



                <div className="contenedor-tarjeta-casa">
                    <Link to="/descripcion"> 
                    <div className="contenedor-tarjeta-arriba">

                        <div className="tarjeta-tipo-oferta" >
                            <h3>EN RENTA</h3>
                        </div>

                        <div className="contenedor-tarjeta-casa-imagen">
                            <img src="https://www.sadasi.com/SadasiR2/wp-content/uploads/2019/01/casa-modelo-montreal-las-americas-merida-yucatan.jpg" alt="" title="" />
                        </div>

                        <div className="contenedor-tarjeta-casa-descripcion">
                            <p>Casa en "Colonia", "Estado" </p>
                        </div>

                        <div className="contenedor-tarjeta-casa-precio">
                            <h3>$2,400.000 MXN</h3>
                        </div>

                        <div className="contenedor-tarjeta-boton">
                            <button type="button"> <img src={comentario} /> Cotizar</button>
                        </div>
                    </div>
                    <div className="contendor-principal-detalles-casa">

                        <div className="contendor-detalles-casa">
                            <div className="contendor-detalles-casa-imagen">
                                <img src={tamanoCasa} alt="Tamaño Terreno" title="Tamaño Terreno" />
                            </div>

                            <div className="contendor-detalles-casa-tamano">
                                <h4>20x10 m<sup>2</sup></h4>
                            </div>

                        </div>

                        <div className="contendor-detalles-casa">
                            <div className="contendor-detalles-casa-imagen">
                                <img src={cama} alt="Recámaras" title="Recámaras" />
                            </div>

                            <div>
                                <h4>3</h4>
                            </div>

                        </div>

                        <div className="contendor-detalles-casa">
                            <div className="contendor-detalles-casa-imagen">
                                <img src={toilet} alt="Baños" title="Baños" />
                            </div>

                            <div>
                                <h4>4</h4>
                            </div>

                        </div>

                        <div className="contendor-detalles-casa">
                            <div className="contendor-detalles-casa-imagen">
                                <img src={garaje} alt="Aforo garaje" title="Aforo garaje" />
                            </div>

                            <div>
                                <h4>2</h4>
                            </div>

                        </div>

                    </div>

                    <div>

                    </div>
                    </Link>
                </div>



            </div>
        </Fragment>
    )
}

export default TarjetaCasa;