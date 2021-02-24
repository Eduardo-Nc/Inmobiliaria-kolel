import React, { Fragment } from 'react';
import './Contacto.css';


import NavBar from '../../componentes/navBar/NavBar';
import Footer from '../../componentes/footer/Footer';


import contacto from '../../imagenes/fondo-contacto.svg';

const Contacto = () => {
    return (
        <Fragment>
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

                        <input type="button" onClick={() =>window.location.href = "contacto#formulario"} value="Si, ¡Comencemos!" /> 

                    </div>
                </div>

                <div id="formulario" className="contenedor-formulario-contacto"> 
                    <label>¿Tienes dudas?, ¡No dudes en <strong>contáctarnos</strong>!</label>
        
                        <form id="form">
                                <input type="text" required  name="nombre_completo" placeholder="Nombres y Apellidoss" />
                                <input type="text" maxlength="10" required  name="telefono" placeholder="Teléfono" />
                                <input type="email" required  name="correo" placeholder="Correo electrónico" />
                                <select>
                                <option required value="" defaultValue>Seleccione una opción</option>
                                    <option value="1" >**Opciónes**</option>
                                </select>
                                <textarea rows="4" placeholder="Mensaje" required name="mensaje" autoComplete="off" >

                                </textarea>

                                <button type="submit">Enviar</button>
                        </form>
                </div>

            </div>

            <Footer />
        </Fragment>
    )
}

export default Contacto;