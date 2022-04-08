import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import RichTextEditor from './RichTextEditor';
import './Blogs.css';

import Pdf from '../../imagenes/pdf.png';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootstrap from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

// 
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import moment from 'moment';


import axios from 'axios';

import NavBar from '../navBar/NavBar';
import MenuIzquierdo from '../menu/MenuIzquierdo';
import MenuIzquierdoDesc from '../menuEscritorio/MenuIzquierdoDesc';
import Cookies from 'universal-cookie';

import ReactExport from "react-export-excel";



import Swal from 'sweetalert2';


const Blogs = () => {


    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

    const baseUrl = window.$baseUrl;
    const nubeUrl = window.$nubeUrl;
    const cookies = new Cookies();

    const [data, setData] = useState([]);
    const [tipoPago, setTipoPago] = useState([]);
    const [tipoInmueble, setTipoInmueble] = useState([]);
    const [tipoOferta, setTipoOferta] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [menu, setMenu] = useState(true);


    // console.log(data)

    const [enviado, setEnviado] = useState(true);


    const peticionGet = async () => {
        await axios.get(baseUrl + "/api/todos/blogs")
            .then(response => {
                setData(response.data);
            }).catch(error => {
                console.log(error);
            })

        setCargando(true);
    }

    const [propiedadSeleccionado, setPropiedadSeleccionado] = useState({});
    const [folleto, setFolleto] = useState([]);
    const [fotos, setFotos] = useState([]);

    const seleccionarPropiedad = async (propiedad) => {
        setPropiedadSeleccionado(propiedad);
        modalEditar();
    }


    useEffect(() => {
        peticionGet();
    }, [])


    const columns = [
        { dataField: 'id_blog', text: 'ID', sort: true },
        {
            dataField: 'caratula',
            text: 'Caratula Blog',
            formatter: (cellContent, row) => {
                return (
                    <div>
                        <img alt="img propiedad" width="150px" src={nubeUrl + row.caratula + ".jpg"} />
                    </div>


                );
            }
        },
        {
            dataField: 'titulo', text: 'Titulo', filter: textFilter(), sort: true, formatter: (cellContent, row) => {
                return (
                    <div style={{ overflow: 'hidden', display: 'flex', flexFlow: 'row wrap', width: '180px', height: 'auto' }}>
                        <p style={{ textOverflow: 'ellipsis' }}>{row.titulo}</p>
                    </div>
                );
            }
        },
        {
            dataField: 'descripcion', text: 'Descripción', filter: textFilter(), sort: true, formatter: (cellContent, row) => {
                return (
                    <div style={{ overflowX: 'scroll', overflowY: 'hidden', display: 'flex', flexFlow: 'row wrap', width: '170px', maxHeight: '180px' }}>
                        <p style={{ textAlign: 'justify' }}>{row.descripcion}</p>
                    </div>
                );
            }
        },
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
    const modalInsertar = () => {
        setAbrirModalInsertar(!abrirModalInsertar);
        setPropiedadSeleccionado({});
        setFile([])
        CaratulaImg({ caratula: null, folleto: null })
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setPropiedadSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }))

    }

    const handleChangeEditor = (event, editor) => {
        const data = editor.getData();

        // console.log(data);

        setPropiedadSeleccionado((prevState) => ({
            ...prevState,
            content: data
        }))

    }


    console.log(propiedadSeleccionado)
    // console.log(moment().format()

    const [file, setFile] = useState([])

    const selectedHandler = e => {
        if (e.target.files.length !== 0) {

            let galeria = file.length > 0 ? file : [];

            for (let i = 0; i < e.target.files.length; i++) {
                galeria.push(e.target.files[i]);
            }

            setFile({
                ...file,
                galeria
            });
        }

    }


    const [caratulaImg, CaratulaImg] = useState({ caratula: null, folleto: null })

    const selectedFile = e => {

        if (e.target.files.length !== 0) {
            CaratulaImg({
                ...caratulaImg,
                caratula: e.target.files[0]
            })
        }
    }



    const peticionPost = () => {

        if (caratulaImg.caratula === null) {
            Swal.fire({
                title: '¡Agrega una imagen de caratula al blog!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }
        else
            if (!propiedadSeleccionado.titulo) {
                Swal.fire({
                    title: '¡Agrega un titulo al blog!',
                    background: '#353535',
                    icon: 'warning',
                    confirmButtonText: `Aceptar`,
                })
                return
            } else if (!propiedadSeleccionado.descripcion) {
                Swal.fire({
                    title: '¡Agrega una descripción al blog!',
                    background: '#353535',
                    icon: 'warning',
                    confirmButtonText: `Aceptar`,
                })
                return
            } else if (!propiedadSeleccionado.content) {
                Swal.fire({
                    title: '¡Agrega el contenido al blog!',
                    background: '#353535',
                    icon: 'warning',
                    confirmButtonText: `Aceptar`,
                })
                return
            }


        const formdata = new FormData()

        if (caratulaImg && caratulaImg.caratula) {
            formdata.append('caratula', caratulaImg.caratula);
        }

        formdata.append('titulo', propiedadSeleccionado.titulo);
        formdata.append('content', propiedadSeleccionado.content);
        formdata.append('descripcion', propiedadSeleccionado.descripcion);


        setEnviado(false)

        axios.post(baseUrl + '/api/blog/save', formdata, {

        }).then(response => {

            setTimeout(() => {
                Swal.fire({
                    position: 'top-end',
                    background: '#353535',
                    icon: 'success',
                    title: '¡Blog publicado!',
                    showConfirmButton: true,
                    confirmButtonText: 'Aceptar',
                }).then((result) => {
                    setEnviado(true);
                    if (result.isConfirmed) {
                        peticionGet()
                    }
                })
                peticionGet();
                setEnviado(true);
                modalInsertar();
                peticionGet();
            }, 4000)



        }).catch(error => {
            console.log(error);
        })


    }

    // console.log(file)

    const peticionPut = async () => {

        setEnviado(true)
        const formdata = new FormData()


        if (caratulaImg.caratula) {
            formdata.append('caratula', caratulaImg.caratula);
        } else {
            formdata.append('caratula', propiedadSeleccionado.caratula);
        }


        formdata.append('titulo', propiedadSeleccionado.titulo);
        formdata.append('content', propiedadSeleccionado.content);
        formdata.append('descripcion', propiedadSeleccionado.descripcion);

        setEnviado(false)

        await axios.put(baseUrl + "/api/blog/" + propiedadSeleccionado.id_blog + "/" + propiedadSeleccionado.caratula, formdata, {

        }).then(response => {

            setTimeout(() => {
                Swal.fire({
                    position: 'top-end',
                    background: '#353535',
                    icon: 'success',
                    title: '¡Blog actualizado!',
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



        })

            .catch(error => {
                setEnviado(true)
                console.log(error);
            });


    }




    const [abrirModalEditar, setAbrirModalEditar] = useState(false);
    const modalEditar = () => {
        setAbrirModalEditar(!abrirModalEditar);
        setCambiarImagen(false);


        if (abrirModalEditar === true) {
            setFile([])
            setFolleto([])
            CaratulaImg({ caratula: null, folleto: null })
            setFolleto([])
            setFotos([])
        }
    }


    const modalEliminar = (row) => {

        Swal.fire({
            title: `¿Estas segur@ de eliminar el blog con el ID: ${row.id_blog}?`,
            showCancelButton: true,
            background: '#353535',
            confirmButtonText: `Borrar`,
            cancelButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(baseUrl + "/api/blog/" + row.id_blog + "/" + row.caratula, {

                }).then(response => {

                    peticionGet();

                    Swal.fire({

                        title: '¡Blog fue eliminado correctamente!',
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



    // const [value, setValue] = useState("");
    const getValue = (value) => {
        // setValue(value);
        setPropiedadSeleccionado((prevState) => ({
            ...prevState,
            content: value
        }))
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
                                    <ExcelSheet data={data} name="Blogs">
                                        <ExcelColumn label="#" value="id_blog" />
                                        {/* <ExcelColumn label="" value="caratula" /> */}
                                        <ExcelColumn label="Caratula"
                                            value={(col) => nubeUrl + col.caratula + ".jpg"} />
                                        <ExcelColumn label="Titulo" value="titulo" />
                                        <ExcelColumn label="Descripción" value="descripcion" />
                                    </ExcelSheet>

                                </ExcelFile>

                                <BootstrapTable hover={true} className="tabla"
                                    keyField="id_propiedad"
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

            <Modal show={abrirModalInsertar} size="lg" onHide={modalInsertar}>
                <Modal.Header closeButton>

                    <div className="titulo-modal">
                        <p>Agregar Blog</p>
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal" encType="multipart/form-data" style={{ overflow: 'hidden' }} >

                        <label>Caratula / Imagen principal</label>

                        <div className="cont-caratula-folleto">
                            <label style={{ marginLeft: '3px', marginRight: '3px', width: '180px', height: '180px', backgroundColor: '#d7d7d7' }} className="filelabel">
                                {
                                    caratulaImg.caratula ? <img src={URL.createObjectURL(caratulaImg.caratula)} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt="Caratula" />
                                        :
                                        <Fragment >
                                            <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                                <i className="far fa-file-image" >
                                                </i>
                                                <span className="title">
                                                    Caratula
                                                </span>
                                            </div>

                                        </Fragment>
                                }
                                <input className="FileUpload1" onChange={selectedFile} name="caratula" type="file" accept="image/jpeg, image/png" />
                            </label>
                        </div>


                        <label>Titulo</label>
                        <input type="text" autoComplete="off" name="titulo" onChange={handleChange} placeholder="Escribe el titulo del blog" required ></input>

                        <label style={{ marginTop: '10px' }}>Descripción Breve</label>
                        <textarea autoComplete="off" name="descripcion" onChange={handleChange} placeholder="Escribe una breve descripcón del blog" required rows="4" ></textarea>


                        <label style={{ marginTop: '10px' }}>Contenido</label>
                        {/* <CKEditor
                            editor={ClassicEditor}
                            config={{
                                ckfinder: {
                                    uploadUrl: baseUrl + "/api/uplods"
                                }
                            }}
                            onInit={editor => {

                            }}
                            onChange={handleChangeEditor}
                        /> */}

                        <RichTextEditor initialValue="" getValue={getValue} />

                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={modalInsertar}>
                        Cerrar
                    </Button>
                    {enviado ?
                        <Button variant="primary" onClick={() => peticionPost()}>
                            Guardar
                        </Button>
                        :
                        <div className="spinner"></div>
                    }
                </Modal.Footer>
            </Modal>

            {/* {console.log(propiedadSeleccionado)} */}

            <Modal show={abrirModalEditar} size="lg" onHide={modalEditar}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Editar Propiedad</Modal.Title> */}
                    <div className="titulo-modal">
                        <p>Editar Blog</p>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal" encType="multipart/form-data" style={{ overflow: 'hidden' }}>


                        <label>Caratula / Imagen principal</label>

                        <div className="cont-caratula-folleto">
                            <label style={{ marginLeft: '3px', marginRight: '3px', width: '180px', height: '180px', backgroundColor: '#d7d7d7' }} className="filelabel">
                                {
                                    caratulaImg.caratula || propiedadSeleccionado ? <img src={caratulaImg.caratula ? URL.createObjectURL(caratulaImg.caratula) : nubeUrl + propiedadSeleccionado.caratula + ".jpg"} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt="Caratula" />
                                        :
                                        <Fragment >
                                            <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                                <i className="far fa-file-image" >
                                                </i>
                                                <span className="title">
                                                    Caratula
                                                </span>
                                            </div>

                                        </Fragment>
                                }
                                <input className="FileUpload1" onChange={selectedFile} name="caratula" type="file" accept="image/jpeg, image/png" />
                            </label>

                        </div>


                        <label>Titulo</label>
                        <input type="text" autoComplete="off" name="titulo" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.titulo} placeholder="Escribe el titulo del blog" required ></input>

                        <label style={{ marginTop: '10px' }}>Descripción Breve</label>
                        <textarea autoComplete="off" name="descripcion" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.descripcion} placeholder="Escribe una breve descripcón del blog" required rows="4" ></textarea>


                        <label style={{ marginTop: '10px' }}>Contenido</label>
                        {/* <CKEditor
                            editor={ClassicEditor}
                            config={{
                                ckfinder: {
                                    uploadUrl: baseUrl + "/api/uplods"
                                }
                            }}
                            onInit={editor => {

                            }}
                            data={propiedadSeleccionado && propiedadSeleccionado.content}
                            onChange={handleChangeEditor}
                        /> */}

                        <RichTextEditor initialValue={propiedadSeleccionado && propiedadSeleccionado.content} getValue={getValue} />
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
                        <div className="spinner"></div>
                    }
                </Modal.Footer>
            </Modal>

        </Fragment>
    )
}

export default Blogs;