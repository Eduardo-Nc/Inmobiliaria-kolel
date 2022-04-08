import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './Registro.css';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import { Button, Modal } from 'react-bootstrap';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import axios from 'axios';
import moment from 'moment';

import NavBar from '../navBar/NavBar';
import MenuIzquierdo from '../menu/MenuIzquierdo';
import MenuIzquierdoDesc from '../menuEscritorio/MenuIzquierdoDesc';
import Cookies from 'universal-cookie';


import Swal from 'sweetalert2';


import ReactExport from "react-export-excel";

const Registro = () => {


    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


    const baseUrl = window.$baseUrl;
    const cookies = new Cookies();

    const [data, setData] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [menu, setMenu] = useState(true);
    const [tipoMaterial, setTipoMaterial] = useState([]);
    const [responsables, setResponsables] = useState([]);
    const [obras, setObras] = useState([]);


    const peticionGet = async () => {
        await axios.get(baseUrl + "/api/todos/registrom")
            .then(response => {
                setData(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/todos/materiales")
            .then(response => {
                setTipoMaterial(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/todos/usermateriales")
            .then(response => {
                setResponsables(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/todos/obras")
            .then(response => {
                setObras(response.data);
            }).catch(error => {
                console.log(error);
            })



        setCargando(true);
    }

    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({});

    const seleccionarUsuario = (usuario) => {
        setUsuarioSeleccionado(usuario);
        modalEditar();
    }


    useEffect(() => {
        peticionGet();

    }, [])


    const columns = [
        { dataField: 'id_registro_accionesiales', text: 'ID', sort: true },
        {
            dataField: 'fecha_creacion',
            text: 'Creación',
            formatter: (cellContent, row) => {
                return (
                    <label>{moment(row.fecha_creacion).format('DD/MM/YYYY')}</label>
                );
            }
        },
        { dataField: 'nombre', text: 'Material', sort: true, filter: textFilter(), sort: true },
        // { dataField: 'entrada', text: 'Entrada', sort: true, filter: textFilter(), sort: true },

        {
            dataField: 'entrada',
            text: 'Entrada',
            filter: textFilter(), sort: true,
            formatter: (cellContent, row) => {
                return (
                    <label>{row.entrada === null ? 0 : row.entrada}</label>
                );
            }
        },
        {
            dataField: 'salida',
            text: 'Salida',
            filter: textFilter(), sort: true,
            formatter: (cellContent, row) => {
                return (
                    <label>{row.salida === null ? 0 : row.salida}</label>
                );
            }
        },
        // { dataField: 'salida', text: 'Salida', sort: true, filter: textFilter(), sort: true },
        { dataField: 'nombres', text: 'Nombre(s)', sort: true, filter: textFilter(), sort: true },
        { dataField: 'apellidos', text: 'Apellidos', sort: true, filter: textFilter(), sort: true },
        { dataField: 'nombre_obra', text: 'Obra', sort: true, filter: textFilter(), sort: true },
        { dataField: 'observaciones', text: 'Observaciones', sort: true, filter: textFilter(), sort: true },
        {
            dataField: 'df2',
            text: 'Acciones',
            formatter: (cellContent, row) => {
                return (
                    <div className="tabla-acciones">
                        <h5>
                            <Button onClick={() => seleccionarUsuario(row)} title="Editar" variant="btn btn-secondary"><i className="far fa-edit"></i></Button>
                        </h5>

                        <h5>
                            <Button onClick={() => modalEliminar(row)} title="Eliminar" variant="danger"><i className="fas fa-trash-alt"></i></Button>
                        </h5>
                    </div>


                );
            }
        },
    ];



    const abrirMenu = () => {
        setMenu(!menu);
    }


    const [abrirModalInsertar, setAbrirModalInsertar] = useState(false);
    const modalInsertar = () => {
        setAbrirModalInsertar(!abrirModalInsertar);
        setUsuarioSeleccionado({});
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setUsuarioSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }))

    }



    const peticionPost = async () => {

        if (!usuarioSeleccionado.id_material) {
            Swal.fire({
                title: '¡Seleccione un Material!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }

        else if (!usuarioSeleccionado.entrada && !usuarioSeleccionado.salida) {
            Swal.fire({
                title: '¡Es necesario ingresar un dato de entrada o salida!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }

        else if (!usuarioSeleccionado.entregado) {
            Swal.fire({
                title: '¡Seleccione un Responsable!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!usuarioSeleccionado.id_obra) {
            Swal.fire({
                title: '¡Seleccione una Obra!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }

        await axios.post(baseUrl + "/api/registrom", {

            fecha_creacion: usuarioSeleccionado.fecha_creacion === undefined ? moment().format('YYYY-MM-DD') : usuarioSeleccionado.fecha_creacion,
            id_material: usuarioSeleccionado.id_material,
            entrada: usuarioSeleccionado.entrada,
            salida: usuarioSeleccionado.salida,
            entregado: usuarioSeleccionado.entregado,
            id_obra: usuarioSeleccionado.id_obra,
            observaciones: usuarioSeleccionado.observaciones,

        }).then(response => {
            console.log(response);
            Swal.fire({
                position: 'top-end',
                background: '#353535',
                icon: 'success',
                title: '¡Registro agregado!',
                showConfirmButton: false,
                timer: 1500
            })

            peticionGet();
            modalInsertar();


        }).catch(error => {
            console.log(error);

            Swal.fire({
                position: 'top-end',
                background: '#353535',
                icon: 'warning',
                title: '¡Un error fue detectado, por favor habla con el administrador!',
                showConfirmButton: false,
                timer: 1500
            })

            peticionGet();
            modalInsertar();
        })
    }


    const peticionPut = async () => {

        if (!usuarioSeleccionado.id_material) {
            Swal.fire({
                title: '¡Seleccione un Material!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }

        else if (!usuarioSeleccionado.entrada && !usuarioSeleccionado.salida) {
            Swal.fire({
                title: '¡Es necesario ingresar un dato de entrada o salida!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }

        else if (!usuarioSeleccionado.entregado) {
            Swal.fire({
                title: '¡Seleccione un Responsable!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!usuarioSeleccionado.id_obra) {
            Swal.fire({
                title: '¡Seleccione una Obra!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }

        await axios.put(baseUrl + "/api/registrom/" + usuarioSeleccionado.id_registro_accionesiales, {

            fecha_creacion: usuarioSeleccionado.fecha_creacion,
            id_material: usuarioSeleccionado.id_material,
            entrada: usuarioSeleccionado.entrada,
            salida: usuarioSeleccionado.salida,
            entregado: usuarioSeleccionado.entregado,
            id_obra: usuarioSeleccionado.id_obra,
            observaciones: usuarioSeleccionado.observaciones,
            status: usuarioSeleccionado.status,
        })
            .then(response => {

                console.log(response);

                Swal.fire({
                    icon: 'success',
                    background: '#353535',
                    title: '¡Registro actualizado exitosamente!',
                    confirmButtonText: 'Aceptar',
                });

                peticionGet();
                modalEditar();

            })

            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'warning',
                    background: '#353535',
                    title: '¡Un error fue detectado, por favor habla con el administrador!',
                    confirmButtonText: 'Aceptar',
                });
            });




    }


    const [abrirModalEditar, setAbrirModalEditar] = useState(false);
    const modalEditar = () => setAbrirModalEditar(!abrirModalEditar);


    const modalEliminar = (row) => {

        Swal.fire({
            title: `¿Estas segur@ de eliminar el registro:\n  ${row.id_registro_accionesiales}?`,
            showCancelButton: true,
            background: '#353535',
            confirmButtonText: `Borrar`,
            cancelButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {

                axios.put(baseUrl + "/api/eliminar/registrom/" + row.id_registro_accionesiales, {

                }).then(response => {
                    console.log(response);
                    Swal.fire({
                        title: '¡El registro fue eliminado correctamente!',
                        background: '#353535',
                        icon: 'success',
                        confirmButtonText: `Aceptar`,
                    })

                    peticionGet();


                }).catch(e => {
                    console.log(e);
                    Swal.fire({
                        title: '¡Un error fue detectado, por favor habla con el administrador!',
                        background: '#353535',
                        icon: 'warning',
                        confirmButtonText: `Aceptar`,
                    })
                });


            }


        })



    };


    const emptyDataMessage = () => { return 'Sin Resultados'; }

    return (
        <Fragment>
            {!cookies.get('correo_usuario') && <Redirect to="/iniciar-sesion" />}

            <NavBar menu={menu} setMenu={setMenu} abrirMenu={abrirMenu} />

            <div className="contenedor-principal-propiedades">

                <div>
                    <MenuIzquierdo menu={menu} abrirMenu={abrirMenu} />
                </div>

                <div>
                    < MenuIzquierdoDesc />
                </div>

                <div className="cont-princ-dash-registro">

                    {cargando ? (
                        <div className="contenedor-terc-registro">

                            <button type="button" onClick={modalInsertar} className="btn btn-primary"><i className="fas fa-plus"></i> Agregar</button>

                            <div className="btn-excel-registro">
                                <ExcelFile element={<button className="btn-generar-excel"> <i className="fas fa-download"></i> Excel</button>}>
                                    <ExcelSheet data={data} name="Materiales">
                                        <ExcelColumn label="#" value="id_registro_accionesiales" />

                                        <ExcelColumn label="Creación"
                                            value={(col) => moment(col.fecha_creacion).format('DD/MM/YYYY')} />

                                        <ExcelColumn label="Material" value="nombre" />
                                        <ExcelColumn label="Entrada" value="entrada" />
                                        <ExcelColumn label="Salida" value="salida" />
                                        <ExcelColumn label="Nombre(s)" value="nombres" />
                                        <ExcelColumn label="Apellidos" value="apellidos" />
                                        <ExcelColumn label="Obra" value="nombre_obra" />
                                        <ExcelColumn label="Observaciones" value="observaciones" />
                                    </ExcelSheet>
                                </ExcelFile>
                            </div>

                            <BootstrapTable hover={true} className="tabla"
                                keyField="id_registro_accionesiales"
                                data={data}
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

                    ) : (
                        <div className="contenedor-precarga" >
                            <div className="precarga"></div>
                        </div>
                    )}


                </div>

            </div>

            <Modal show={abrirModalInsertar} onHide={modalInsertar}>
                <Modal.Header closeButton>

                    <div className="titulo-modal">
                        <p>Agregar Registro</p>
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal">

                        <label>Fecha Creación</label>
                        <input type="date" name="fecha_creacion" value={moment(usuarioSeleccionado && usuarioSeleccionado.fecha_creacion).format('YYYY-MM-DD')} onChange={handleChange} required ></input>

                        <label>Material</label>
                        <select onChange={handleChange} required name="id_material">
                            <option value="" defaultValue>Seleccione una opción</option>

                            {tipoMaterial.map(items =>
                                <option key={items.id_material} value={items.id_material}>{items.nombre}</option>
                            )}
                        </select>

                        <label>Entrada</label>
                        <input type="number" name="entrada" onChange={handleChange} required ></input>

                        <label>Salida</label>
                        <input type="number" name="salida" onChange={handleChange} required ></input>

                        <label>Responsable</label>
                        <select onChange={handleChange} required name="entregado">
                            <option value="" defaultValue>Seleccione una opción</option>

                            {responsables.map(items =>
                                <option key={items.id_usuario_materiales} value={items.id_usuario_materiales}>{items.nombres + " " + items.apellidos}</option>
                            )}
                        </select>

                        <label>Obra</label>
                        <select onChange={handleChange} required name="id_obra">
                            <option value="" defaultValue>Seleccione una opción</option>

                            {obras.map(items =>
                                <option key={items.id_obra} value={items.id_obra}>{items.nombre_obra}</option>
                            )}
                        </select>

                        <label>Observaciones</label>
                        <textarea style={{ padding: '10px' }} type="text" name="observaciones" rows="4" onChange={handleChange} required ></textarea >

                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={modalInsertar}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={() => peticionPost()}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal show={abrirModalEditar} onHide={modalEditar}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Registro</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal">

                        <label>Fecha Creación</label>
                        <input type="date" name="fecha_creacion" value={moment(usuarioSeleccionado && usuarioSeleccionado.fecha_creacion).format('YYYY-MM-DD')} onChange={handleChange} required ></input>

                        <label>Material</label>
                        <select disabled={true} onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.id_material} required name="id_material">
                            <option value="" defaultValue>Seleccione una opción</option>

                            {tipoMaterial.map(items =>
                                <option key={items.id_material} value={items.id_material}>{items.nombre}</option>
                            )}
                        </select>

                        <label>Entrada</label>
                        <input disabled={true} type="number" name="entrada" value={usuarioSeleccionado && usuarioSeleccionado.entrada} onChange={handleChange} required ></input>

                        <label>Salida</label>
                        <input disabled={true} type="number" name="salida" value={usuarioSeleccionado && usuarioSeleccionado.salida} onChange={handleChange} required ></input>

                        <label>Responsable</label>
                        <select onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.entregado} required name="entregado">
                            <option value="" defaultValue>Seleccione una opción</option>

                            {responsables.map(items =>
                                <option key={items.id_usuario_materiales} value={items.id_usuario_materiales}>{items.nombres + " " + items.apellidos}</option>
                            )}
                        </select>

                        <label>Obra</label>
                        <select onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.id_obra} required name="id_obra">
                            <option value="" defaultValue>Seleccione una opción</option>

                            {obras.map(items =>
                                <option key={items.id_obra} value={items.id_obra}>{items.nombre_obra}</option>
                            )}
                        </select>

                        <label>Observaciones</label>
                        <textarea style={{ padding: '10px' }} type="text" name="observaciones" value={usuarioSeleccionado && usuarioSeleccionado.observaciones} rows="4" onChange={handleChange} required ></textarea >

                        {/* <label>Estatus</label> */}
                        <input type="hidden" name="entrada" value={usuarioSeleccionado && usuarioSeleccionado.status} onChange={handleChange} required ></input>

                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={modalEditar}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={() => peticionPut()}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>


        </Fragment>
    )
}

export default Registro;