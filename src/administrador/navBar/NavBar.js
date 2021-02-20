import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

import bars from '../../imagenes/iconos/menu.png';
import cerrar from '../../imagenes/iconos/cerrar.png';

import logoiniciosesion from '../../imagenes/iconos/logo-inicio-sesion.svg';
import tocar from '../../imagenes/iconos/tocar.png';




const NavBar = ({menu, setMenu, abrirMenu}) => {

  


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

                        

                        <div title="Cuenta" className="contenedor-navbar-administrador-menu" >
                            <img src={tocar} alt="Boton" />
                        </div>

                    </div>

                </nav>
            </header>



        </Fragment >
    )
}


export default NavBar;