import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './Lotes.css';

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


const Lotes = () => {

    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

    const baseUrl = window.$baseUrl;
    const cookies = new Cookies();

    const [data, setData] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [menu, setMenu] = useState(true);


    const actualizarPreciosLotes = async (info) => {
        await axios.put(baseUrl + "/api/lote/precio", info)
            .then(response => {


            })

            .catch(error => {
                console.log(error);
            });
    }

    const peticionGet = async () => {
        await axios.get(baseUrl + "/api/obtener/lotes")
            .then(response => {
                setData(response.data);
                // console.log(response.data.length)
                // console.log(response.data[0])


            }).catch(error => {
                console.log(error);
            })

        setCargando(true);
    }

    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({});

    console.log(usuarioSeleccionado)

    const seleccionarUsuario = (usuario) => {

        setUsuarioSeleccionado(usuario);

        modalEditar();
    }


    useEffect(() => {
        peticionGet();
    }, [])


    // useEffect(() => {
    //     if (data && data.length > 0) {

    //         data.map(item => {
    //             // console.log({
    //             //     precio_metro_cuadrado: 899, metros_cuadrados: parseFloat(item.metros_cuadrados), id_lote: item.id_lote, precio_total: (parseInt(item.metros_cuadrados) * parseFloat(899)).toFixed(2), precio_totalSin: (parseFloat(item.metros_cuadrados) * parseFloat(899))
    //             // })
    //             actualizarPreciosLotes({
    //                 precio_metro_cuadrado: 899, precio_total: (parseFloat(item.metros_cuadrados) * parseFloat(899)).toFixed(2), id_lote: item.id_lote
    //             })
    //         })
    //     }
    // }, [data])



    const columns = [
        { dataField: 'nombre_lote', text: 'Número lote', filter: textFilter(), sort: true },
        { dataField: 'nombre_desarrollo', text: 'Desarrollo', filter: textFilter(), sort: true },
        { dataField: 'precio_total', text: 'Precio', filter: textFilter(), sort: true },
        {
            dataField: 'nombre_estado_lote',
            text: 'Estatus',
            formatter: (cellContent, row) => {
                return (

                    row.nombre_estado_lote === "Vendido" ?
                        <div className="alert alert-danger" role="alert">
                            {row.nombre_estado_lote}
                        </div>
                        : row.nombre_estado_lote === "Reservado" ?
                            <div className="alert alert-primary" role="alert">
                                {row.nombre_estado_lote}
                            </div>
                            : row.nombre_estado_lote === "Disponible" ?
                                <div className="alert alert-secondary" role="alert">
                                    {row.nombre_estado_lote}
                                </div>
                                :
                                ""
                );
            },
            filter: textFilter(), sort: true
        },
        ,
        {
            dataField: 'df2',
            text: 'Acciones',
            formatter: (cellContent, row) => {
                return (
                    <div className="table-actions">
                        <h5>
                            <Button onClick={() => seleccionarUsuario(row)} title="Editar lote" variant="btn btn-secondary"><i className="far fa-edit"></i></Button>
                        </h5>

                        <h5>
                            <Button onClick={() => modalEliminar(row)} title="Eliminar lote" variant="success"><i className="fas fa-trash-alt"></i></Button>
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



        if (!usuarioSeleccionado.id_desarrollo) {
            Swal.fire({
                title: '¡Se debe elegir a que desarrollo pertenece el lote!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!usuarioSeleccionado.etapa_desarrollo) {
            Swal.fire({
                title: '¡Agrega una etapa al lote!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!usuarioSeleccionado.nombre_lote) {
            Swal.fire({
                title: '¡Agrega un nombre al lote!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!usuarioSeleccionado.metros_cuadrados) {
            Swal.fire({
                title: '¡Agregale los metros cuadrados al lote!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!usuarioSeleccionado.precio_metro_cuadrado) {
            Swal.fire({
                title: '¡Agregale el precio de los metros cuadrados de lote!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!usuarioSeleccionado.estado_lote) {
            Swal.fire({
                title: '¡Agrega un estado al lote!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }


        await axios.post(baseUrl + "/api/insertar/lote", usuarioSeleccionado)
            .then(response => {
                console.log(response);
                Swal.fire({
                    position: 'top-end',
                    background: '#353535',
                    icon: 'success',
                    title: '¡Lote agregado!',
                    showConfirmButton: false,
                    timer: 1500
                })

                peticionGet();
                modalInsertar();

            }).catch(error => {
                console.log(error);
            })


    }


    const peticionPut = async () => {

        await axios.put(baseUrl + "/api/lote/" + usuarioSeleccionado.id_lote, usuarioSeleccionado)
            .then(response => {

                Swal.fire({
                    icon: 'success',
                    background: '#353535',
                    title: '¡Lote actualizado exitosamente!',
                    confirmButtonText: 'Aceptar',
                });

                peticionGet();
                modalEditar();

            })

            .catch(error => {
                console.log(error);
            });




    }


    const [abrirModalEditar, setAbrirModalEditar] = useState(false);
    const modalEditar = () => setAbrirModalEditar(!abrirModalEditar);


    const modalEliminar = (row) => {

        Swal.fire({
            title: `¿Estas segur@ de eliminar el lote: #\n  ${row.nombre_lote}?`,
            showCancelButton: true,
            background: '#353535',
            confirmButtonText: `Borrar`,
            cancelButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(baseUrl + "/api/lote/" + row.id_lote, {

                }).then(response => {

                    Swal.fire({

                        title: '¡El lote fue eliminado correctamente!',
                        background: '#353535',
                        icon: 'success',
                        confirmButtonText: `Aceptar`,
                    })

                    peticionGet();


                }).catch(e => {
                    console.log(e);
                });


            }


        })



    };


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

                <div className="contenedor-tabla-propiedades">
                    <div className="contenedor-tabla" >
                        {cargando ? (
                            <div className="contenedor-pri-propiedades">
                                <div className="contenedor-propieades-boton-agregar">

                                    <button type="button" onClick={modalInsertar} className="btn btn-primary"><i className="fas fa-plus"></i> Agregar lote</button>

                                </div>

                                <ExcelFile element={<button className="btn-generar-excel"> <i className="fas fa-download"></i> Excel</button>}>
                                    <ExcelSheet data={data} name="Lotes">
                                        {/* <ExcelColumn label="#" value="id_lote" /> */}
                                        <ExcelColumn label="Nombre/Número lote" value="nombre_lote" />
                                        <ExcelColumn label="Nombre desarrollo" value="nombre_desarrollo" />
                                        <ExcelColumn label="Precio" value="precio_total" />
                                        <ExcelColumn label="Estatus" value="nombre_estado_lote" />

                                        {/* <ExcelColumn label="Marital Status"
                                        value={(col) => col.is_married ? "Married" : "Single"} /> */}
                                    </ExcelSheet>

                                </ExcelFile>

                                <BootstrapTable hover={true} className="tabla"
                                    keyField="id_usuario"
                                    data={data}

                                    columns={columns}
                                    filter={filterFactory()}
                                    pagination={paginationFactory({

                                        sizePerPageList: [{
                                            text: '50', value: 50
                                        }, {
                                            text: '100', value: 100
                                        }, {
                                            text: '150', value: 150
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

            </div>

            <Modal show={abrirModalInsertar} onHide={modalInsertar}>
                <Modal.Header closeButton>

                    <div className="titulo-modal">
                        <p>Agregar Lote</p>
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal">
                        <label>Desarrollo</label>
                        <select onChange={handleChange} required name="id_desarrollo">
                            <option value="" selected disabled hidden>Elige una opción</option>
                            <option value="15">HACIENDA SAN DIEGO PETZBALAM</option>
                        </select>

                        <label>Etapa desarrollo</label>
                        <select onChange={handleChange} required name="etapa_desarrollo">
                            <option value="" selected disabled hidden>Elige una opción</option>
                            <option value="1">Etapa 1</option>
                            <option value="2">Etapa 2</option>
                            <option value="3">Etapa 3</option>
                        </select>

                        <label>Número lote</label>
                        <input type="text" name="nombre_lote" onChange={handleChange} required ></input>

                        <label>Metros cuadrados</label>
                        <input type="text" name="metros_cuadrados" onChange={handleChange} required ></input>

                        <label>Precio metro cuadrado</label>
                        <input type="text" name="precio_metro_cuadrado" onChange={handleChange} required ></input>

                        <label>Estado lote</label>
                        <select onChange={handleChange} required name="estado_lote">
                            <option value="" selected disabled hidden>Elige una opción</option>
                            <option value="3">Disponible</option>
                        </select>


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
                    <Modal.Title>Editar usuario</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal">

                        <label>Desarrollo</label>
                        <select onChange={handleChange} required value={usuarioSeleccionado && usuarioSeleccionado.id_desarrollo} name="id_desarrollo">
                            <option value="" selected disabled hidden>Elige una opción</option>
                            <option value="15">HACIENDA SAN DIEGO PETZBALAM</option>
                        </select>

                        <label>Etapa desarrollo</label>
                        <select onChange={handleChange} required value={usuarioSeleccionado && usuarioSeleccionado.etapa_desarrollo} name="etapa_desarrollo">
                            <option value="" selected disabled hidden>Elige una opción</option>
                            <option value="1">Etapa 1</option>
                        </select>

                        <label>Número lote</label>
                        <input type="text" name="nombre_lote" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.nombre_lote} required ></input>

                        <label>Metros cuadrados</label>
                        <input type="text" name="metros_cuadrados" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.metros_cuadrados} required ></input>

                        <label>Precio metro cuadrado</label>
                        <input type="text" name="precio_metro_cuadrado" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.precio_metro_cuadrado} required ></input>

                        <label>Estado lote</label>
                        <select onChange={handleChange} required name="estado_lote" value={usuarioSeleccionado && usuarioSeleccionado.estado_lote}>
                            <option value="" selected disabled hidden>Elige una opción</option>
                            <option value="1">Vendido</option>
                            <option value="2">Reservado</option>
                            <option value="3">Disponible</option>
                        </select>

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

export default Lotes;