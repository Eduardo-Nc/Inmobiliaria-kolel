import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './Desarrollos.css';

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


const Desarrollos = () => {

    const baseUrl = window.$baseUrl;
    const nubeUrl = window.$nubeUrl;
    const cookies = new Cookies();

    const [data, setData] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [menu, setMenu] = useState(true);


    const [enviado, setEnviado] = useState(true);


    const peticionGet = async () => {
        await axios.get(baseUrl + "/api/obtener/desarrollos")
            .then(response => {
                setData(response.data);
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
        { dataField: 'nombre_desarrollo', text: 'Nombre', filter: textFilter(), sort: true },
        {
            dataField: 'brochure',
            text: 'Brochure',
            formatter: (cellContent, row) => {
                return (
                    <div>
                        <iframe src={nubeUrl + row.brochure} width="90%" height="140px"></iframe>
                    </div>


                );
            }
        }, {
            dataField: 'master_plan',
            text: 'Master plan',
            formatter: (cellContent, row) => {
                return (
                    <div>
                        <iframe src={nubeUrl + row.master_plan} width="90%" height="140px"></iframe>
                    </div>


                );
            }
        },
        // {
        //     dataField: 'lista_disponibilidad',
        //     text: 'Disponibilidad',
        //     formatter: (cellContent, row) => {
        //         return (
        //             <div>
        //                 <iframe src={nubeUrl + row.lista_disponibilidad} width="90%" height="140px"></iframe>
        //             </div>


        //         );
        //     }
        // },
        {
            dataField: 'id_desarrollo',
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
    const modalInsertar = () => {
        setAbrirModalInsertar(!abrirModalInsertar);
        setPropiedadSeleccionado({});
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setPropiedadSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }))

    }

    const [file, setFile] = useState(null)

    const selectedHandler = e => {
        setFile(e.target.files)
    }




    const peticionPost = async () => {

        if (!file === false) {

            if (file.length < 3) {
                Swal.fire({
                    title: `En total debes subir 3 archivos, 2 PDFs y una imagen en PNG o JPG`,
                    icon: 'warning',
                    confirmButtonText: `Aceptar`,
                })
                return
            }

            if (file[0].size > 9672158) {
                Swal.fire({
                    title: `El tamaño del ${file[0].name} no debe ser mayor a los 10 MB`,
                    html:
                        '<a href="https://www.ilovepdf.com/es/comprimir_pdf" target="_blank" >Baja la calidad aquí</a> <br></br> <a href="https://res.cloudinary.com/hpk4vuwdm/image/upload/v1619813786/img_tt2ukb.jpg" target="_blank" >Ver pasos aquí</a> <br></br> Y cargue nuevamente los archivos.',
                    background: '#353535',
                    icon: 'warning',
                    confirmButtonText: `Aceptar`,
                })
                return
            } else if (file[1].size > 9672158) {
                Swal.fire({
                    title: `El tamaño del ${file[1].name} no debe ser mayor a los 10 MB`,
                    html:
                        '<a href="https://www.ilovepdf.com/es/comprimir_pdf" target="_blank" >Baja la calidad aquí</a> <br></br> Y cargue nuevamente los archivos',
                    background: '#353535',
                    icon: 'warning',
                    confirmButtonText: `Aceptar`,
                })
                return
            } if (file[2].size > 9672158) {
                Swal.fire({
                    title: `El tamaño del ${file[2].name} no debe ser mayor a los 10 MB`,
                    html:
                        '<a href="https://www.ilovepdf.com/es/comprimir_pdf" target="_blank" >Baja la calidad aquí</a> <br></br> Y cargue nuevamente los archivos',
                    background: '#353535',
                    icon: 'warning',
                    confirmButtonText: `Aceptar`,
                })
                return
            }


        } else if (!file) {
            Swal.fire({
                title: '¡Selecciona el brochure y master plan en formato PDF al igual que el logo en formato PNG o JPG!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!propiedadSeleccionado.nombre_desarrollo) {
            Swal.fire({
                title: '¡Agrega un nombre al desarrollo!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }


        const formdata = new FormData()


        for (let i = 0; i < file.length; i++) {
            formdata.append('archivos_pdf', file[i]);
        }

        formdata.append('nombre_desarrollo', propiedadSeleccionado.nombre_desarrollo);


        setEnviado(false)

        try {
            await axios.post(baseUrl + '/api/desarrollo', formdata, {


            }).then(response => {


                setTimeout(() => {
                    Swal.fire({
                        position: 'top-end',
                        background: '#353535',
                        icon: 'success',
                        title: '¡PDFs publicados!',
                        text: 'Puede que tarde unos minutos en reflejarse los PDF',
                        showConfirmButton: true,
                        confirmButtonText: 'Aceptar',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            peticionGet()
                        }
                    })
                    peticionGet();
                    setEnviado(true);
                    modalInsertar();
                    peticionGet();
                }, 10000)


                peticionGet();

            })
        } catch (error) {
            console.log(error)
        }
    }



    const peticionPut = async () => {

        if (file.length < 4) {
            Swal.fire({
                title: `En total debes subir 3 archivos, 2 PDFs y una imagen en PNG o JPG`,
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }

        if (!file) {
            Swal.fire({
                title: '¡Selecciona el brochure y master plan en formato PDF al igual que el logo en formato PNG o JPG!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!propiedadSeleccionado.nombre_desarrollo) {
            Swal.fire({
                title: '¡Agrega un nombre al desarrollo!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }


        setEnviado(true)
        const formdata = new FormData()

        formdata.append('nombre_desarrollo', propiedadSeleccionado.nombre_desarrollo);

        for (let i = 0; i < file.length; i++) {
            formdata.append('archivos_pdf', file[i]);
        }


        setEnviado(false)

        await axios.put(baseUrl + "/api/desarrollo/" + propiedadSeleccionado.id_desarrollo, formdata, {

        }).then(response => {

            setTimeout(() => {
                Swal.fire({
                    position: 'top-end',
                    background: '#353535',
                    icon: 'success',
                    title: '¡Desarrollo actualizado!',
                    showConfirmButton: true,
                    confirmButtonText: 'Aceptar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        peticionGet()
                    }
                })

                peticionGet();
                setEnviado(true)
                modalEditar();
                peticionGet();
            }, 4000)


            peticionGet();
        })

            .catch(error => {
                console.log(error);
            });

    }




    const [abrirModalEditar, setAbrirModalEditar] = useState(false);
    const modalEditar = () => {
        setAbrirModalEditar(!abrirModalEditar);
        setCambiarImagen(false);

    }


    const modalEliminar = (row) => {

        Swal.fire({
            title: `¿Estas segur@ de eliminar el desarrollo:  ${row.nombre_desarrollo}?`,
            showCancelButton: true,
            background: '#353535',
            confirmButtonText: `Borrar`,
            cancelButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(baseUrl + "/api/desarrollo/" + row.id_desarrollo, {

                }).then(response => {

                    peticionGet();

                    Swal.fire({

                        title: '¡El desarrollo fue eliminado correctamente!',
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

        peticionGet();
    }

    const [cambiarImagen, setCambiarImagen] = useState(false);

    const cambiarCaratula = () => {
        setCambiarImagen(!cambiarImagen);
    }







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
                                    keyField="id_desarrollo"
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
                        <p>Agregar desarrollo(PDFs)</p>
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal" encType="multipart/form-data" >

                        <label>Nombre desarrollo</label>
                        <input type="text" autoComplete="off" name="nombre_desarrollo" onChange={handleChange} required ></input>

                        <label>PDFs</label>
                        <div className="alert alert-info" role="alert">
                            <strong>Nota:</strong><strong> Cada archivo debe pesar maximo de 10MB</strong> y deben llamarse: <strong>logo.jpg o logo.png</strong>, <strong>brochure.pdf</strong>, <strong>masterplan.pdf</strong> y <strong>disponibilidad.pdf</strong>, <a target="_blank" href="https://res.cloudinary.com/hwvbw3vrx/image/upload/v1623810872/ejemplo_l2eozq.jpg">ver ejemplo</a>
                        </div>
                        <input onChange={selectedHandler} name="archivos_pdf" multiple type="file" accept="image/jpeg, image/png, application/pdf" />

                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={modalInsertar}>
                        Cerrar
                    </Button>
                    {enviado ?
                        <Button variant="primary" onClick={() => peticionPost()}>
                            Guardar
                        </Button> :
                        <div className="precarga"></div>
                    }
                </Modal.Footer>
            </Modal>




            <Modal show={abrirModalEditar} onHide={modalEditar}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar desarrollo(PDFs)</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal" encType="multipart/form-data" >

                        <label>Nombre desarrollo</label>
                        <input type="text" name="nombre_desarrollo" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.nombre_desarrollo} required ></input>

                        <label>PDFs</label>
                        <div className="alert alert-info" role="alert">
                            <strong>Nota:</strong> No es posible actualizar solo un archivo, deberá subir los 3 archivos: <strong>logo.jpg o logo.png</strong>, <strong>brochure.pdf</strong>, <strong>masterplan.pdf</strong>, <a target="_blank" href="https://res.cloudinary.com/hwvbw3vrx/image/upload/v1623810872/ejemplo_l2eozq.jpg">ver ejemplo</a> <br></br> <strong>Recuerde que cada archivo no debe superar los 10MB.</strong>
                        </div>


                        <input onChange={selectedHandler} name="archivos_pdf" multiple type="file" accept="image/jpeg, image/png, application/pdf" />



                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={modalEditar}>
                        Cerrar
                    </Button>
                    {enviado ?
                        <Button variant="primary" onClick={() => peticionPut()}>
                            Guardar
                        </Button> :
                        <div className="precarga"></div>
                    }
                </Modal.Footer>
            </Modal>


        </Fragment>
    )
}

export default Desarrollos;