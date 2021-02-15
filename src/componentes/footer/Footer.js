import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import BotonContacto from '../botonContacto/BotonContacto';


const Footer = () => {
    return (
        <Fragment>
            <BotonContacto />
            <div className="contenedor-principal-footer">

                <div className="content-footer-redes-sociales">
                    <h3>Siguenos</h3>

                    <div className="content-footer-logos-redes-sociales">
                        <a href="https://api.whatsapp.com/message/L2OKG5XKUZBNG1" title="WhatsApp" target="_blank" > <i className="fab fa-whatsapp"></i>    </a>
                        <a href="" title="Facebook" target="_blank" > <i className="fab fa-facebook"></i>     </a>
                        <a href="" title="Messenger" target="_blank" > <i className="fab fa-facebook-messenger"></i>    </a>
                        <a href="" title="Instagram" target="_blank" > <i className="fab fa-instagram"></i>    </a>
                    </div>
                </div>

                <div className="content-footer-contacto">
                    <h3>Contáctanos</h3>

                    <div className="content-footer-contacto-items">
                        <a href="tel:9971210804">Telefono:  999-129-5931</a> 
                        <a href="mailto:eduardo-negron@live.com">Correo: nery-escalante@hotmail.com </a> 
                    </div>

                </div>

            </div>

            <div className="content-footer">
                <Link to="/"> &copy; 2021 Copyright: Inmobiliaria S.A DE C.V. </Link>
            </div>
        </Fragment>
    )
}


export default Footer;