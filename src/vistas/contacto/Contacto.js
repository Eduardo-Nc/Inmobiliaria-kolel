import React, { Fragment, useState, useEffect } from 'react';
import './Contacto.css';
import NavBar from '../../componentes/navBar/NavBar';
import Footer from '../../componentes/footer/Footer';
import ChatBot from '../../componentes/botonChatbot/botonChatbot';
import contacto from '../../imagenes/fondo-contacto.svg';
import axios from 'axios';
import Swal from 'sweetalert2';


import { Helmet } from "react-helmet";



const Contacto = () => {

    const baseUrl = window.$baseUrl;

    const [enviado, setEnviado] = useState(false);
    const [datos, setDatos] = useState({});


    const handleChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
        });
    };



    const enviarMensaje = async (e) => {

        e.preventDefault();

        setEnviado(true)

        if (!datos.nombre) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '¡Campo vacío!',
                text: "Ingrese su nombre completo",
                confirmButtonText: `Aceptar`,
            })

            return

        } else if (!datos.telefono) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '¡Campo vacío!',
                text: "Ingrese su número",
                confirmButtonText: `Aceptar`,
            })
        } else if (!datos.correo) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '¡Campo vacío!',
                text: "Ingrese su correo electrónico",
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!datos.mensaje) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '¡Campo vacío!',
                text: "Ingrese su mensaje",
                confirmButtonText: `Aceptar`,
            })
        } else if (!datos.area) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '¡Campo vacío!',
                text: "Ingrese su área de su interés",
                confirmButtonText: `Aceptar`,
            })
            return
        } else {

            axios.post(baseUrl + '/api/contacto/negocio', {
                nombre: datos.nombre,
                telefono: datos.telefono,
                correo: datos.correo,
                mensaje: datos.mensaje,
                area: datos.area
            }).then(response => {
                setEnviado(false);

                Swal.fire({
                    customClass: {
                        title: 'swalTitleColor'
                    },
                    icon: 'success',
                    title: '¡Mensaje enviado!',
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




    return (
        <Fragment>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Contacto</title>
                <link rel="canonical" href="#" />
                <meta name="description" content="¿Tienes dudas?, ¡No dudes en contáctarnos!, en inmobiliaria koolel kaab tenemos la solución para tí." />
            </Helmet>

            <NavBar />

            <div className="contenedor-principal-contacto">

                <div className="contenedor-contacto">
                    <div className="fondo-img-contacto">
                        <img src={contacto} alt="logo contacto" />
                    </div>

                    <div className="contenedor-info-contacto">
                        <p>¡Contactános <strong>y caminemos juntos al éxito</strong>!</p>
                        <div className="divisor"></div>
                        <h5>
                            ¿Estás listo para comenzar y alcanzar tus objetivos?

                        </h5>

                        <input type="button" onClick={() => window.location.href = "contacto#formulario"} value="Si, ¡Comencemos!" />

                    </div>
                </div>

                <div id="formulario" className="contenedor-formulario-contacto">
                    <label>¿Tienes dudas?, ¡No dudes en <strong>contáctarnos</strong>!</label>

                    <form onSubmit={enviarMensaje} id="form">
                        <input type="text" required name="nombre" onChange={handleChange} placeholder="Nombres y Apellidos" />
                        <input type="text" maxLength="10" required name="telefono" onChange={handleChange} placeholder="Teléfono" />
                        <input type="email" required name="correo" onChange={handleChange} placeholder="Correo electrónico" />
                        <select name="area" onChange={handleChange} required>
                            <option defaultValue>Seleccione área de interés</option>
                            <option value="Comercialización" >Comercialización</option>
                            <option value="Asesoria legal" >Asesoria legal</option>
                            <option value="Otros" >Otros</option>
                        </select>
                        <textarea rows="4" placeholder="Mensaje" required name="mensaje" onChange={handleChange} autoComplete="off" >

                        </textarea>
                        <div className="contenedor-input-contacto">
                            {enviado ?
                                <div className="spinner"></div>
                                :
                                <input type="submit" value="Enviar" />
                            }
                        </div>
                    </form>
                </div>

            </div>

            <Footer />
            <ChatBot />
        </Fragment>
    )
}

export default Contacto;