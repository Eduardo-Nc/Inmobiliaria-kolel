import React, { Fragment, useState, useEffect } from 'react';
import './TarjetaCasa.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import tamanoCasa from '../../imagenes/iconos/tamano-de-la-casa.png';
import garaje from '../../imagenes/iconos/garaje.png';
import toilet from '../../imagenes/iconos/toilet.png';
import cama from '../../imagenes/iconos/cama.png';
import comentario from '../../imagenes/iconos/informacion2.png';

const TarjetaCasa = () => {

    const baseUrl = window.$baseUrl;

    const [data, setData] = useState([]);

    
    const peticionGet = async () => {
        await axios.get(baseUrl + "/api/todas/propiedades")
            .then(response => {
                setData(response.data);
            }).catch(error => {
                console.log(error);
            })
    }


    useEffect (() =>{
        peticionGet();
    },[])
    

    return (
        <Fragment>
            <div className="contenedor-principal-tarjeta-casa">

                <div className="contenedor-tarjeta-casa-titulo">
                    <h1>Últimas propiedades</h1>
                </div>

            {data.map(item => 
                
                <div key={item.id_propiedad} className="contenedor-tarjeta-casa">

                    <Link  to={{pathname: "/descripcion", item}} >  

                        <div className="contenedor-tarjeta-arriba">

                            <div className="tarjeta-tipo-oferta" >
                                <h3>{item.nombre_tipo_oferta}</h3>
                            </div>

                            <div className="contenedor-tarjeta-casa-imagen" style={item.nombre_tipo_oferta === "Vendida" || item.nombre_tipo_oferta ===  "Rentada" ?{position: 'relative', display: 'inline-block', textAlign: 'center'}:{}}>

                                <img src="https://www.sadasi.com/SadasiR2/wp-content/uploads/2019/01/casa-modelo-montreal-las-americas-merida-yucatan.jpg" alt="Propiedad" title="Propiedad" />
                               { item.nombre_tipo_oferta === "Vendida" || item.nombre_tipo_oferta ===  "Rentada" ?
                                <div className="texto-agotado">
                                    <h2>NO DISPONIBLE</h2>
                                </div>
                                :
                                ""
                                }

                            </div>

                            <div className="contenedor-tarjeta-casa-descripcion">
                                <p>{item.nombre_propiedad}</p>
                            </div>

                            <div className="contenedor-tarjeta-casa-precio">
                                <h3>${item.precio_propiedad}</h3>
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
                                    <h4>{item.construccion_propiedad} m<sup>2</sup></h4>
                                </div>

                            </div>

                            <div className="contendor-detalles-casa">
                                <div className="contendor-detalles-casa-imagen">
                                    <img src={cama} alt="Recámaras" title="Recámaras" />
                                </div>

                                <div>
                                    <h4>{item.cantidad_recamaras_propiedad}</h4>
                                </div>

                            </div>

                            <div className="contendor-detalles-casa">
                                <div className="contendor-detalles-casa-imagen">
                                    <img src={toilet} alt="Baños" title="Baños" />
                                </div>

                                <div>
                                    <h4>{item.cantidad_bano_propiedad}</h4>
                                </div>

                            </div>

                            <div className="contendor-detalles-casa">
                                <div className="contendor-detalles-casa-imagen">
                                    <img src={garaje} alt="Aforo garaje" title="Aforo garaje" />
                                </div>

                                <div>
                                    <h4>{item.cantidad_garaje_propiedad}</h4>
                                </div>

                            </div>

                        </div>

                        <div>

                        </div>
                    </Link>
                </div>
            )}


            </div>
        </Fragment>
    )
}

export default TarjetaCasa;