import React, { Fragment, useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Seguimiento.css';
import '../tablero/Tablero.css';
import NavBar from '../navBar/NavBar';
import Table from './Table';
import axios from 'axios';
import Cookies from 'universal-cookie';
import MenuIzquierdo from '../menu/MenuIzquierdo';
// import materiales from '../../imagenes/iconos/materiales.png';
import moment from 'moment';

const Seguimiento = () => {

    const cookies = new Cookies();
    const baseUrl = window.$baseUrl;

    const [cargando, setCargando] = useState(false);

    const initialState = {
        desarrollo: null,
        cliente: "",
        lote: null,
        estatus: null,
        fecha_i: null,
        fecha_f: null,
    }

    const [datosFiltro, setDatosFiltro] = useState(initialState);
    const [data, setData] = useState([]);

    const [menu, setMenu] = useState(true);

    const abrirMenu = () => {
        setMenu(!menu);
    }


    const handleInputChange = (event) => {
        setDatosFiltro({
            ...datosFiltro,
            [event.target.name]: event.target.value,
        })
    }

    const peticionGet = async () => {
        setCargando(false)

        await axios.get(baseUrl + "/api/todos/ventas")
            .then(response => {
                setData(response.data);
            }).catch(error => {
                console.log(error);
            })

        setCargando(true);
    }

    useEffect(() => {
        peticionGet();
    }, [])


    return (
        <Fragment>
            {!cookies.get('correo_usuario') && <Redirect to="/iniciar-sesion" />}

            <NavBar menu={menu} setMenu={setMenu} abrirMenu={abrirMenu} />

            <div className="contenedor-principal-seguimiento">

                <div style={{ width: menu ? '0%' : '100%', height: menu ? '0%' : '100%' }} className="cont-menu-movil-seguimiento">
                    <MenuIzquierdo menu={menu} abrirMenu={abrirMenu} />
                </div>

                <div className="contenedor-title-seguimiento">
                    <div className="cont-back-seguimiento">
                        <Link to="/tablero">
                            <i className="fas fa-arrow-left"></i>
                        </Link>
                    </div>
                    <div className="cont-title-seguimiento">
                        <div>
                            <h1>Seguimiento Ventas</h1>
                        </div>
                    </div>
                </div>

                <div className="content-all-final-seguimiento">
                    <div className="content-all-filtros-seguimiento">


                        {
                            cargando ?
                                <Fragment>

                                    <div className="cont-seguimiento-inputs">
                                        <label>Filtro</label>
                                        <input value={datosFiltro.cliente ? datosFiltro.cliente : ''} onChange={handleInputChange} type="text" name="cliente" placeholder="Ingrese un dato" />
                                    </div>


                                    <div className="cont-btn-limpiar-filtro">
                                        <input onClick={() => {
                                            setDatosFiltro(initialState)
                                        }} type="button" value="Limpiar Filtros" />
                                    </div>
                                </Fragment>
                                :
                                <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className="contenedor-precarga" >
                                        <div className="precarga"></div>
                                    </div>
                                </div>

                        }

                    </div>

                    <div className="content-all-tabla-datos-seguimiento">

                        <div className="content-all-tabla-separador"></div>

                        <Table datosFiltro={datosFiltro} setDatosFiltro={setDatosFiltro} initialState={initialState} data={data} setData={setData} cargando={cargando} />
                    </div>
                </div>


            </div>
        </Fragment>
    )
}

export default Seguimiento;

