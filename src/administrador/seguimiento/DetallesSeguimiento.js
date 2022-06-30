import React, { Fragment, useState, useEffect } from 'react';
import { Redirect, Link, useParams } from 'react-router-dom';
import './Seguimiento.css';
import './DetallesSeguimiento.css';
import './Ventas.css';
import '../tablero/Tablero.css';
import NavBar from '../navBar/NavBar';
import Table from './TableVentas';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
import MenuIzquierdo from '../menu/MenuIzquierdo';
// import materiales from '../../imagenes/iconos/materiales.png';
import Select from 'react-select';
import DatePicker from 'react-date-picker';
import moment from 'moment';


const DetallesSeguimiento = () => {

    const params = useParams();
    // console.log(params.id)

    const cookies = new Cookies();
    const baseUrl = window.$baseUrl;

    const [data, setData] = useState({});
    const [menu, setMenu] = useState(true);
    const [cargando, setCargando] = useState(false);




    const abrirMenu = () => {
        setMenu(!menu);
    }


    const peticionGet = async () => {
        setCargando(false)

        await axios.get(baseUrl + "/api/todos/ventas/" + params.id)
            .then(response => {
                setData(response.data[0]);
            }).catch(error => {
                console.log(error);
            })

        setCargando(true);
    }

    useEffect(() => {
        peticionGet()
    }, [])

    console.log(data)

    return (
        <Fragment>
            {!cookies.get('correo_usuario') && <Redirect to="/iniciar-sesion" />}

            <NavBar menu={menu} setMenu={setMenu} abrirMenu={abrirMenu} />

            <div className="contenedor-principal-seguimiento">

                <div style={{ width: menu ? '0%' : '100%', height: menu ? '0%' : '100%' }} className="cont-menu-movil-seguimiento">
                    <MenuIzquierdo menu={menu} abrirMenu={abrirMenu} />
                </div>

                <div className="cont-total-detalle-seguimiento">
                    <div className="cont-total-header-seguimiento">
                        <div className="cont-estatus-seguimiento">
                            <div className="cont-btn-estatus">
                                <div className="cont-btn-estatus-title">
                                    <label>Estatus Actual:</label>
                                </div>
                                <div className="cont-btn-estatus-value">
                                    {
                                        cargando ?
                                            <label>{data.nombre_estado}</label>
                                            :
                                            <div className="spinner"></div>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="cont-btn-seguimiento">
                            <Button title="Estado de Cuenta" style={{ backgroundColor: '#242526', padding: '10px' }} variant="btn btn-secondary">Estado de Cuenta</Button>
                        </div>

                    </div>

                </div>

            </div>

        </Fragment >
    )
}

export default DetallesSeguimiento;

