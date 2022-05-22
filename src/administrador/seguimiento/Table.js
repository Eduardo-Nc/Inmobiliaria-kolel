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

import ReactExport from "react-export-excel";

const Table = ({ datosFiltro, setDatosFiltro, initialState }) => {

    // console.log(datosFiltro)
    // console.log(setDatosFiltro)
    // console.log(initialState)



    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

    const baseUrl = window.$baseUrl;
    const cookies = new Cookies();

    const [data, setData] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [menu, setMenu] = useState(true);


    const peticionGet = async () => {

        setCargando(false)

        await axios.get(baseUrl + "/api/todos/obras")
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

    // desarrollo: null,
    // cliente: "",
    // lote: null,
    // estatus: null,
    // fecha_i: null,
    // fecha_f: null,

    const filterData = (datosFiltro.desarrollo === null && datosFiltro.cliente === "" && datosFiltro.lote === null && datosFiltro.estatus === null && datosFiltro.fecha_i === null && datosFiltro.fecha_f === null) ? data
        :
        data.filter(item => item.id_obra === parseInt(datosFiltro.cliente))


    // item..toString().toLowerCase().includes(datosFiltro.desarrollo.toLocaleLowerCase())
    // item..toString().toLowerCase().includes(datosFiltro.cliente.toLocaleLowerCase())
    // item..toString().toLowerCase().includes(datosFiltro.lote.toLocaleLowerCase())
    // item..toString().toLowerCase().includes(datosFiltro.estatusdatosFiltro.estatus.toLocaleLowerCase())
    // item..toString().toLowerCase().includes(datosFiltro.fecha_i.toLocaleLowerCase())
    // item..toString().toLowerCase().includes(datosFiltro.fecha_f.toLocaleLowerCase())

    const columns = [
        {
            dataField: 'id_seguimiento', text: 'ID', headerAlign: 'center', sort: true, hidden: true, headerStyle: {
                height: '50px',

                border: 'none',
                color: 'white',
                backgroundColor: "#242526"
            }
        },
        {
            dataField: 'asesor', text: 'Asesor', sort: true, headerAlign: 'center',
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
            dataField: 'cliente', text: 'Cliente', headerAlign: 'center', sort: true, headerStyle: {
                height: '50px',
                textTransform: 'uppercase',
                fontSize: '13px',
                border: 'none',
                color: 'white',
                backgroundColor: "#242526"
            }
        },
        {
            dataField: 'desarrollo', text: 'Desarrollo', sort: true, headerAlign: 'center',
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
            dataField: 'lote', text: 'Lote', sort: true, headerAlign: 'center',
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
            dataField: 'fecha_venta', text: 'Fecha Venta', sort: true, headerAlign: 'center',
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
            dataField: 'estatus', text: 'Estatus', sort: true, headerAlign: 'center',
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
            dataField: 'plan', text: 'Plan', sort: true, headerAlign: 'center',
            headerStyle: {
                textTransform: 'uppercase',
                fontSize: '13px',
                height: '50px',
                border: 'none',
                color: 'white',
                backgroundColor: "#242526"
            }
        },
        ,
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
                            <Button title="Ver más" style={{ backgroundColor: '#242526' }} variant="btn btn-secondary"><i className="fas fa-plus"></i> Ver más</Button>
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
                                <ExcelSheet data={data} name="Obras">
                                    <ExcelColumn label="#" value="id_obra" />
                                    <ExcelColumn label="Nombre" value="nombre_obra" />
                                </ExcelSheet>

                            </ExcelFile>


                            <BootstrapTable hover={true}
                                keyField="id_obra"
                                data={[]}
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