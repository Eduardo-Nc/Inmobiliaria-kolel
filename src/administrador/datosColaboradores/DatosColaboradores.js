import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './DatosColaboradores.css';

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



const DatosColaboradores = () => {

    const baseUrl = window.$baseUrl;
    const cookies = new Cookies();

    const [data, setData] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [menu, setMenu] = useState(true);


    const peticionGet = async () => {


        await axios.get(baseUrl + "/api/registro/colaboradores")
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log(error);
            })
            .then(() => {

            });



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
        { dataField: 'id_colaborador', text: 'ID', sort: true },
        { dataField: 'nombre_colaborador', text: 'Nombre', filter: textFilter(), sort: true },
        { dataField: 'correo_colaborador', text: 'Correo', filter: textFilter(), sort: true },

        ,
        {
            dataField: 'df2',
            text: 'Acciones',
            formatter: (cellContent, row) => {
                return (
                    <div className="tabla-acciones">
                        <h5>
                            <Button onClick={() => seleccionarUsuario(row)} title="Visualizar" variant="btn btn-warning"><i style={{ color: 'white' }} className="fas fa-eye"></i></Button>
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




    const peticionPut = async () => {

        await axios.put(baseUrl + "/api/colaboradores/" + usuarioSeleccionado.id_colaborador, {

            nombre_colaborador: usuarioSeleccionado.nombre_colaborador,
            correo_colaborador: usuarioSeleccionado.correo_colaborador,
            numero_colaborador: usuarioSeleccionado.numero_colaborador,
            tipo_colaborador: usuarioSeleccionado.tipo_colaborador,
            estado_colaborador: usuarioSeleccionado.estado_colaborador,
            municipio_colaborador: usuarioSeleccionado.municipio_colaborador,
            direccionestado_colaborador: usuarioSeleccionado.direccionestado_colaborador,
            contrasena_colaborador: usuarioSeleccionado.contrasena_colaborador

        })
            .then(response => {

                console.log(response);


                Swal.fire({
                    icon: 'success',
                    background: '#353535',
                    title: '¡Colaborador actualizado exitosamente!',
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
            title: `¿Estas segur@ de eliminar a:\n  ${row.nombre_colaborador}?`,
            showCancelButton: true,
            background: '#353535',
            confirmButtonText: `Borrar`,
            cancelButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(baseUrl + "/api/colaborador/" + row.id_colaborador, {

                }).then(response => {

                    Swal.fire({

                        title: '¡El colaborador fue eliminado correctamente!',
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



            <Modal show={abrirModalEditar} onHide={modalEditar}>
                <Modal.Header closeButton>
                    <Modal.Title>Colaborador</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal">

                        <label>Nombre colaborador</label>
                        <input type="text" name="nombre_colaborador" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.nombre_colaborador} required ></input>

                        <label>Correo electrónico</label>
                        <input type="email" name="correo_colaborador" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.correo_colaborador} required ></input>

                        <label>Número colaborador</label>
                        <input type="text" name="numero_colaborador" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.numero_colaborador} required ></input>

                        <label>Tipo colaborador</label>
                        <input type="text" name="tipo_colaborador" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.tipo_colaborador} required ></input>

                        <label>Estado colaborador</label>
                        <input type="text" name="estado_colaborador" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.estado_colaborador} required ></input>

                        <label>Municipio colaborador</label>
                        <input type="text" name="municipio_colaborador" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.municipio_colaborador} required ></input>

                        <label>Dirección colaborador</label>
                        <input type="text" name="direccionestado_colaborador" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.direccionestado_colaborador} required ></input>

                        <label>Contraseña colaborador</label>
                        <input type="text" name="contrasena_colaborador" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.contrasena_colaborador} required ></input>

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

export default DatosColaboradores;