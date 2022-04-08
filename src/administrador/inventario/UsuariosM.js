import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './UsuariosM.css';

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

const UsuariosM = () => {

    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

    const baseUrl = window.$baseUrl;
    const cookies = new Cookies();

    const [data, setData] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [menu, setMenu] = useState(true);


    const peticionGet = async () => {
        await axios.get(baseUrl + "/api/todos/usermateriales")
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
        { dataField: 'id_usuario_materiales', text: 'ID', sort: true },
        { dataField: 'nombres', text: 'Nombre(s)', filter: textFilter(), sort: true },
        { dataField: 'apellidos', text: 'Apellidos', filter: textFilter(), sort: true },
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

        if (!usuarioSeleccionado.nombres) {
            Swal.fire({
                title: '¡Agrega un nombre al usuario!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!usuarioSeleccionado.apellidos) {
            Swal.fire({
                title: '¡Agrega apellidos al usuario!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }

        await axios.post(baseUrl + "/api/usermateriales", {

            nombres: usuarioSeleccionado.nombres,
            apellidos: usuarioSeleccionado.apellidos,

        }).then(response => {
            console.log(response);
            Swal.fire({
                position: 'top-end',
                background: '#353535',
                icon: 'success',
                title: '¡Usuario agregado!',
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

        await axios.put(baseUrl + "/api/usermateriales/" + usuarioSeleccionado.id_usuario_materiales, {

            nombres: usuarioSeleccionado.nombres,
            apellidos: usuarioSeleccionado.apellidos,
        })
            .then(response => {

                console.log(response);

                Swal.fire({
                    icon: 'success',
                    background: '#353535',
                    title: '¡Usuario actualizado exitosamente!',
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
            title: `¿Estas segur@ de eliminar el usuario:\n  ${row.nombres} ${row.apellidos}?`,
            showCancelButton: true,
            background: '#353535',
            confirmButtonText: `Borrar`,
            cancelButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(baseUrl + "/api/usermateriales/" + row.id_usuario_materiales, {

                }).then(response => {

                    Swal.fire({

                        title: '¡El usuario fue eliminado correctamente!',
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
                                    <ExcelSheet data={data} name="Usuarios">
                                        <ExcelColumn label="#" value="id_usuario_materiales" />
                                        <ExcelColumn label="Nombre(s)" value="nombres" />
                                        <ExcelColumn label="Apellidos" value="apellidos" />
                                    </ExcelSheet>

                                </ExcelFile>

                                <BootstrapTable hover={true} className="tabla"
                                    keyField="id_usuario_materiales"
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
                        <p>Agregar Usuario</p>
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal">

                        <label>Nombre Usuario</label>
                        <input type="text" name="nombres" onChange={handleChange} required ></input>

                        <label>Apellidos Usuario</label>
                        <input type="text" name="apellidos" onChange={handleChange} required ></input>
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
                    <Modal.Title>Editar Usuario</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal">

                        <label>Nombre Usuario</label>
                        <input type="text" name="nombres" value={usuarioSeleccionado && usuarioSeleccionado.nombres} onChange={handleChange} required ></input>

                        <label>Apellidos Usuario</label>
                        <input type="text" name="apellidos" value={usuarioSeleccionado && usuarioSeleccionado.apellidos} onChange={handleChange} required ></input>


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

export default UsuariosM;