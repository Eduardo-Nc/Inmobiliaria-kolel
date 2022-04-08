import React, { Fragment, useState } from 'react';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import Tocar from '../../imagenes/iconos/tocar.png';
import Logo from '../../imagenes/NavLogo.png';
import LogoBars from '../../imagenes/iconos/menu.png';
import user from '../../imagenes/iconos/user.png';
import iconoMenu from '../../imagenes/iconos/menu.png';
import salida from '../../imagenes/iconos/salida.png';
import LogoCerrar from '../../imagenes/iconos/cerrar.png';
import Cookies from 'universal-cookie';

const NavBar = () => {

    const cookies = new Cookies();

    const [abrirNavbarMenu, setAbrirNavbarMenu] = useState(false);

    const desplegarNavbarMenu = () => {
        setAbrirNavbarMenu(!abrirNavbarMenu);

    }

    const estiloA = {
        top: '318px',
    }

    const estiloB = {
        top: '350px',
    }

    const estiloC = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column nowrap',

    }



    const cerrarSesion = () => {
        cookies.remove('id_colaborador', { path: "/" });
        cookies.remove('nombre_colaborador', { path: "/" });
        cookies.remove('correo_colaborador', { path: "/" });
        cookies.remove('numero_colaborador', { path: "/" });


        window.location.href = './colaboradores';
    }

    return (
        <Fragment>
            <div className="cont-footer-info">

                <div className="contenido-nav-logo-item">
                    <Link to="/informacion">
                        <img src={Logo} alt="Logo" />
                    </Link>

                    <nav>
                        <ul>
                            <NavLink activeClassName="menu-seleccionado-desk" to="/informacion" ><li>Información</li></NavLink>
                            <NavLink activeClassName="menu-seleccionado-desk" to="/disponibilidad" ><li>Cotizador</li></NavLink>
                        </ul>


                    </nav>

                </div>




                <div className="contenido-nav-boton-cerrar">

                    <div onClick={desplegarNavbarMenu} className="boton-menu-cerrar-sesion">
                        <img src={Tocar} alt="Menú" />
                    </div>

                    <div style={abrirNavbarMenu ? estiloA : estiloC} className="cuadro-dialogo-boton">
                        <div className="cuadro-salir">
                            <div style={{ width: '30%' }}>
                                <img style={{ width: '65px' }} src={user} alt="Usuario" />
                            </div>

                            <div style={{ width: '70%' }}>

                                <div>
                                    <h2 style={{ fontSize: '20px', color: 'white', fontWeight: 'bold' }}>{cookies.get("nombre_colaborador")}</h2>
                                </div>

                                <div>
                                    <p style={{ fontSize: '15px', color: 'white' }}>Colaborador</p>
                                </div>


                            </div>
                        </div>

                        <div onClick={cerrarSesion} className="cont-footer-menu">
                            <img style={{ width: '30px' }} src={salida} alt="Salir" /> <h4>Salir</h4>
                        </div>

                    </div>

                </div>


                {/* menu movil */}
                <div className="contenido-nav-boton-cerrar-movil">

                    <div onClick={desplegarNavbarMenu} className="boton-menu-cerrar-sesion">
                        <img src={iconoMenu} alt="Menú" />
                    </div>

                   

                    <div style={abrirNavbarMenu ? estiloB : estiloC}  className="cuadro-dialogo-boton estilo-menu-cola">
                        <div className="cuadro-salir">
                            <div style={{ width: '30%' }}>
                                <img style={{ width: '65px' }} src={user} alt="Usuario" />
                            </div>

                            <div style={{ width: '70%' }}>

                                <div>
                                    <h2 style={{ fontSize: '20px', color: 'white', fontWeight: 'bold' }}>{cookies.get("nombre_colaborador")}</h2>
                                </div>

                                <div>
                                    <p style={{ fontSize: '15px', color: 'white' }}>Colaborador</p>
                                </div>


                            </div>
                        </div>

                        <div className="cont-footer-menu">
                            <ul className="color-ul-menu-movil" style={{listStyle:'none', display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'flex-start', marginLeft:'-40px'}}>
                                <NavLink activeClassName="menu-seleccionado-desk" to="/informacion" ><li>Información</li></NavLink>
                                <NavLink activeClassName="menu-seleccionado-desk" to="/disponibilidad" ><li>Cotizador</li></NavLink>
                            </ul>
                        </div>

                        <div onClick={cerrarSesion} style={{ borderTop: '1px solid white' }} className="cont-footer-menu">
                            <img style={{ width: '30px' }} src={salida} alt="Salir" /> <h4>Salir</h4>
                        </div>

                    </div>

                </div>




                <div className="contenido-nav-boton-menu">

                    <div className="boton-menu">
                        <img src={LogoBars} alt="Menú" />
                    </div>

                </div>

            </div>
        </Fragment>
    )
}

export default NavBar;