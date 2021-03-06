import React, { Fragment, useState, useEffect } from 'react';
import './Descripcion.css';
import "react-image-gallery/styles/css/image-gallery.css";
import axios from 'axios';

import Logo from '../../imagenes/logo.png';
import tamanoCasa2 from '../../imagenes/iconos/tamano-de-la-casa3.png';
import garaje from '../../imagenes/iconos/garaje.png';
import toilet from '../../imagenes/iconos/toilet.png';
import cama from '../../imagenes/iconos/cama.png';


import NavBar from '../../componentes/navBar/NavBar';
import Footer from '../../componentes/footer/Footer';


import { Carousel } from 'react-bootstrap';
import Swal from 'sweetalert2';

import { useParams } from 'react-router-dom';


const Descripcion = (props) => {

    const params = useParams();
    // console.log(params.id)

    const baseUrl = window.$baseUrl;
    const nubeUrl = window.$nubeUrl;

    const [cargando, setCargando] = useState(false);
    const [data, setData] = useState({});


    // if (data === undefined) {
    //     window.location.href = "/"
    // }



    const [fotos, setFotos] = useState([]);
    const [folleto, setFolleto] = useState([]);

    const BuscarInfo = async (i) => {
        await axios.get(baseUrl + "/api/imagenes/propiedades/" + i.caratula_propiedad)
            .then(response => {
                setFotos(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/obtener/folleto/" + i.caratula_propiedad)
            .then(response => {
                setFolleto(response.data);
                console.log(response.data)
            }).catch(error => {
                console.log(error);
            })

        setCargando(true)
    }




    const [enviado, setEnviado] = useState(false);

    const [datos, setDatos] = useState({});

    // console.log(data && data.caratula_propiedad)

    const peticionGet = async () => {
        setCargando(false)

        await axios.get(baseUrl + "/api/todas/propiedades/" + params.id)
            .then(response => {

                console.log(response.data)
                if (response.data.length > 0) {
                    setData(response.data[0]);
                    BuscarInfo(response.data[0])
                } else {
                    setCargando(true)
                    setData({});
                }

            }).catch(error => {
                console.log(error);
                setCargando(true)
            })

    }

    // console.log(data)

    const ventaorenta = data.nombre_tipo_oferta === "Renta" || data.nombre_tipo_oferta === "Rentada" ? " / Mensual" : "";

    const handleChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
        });
    };


    const enviarMensaje = async (e) => {

        e.preventDefault();


        if (!datos.nombre) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '??Campo vac??o!',
                text: "Ingrese su nombre completo",
                confirmButtonText: `Aceptar`,
            })

            return

        } else if (!datos.correo) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '??Campo vac??o!',
                text: "Ingrese su correo electr??nico",
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!datos.numero) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '??Campo vac??o!',
                text: "Ingrese su n??mero",
                confirmButtonText: `Aceptar`,
            })
        } else if (!datos.mensaje) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '??Campo vac??o!',
                text: "Ingrese su mensaje",
                confirmButtonText: `Aceptar`,
            })
        } else {

            setEnviado(true)

            axios.post(baseUrl + '/api/contacto/interes/propiedad', {
                nombre: datos.nombre,
                numero: datos.numero,
                correo: datos.correo,
                mensaje: datos.mensaje
            }).then(response => {
                setEnviado(false);

                Swal.fire({
                    customClass: {
                        title: 'swalTitleColor'
                    },
                    icon: 'success',
                    title: '??Mensaje enviado!',
                    text: "En breve nos pondremos en contacto contigo",
                    confirmButtonText: 'Aceptar',

                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = "/inicio";
                        }
                    })
            }).catch(e => {
                console.log(e);
            });

        }

    }

    useEffect(() => {
        peticionGet();

    }, [])

    // console.log(data)

    return (
        <Fragment>

            <NavBar />

            <div className="contenedor-descripcion-principal">

                {cargando ?
                    Object.keys(data).length === 0 ?
                        <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <label style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '20px' }}>La propiedad no fue encontrada</label>
                        </div>
                        :
                        <>
                            <div className="contenedor-descripcion-titulo">
                                <h1>{data.nombre_propiedad}</h1>
                                <p>{data.ciudad_estado_pais_propiedad}</p>
                            </div>

                            <div className="contenedor-slider-contacto">

                                <div className="contenedor-slider-datos">

                                    <div className="contenedor-slider-caracteristicas">

                                        <div data-aos="zoom-in" className="contenedor-descripcion-slider">
                                            <Carousel>
                                                {fotos.map(foto =>
                                                    <Carousel.Item key={foto.id_imagen_propiedad}>
                                                        <img
                                                            className="d-block w-100"
                                                            src={nubeUrl + foto.nombre_imagen + ".jpg"}
                                                            alt="Sin Imagen"

                                                        />
                                                    </Carousel.Item>
                                                )}

                                            </Carousel>
                                        </div>

                                    </div>

                                    <div className="contenedor-detalles-venta">
                                        <div className="contenedor-precio-predio">
                                            <h3>{Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(data.precio_propiedad) + " MXN"} {ventaorenta} </h3>
                                        </div>

                                        <div className="contenedor-id-tipo-venta">
                                            <p>ID: <strong>{data.identificador_propiedad}</strong></p>
                                            <h4 style={data.nombre_tipo_oferta == "Rentada" || data.nombre_tipo_oferta == "Vendida" ? { background: 'rgb(180, 14, 14)' } : {}}>{data.nombre_tipo_oferta}</h4>
                                        </div>
                                    </div>

                                    {data.id_tipo_inmueble === 1 || data.id_tipo_inmueble === 2 ?

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
                                                    <h4>{data.cantidad_recamaras_propiedad} Rec??mara(s)</h4>
                                                </div>
                                            </div>


                                            <div className="cuadrado-datos">
                                                <div className="contenedor-imagen-predio-datos">
                                                    <img src={toilet} />
                                                </div>

                                                <div className="contenedor-datos-texto-predio">
                                                    <h4>{data.cantidad_bano_propiedad} Ba??o(s)</h4>
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
                                        :
                                        ""
                                    }

                                    <div className="contenedor-detalles-general-predio">

                                        {folleto.nombre_folleto === undefined ?
                                            ""
                                            :
                                            <div style={{ marginTop: '-5px' }} className="contenido-detalles-predio">
                                                <div id="cont-compartir">
                                                    <a id="descargar" title="Ver Folleto" target="_blank" href={nubeUrl + folleto.nombre_folleto + ".pdf"} download >Ver Folleto</a>

                                                    <a id="compartir-whatsapp" title="Compartir" href={"whatsapp://send?text=" + nubeUrl + folleto.nombre_folleto + ".pdf"} data-action="share/whatsapp/share"><i className="fas fa-share-square"></i></a>
                                                </div>
                                            </div>
                                        }

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
                                                <h3>Ubicaci??n</h3>
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
                                                <h3>Descripci??n</h3>
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
                                                    {data.terreno_propiedad.length < 2 ?
                                                        ""
                                                        :
                                                        <li>Terreno: {data.terreno_propiedad} m<sup>2</sup> </li>
                                                    }

                                                    {data.construccion_propiedad.length < 2 ?
                                                        ""
                                                        :
                                                        <li>Construcci??n: {data.construccion_propiedad} m<sup>2</sup> </li>
                                                    }

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

                                        <div className="contenido-detalles-predio">

                                            <div className="contenido-caracteristicas-predio">
                                                <ul style={{ textAlign: 'center' }}>
                                                    <li>*Precios sujetos a cambios sin previo aviso</li>
                                                </ul>
                                            </div>

                                        </div>


                                    </div>

                                    <div className="contenedor-mapa-desc-propiedad">
                                        {data.mapa_propiedad ?
                                            <iframe src={data.mapa_propiedad} width="770" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                                            :
                                            <h3 style={{ textAlign: "center" }}>Mapa no disponible</h3>
                                        }
                                    </div>

                                </div>


                                <div className="contenedor-descripcion-contacto">

                                    <form onSubmit={enviarMensaje} autoComplete="off">
                                        <label>Cont??ctanos:</label>

                                        <img src={Logo} title="Logo Inmobiliaria" alt="logo" />

                                        <div className="contenedor-nombre-telefono">
                                            <h3>Nombre Inmobiliaria</h3>

                                            <a href="tel:9991295931" title="Telef??no de cont??cto">
                                                <i className="fas fa-phone-alt"></i>
                                                (999) 129 5931
                                            </a>

                                        </div>

                                        <input type="text" name="nombre" onChange={handleChange} placeholder="Nombre" />

                                        <input type="email" name="correo" onChange={handleChange} placeholder="Correo" />

                                        <input type="text" name="numero" onChange={handleChange} maxLength="10" placeholder="N??mero de tel??fono" />

                                        <textarea rows="5" name="mensaje" onFocus={handleChange} defaultValue={`Me interesa esta propiedad (ID: ${data.identificador_propiedad}), quiero recibir m??s informaci??n. ??Gracias!`} />

                                        {enviado ?
                                            <div className="spinner"></div>
                                            :
                                            <input type="submit" value="Enviar" />
                                        }

                                    </form>

                                </div>
                            </div>
                        </>
                    :
                    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ fontSize: '200px' }} className="spinner-grow text-dark" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
                }

            </div>


            <Footer />
        </Fragment>
    )
}

export default Descripcion