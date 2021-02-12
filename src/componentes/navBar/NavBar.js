import React, { Fragment, useState } from 'react';
import './NavBar.css';
import bars from '../../imagenes/iconos/menu.png';
import cerrar from '../../imagenes/iconos/cerrar.png';

const NavBar = () => {

    const [menu, setMenu] = useState(true);

    const abrirMenu = () => {
        setMenu(!menu);
    }

    const estilosAbrir = {
        left: '0px',
        transition: '0.5s'
    }

    const estilosCerrar = {
        left: '-100%',
        transition: '0.5s'
    }



    return (
        <Fragment>
            <div className="contenedor-principal-navbar">

                <div className="contenedor-logo-navbar">
                    {/* <img src="" alt="Logo" title="Logo" /> */}
                    <h2>Logo Inmobiliaria</h2>
                </div>

                <div className="contenedor-menu-navbar">

                    <div className="contenedor-menu-navbar-inicio">
                        <h2>Inicio</h2>
                    </div>

                    <div className="contenedor-menu-navbar-nosotros">
                        <h2>Nosotros</h2>
                    </div>

                    <div className="contenedor-menu-navbar-propiedades">
                        <h2>Propiedades</h2>
                    </div>

                    <div className="contenedor-menu-navbar-servicios">
                        <h2>Servicios</h2>
                    </div>

                    <div>
                        <button title="Iniciar Sesión" > <i className="fas fa-sign-in-alt"></i> Ingresar</button>
                    </div>

                    <div>
                        <a href="tel:9971210804" title="Contáctanos" ><img src="https://www.flaticon.es/svg/vstatic/svg/228/228347.svg?token=exp=1613141638~hmac=cf023fdb0f47f13565394a261c480f61" /></a>
                    </div>

                </div>

                <div onClick={abrirMenu} className="contenedor-menu-navbar-movil">
                    <div className="contenedor-menus">
                        {
                            menu ?
                                <img title="Menú" src={bars} />
                                :
                                <img title="Cerrar" src={cerrar} />
                        }
                    </div>

                    <nav style={menu ? estilosCerrar : estilosAbrir}>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Nosotros</a></li>
                            <li><a href="#">Proyectos</a></li>
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>

                        <ul className="contenedor-navbar-iniciar-sesion">
                           
                                <button title="Iniciar Sesión" > <i className="fas fa-sign-in-alt"></i> Ingresar</button>
                            
                        </ul>
                    </nav>

                </div>

            </div>
        </Fragment>
    )
}

export default NavBar;