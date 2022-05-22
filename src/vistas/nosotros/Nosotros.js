import React, { Fragment } from 'react';
import './Nosotros.css';
import { Link } from 'react-router-dom';
import nosotros from '../../imagenes/nosotros.jpg';
import nery from '../../imagenes/nery.jpeg';


import NavBar from '../../componentes/navBar/NavBar';

import Footer from '../../componentes/footer/Footer';
import ChatBot from '../../componentes/botonChatbot/botonChatbot';


const Nosotros = () => {
    return (
        <Fragment>
            <NavBar />

            <div className="contenedor-principal-nosotros">
                <div className="contenedor-imagen-nosotros">
                    <img src={nosotros} alt="nosotros" />

                    <div className="texto-imagen-nosotros">
                        <h1>Quiénes <br></br> Somos</h1>
                    </div>
                </div>

                <div className="contenedor-def-quienes-somos">
                    <p>
                        Somos un equipo multidisciplinario, con
                        especialistas para cada una de las áreas
                        que involucra una inversión inmobiliaria.
                    </p>
                </div>

                <div className="contenedor-mision-nosotros">
                    <div className="titulo-nosotros-mision">
                        <h2>Misión</h2>
                    </div>

                    <div className="def-nosotros-mision">
                        <p>
                            Brindar asesoría personalizada orientada a cuidar el
                            patrimonio de nuestros clientes, con ética, honestidad y
                            discreción, en la compra, venta o renta de bienes inmuebles.

                        </p>
                    </div>
                </div>

                <div className="contenedor-vision-nosotros">
                    <div className="titulo-nosotros-vision">
                        <h2>Visión</h2>
                    </div>

                    <div className="def-nosotros-vision">
                        <p>
                            Ser la mejor alternativa de profesional inmobiliario, para que nuestros clientes
                            se sientan plenamente acompañados y asesorados durante todo el proceso.
                        </p>
                    </div>
                </div>

                <div className="contenedor-foto-perfil-agente">
                    <div style={{ width: '100px', height: '100px', overflow: 'hidden', marginBottom: '10px' }}>
                        <img src={nery} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt="Foto" title="DRA. Nery Escalante May" />
                    </div>

                    <p>L.E.C Nery Escalante May</p>
                    <p>Asesora de inversión en bienes y muebles</p>

                    <Link to="/contacto">Contáctame</Link>
                </div>


            </div>


            <Footer />
            <ChatBot />
        </Fragment>
    )
}

export default Nosotros;