import React, { Fragment, useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Table.css';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import { Button, Modal } from 'react-bootstrap';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import axios from 'axios';

import NavBar from '../navBar/NavBar';
import MenuIzquierdo from '../menu/MenuIzquierdo';
import MenuIzquierdoDesc from '../menuEscritorio/MenuIzquierdoDesc';
import Cookies from 'universal-cookie';
import moment from 'moment';


import Swal from 'sweetalert2';

import ReactExport from "react-export-excel";

const Table = ({ datosFiltro, setDatosFiltro, initialState, data, setData, cargando }) => {

    // console.log(datosFiltro)
    // console.log(setDatosFiltro)
    // console.log(initialState)

    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

    const baseUrl = window.$baseUrl;
    const cookies = new Cookies();


    const [menu, setMenu] = useState(true);

    console.log(data)

    // desarrollo: null,
    // cliente: "",
    // lote: null,
    // estatus: null,
    // fecha_i: null,
    // fecha_f: null,

    const filterData = (datosFiltro.cliente === "") ? data
        :
        data.filter(item => item.nombre_cliente.toString().toLowerCase().includes(datosFiltro.cliente.toLocaleLowerCase()) || item.apellidos_cliente.toString().toLowerCase().includes(datosFiltro.cliente.toLocaleLowerCase()) || item.correo_cliente.toString().toLowerCase().includes(datosFiltro.cliente.toLocaleLowerCase()) || item.nombre_lote.toString().toLowerCase().includes(datosFiltro.cliente.toLocaleLowerCase()) || item.telefono_cliente.toString().toLowerCase().includes(datosFiltro.cliente.toLocaleLowerCase()) || item.nombre_colaborador.toString().toLowerCase().includes(datosFiltro.cliente.toLocaleLowerCase()) || moment(item.fecha_venta.toString().toLowerCase()).format('DD/MM/YYYY').includes(datosFiltro.cliente.toLocaleLowerCase()) || item.nombre_estado.toString().toLowerCase().includes(datosFiltro.cliente.toLocaleLowerCase()) || item.nombre_tipo_pago_venta_lote.toString().toLowerCase().includes(datosFiltro.cliente.toLocaleLowerCase()))


    const columns = [
        {
            dataField: 'id_venta_lote', text: 'ID', headerAlign: 'center', sort: true, hidden: true, headerStyle: {
                height: '50px',

                border: 'none',
                color: 'white',
                backgroundColor: "#242526"
            }
        },
        {
            dataField: 'nombre_colaborador', text: 'Asesor', sort: true, headerAlign: 'center',
            headerStyle: {
                height: '50px',
                textTransform: 'uppercase',
                fontSize: '13px',
                border: 'none',
                color: 'white',
                backgroundColor: "#242526"
            }
        },
        {
            dataField: 'nombre_cliente', text: 'Cliente', headerAlign: 'center', sort: true, headerStyle: {
                height: '50px',
                textTransform: 'uppercase',
                fontSize: '13px',
                border: 'none',
                color: 'white',
                backgroundColor: "#242526"
            }, formatter: (cellContent, row) => {
                return (
                    <label>{row.nombre_cliente + " " + row.apellidos_cliente}</label>
                );
            }
        },
        {
            dataField: 'nombre_desarrollo', text: 'Desarrollo', sort: true, headerAlign: 'center',
            headerStyle: {
                height: '50px',
                textTransform: 'uppercase',
                fontSize: '13px',
                border: 'none',
                color: 'white',
                backgroundColor: "#242526"
            }
        },
        {
            dataField: 'nombre_lote', text: 'Lote', sort: true, headerAlign: 'center',
            headerStyle: {
                height: '50px',
                textTransform: 'uppercase',
                fontSize: '13px',
                border: 'none',
                color: 'white',
                backgroundColor: "#242526"
            }
        },
        {
            dataField: 'fecha_venta', text: 'Fecha Venta', headerAlign: 'center', sort: true, headerStyle: {
                height: '50px',
                textTransform: 'uppercase',
                fontSize: '13px',
                border: 'none',
                color: 'white',
                backgroundColor: "#242526"
            }, formatter: (cellContent, row) => {
                return (
                    <label>{moment(row.fecha_venta).format('DD/MM/YYYY')}</label>
                );
            }
        },
        {
            dataField: 'nombre_estado', text: 'Estatus', sort: true, headerAlign: 'center',
            headerStyle: {
                height: '50px',
                textTransform: 'uppercase',
                fontSize: '13px',
                border: 'none',
                color: 'white',
                backgroundColor: "#242526"
            }, formatter: (cellContent, row) => {
                return (
                    <div style={{ width: '100%', height: '50px', borderRadius: '5px', backgroundColor: row.id_estatus === 3 ? 'red' : 'blue', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                        <label style={{ color: 'white', fontSize: '14px', fontWeight: 'bold', marginTop: '7px' }}>{row.nombre_estado}</label>
                    </div>
                );
            }
        },
        {
            dataField: 'nombre_tipo_pago_venta_lote', text: 'Forma Pago', sort: true, headerAlign: 'center',
            headerStyle: {
                textTransform: 'uppercase',
                fontSize: '13px',
                height: '50px',
                border: 'none',
                color: 'white',
                backgroundColor: "#242526"
            }
        },
        {
            dataField: 'nombre_tipo_pago_venta_lote', text: 'Pagos', sort: true, headerAlign: 'center',
            headerStyle: {
                textTransform: 'uppercase',
                fontSize: '13px',
                height: '50px',
                border: 'none',
                color: 'white',
                backgroundColor: "#242526"
            }, formatter: (cellContent, row) => {
                return (
                    <div style={{ width: '100%', height: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                        <div style={{ width: '100%', height: '100%', flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <label style={{ color: 'blue', fontSize: '17px', fontWeight: 'bold', marginTop: '15px' }}>{row.cant_pagos_pendientes}</label>
                            <label style={{ color: 'black', fontSize: '17px', fontWeight: 'bold', marginTop: '15px', marginLeft: '4px', marginRight: "4px" }}> de </label>
                            <label style={{ color: 'black', fontSize: '17px', fontWeight: 'bold', marginTop: '15px' }}>{row.cant_pagos}</label>
                        </div>
                        <div>
                            {row.cant_pagos_pendientes === 0 &&
                                <label style={{ color: 'blue', fontSize: '17px', fontWeight: 'bold' }}>Finalizado</label>
                            }
                        </div>

                    </div>
                );
            }
        },
        {
            dataField: 'df2',
            text: 'Acciones',
            headerAlign: 'center',
            headerStyle: {
                height: '50px',
                textTransform: 'uppercase',
                fontSize: '13px',
                border: 'none',
                color: 'white',
                backgroundColor: "#242526"
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="tabla-acciones">
                        <h5>
                            <Link to={`/detalles-seguimiento/${row.id_venta_lote}`} >
                                <Button title="Ver más" style={{ backgroundColor: '#242526' }} variant="btn btn-secondary"><i className="fas fa-plus"></i> Ver más</Button>
                            </Link>
                        </h5>
                    </div>
                );
            }
        },
    ];

    const emptyDataMessage = () => { return 'Sin Resultados'; }


    return (
        <Fragment>

            <div className="cont-principal-table-seguimiento">
                {
                    cargando ?
                        <div className="cont-table-seguimiento">
                            <ExcelFile element={<button className="btn-generar-seguimiento-excel"> <i className="fas fa-download"></i> Excel</button>}>
                                <ExcelSheet data={filterData} name="Ventas">
                                    <ExcelColumn label="#" value="id_venta_lote" />
                                    <ExcelColumn label="Desarrollo" value="nombre_desarrollo" />
                                    <ExcelColumn label="#Lote" value="nombre_lote" />
                                    <ExcelColumn label="Metros Cuadrados" value="metros_cuadrados" />
                                    <ExcelColumn label="Precio Metros Cuadrados" value="precio_metro_cuadrado" />

                                    <ExcelColumn label="Nombre Cliente"
                                        value={(col) => col.nombre_cliente && col.nombre_cliente + " " + col.apellidos_cliente} />
                                    {/* <ExcelColumn label="" value="nombre_cliente" /> */}
                                    <ExcelColumn label="Fecha Venta" value="fecha_venta" />
                                    <ExcelColumn label="Correo Cliente" value="correo_cliente" />
                                    <ExcelColumn label="Teléfono Cliente" value="telefono_cliente" />

                                    <ExcelColumn label="Meses" value="nombre_mes" />
                                    <ExcelColumn label="Enganche/contado" value="enganche_contado" />
                                    <ExcelColumn label="Precio Total Lote" value="precio_total" />
                                    <ExcelColumn label="Pago Mensual"
                                        value={(col) => col.pago_mensual === "NaN" || col.pago_mensual === 0 ? "" : col.pago_mensual} />
                                    <ExcelColumn label="Tipo de Pago" value="nombre_tipo_pago_venta_lote" />
                                    <ExcelColumn label="Broker" value="nombre_colaborador" />
                                </ExcelSheet>
                            </ExcelFile>


                            <BootstrapTable hover={true}
                                keyField="id_obra"
                                data={filterData}
                                noDataIndication={emptyDataMessage}
                                columns={columns}
                                filter={filterFactory()}
                                pagination={paginationFactory({

                                    sizePerPageList: [{
                                        text: '15', value: 15
                                    }, {
                                        text: '30', value: 30
                                    }, {
                                        text: '50', value: 50
                                    }, {
                                        text: 'Todos', value: data.length
                                    }
                                    ],
                                    prePageText: 'Anterior',
                                    nextPageText: 'Siguiente',

                                })
                                }
                            />
                        </div>
                        :
                        <div className="contenedor-precarga" >
                            <div className="precarga"></div>
                        </div>
                }
            </div>

        </Fragment>
    )
}

export default Table;