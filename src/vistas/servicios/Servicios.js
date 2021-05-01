import React, { Fragment } from 'react';
import './Servicios.css';
import NavBar from '../../componentes/navBar/NavBar';
import Footer from '../../componentes/footer/Footer';
import { Link } from 'react-router-dom';

import fondoServicios from '../../imagenes/fondo-servicios.jpg';

const Servicios = () => {



    return (
        <Fragment>
            <NavBar />

            <div className="contenedor-principal-servicios">

                <div className="contenedor-fondo-servicios">
                    <img alt="Fondo servicios" title="Fondo servicios" src={fondoServicios} />
                    <div className="contenedor-textos-fondo-servicios">
                        <h1>Servicios</h1>
                        <p>Conoce nuestros servicios y dejanos sorprenderte</p>
                        <Link to="/contacto">
                            <input type="button" value="Contáctanos" />
                        </Link>
                    </div>
                </div>

                <div className="contendor-servicios">
                    <div className="contenedor-necesitas-servicio">
                        <h2>Contamos con una amplia gama de servicios para usted</h2>
                        <div className="separador"></div>
                    </div>


                </div>

                <div className="contenedor-items-servicios">
                    <div className="contenedor-items-serv">

                        <img data-aos="slide-right" src="https://lavozdelpitic.com/wp-content/uploads/2020/10/1-16.jpg" alt="Asesoramiento en la búsqueda de inmuebles" title="Asesoramiento en la búsqueda de inmuebles" />

                        <p data-aos="slide-up" ><strong>Proyecto de inversión:</strong> Te ayudamos a llevar a cabo todo tipo de trámites, permisos, licencias, usos, revisiones y autorizaciones de toda documentación ante autoridades, tratando de cumplir tus espectativas en el menor tiempo posible.</p>

                    </div>
                </div>

                <div className="contenedor-items-servicios">
                    <div className="contenedor-items-serv-derecha">

                        <img data-aos="slide-left" src="https://www.bertegi.es/blog/wp-content/uploads/2019/02/int-venta-inmuebles.jpg" alt="Asesoramiento en la búsqueda de inmuebles" title="Asesoramiento en la búsqueda de inmuebles" />

                        <p data-aos="slide-up" ><strong>Venta / Renta:</strong> Nos encargamos de promocionar tu casa habitación, departamento, lote de terreno habitacional, comercial o industrial, locales comerciales, oficinas, bodegas, etcetera para llegar a la vista de todos y lograr tratos increibles.</p>

                    </div>
                </div>

                <div className="contenedor-items-servicios">
                    <div className="contenedor-items-serv">

                        <img data-aos="slide-right" src="http://realjuridica.com.mx/assets/images/admin-bienes-realjuridica-1400x933.jpg" alt="Asesoramiento en la búsqueda de inmuebles" title="Asesoramiento en la búsqueda de inmuebles" />

                        <p data-aos="slide-up" ><strong>Planeación de inversión:</strong> Realizamos una adecuada planeación para que su inversión sea adecuada a sus necesidades así como la administración de sus inmuebles en arrendamiento.</p>

                    </div>
                </div>



                <div data-aos="zoom-out-up" className="contenedor-footer-servicios">
                    <h4>¿Te interesa algún servicio?, ¡No dudes en <strong>contáctarnos</strong>!</h4>
                    
                    <Link to="/contacto">
                        <input type="button" value="Contáctanos" />
                    </Link>
                    
                </div>

            </div>

            <Footer />
        </Fragment>
    )
}

export default Servicios;