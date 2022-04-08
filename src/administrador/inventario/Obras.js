import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './Obras.css';

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

const Obras = () => {

    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

    const baseUrl = window.$baseUrl;
    const cookies = new Cookies();

    const [data, setData] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [menu, setMenu] = useState(true);


    const peticionGet = async () => {
        await axios.get(baseUrl + "/api/todos/obras")
            .then(response => {
                setData(response.data);
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
        { dataField: 'id_obra', text: 'ID', sort: true },
        { dataField: 'nombre_obra', text: 'Nombre', filter: textFilter(), sort: true },

        ,
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

        if (!usuarioSeleccionado.nombre_obra) {
            Swal.fire({
                title: '¡Agrega un nombre a la obra!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }

        await axios.post(baseUrl + "/api/obras", {

            nombre_obra: usuarioSeleccionado.nombre_obra,


        }).then(response => {
            console.log(response);
            Swal.fire({
                position: 'top-end',
                background: '#353535',
                icon: 'success',
                title: '¡Obra agregada!',
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

        await axios.put(baseUrl + "/api/obras/" + usuarioSeleccionado.id_obra, {

            nombre_obra: usuarioSeleccionado.nombre_obra,
        })
            .then(response => {

                console.log(response);

                Swal.fire({
                    icon: 'success',
                    background: '#353535',
                    title: '¡Obra actualizada exitosamente!',
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
            title: `¿Estas segur@ de eliminar la obra:\n  ${row.nombre_obra}?`,
            showCancelButton: true,
            background: '#353535',
            confirmButtonText: `Borrar`,
            cancelButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(baseUrl + "/api/obras/" + row.id_obra, {

                }).then(response => {

                    Swal.fire({

                        title: '¡La obra fue eliminada correctamente!',
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
                                    <ExcelSheet data={data} name="Obras">
                                        <ExcelColumn label="#" value="id_obra" />
                                        <ExcelColumn label="Nombre" value="nombre_obra" />


                                        {/* <ExcelColumn label="Marital Status"
                                            value={(col) => col.is_married ? "Married" : "Single"} /> */}
                                    </ExcelSheet>

                                </ExcelFile>


                                <BootstrapTable hover={true} className="tabla"
                                    keyField="id_obra"
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
                        <p>Agregar Obra</p>
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal">

                        <label>Nombre Obra</label>
                        <input type="text" name="nombre_obra" onChange={handleChange} required ></input>


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
                    <Modal.Title>Editar Obra</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal">

                        <label>Nombre Obra</label>
                        <input type="text" name="nombre_obra" value={usuarioSeleccionado && usuarioSeleccionado.nombre_obra} onChange={handleChange} required ></input>

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

export default Obras;