import React, { Fragment, useState } from 'react';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import operadora from '../../imagenes/iconos/operadora.svg';
import bars from '../../imagenes/iconos/menu.png';
import cerrar from '../../imagenes/iconos/cerrar.png';

const NavBar = () => {

    const [menu, setMenu] = useState(true);

    const abrirMenu = () => {
        setMenu(!menu);
    }

    const estilosAbrir = {
        left: '0px',
        transition: '0.6s'
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
                    <Link onClick={window.scrollTo(0, 0)} to="/">
                        <h2>Logo Inmobiliaria</h2>
                    </Link>
                </div>

                <div className="contenedor-menu-navbar">

                    <div className="contenedor-menu-navbar-inicio">
                        <NavLink onClick={window.scrollTo(0, 0)} to="/inicio" activeClassName="menu-seleccionado-desk" > <h2>Inicio</h2> </NavLink>
                    </div>

                    <div className="contenedor-menu-navbar-nosotros">
                        <NavLink to="/nosotros" activeClassName="menu-seleccionado-desk" >  <h2>Nosotros</h2> </NavLink>
                    </div>

                    <div className="contenedor-menu-navbar-propiedades">
                        <NavLink to="/propiedades" activeClassName="menu-seleccionado-desk" > <h2>Propiedades</h2> </NavLink>
                    </div>

                    <div className="contenedor-menu-navbar-servicios">
                        <NavLink to="/servicios" activeClassName="menu-seleccionado-desk" >  <h2>Servicios</h2> </NavLink>
                    </div>

                    <div>
                        <Link to="/iniciar-sesion"> <button title="Iniciar Sesión" >  <i className="fas fa-sign-in-alt"></i> Ingresar</button></Link>
                    </div>

                    <div>
                        <a href="tel:9971210804" title="Contáctanos" ><img alt="Operadora" src={operadora} /></a>
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
                            <li><NavLink to="/inicio" activeClassName="menu-seleccionado" > <h2>Inicio</h2> </NavLink> </li>
                            <li><NavLink to="/nosotros" activeClassName="menu-seleccionado" > <h2>Nosotros</h2> </NavLink> </li>
                            <li><NavLink to="/proyectos" activeClassName="menu-seleccionado" > <h2>Proyectos</h2> </NavLink> </li>
                            <li><NavLink to="/servicios" activeClassName="menu-seleccionado" > <h2>Servicios</h2> </NavLink> </li>
                            <li><NavLink to="/servicios" activeClassName="menu-seleccionado" > <h2>Contacto</h2> </NavLink> </li>
                        </ul>

                        <ul className="contenedor-navbar-iniciar-sesion">

                            <Link to="/iniciar-sesion"> <button title="Iniciar Sesión" > <i className="fas fa-sign-in-alt"></i> Ingresar</button></Link>

                        </ul>
                    </nav>

                </div>

            </div>
        </Fragment>
    )
}

export default NavBar;