import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Servicios.css';


const Servicios = () => {


    return (
        <Fragment>

            <div className="contenedor-servicios-titulo" >
                <h1>Tu nuevo comienzo empieza hoy</h1>
                <p>Somos especialistas en... </p>
            </div>


            <div className="contenedor-servicios-principal" >

                <div className="contenedor-servicios-fondo">


                    <div className="contenedor-servicios-item a">
                        <div className="contenedor-servicios-item-fondo">
                            <h2>PLANEACIÓN DE TU INVERSIÓN</h2>
                            <p>Diseñamos tu plan de inversión a tu medida, que te permitirá tener un mapa de ruta para definiendo los objetivos que te ayudará a tener la mayor rentabilidad a menor costo posible, aumentando la eficiencia.</p>
                        </div>
                    </div>

                    <div className="contenedor-servicios-item l">
                        <div className="contenedor-servicios-item-fondo">
                            <h2>ASESORIA LEGAL</h2>
                            <p>Conocer la situación legal, para mitigar los riesgos que conlleva el proceso legal para que sea transparente y cuente con la seguridad de tu inversión.</p>
                        </div>
                    </div>

                    <div className="contenedor-servicios-item f">
                        <div className="contenedor-servicios-item-fondo">
                            <h2>FACTIBILIDAD DE PROYECTO</h2>
                            <p>Corroboramos que exista un mercado potencial, verificando si existe alguna ventaja de la cual se pueda sacar provecho desde el punto de vista económico, ambiental, financiero y social.</p>
                        </div>
                    </div>

                    <div className="contenedor-servicios-item c">
                        <div className="contenedor-servicios-item-fondo">
                            <h2>COMERCIALIZACIÓN</h2>
                            <p>El conocimiento del mercado facilitara el acceso a mejores oportunidades de inversión en bienes y raíces de acuerdo a su plan de inversión.</p>
                        </div>
                    </div>


                </div>

            </div>


            <div className="contenedor-servicios-ver-mas-fondo">
                <div className="contenedor-servicios-ver-mas">
                    <Link to="/servicios">
                        Ver más
                    </Link>
                </div>
            </div>

        </Fragment>
    )
}

export default Servicios;