import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
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


import Swal from 'sweetalert2';
import moment from 'moment';

import ReactExport from "react-export-excel";

const TableVentas = ({ datosFiltro, setDatosFiltro, initialState, setVentasSeleccionado, modalEditarVisualizar, setSelectedOption, data, setData, peticionGet, cargando }) => {

    // console.log(datosFiltro)
    // console.log(setDatosFiltro)
    // console.log(initialState)



    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

    const baseUrl = window.$baseUrl;
    const cookies = new Cookies();

    // const [data, setData] = useState([]);
    // const [cargando, setCargando] = useState(false);
    const [menu, setMenu] = useState(true);
    const [enviado, setEnviado] = useState(true);

    // const peticionGet = async () => {

    //     setCargando(false)

    //     await axios.get(baseUrl + "/api/todos/ventas")
    //         .then(response => {
    //             setData(response.data);
    //         }).catch(error => {
    //             console.log(error);
    //         })

    //     setCargando(true);
    // }


    // useEffect(() => {
    //     peticionGet();
    // }, [])


    const eliminarVenta = async (row) => {

        Swal.fire({
            title: `Advertencia`,
            text: `¿Realmente deseas borrar la venta del Lote #${row.nombre_lote}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {

                setEnviado(false);

                axios.put(baseUrl + '/api/eliminar/venta/' + row.id_venta_lote, {

                }).then(response => {

                    peticionGet()
                    setEnviado(true);

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: '¡Venta eliminada!',
                        showConfirmButton: true,
                        confirmButtonText: 'Aceptar',
                    }).then((result) => {
                        setEnviado(true);
                        if (result.isConfirmed) {
                            // peticionGet()
                        }
                    })


                }).catch(error => {
                    peticionGet()
                    setEnviado(true);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: '¡Error al eliminar la venta!',
                        showConfirmButton: true,
                        confirmButtonText: 'Aceptar',
                    }).then((result) => {
                        setEnviado(true);
                        if (result.isConfirmed) {
                            // peticionGet()
                        }
                    })
                    console.log(error);
                })
            } else {
                // peticionGet()
            }
        })
    }

    const editarVenta = (row) => {
        setVentasSeleccionado({})
        setSelectedOption({ value: row.id_lote, label: row.nombre_lote, precio_metro_cuadrado: row.precio_metro_cuadrado, precio_total: row.precio_total, metros_cuadrados: row.metros_cuadrados })
        setVentasSeleccionado({ ...row, precio_m2_lote: row.precio_metro_cuadrado, precio_total_lote: row.precio_total })
        modalEditarVisualizar()
    }

    const filterData = (datosFiltro.cliente === "") ? data
        :
        data.filter(item => item.nombre_cliente.toString().toLowerCase().includes(datosFiltro.cliente.toLocaleLowerCase()) || item.apellidos_cliente.toString().toLowerCase().includes(datosFiltro.cliente.toLocaleLowerCase()) || item.correo_cliente.toString().toLowerCase().includes(datosFiltro.cliente.toLocaleLowerCase()) || item.nombre_lote.toString().toLowerCase().includes(datosFiltro.cliente.toLocaleLowerCase()) || item.telefono_cliente.toString().toLowerCase().includes(datosFiltro.cliente.toLocaleLowerCase()) || item.nombre_colaborador.toString().toLowerCase().includes(datosFiltro.cliente.toLocaleLowerCase()) || moment(item.fecha_venta.toString().toLowerCase()).format('DD/MM/YYYY').includes(datosFiltro.cliente.toLocaleLowerCase()))


    const columns = [
        {
            dataField: 'id_venta_lote', text: 'ID', headerAlign: 'center', hidden: true, sort: true, headerStyle: {
                height: '50px',
                border: 'none',
                color: 'white',
                backgroundColor: "#242526"
            }
        },
        {
            dataField: 'nombre_lote', text: '#Lote', headerAlign: 'center', sort: true, headerStyle: {
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
            dataField: 'nombre_cliente', text: 'Nombre Cliente', sort: true, headerAlign: 'center',
            headerStyle: {
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
            dataField: 'correo_cliente', text: 'Correo Cliente', sort: true, headerAlign: 'center',
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
            dataField: 'telefono_cliente', text: 'Teléfono Cliente', sort: true, headerAlign: 'center',
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
            dataField: 'nombre_colaborador', text: 'Broker', sort: true, headerAlign: 'center',
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
                            <Button onClick={() => editarVenta(row)} title="Editar" style={{ backgroundColor: '#242526' }} variant="btn btn-secondary"><i className="fas fa-edit"></i> Editar </Button>
                        </h5>
                        <h5>
                            <Button onClick={() => eliminarVenta(row)} title="Eliminar" style={{ backgroundColor: 'red' }} variant="btn btn-secondary"><i className="fas fa-trash"></i> Eliminar</Button>
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
                                keyField="id_venta_lote"
                                // data={[]}
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

export default TableVentas;