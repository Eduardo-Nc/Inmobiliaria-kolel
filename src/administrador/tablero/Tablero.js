import React, { Fragment, useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Tablero.css';


import NavBar from '../navBar/NavBar';
import axios from 'axios';
import MenuIzquierdo from '../menu/MenuIzquierdo';
import MenuIzquierdoDesc from '../menuEscritorio/MenuIzquierdoDesc';
import Cookies from 'universal-cookie';

import users from '../../imagenes/iconos/users.png';
import casa from '../../imagenes/iconos/casa.png';
import colaborar from '../../imagenes/iconos/colaborar.png';
import pdf from '../../imagenes/iconos/pdf.png';


const Tablero = () => {

    const cookies = new Cookies();
    const baseUrl = window.$baseUrl;


    const [cantUsuarios, setCantUsuarios] = useState(null);
    const [cantPropiedades, setCantPropiedades] = useState(null);
    const [cantColaboradores, setCantColaboradores] = useState(null);
    const [cantDesarrollos, setCantDesarrollos] = useState(null);
    const [cargando, setCargando] = useState(false);

    const peticionGet = async () => {
        await axios.get(baseUrl + "/api/usurs/all/root")
            .then(response => {
                setCantUsuarios(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/propiedades/all/root")
            .then(response => {
                setCantPropiedades(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/colaboradores/all/root")
            .then(response => {
                setCantColaboradores(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/desarollos/all/root")
            .then(response => {
                setCantDesarrollos(response.data);
            })
            .catch(error => {
                console.log(error);
            })


        setCargando(true);
    }


    useEffect(() => {
        peticionGet();

    }, [])

    const [menu, setMenu] = useState(true);

    const abrirMenu = () => {
        setMenu(!menu);
    }


    return (
        <Fragment>
            {!cookies.get('correo_usuario') && <Redirect to="/iniciar-sesion" />}

            <NavBar menu={menu} setMenu={setMenu} abrirMenu={abrirMenu} />

            <div className="contenedor-principal-tablero">

                <div>
                    <MenuIzquierdo menu={menu} abrirMenu={abrirMenu} />
                </div>

                <div>
                    <MenuIzquierdoDesc />
                </div>


                <div className="contenedor-tablero">


                    <div className="contenedot-accesos-principal-tablero">

                        <Link to="/usuarios" title="Cantidad de usuarios" className="contenedor-accesos-tablero">
                            <div>
                                <h2>Usuarios</h2>
                            </div>

                            <div className="contenedor-accesos-detalles">
                                <div>
                                    {cargando ? (
                                        <h3>{cantUsuarios}</h3>

                                    ) : (
                                        <div className="spinner"></div>
                                    )}
                                </div>

                                <div>
                                    <img src={users} alt="Usuarios" title="Usuarios" />
                                </div>
                            </div>
                        </Link>


                        <Link to="/propiedades" title="Cantidad de propiedades" className="contenedor-accesos-tablero">
                            <div>
                                <h2>Propiedades</h2>
                            </div>

                            <div className="contenedor-accesos-detalles">
                                <div>
                                    {cargando ? (
                                        <h3>{cantPropiedades}</h3>

                                    ) : (
                                        <div className="spinner"></div>
                                    )}
                                </div>

                                <div>
                                    <img src={casa} alt="Propiedades" title="Propiedades" />
                                </div>
                            </div>
                        </Link>


                        <Link to="/datos-colaboradores" title="Cantidad de colaboradores" className="contenedor-accesos-tablero">
                            <div>
                                <h2>Colaboradores</h2>
                            </div>

                            <div className="contenedor-accesos-detalles">
                                <div>
                                    {cargando ? (
                                        <h3>{cantColaboradores}</h3>

                                    ) : (
                                        <div className="spinner"></div>
                                    )}
                                </div>

                                <div>
                                    <img src={colaborar} alt="colaboradores" title="colaboradores" />
                                </div>
                            </div>
                        </Link>


                        <Link to="/desarrollos" title="Cantidad de desarrollos" className="contenedor-accesos-tablero">
                            <div>
                                <h2>Desarrollos</h2>
                            </div>

                            <div className="contenedor-accesos-detalles">
                                <div>
                                    {cargando ? (
                                        <h3>{cantDesarrollos}</h3>

                                    ) : (
                                        <div className="spinner"></div>
                                    )}
                                </div>

                                <div>
                                    <img src={pdf} alt="Desarrollos" title="Desarrollos" />
                                </div>
                            </div>
                        </Link>



                    </div>

                    <div className="contenedor-resumen-ventas" >

                    </div>
                </div>

            </div>



        </Fragment>
    )
}

export default Tablero;

