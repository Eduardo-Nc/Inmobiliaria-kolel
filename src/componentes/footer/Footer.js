import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import BotonContacto from '../botonContacto/BotonContacto';
import moment from 'moment';


const Footer = () => {
    return (
        <Fragment>
            <BotonContacto />
            <div className="contenedor-principal-footer">

                <div className="content-footer-contacto">

                    <h3 style={{ color: "#c9a857", textTransform: 'uppercase', fontWeight: 'bold', fontSize: '16px' }}>Síguenos</h3>

                    <div className="content-footer-logos-redes-sociales">
                        <a href="https://api.whatsapp.com/message/L2OKG5XKUZBNG1" title="WhatsApp" target="_blank" > <i className="fab fa-whatsapp"></i>    </a>
                        <a href="" title="Facebook" target="_blank" > <i className="fab fa-facebook"></i>     </a>
                        <a href="" title="Messenger" target="_blank" > <i className="fab fa-facebook-messenger"></i>    </a>
                        <a href="" title="Instagram" target="_blank" > <i className="fab fa-instagram"></i>    </a>
                    </div>
                </div>

                <div className="content-footer-contacto">
                    <h3 style={{ color: "#c9a857", textTransform: 'uppercase', fontWeight: 'bold', fontSize: '16px' }}>OFICINA DE VENTAS</h3>

                    <div className="content-footer-contacto-items">
                        <a href="mailto:inmobiliaria.koolel.kaab@gmail.com">Calle 18ª #255 Privada Quinta Real (Altabrisa) C.P. 97130</a>
                        {/* <a>Ventas: 99-91-29-59-31</a> */}
                    </div>
                </div>

                <div className="content-footer-contacto">
                    <h3 style={{ color: "#c9a857", textTransform: 'uppercase', fontWeight: 'bold', fontSize: '16px' }}>Contáctanos</h3>

                    <div className="content-footer-contacto-items">
                        <a href="tel:9991295931">999-129-5931</a>
                        <a href="mailto:inmobiliaria.koolel.kaab@gmail.com">inmobiliaria.koolel.kaab@gmail.com </a>
                    </div>
                </div>

            </div>

            <div className="content-footer">
                <Link to="/"> &copy; {moment().format('YYYY')} Copyright: KOOLEL KAAB S.A DE C.V. </Link>
            </div>
        </Fragment>
    )
}


export default Footer;