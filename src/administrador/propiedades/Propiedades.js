import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './Propiedades.css';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootstrap from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import axios from 'axios';

import NavBar from '../navBar/NavBar';
import MenuIzquierdo from '../menu/MenuIzquierdo';
import MenuIzquierdoDesc from '../menuEscritorio/MenuIzquierdoDesc';
import Cookies from 'universal-cookie';


import Swal from 'sweetalert2';


const Propiedades = () => {

    const baseUrl = window.$baseUrl;
    const cookies = new Cookies();

    const [data, setData] = useState([]);
    const [tipoPago, setTipoPago] = useState([]);
    const [tipoInmueble, setTipoInmueble] = useState([]);
    const [tipoOferta, setTipoOferta] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [menu, setMenu] = useState(true);


    const peticionGet = async () => {
        await axios.get(baseUrl + "/api/todas/propiedades")
            .then(response => {
                setData(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/todos/tipo/pago")
            .then(response => {
                setTipoPago(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/todos/tipo/oferta")
            .then(response => {
                setTipoOferta(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/todos/tipo/inmueble")
            .then(response => {
                setTipoInmueble(response.data);
            }).catch(error => {
                console.log(error);
            })

        setCargando(true);
    }

    const [propiedadSeleccionado, setPropiedadSeleccionado] = useState({});

    const seleccionarPropiedad = (propiedad) => {
        setPropiedadSeleccionado(propiedad);
        modalEditar();
    }


    useEffect(() => {
        peticionGet();

    }, [])


    const columns = [
        { dataField: 'identificador_propiedad', text: 'ID', filter: textFilter(), sort: true },
        { dataField: 'nombre_propiedad', text: 'Nombre Propiedad', filter: textFilter(), sort: true },
        { dataField: 'precio_propiedad', text: 'Precio Propiedad', filter: textFilter(), sort: true },

        ,
        {
            dataField: 'df1',
            text: 'Acciones',
            formatter: (cellContent, row) => {
                return (
                    <div className="tabla-acciones">
                        <h5>
                            <Button onClick={() => seleccionarPropiedad(row)} title="Editar" variant="btn btn-secondary"><i className="far fa-edit"></i></Button>
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
    const modalInsertar = () => setAbrirModalInsertar(!abrirModalInsertar);

    const handleChange = e => {
        const { name, value } = e.target;
        setPropiedadSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }))

    }


    const peticionPost = async () => {

        await axios.post(baseUrl + "/api/propiedades", {

            nombre_propiedad: propiedadSeleccionado.nombre_propiedad,
            precio_propiedad: propiedadSeleccionado.precio_propiedad,
            ciudad_estado_pais_propiedad: propiedadSeleccionado.ciudad_estado_pais_propiedad,
            id_tipo_oferta: propiedadSeleccionado.id_tipo_oferta,
            id_tipo_inmueble: propiedadSeleccionado.id_tipo_inmueble,
            construccion_propiedad: propiedadSeleccionado.construccion_propiedad,
            terreno_propiedad: propiedadSeleccionado.terreno_propiedad,
            cantidad_recamaras_propiedad: propiedadSeleccionado.cantidad_recamaras_propiedad,
            cantidad_bano_propiedad: propiedadSeleccionado.cantidad_bano_propiedad,
            cantidad_garaje_propiedad: propiedadSeleccionado.cantidad_garaje_propiedad,
            colonia_propiedad: propiedadSeleccionado.colonia_propiedad,
            referencias_propiedad: propiedadSeleccionado.referencias_propiedad,
            descripcion_propiedad: propiedadSeleccionado.descripcion_propiedad,
            id_tipo_pago: propiedadSeleccionado.id_tipo_pago,
            mapa_propiedad: propiedadSeleccionado.mapa_propiedad

        }).then(response => {
            console.log(response);
            Swal.fire({
                position: 'top-end',
                background: '#353535',
                icon: 'success',
                title: '¡Propiedad publicada!',
                showConfirmButton: false,
                timer: 1500
            })

        }).catch(error => {
            console.log(error);
        })


        peticionGet();
        modalInsertar();
    }


    const peticionPut = async () => {

        await axios.put(baseUrl + "/api/propiedad/" + propiedadSeleccionado.id_propiedad, {
            id_propiedad: propiedadSeleccionado.id_propiedad,
            identificador_propiedad: propiedadSeleccionado.identificador_propiedad,
            nombre_propiedad: propiedadSeleccionado.nombre_propiedad,
            precio_propiedad: propiedadSeleccionado.precio_propiedad,
            ciudad_estado_pais_propiedad: propiedadSeleccionado.ciudad_estado_pais_propiedad,
            id_tipo_oferta: propiedadSeleccionado.id_tipo_oferta,
            id_tipo_inmueble: propiedadSeleccionado.id_tipo_inmueble,
            construccion_propiedad: propiedadSeleccionado.construccion_propiedad,
            terreno_propiedad: propiedadSeleccionado.terreno_propiedad,
            cantidad_recamaras_propiedad: propiedadSeleccionado.cantidad_recamaras_propiedad,
            cantidad_bano_propiedad: propiedadSeleccionado.cantidad_bano_propiedad,
            cantidad_garaje_propiedad: propiedadSeleccionado.cantidad_garaje_propiedad,
            colonia_propiedad: propiedadSeleccionado.colonia_propiedad,
            referencias_propiedad: propiedadSeleccionado.referencias_propiedad,
            descripcion_propiedad: propiedadSeleccionado.descripcion_propiedad,
            id_tipo_pago: propiedadSeleccionado.id_tipo_pago,
            mapa_propiedad: propiedadSeleccionado.mapa_propiedad

        })
            .then(response => {
              
                console.log(response);
                

                Swal.fire({
                    icon: 'success',
                    background: '#353535',
                    title: '¡Propiedad actualizada exitosamente!',
                    confirmButtonText: 'Aceptar',
                });

            })

            .catch(error => {
                console.log(error);
            });


            peticionGet();
            modalEditar();
    }


    const [abrirModalEditar, setAbrirModalEditar] = useState(false);
    const modalEditar = () => setAbrirModalEditar(!abrirModalEditar);


    const modalEliminar = (row) => {
        console.log(row);
        Swal.fire({
            title: `¿Estas segur@ de eliminar la propiedad con el ID: ${row.identificador_propiedad}?`,
            text: 'Una vez eliminada no se podrá recuperar la información',
            showCancelButton: true,
            background: '#353535',
            confirmButtonText: `Borrar`,
            cancelButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(baseUrl + "/api/propiedad/" + row.id_propiedad, {

                }).then(response => {

                    Swal.fire({

                        title: '¡La propiedad fue eliminada correctamente!',
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
                                    keyField="id_propiedad"
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
                        <p>Insertar propiedad</p>
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal">

                        <label>Nombre propiedad</label>
                        <input type="text" name="nombre_propiedad" onChange={handleChange} placeholder="Propiedad exclusiva en..." required ></input>

                        <label>Precio</label>
                        <input type="text" name="precio_propiedad" onChange={handleChange} placeholder="1,400,00 MXN" required ></input>

                        <label>Ciudad, Estado, País</label>
                        <input type="text" name="ciudad_estado_pais_propiedad" onChange={handleChange} placeholder="Mérida, Yucatán, México" required ></input>

                        <label>Tipo de oferta</label>
                        <select onChange={handleChange} required name="id_tipo_oferta">
                            <option value="" defaultValue>Seleccione una opción</option>
                            {tipoOferta.map(items =>
                                <option key={items.id_tipo_oferta} value={items.id_tipo_oferta}>{items.nombre_tipo_oferta}</option>
                            )}
                        </select>

                        <label>Tipo de inmueble</label>
                        <select onChange={handleChange} required name="id_tipo_inmueble">
                            <option value="" defaultValue>Seleccione una opción</option>
                            {tipoInmueble.map(items =>
                                <option key={items.id_tipo_inmueble} value={items.id_tipo_inmueble}>{items.nombre_tipo_inmueble}</option>
                            )}
                        </select>

                        <label>Tamaño propiedad</label>
                        <input type="text" name="construccion_propiedad" onChange={handleChange} placeholder="50 x 20" required ></input>

                        <label>Tamaño terreno</label>
                        <input type="text" name="terreno_propiedad" onChange={handleChange} placeholder="60 x 25" required ></input>

                        <label>Cantidad recámara(s)</label>
                        <input type="text" name="cantidad_recamaras_propiedad" onChange={handleChange} placeholder="2" ></input>

                        <label>Cantidad baño(s)</label>
                        <input type="text" name="cantidad_bano_propiedad" onChange={handleChange} placeholder="3" required ></input>

                        <label>Cantidad garaje</label>
                        <input type="text" name="cantidad_garaje_propiedad" onChange={handleChange} placeholder="1" required ></input>

                        <label>Colonia</label>
                        <input type="text" name="colonia_propiedad" onChange={handleChange} placeholder="Las américas" required ></input>

                        <label>Referencias</label>
                        <input type="text" name="referencias_propiedad" onChange={handleChange} placeholder="A 100 metros de..." required ></input>

                        <label>Descripcion de propiedad</label>
                        <input type="text" name="descripcion_propiedad" onChange={handleChange} placeholder="La propiedad cuenta con x baños..." required ></input>

                        <label>Opciones de pago</label>
                        <select onChange={handleChange} required name="id_tipo_pago">
                            <option value="" defaultValue>Seleccione una opción</option>
                            {tipoPago.map(items =>
                                <option key={items.id_tipo_pago} value={items.id_tipo_pago}>{items.nombre_tipo_pago}</option>
                            )}
                        </select>

                        <label>Mapa propiedad</label>
                        <input type="text" name="mapa_propiedad" onChange={handleChange} placeholder="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1107081372984!2d-89.57675355061079!3d20.988198894471555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5670cf18011f9f%3A0xc501d23123471d2f!2sCITRA%20S.A.%20DE%20C.V.!5e0!3m2!1ses-419!2smx!4v1614376632493!5m2!1ses-419!2smx" required ></input>

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
                    <Modal.Title>Editar Propiedad</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal">

                        <label>Identificador propiedad</label>
                        <input type="text" name="identificador_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.identificador_propiedad} required ></input>

                        <label>Nombre propiedad</label>
                        <input type="text" name="nombre_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.nombre_propiedad} placeholder="Propiedad exclusiva en..." required ></input>

                        <label>Precio</label>
                        <input type="text" name="precio_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.precio_propiedad} placeholder="1,400,00 MXN" required ></input>

                        <label>Ciudad, Estado, País</label>
                        <input type="text" name="ciudad_estado_pais_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.ciudad_estado_pais_propiedad} placeholder="Mérida, Yucatán, México" required ></input>

                        <label>Tipo de oferta</label>
                        <select onChange={handleChange}  required name="id_tipo_oferta" value={propiedadSeleccionado && propiedadSeleccionado.id_tipo_oferta}>
                            <option value="" defaultValue>Seleccione una opción</option>
                            {tipoOferta.map(items =>
                                <option key={items.id_tipo_oferta} value={items.id_tipo_oferta}>{items.nombre_tipo_oferta}</option>
                            )}
                        </select>

                        <label>Tipo de inmueble</label>
                        <select onChange={handleChange} required name="id_tipo_inmueble" value={propiedadSeleccionado && propiedadSeleccionado.id_tipo_inmueble}>
                            <option value="" defaultValue>Seleccione una opción</option>
                            {tipoInmueble.map(items =>
                                <option key={items.id_tipo_inmueble} value={items.id_tipo_inmueble}>{items.nombre_tipo_inmueble}</option>
                            )}
                        </select>

                        <label>Tamaño propiedad</label>
                        <input type="text" name="construccion_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.construccion_propiedad} placeholder="50 x 20" required ></input>

                        <label>Tamaño terreno</label>
                        <input type="text" name="terreno_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.terreno_propiedad} placeholder="60 x 25" required ></input>

                        <label>Cantidad recámara(s)</label>
                        <input type="text" name="cantidad_recamaras_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.cantidad_recamaras_propiedad} placeholder="2" ></input>

                        <label>Cantidad baño(s)</label>
                        <input type="text" name="cantidad_bano_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.cantidad_bano_propiedad} placeholder="3" required ></input>

                        <label>Cantidad garaje</label>
                        <input type="text" name="cantidad_garaje_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.cantidad_garaje_propiedad} placeholder="1" required ></input>

                        <label>Colonia</label>
                        <input type="text" name="colonia_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.colonia_propiedad} placeholder="Las américas" required ></input>

                        <label>Referencias</label>
                        <input type="text" name="referencias_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.referencias_propiedad} placeholder="A 100 metros de..." required ></input>

                        <label>Descripcion de propiedad</label>
                        <input type="text" name="descripcion_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.descripcion_propiedad} placeholder="La propiedad cuenta con x baños..." required ></input>

                        <label>Opciones de pago</label>
                        <select onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.id_tipo_pago} required name="id_tipo_pago">
                            <option value="" defaultValue>Seleccione una opción</option>
                            {tipoPago.map(items =>
                                <option key={items.id_tipo_pago} value={items.id_tipo_pago}>{items.nombre_tipo_pago}</option>
                            )}
                        </select>

                        <label>Mapa propiedad</label>
                        <input type="text" name="mapa_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.mapa_propiedad} placeholder="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1107081372984!2d-89.57675355061079!3d20.988198894471555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5670cf18011f9f%3A0xc501d23123471d2f!2sCITRA%20S.A.%20DE%20C.V.!5e0!3m2!1ses-419!2smx!4v1614376632493!5m2!1ses-419!2smx" required ></input>

                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={modalEditar}>
                        Cerrar
                         </Button>
                    <Button variant="primary" onClick={()=>peticionPut()}>
                        Guardar
                        </Button>
                </Modal.Footer>
            </Modal>


        </Fragment>
    )
}

export default Propiedades;