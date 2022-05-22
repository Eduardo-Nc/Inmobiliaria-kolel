import React, { Fragment } from 'react';
import './BotonContacto.css';
import { Link } from 'react-router-dom';


const BotonContacto = () => {




    return (
        <Fragment>

            <div data-aos="fade-left" className="contenedor-botton-contacto-movil">
                <a href="https://api.whatsapp.com/message/L2OKG5XKUZBNG1" target="blank" title="Contáctanos" >
                    <div className="forma-botton-contacto-movil">
                        <div className="botton-contactanos-movil">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                    </div>
                </a>
            </div>

        </Fragment>
    )
}


export default BotonContacto;