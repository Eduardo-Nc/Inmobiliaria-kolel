import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './Usuarios.css';

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



const Usuarios = () => {

    const baseUrl = window.$baseUrl;
    const cookies = new Cookies();

    const [data, setData] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [menu, setMenu] = useState(true);


    const peticionGet = async () => {
        await axios.get(baseUrl + "/api/todos/usuario")
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
        { dataField: 'id_usuario', text: 'ID', sort: true },
        { dataField: 'nombre_completo_usuario', text: 'Nombre', filter: textFilter(), sort: true },
        { dataField: 'correo_usuario', text: 'Correo', filter: textFilter(), sort: true },

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
    const modalInsertar = () =>{
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

        if (!usuarioSeleccionado.nombre_completo_usuario) {
            Swal.fire({
                title: '¡Agrega un nombre al usuario!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }else if (!usuarioSeleccionado.correo_usuario){
            Swal.fire({
                title: '¡Agrega un correo al usuario!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }

        let caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
        let GenerarContrasena = "";
        for (let i = 0; i < 20; i++) GenerarContrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));

        await axios.post(baseUrl + "/api/usuarios", {

            nombre_completo_usuario: usuarioSeleccionado.nombre_completo_usuario,
            correo_usuario: usuarioSeleccionado.correo_usuario,
            contrasena_usuario: GenerarContrasena,

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

            enviarCredencialesUsuarios(GenerarContrasena);
            peticionGet();
            modalInsertar();

        }).catch(error => {
            console.log(error);
        })


    }

    const enviarCredencialesUsuarios = (GenerarContrasena) => {

        axios.post(baseUrl + '/api/usuarios/enviarcredenciales', {
            nombre: usuarioSeleccionado.nombre_completo_usuario,
            email: usuarioSeleccionado.correo_usuario,
            password: GenerarContrasena
        }).then(response => {

        }).catch(e => {
            console.log(e);
        });

    }


    const peticionPut = async () => {

        await axios.put(baseUrl + "/api/usuarios/" + usuarioSeleccionado.id_usuario, {

            nombre_completo_usuario: usuarioSeleccionado.nombre_completo_usuario,
            correo_usuario: usuarioSeleccionado.correo_usuario,

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
        console.log(row);
        Swal.fire({
            title: `¿Estas segur@ de eliminar a:\n  ${row.nombre_completo_usuario}?`,
            showCancelButton: true,
            background: '#353535',
            confirmButtonText: `Borrar`,
            cancelButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(baseUrl + "/api/usuarios/" + row.id_usuario, {

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
                                <BootstrapTable hover={true} className="tabla"
                                    keyField="id_usuario"
                                    data={data}

                                    columns={columns}
                                    filter={filterFactory()}
                                    pagination={paginationFactory({

                                        sizePerPageList: [{
                                            text: '4', value: 4
                                        }, {
                                            text: '8', value: 8
                                        }, {
                                            text: '15', value: 15
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
                        <p>Agregar usuario</p>
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal">

                        <label>Nombre usuario</label>
                        <input type="text" name="nombre_completo_usuario" onChange={handleChange} required ></input>

                        <label>Correo electrónico</label>
                        <input type="email" name="correo_usuario" onChange={handleChange} required ></input>


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

                        <label>Nombre usuario</label>
                        <input type="text" name="nombre_completo_usuario" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.nombre_completo_usuario} required ></input>

                        <label>Correo electrónico</label>
                        <input type="email" name="correo_usuario" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.correo_usuario} required ></input>

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

export default Usuarios;