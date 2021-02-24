import React, { Fragment } from 'react';
import './Nosotros.css';
import {Link} from 'react-router-dom';
import nosotros from '../../imagenes/nosotros.jpg';
import nery from '../../imagenes/nery.png';


import NavBar from '../../componentes/navBar/NavBar';

import Footer from '../../componentes/footer/Footer';

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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
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
                            ser la mejor alternativa de profesional inmobiliario, para que nuestros clientes 
                            se sientan plenamente acompañados y asesorados durante todo el proceso.
                        </p>
                    </div>
                </div>

                <div className="contenedor-foto-perfil-agente"> 
                    <img src={nery} alt="Foto" title="DRA. Nery Escalante May" />  
                    <p>L.E.C Nery Escalante May</p>
                    <p>Asesora De Inversión En Bines Y Muebles</p>

                    <Link to="/contacto">Contáctame</Link>
                </div>


            </div>


            <Footer />
        </Fragment>
    )
}

export default Nosotros;