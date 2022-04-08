import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import tamanoCasa from '../../imagenes/iconos/tamano-de-la-casa.png';
import toilet from '../../imagenes/iconos/toilet.png';
import cama from '../../imagenes/iconos/cama.png';

import comentario from '../../imagenes/iconos/informacion2.png';

const Posts = ({ posts, result, cargando, setResult }) => {

    const baseUrl = window.$baseUrl;
    const nubeUrl = window.$nubeUrl;

    const recargar = () => {
        setResult([]);
    }

    return (

        <Fragment>

            {result.length === 0 ?
                <Fragment>

                    {cargando === false ? <div className="spinner"></div> : ""}

                    {posts.map(item =>

                        <div key={item.id_propiedad} className="contenedor-tarjeta-casa">

                            <Link to={`/descripcion/${item.id_propiedad}`} >

                                <div className="contenedor-tarjeta-arriba">



                                    <div className="contenedor-tarjeta-casa-imagen" style={item.nombre_tipo_oferta === "Vendida" || item.nombre_tipo_oferta === "Rentada" ? { position: 'relative', display: 'inline-block', textAlign: 'center' } : {}}>
                                        <div className="tarjeta-tipo-oferta" >
                                            <h3>{item.nombre_tipo_oferta}</h3>
                                        </div>
                                        <img src={nubeUrl + item.caratula_propiedad + ".jpg"} alt="Propiedad" title={item.nombre_propiedad} />
                                        {item.nombre_tipo_oferta === "Vendida" || item.nombre_tipo_oferta === "Rentada" ?
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
                                        <h3>{Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(item.precio_propiedad) + " MXN"}</h3>
                                    </div>

                                    {item.id_tipo_inmueble === 1 || item.id_tipo_inmueble === 2 ?

                                        <div className="contendor-principal-detalles-casa">

                                            <div className="contendor-detalles-casa">
                                                <div className="contendor-detalles-casa-imagen">
                                                    <img src={tamanoCasa} alt="Recámaras" title="Recámaras" />
                                                </div>

                                                <div className="contendor-detalles-casa-textos">
                                                    <h4 style={{ paddingTop: '4px' }} >{item.construccion_propiedad} m<sup>2</sup></h4>
                                                </div>

                                            </div>

                                            <div className="contendor-detalles-casa">
                                                <div className="contendor-detalles-casa-imagen">
                                                    <img src={cama} alt="Recámaras" title="Recámaras" />
                                                </div>

                                                <div className="contendor-detalles-casa-textos contendor-detalles-casa-textos">
                                                    <h4>{item.cantidad_recamaras_propiedad}</h4>
                                                </div>

                                            </div>

                                            <div className="contendor-detalles-casa">
                                                <div className="contendor-detalles-casa-imagen">
                                                    <img src={toilet} alt="Baños" title="Baños" />
                                                </div>

                                                <div className="contendor-detalles-casa-textos">
                                                    <h4>{item.cantidad_bano_propiedad}</h4>
                                                </div>

                                            </div>

                                            {/* <div className="contendor-detalles-casa">
                                        <div className="contendor-detalles-casa-imagen">
                                            <img src={garaje} alt="Aforo garaje" title="Aforo garaje" />
                                        </div>

                                        <div className="contendor-detalles-casa-textos">
                                            <h4>{item.cantidad_garaje_propiedad}</h4>
                                        </div>

                                    </div> */}

                                        </div>
                                        :
                                        <div style={{ border: 'none', width: '100%' }} className="contendor-detalles-casa">
                                            {/* <div className="contendor-detalles-casa-imagen">
                                        <img src={medidaTerreno} alt="Tamaño Terreno" title="Tamaño Terreno" />
                                    </div> */}

                                            <div style={{ justifyContent: 'space-around', height: '35px' }} className="contendor-detalles-casa-textos">
                                                <strong style={{ fontSize: '17px', color: 'black', fontWeight: 'normal' }} >Superficie total:</strong>
                                                <h4 style={{ fontSize: '16px' }} >{item.terreno_propiedad} m<sup>2</sup></h4>
                                            </div>

                                        </div>
                                    }
                                    <div className="contenedor-tarjeta-boton">
                                        <button type="button" > <img src={comentario} /> Cotizar</button>
                                    </div>
                                </div>


                                <div>

                                </div>
                            </Link>
                        </div>
                    )}

                </Fragment>
                :


                <Fragment>

                    <div className="resultados">
                        <div>
                            <h5><strong>{result.length}</strong> publicacion(es)</h5>
                        </div>

                        <div onClick={recargar}>
                            <h6><strong></strong> Ver todos</h6>
                        </div>

                    </div>

                    {result.map(item =>

                        <div key={item.id_propiedad} className="contenedor-tarjeta-casa">

                            <Link to={`/descripcion/${item.id_propiedad}`} >

                                <div className="contenedor-tarjeta-arriba">

                                    <div className="tarjeta-tipo-oferta" >
                                        <h3>{item.nombre_tipo_oferta}</h3>
                                    </div>

                                    <div className="contenedor-tarjeta-casa-imagen" style={item.nombre_tipo_oferta === "Vendida" || item.nombre_tipo_oferta === "Rentada" ? { position: 'relative', display: 'inline-block', textAlign: 'center' } : {}}>

                                        <img src={nubeUrl + item.caratula_propiedad + ".jpg"} alt="Propiedad" title="Propiedad" />
                                        {item.nombre_tipo_oferta === "Vendida" || item.nombre_tipo_oferta === "Rentada" ?
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
                                        <h3>{Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(item.precio_propiedad) + " MXN"}</h3>
                                    </div>

                                    {item.id_tipo_inmueble === 1 || item.id_tipo_inmueble === 2 ?

                                        <div className="contendor-principal-detalles-casa">

                                            <div className="contendor-detalles-casa">
                                                <div className="contendor-detalles-casa-imagen">
                                                    <img src={tamanoCasa} alt="Recámaras" title="Recámaras" />
                                                </div>

                                                <div className="contendor-detalles-casa-textos">
                                                    <h4 style={{ paddingTop: '4px' }} >{item.construccion_propiedad} m<sup>2</sup></h4>
                                                </div>

                                            </div>

                                            <div className="contendor-detalles-casa">
                                                <div className="contendor-detalles-casa-imagen">
                                                    <img src={cama} alt="Recámaras" title="Recámaras" />
                                                </div>

                                                <div className="contendor-detalles-casa-textos contendor-detalles-casa-textos">
                                                    <h4>{item.cantidad_recamaras_propiedad}</h4>
                                                </div>

                                            </div>

                                            <div className="contendor-detalles-casa">
                                                <div className="contendor-detalles-casa-imagen">
                                                    <img src={toilet} alt="Baños" title="Baños" />
                                                </div>

                                                <div className="contendor-detalles-casa-textos">
                                                    <h4>{item.cantidad_bano_propiedad}</h4>
                                                </div>

                                            </div>

                                            {/* <div className="contendor-detalles-casa">
                        <div className="contendor-detalles-casa-imagen">
                            <img src={garaje} alt="Aforo garaje" title="Aforo garaje" />
                        </div>

                        <div className="contendor-detalles-casa-textos">
                            <h4>{item.cantidad_garaje_propiedad}</h4>
                        </div>

                    </div> */}

                                        </div>
                                        :
                                        <div style={{ border: 'none', width: '100%' }} className="contendor-detalles-casa">
                                            {/* <div className="contendor-detalles-casa-imagen">
                        <img src={medidaTerreno} alt="Tamaño Terreno" title="Tamaño Terreno" />
                    </div> */}

                                            <div style={{ justifyContent: 'space-around', height: '35px' }} className="contendor-detalles-casa-textos">
                                                <strong style={{ fontSize: '17px', color: 'black' }} >Superficie total:</strong>
                                                <h4 style={{ fontSize: '16px' }} >{item.terreno_propiedad} m<sup>2</sup></h4>
                                            </div>

                                        </div>
                                    }
                                    <div className="contenedor-tarjeta-boton">
                                        <button type="button" > <img src={comentario} /> Cotizar</button>
                                    </div>
                                </div>


                                <div>

                                </div>
                            </Link>
                        </div>
                    )}

                </Fragment>
            }



        </Fragment>
    );
};

export default Posts;