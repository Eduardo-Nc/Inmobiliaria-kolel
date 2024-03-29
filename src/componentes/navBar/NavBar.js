import React, { Fragment, useState } from 'react';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import operadora from '../../imagenes/iconos/operadora.svg';
import bars from '../../imagenes/iconos/menu.png';
import cerrar from '../../imagenes/iconos/cerrar.png';
import logo from '../../imagenes/NavLogo.png';

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
                        <img src={logo} onDoubleClick={() => { window.location.href = "/iniciar-sesion" }} />
                    </Link>
                </div>

                <div className="contenedor-menu-navbar">

                    <div className="contenedor-menu-navbar-inicio">
                        <NavLink onClick={window.scrollTo(0, 0)} to={"/inicio"} activeClassName="menu-seleccionado-desk" > <h2>Inicio</h2> </NavLink>
                    </div>

                    <div className="contenedor-menu-navbar-nosotros">
                        <NavLink to="/nosotros" activeClassName="menu-seleccionado-desk" >  <h2>Nosotros</h2> </NavLink>
                    </div>

                    <div className="contenedor-menu-navbar-servicios">
                        <NavLink to="/servicios" activeClassName="menu-seleccionado-desk" >  <h2>Servicios</h2> </NavLink>
                    </div>

                    <div className="contenedor-menu-navbar-contacto">
                        <NavLink to="/contacto" activeClassName="menu-seleccionado-desk" >  <h2>Contacto</h2> </NavLink>
                    </div>

                    <div className="contenedor-menu-navbar-blog">
                        <NavLink to="/blog" activeClassName="menu-seleccionado-desk" >  <h2>Blog</h2> </NavLink>
                    </div>

                    <div className="contenedor-menu-navbar-contacto">
                        <NavLink to="/colaboradores" activeClassName="menu-seleccionado-desk" >  <h2>Colaboradores</h2> </NavLink>
                    </div>


                    {/* <div>
                        <Link to="/iniciar-sesion"> <button title="Iniciar Sesión" >  <i className="fas fa-sign-in-alt"></i> Ingresar</button></Link>
                    </div> */}


                    <div style={{ marginTop: '-5px' }}>
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
                            <li><NavLink to="/blog" activeClassName="menu-seleccionado" > <h2>Blog</h2> </NavLink> </li>
                            <li><NavLink to="/servicios" activeClassName="menu-seleccionado" > <h2>Servicios</h2> </NavLink> </li>
                            <li><NavLink to="/contacto" activeClassName="menu-seleccionado" > <h2>Contacto</h2> </NavLink> </li>
                            {/* <li><NavLink to="/colaboradores" activeClassName="menu-seleccionado" > <h2>Colaboradores</h2> </NavLink> </li> */}
                        </ul>

                        <ul className="contenedor-navbar-iniciar-sesion">

                            <Link to="/colaboradores"> <button title="Colaboradores" > <i className="fas fa-sign-in-alt"></i> Colaboradores</button></Link>

                        </ul>
                    </nav>

                </div>

            </div>
        </Fragment>
    )
}

export default NavBar;