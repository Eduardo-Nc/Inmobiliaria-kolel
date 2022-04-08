import React, { Fragment, useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Dashboard.css';
import '../tablero/Tablero.css';

import { Bar } from '@reactchartjs/react-chart.js'

import NavBar from '../navBar/NavBar';
import axios from 'axios';
import MenuIzquierdo from '../menu/MenuIzquierdo';
import MenuIzquierdoDesc from '../menuEscritorio/MenuIzquierdoDesc';
import Cookies from 'universal-cookie';

import materiales from '../../imagenes/iconos/materiales.png';
import obrasCiviles from '../../imagenes/iconos/obras-civiles.png';
import registro from '../../imagenes/iconos/registro.png';
import usuariosImg from '../../imagenes/iconos/users.png';


const Dashboard = () => {

    const cookies = new Cookies();
    const baseUrl = window.$baseUrl;


    const [cantUsuarios, setCantUsuarios] = useState(null);
    const [cantPropiedades, setCantPropiedades] = useState(null);
    const [cantColaboradores, setCantColaboradores] = useState(null);
    const [cantDesarrollos, setCantDesarrollos] = useState(null);
    const [cargando, setCargando] = useState(false);

    const peticionGet = async () => {
        await axios.get(baseUrl + "/api/materiales/all/root")
            .then(response => {
                setCantUsuarios(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/obras/all/root")
            .then(response => {
                setCantPropiedades(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/usermateriales/all/root")
            .then(response => {
                setCantColaboradores(response.data);
            }).catch(error => {
                console.log(error);
            })


        await axios.get(baseUrl + "/api/registrom/all/root")
            .then(response => {
                setCantDesarrollos(response.data);
            }).catch(error => {
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

    const optionsTabla = {
        responsive: true,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        title: {
            display: true
        },
    }




    const dataTabla = {
        labels: ['Hoy', 'Ayer', 'Anteayer', 'ultimo'],
        datasets: [

            {
                label: 'Materieles Por Agotar',
                data: [30, 30, 100, 10],
                backgroundColor: 'red',
                color: 'white'
            }

        ],
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
                    < MenuIzquierdoDesc />
                </div>


                <div className="contenedor-tablero" >


                    <div className="contenedot-accesos-principal-tablero" >

                        <Link to="/materiales-registro" title="Cantidad de registros" className="contenedor-accesos-tablero">
                            <div>
                                <h2>Registro</h2>
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
                                    <img src={registro} alt="Registro" title="Registro" />
                                </div>
                            </div>
                        </Link>

                        <Link to="/materiales" title="Cantidad de materiales" className="contenedor-accesos-tablero">
                            <div>
                                <h2>Materiales</h2>
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
                                    <img src={materiales} alt="Materiales" title="Materiales" />
                                </div>
                            </div>
                        </Link>


                        <Link to="/obras" title="Cantidad de obras" className="contenedor-accesos-tablero">
                            <div>
                                <h2>Obras</h2>
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
                                    <img src={obrasCiviles} alt="Obras" title="Obras" />
                                </div>
                            </div>
                        </Link>

                        <Link to="/usuarios-materiales" title="Cantidad de usuarios" className="contenedor-accesos-tablero">
                            <div>
                                <h2>Usuarios</h2>
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
                                    <img src={usuariosImg} alt="Usuarios" title="Usuarios" />
                                </div>
                            </div>
                        </Link>


                        {/* <div className="cont-full-grafic">
                            <div className="cont-graficas-detalles">

                                <Bar data={dataTabla} options={optionsTabla} />

                            </div>
                        </div> */}

                        <div style={{ height: '20px', width: '100%' }}></div>

                    </div>



                    {/* <div className="contenedor-resumen-ventas" >
                      
                    </div> */}
                </div>

            </div>



        </Fragment>
    )
}

export default Dashboard;

