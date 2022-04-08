import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './Materiales.css';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';

import { Button, Modal } from 'react-bootstrap';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import axios from 'axios';


import ReactExport from "react-export-excel";


import NavBar from '../navBar/NavBar';
import MenuIzquierdo from '../menu/MenuIzquierdo';
import MenuIzquierdoDesc from '../menuEscritorio/MenuIzquierdoDesc';
import Cookies from 'universal-cookie';


import Swal from 'sweetalert2';



const Materiales = () => {

    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


    const baseUrl = window.$baseUrl;
    const cookies = new Cookies();

    const [data, setData] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [menu, setMenu] = useState(true);
    const [tipoUnidad, setTipoUnidad] = useState([]);
    const [tipoMaterial, setTipoMaterial] = useState([]);
    const [familia, setFamilia] = useState([]);



    const peticionGet = async () => {
        await axios.get(baseUrl + "/api/todos/materiales")
            .then(response => {
                setData(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/todos/tipo/unidad")
            .then(response => {
                setTipoUnidad(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/todos/tipo/material")
            .then(response => {
                setTipoMaterial(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/todos/tipo/familia")
            .then(response => {
                setFamilia(response.data);
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

    const { ExportCSVButton } = CSVExport;

    const columns = [
        { dataField: 'id_material', text: 'ID', filter: textFilter(), sort: true },
        { dataField: 'nombre', text: 'Nombre', filter: textFilter(), sort: true },
        { dataField: 'nombreUnidad', text: 'Unidad', filter: textFilter(), sort: true },
        { dataField: 'nombreMaterial', text: 'Tipo', filter: textFilter(), sort: true },
        { dataField: 'nombreFamilia', text: 'Familia', filter: textFilter(), sort: true },
        // { dataField: 'stock_minimo', text: 'Nombre', filter: textFilter(), sort: true },
        {
            dataField: 'stock',
            text: 'Stock',
            filter: textFilter(), sort: true,
            formatter: (cellContent, row) => {
                return (
                    <label style={{ color: parseInt(row.stock) <= parseInt(row.stock_minimo) ? 'red' : 'white', fontWeight: parseInt(row.stock) <= parseInt(row.stock_minimo) ? 'bold' : 'normal' }} >{row.stock}</label>
                );
            }
        },
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

        if (!usuarioSeleccionado.nombre) {
            Swal.fire({
                title: '¡Nombre del material es requerido!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!usuarioSeleccionado.unidad) {
            Swal.fire({
                title: '¡Unidad del material es requerido!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!usuarioSeleccionado.tipo) {
            Swal.fire({
                title: '¡Tipo del material es requerido!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!usuarioSeleccionado.familia) {
            Swal.fire({
                title: '¡Familia del material es requerido!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!usuarioSeleccionado.stock_minimo) {
            Swal.fire({
                title: '¡Stock mínimo del material es requerido!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!usuarioSeleccionado.stock) {
            Swal.fire({
                title: '¡Stock del material es requerido!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }

        await axios.post(baseUrl + "/api/materiales", {

            nombre: usuarioSeleccionado.nombre,
            unidad: usuarioSeleccionado.unidad,
            tipo: usuarioSeleccionado.tipo,
            familia: usuarioSeleccionado.familia,
            stock_minimo: usuarioSeleccionado.stock_minimo,
            stock: usuarioSeleccionado.stock,

        }).then(response => {
            console.log(response);
            Swal.fire({
                position: 'top-end',
                background: '#353535',
                icon: 'success',
                title: '¡Material agregado!',
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

        await axios.put(baseUrl + "/api/materiales/" + usuarioSeleccionado.id_material, {

            nombre: usuarioSeleccionado.nombre,
            unidad: usuarioSeleccionado.unidad,
            tipo: usuarioSeleccionado.tipo,
            familia: usuarioSeleccionado.familia,
            stock_minimo: usuarioSeleccionado.stock_minimo,
            stock: usuarioSeleccionado.stock,


        })
            .then(response => {

                console.log(response);

                Swal.fire({
                    icon: 'success',
                    background: '#353535',
                    title: '¡Material actualizado exitosamente!',
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
            title: `¿Estas segur@ de eliminar:\n  ${row.nombre}?`,
            showCancelButton: true,
            background: '#353535',
            confirmButtonText: `Borrar`,
            cancelButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(baseUrl + "/api/materiales/" + row.id_material, {

                }).then(response => {

                    Swal.fire({

                        title: '¡El material fue eliminado correctamente!',
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

                                    <button type="button" onClick={modalInsertar} className="btn btn-primary"><i className="fas fa-plus"></i> Agregar</button>

                                </div>


                                <ExcelFile element={<button className="btn-generar-excel"> <i className="fas fa-download"></i> Excel</button>}>
                                    <ExcelSheet data={data} name="Materiales">
                                        <ExcelColumn label="#" value="id_material" />
                                        <ExcelColumn label="Nombre" value="nombre" />
                                        <ExcelColumn label="Unidad" value="nombreUnidad" />
                                        <ExcelColumn label="Tipo" value="nombreMaterial" />
                                        <ExcelColumn label="Familia" value="nombreFamilia" />
                                        <ExcelColumn label="Stock" value="stock" />
                                        <ExcelColumn label="Stock mínimo" value="stock_minimo" />


                                        {/* <ExcelColumn label="Marital Status"
                                            value={(col) => col.is_married ? "Married" : "Single"} /> */}
                                    </ExcelSheet>

                                </ExcelFile>

                                <BootstrapTable hover={true} className="tabla"
                                    keyField="id_material"
                                    data={data}

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

            </div>

            <Modal show={abrirModalInsertar} onHide={modalInsertar}>
                <Modal.Header closeButton>

                    <div className="titulo-modal">
                        <p>Agregar Material</p>
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal">

                        <label>Nombre Material</label>
                        <input type="text" placeholder="Ingrese un nombre" name="nombre" onChange={handleChange} required ></input>

                        <label>Unidad</label>
                        <select onChange={handleChange} required name="unidad">
                            <option value="" defaultValue>Seleccione una opción</option>

                            {tipoUnidad.map(items =>
                                <option key={items.id_unidad} value={items.id_unidad}>{items.nombreUnidad}</option>
                            )}
                        </select>

                        <label>Tipo</label>
                        <select onChange={handleChange} required name="tipo">
                            <option value="" defaultValue>Seleccione una opción</option>

                            {tipoMaterial.map(items =>
                                <option key={items.id_tipo_material} value={items.id_tipo_material}>{items.nombreMaterial}</option>
                            )}
                        </select>

                        <label>Familia</label>
                        <select onChange={handleChange} required name="familia">
                            <option value="" defaultValue>Seleccione una opción</option>

                            {familia.map(items =>
                                <option key={items.id_familia} value={items.id_familia}>{items.nombreFamilia}</option>
                            )}
                        </select>



                        <label>Stock</label>
                        <input type="number" name="stock" onChange={handleChange} required ></input>

                        <label>Stock Mínimo</label>
                        <input type="number" name="stock_minimo" onChange={handleChange} required ></input>

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
                    <Modal.Title>Editar Material</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <form className="form-modal">

                        <label>Nombre Material</label>
                        <input type="text" name="nombre" value={usuarioSeleccionado && usuarioSeleccionado.nombre} required onChange={handleChange} required ></input>

                        <label>Unidad</label>
                        <select onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.id_unidad} required name="unidad">
                            <option value="" defaultValue>Seleccione una opción</option>

                            {tipoUnidad.map(items =>
                                <option key={items.id_unidad} value={items.id_unidad}>{items.nombreUnidad}</option>
                            )}
                        </select>

                        <label>Tipo</label>
                        <select onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.id_tipo_material} required name="tipo">
                            <option value="" defaultValue>Seleccione una opción</option>

                            {tipoMaterial.map(items =>
                                <option key={items.id_tipo_material} value={items.id_tipo_material}>{items.nombreMaterial}</option>
                            )}
                        </select>

                        <label>Familia</label>
                        <select onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.id_familia} required name="familia">
                            <option value="" defaultValue>Seleccione una opción</option>

                            {familia.map(items =>
                                <option key={items.id_familia} value={items.id_familia}>{items.nombreFamilia}</option>
                            )}
                        </select>

                        <label>Stock</label>
                        <input type="number" name="stock" value={usuarioSeleccionado && usuarioSeleccionado.stock} onChange={handleChange} required ></input>

                        <label>Stock Mínimo</label>
                        <input type="number" name="stock_minimo" value={usuarioSeleccionado && usuarioSeleccionado.stock_minimo} onChange={handleChange} required ></input>

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


        </Fragment >
    )
}

export default Materiales;