import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './NavBar.css';

import bars from '../../imagenes/iconos/menu.png';
import cerrar from '../../imagenes/iconos/cerrar.png';

import logoiniciosesion from '../../imagenes/iconos/logo-inicio-sesion.svg';
import tocar from '../../imagenes/iconos/tocar.png';

import user from '../../imagenes/iconos/user.png';
import salida from '../../imagenes/iconos/salida.png';



const NavBar = ({ menu, setMenu, abrirMenu }) => {

    
    const baseUrl = window.$baseUrl;
    const cookies = new Cookies();

    const [abrirNavbarMenu, setAbrirNavbarMenu] = useState(false);

    const desplegarNavbarMenu = () => {
        setAbrirNavbarMenu(!abrirNavbarMenu);
        setMenu(true);
    }

    const estiloA = {
        top: '70px',
        transition: '0.5s'
    }

    const estiloC = {

    }
    
    const cerrarSesion = () => {
        cookies.remove('id_usuario', { path: "/" });
        cookies.remove('nombre_completo_usuario', { path: "/" });
        cookies.remove('correo_usuario', { path: "/" });

        window.location.href = './iniciar-sesion';
    }


    return (
        <Fragment>
            <header className="contenedor-navbar-principal-administrador">
                <nav>

                    <div onClick={abrirMenu} className="contenedor-navbar-administrador-boton">
                        {
                            menu ?
                                <img title="Menú" src={bars} />
                                :
                                <img title="Cerrar" src={cerrar} />
                        }

                    </div>

                    <Link className="contenedor-navbar-administrador-logo-texto" to="/tablero">
                        <img src={logoiniciosesion} />
                        <p>AEN Inmobiliaria</p>
                    </Link>



                    <div className="contenedor-navbar-administrador-menu-perfil">

                        <div onClick={desplegarNavbarMenu} title="Cuenta" className="contenedor-navbar-administrador-menu" >
                            <img src={tocar} alt="Boton" />
                        </div>

                        <div style={abrirNavbarMenu ? estiloA : estiloC} className="cuadro-menu-opciones">
                            <div className="contenedor-navbar-perfil" >
                                <div>
                                    <img src={user} alt="perfil" title="Foto perfil" />
                                </div>

                                <div className="contenedor-datos-perfil" >
                                    <div>
                                        <h3>{cookies.get("nombre_completo_usuario")}</h3>
                                    </div>

                                    <div>
                                        <h4>administrador</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="contenedor-navbar-salir" >
                                <div className="btn-salir">
                                    <img src={salida} alt="salida" title="Cerrar Sesión" />
                                </div>

                                <div onClick={cerrarSesion} className="contenedor-salir-perfil" >
                                    <div>
                                        <h3>Salir</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </nav>
            </header>



        </Fragment >
    )
}


export default NavBar;