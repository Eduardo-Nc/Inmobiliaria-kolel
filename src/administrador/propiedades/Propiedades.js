import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './Propiedades.css';

import Pdf from '../../imagenes/pdf.png';

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

import ReactExport from "react-export-excel";



import Swal from 'sweetalert2';


const Propiedades = () => {


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
    const [folleto, setFolleto] = useState([]);
    const [fotos, setFotos] = useState([]);
    const [planoCatastralSeleccionado, setPlanoCatastralSeleccionado] = useState(null);

    const seleccionarPropiedad = async (propiedad) => {


        await axios.get(baseUrl + "/api/imagenes/propiedades/" + propiedad.caratula_propiedad)
            .then(response => {

                setFotos(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/obtener/folleto/" + propiedad.caratula_propiedad)
            .then(response => {
                setFolleto(response.data);
                // console.log(response.data)
            }).catch(error => {
                console.log(error);
            })


        await axios.get(baseUrl + "/api/obtener/plano/" + propiedad.caratula_propiedad)
            .then(response => {
                setPlanoCatastralSeleccionado(response.data === "" ? null : response.data);
                console.log("LINEA 111", response.data)
            }).catch(error => {
                console.log(error);
            })


        setPropiedadSeleccionado(propiedad);
        modalEditar();
    }


    useEffect(() => {
        peticionGet();

    }, [])

    const selectImagMapaCatastralEdit = (e) => {

        if (e.target.files.length !== 0) {
            const { name } = e.target.files[0]
            console.log("name", name.slice(-3))
            setTipoPlano(name.slice(-3))
            if (name.slice(0, -4).toLowerCase() !== "plano") {
                Swal.fire({
                    title: '¡Advertencia!',
                    html: `<p style="color:white;">Para cargar el archivo en la sección "Plano Catastral" es necesario renombrar el archivo a: <strong>"plano"</strong>, actualmente tiene el nombre de: <strong>"${name}"</strong></p>`,
                    background: '#353535',
                    icon: 'warning',
                    confirmButtonText: `Aceptar`,
                })
                return
            } else {
                if (name.slice(0, -4).toLowerCase() === "plano") {
                    setPlanoCatastralSeleccionado(e.target.files[0])
                }
            }
        }
    }

    const columns = [
        {
            dataField: 'caratula_propiedad',
            text: 'Imagen Propiedad',
            formatter: (cellContent, row) => {
                return (
                    <div>
                        <img alt="img propiedad" width="150px" src={nubeUrl + row.caratula_propiedad + ".jpg"} />
                    </div>


                );
            }
        },
        { dataField: 'identificador_propiedad', text: 'ID', filter: textFilter(), sort: true },
        { dataField: 'nombre_propiedad', text: 'Nombre Propiedad', filter: textFilter(), sort: true },
        {
            dataField: 'precio_propiedad',
            text: 'Precio Propiedad',
            formatter: (cellContent, row) => {
                return (
                    <div>
                        {Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(row.precio_propiedad) + " MXN"}
                    </div>


                );
            }
            , filter: textFilter(), sort: true
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

            if (e.target.name === "caratula") {

                let nombre = e.target.files[0].name.split('.')[0];

                if (nombre.toLowerCase() !== "caratula") {
                    Swal.fire({
                        title: '¡Advertencia!',
                        html: `<p style="color:white;">Para cargar la imagen es necesario renombrar el archivo a: <strong>"caratula"</strong>, actualmente tiene el nombre de: <strong>"${nombre}"</strong></p>`,
                        background: '#353535',
                        icon: 'warning',
                        confirmButtonText: `Aceptar`,
                    })
                    return
                } else {
                    CaratulaImg({
                        ...caratulaImg,
                        caratula: e.target.files[0]
                    })
                }
            } else {
                CaratulaImg({
                    ...caratulaImg,
                    folleto: e.target.files[0]
                })
            }


        }
    }

    const [mapaCatastral, setMapaCatastral] = useState({})
    const [tipoPlano, setTipoPlano] = useState("")

    const selectImagMapaCatastral = (e) => {

        if (e.target.files.length !== 0) {
            const { name } = e.target.files[0]
            console.log("name", name.slice(-3))
            setTipoPlano(name.slice(-3))
            if (name.slice(0, -4).toLowerCase() !== "plano") {
                Swal.fire({
                    title: '¡Advertencia!',
                    html: `<p style="color:white;">Para cargar el archivo en la sección "Plano Catastral" es necesario renombrar el archivo a: <strong>"plano"</strong>, actualmente tiene el nombre de: <strong>"${name}"</strong></p>`,
                    background: '#353535',
                    icon: 'warning',
                    confirmButtonText: `Aceptar`,
                })
                return
            } else {
                if (name.slice(0, -4).toLowerCase() === "plano") {

                    setMapaCatastral(e.target.files[0])
                }
            }
        }
    }



    const peticionPost = () => {

        if (caratulaImg.caratula === null) {
            Swal.fire({
                title: '¡Agrega una imagen de caratula a la propiedad!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (caratulaImg.folleto === null) {
            Swal.fire({
                title: '¡Agrega un folleto a la propiedad!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }
        else if (!propiedadSeleccionado.nombre_propiedad) {
            Swal.fire({
                title: '¡Agrega un nombre a la propiedad!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!propiedadSeleccionado.precio_propiedad) {
            Swal.fire({
                title: '¡Agrega un precio a la propiedad!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!propiedadSeleccionado.ciudad_estado_pais_propiedad) {
            Swal.fire({
                title: '¡Agrega una ciudad, estado y país a la propiedad!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!propiedadSeleccionado.id_tipo_oferta) {
            Swal.fire({
                title: '¡Agrega un tipo de oferta a la propiedad!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!propiedadSeleccionado.id_tipo_inmueble) {
            Swal.fire({
                title: '¡Agrega tipo del inmueble de la propiedad!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!propiedadSeleccionado.construccion_propiedad) {
            Swal.fire({
                title: '¡Agrega un tamaño a la propiedad!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!propiedadSeleccionado.terreno_propiedad) {
            Swal.fire({
                title: '¡Agrega el tamaño del terreno de la propiedad!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!propiedadSeleccionado.cantidad_recamaras_propiedad) {
            Swal.fire({
                title: '¡Agrega la cantidad de recámaras a la propiedad!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!propiedadSeleccionado.cantidad_bano_propiedad) {
            Swal.fire({
                title: '¡Agrega la cantidad de baños a la propiedad!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!propiedadSeleccionado.cantidad_garaje_propiedad) {
            Swal.fire({
                title: '¡Agrega la cantidad espacios del garaje a la propiedad!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!propiedadSeleccionado.colonia_propiedad) {
            Swal.fire({
                title: '¡Agrega una colonia a la propiedad!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!propiedadSeleccionado.referencias_propiedad) {
            Swal.fire({
                title: '¡Agrega referencias a la propiedad!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!propiedadSeleccionado.descripcion_propiedad) {
            Swal.fire({
                title: '¡Agrega una descripción a la propiedad!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!propiedadSeleccionado.id_tipo_pago) {
            Swal.fire({
                title: '¡Agrega un tipo de pago a la propiedad!',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (!propiedadSeleccionado.mapa_propiedad) {
            Swal.fire({
                title: '¡Agrega un mapa a la propiedad!',
                html:
                    '<a href="https://www.google.com.mx/maps/preview" target="_blank" >Google Maps</a> ',
                background: '#353535',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }



        const formdata = new FormData()



        if (file.galeria) {
            for (let i = 0; i < file.galeria.length; i++) {
                formdata.append('galeria_propiedad', file.galeria[i]);
            }
        }


        formdata.append('galeria_propiedad', caratulaImg.caratula);
        formdata.append('galeria_propiedad', caratulaImg.folleto);

        formdata.append('galeria_propiedad', mapaCatastral);

        formdata.append('nombre_propiedad', propiedadSeleccionado.nombre_propiedad);
        formdata.append('precio_propiedad', propiedadSeleccionado.precio_propiedad);
        formdata.append('ciudad_estado_pais_propiedad', propiedadSeleccionado.ciudad_estado_pais_propiedad);
        formdata.append('id_tipo_oferta', propiedadSeleccionado.id_tipo_oferta);
        formdata.append('id_tipo_inmueble', propiedadSeleccionado.id_tipo_inmueble);
        formdata.append('construccion_propiedad', propiedadSeleccionado.construccion_propiedad);
        formdata.append('terreno_propiedad', propiedadSeleccionado.terreno_propiedad);
        formdata.append('cantidad_recamaras_propiedad', propiedadSeleccionado.cantidad_recamaras_propiedad);
        formdata.append('cantidad_bano_propiedad', propiedadSeleccionado.cantidad_bano_propiedad);
        formdata.append('cantidad_garaje_propiedad', propiedadSeleccionado.cantidad_garaje_propiedad);
        formdata.append('colonia_propiedad', propiedadSeleccionado.colonia_propiedad);
        formdata.append('referencias_propiedad', propiedadSeleccionado.referencias_propiedad);
        formdata.append('descripcion_propiedad', propiedadSeleccionado.descripcion_propiedad);
        formdata.append('id_tipo_pago', propiedadSeleccionado.id_tipo_pago);
        formdata.append('mapa_propiedad', propiedadSeleccionado.mapa_propiedad);


        console.log(formdata)

        setEnviado(false)

        axios.post(baseUrl + '/api/propiedades', formdata, {


        }).then(response => {

            setTimeout(() => {
                Swal.fire({
                    position: 'top-end',
                    background: '#353535',
                    icon: 'success',
                    title: '¡Propiedad publicada!',
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
    console.log("planoCatastralSeleccionado", planoCatastralSeleccionado)

    const peticionPut = async () => {

        setEnviado(true)
        const formdata = new FormData()
        formdata.append('id_propiedad', propiedadSeleccionado.id_propiedad);
        formdata.append('identificador_propiedad', propiedadSeleccionado.identificador_propiedad);




        // if (!file) {
        //     formdata.append('caratula_propiedad', !file ? propiedadSeleccionado.caratula_propiedad : file);
        // } else {
        //     for (let i = 0; i < file.length; i++) {
        //         formdata.append('caratula_propiedad', !file ? propiedadSeleccionado.caratula_propiedad : file[i]);
        //     }
        // }

        if (file.galeria) {
            for (let i = 0; i < file.galeria.length; i++) {
                formdata.append('galeria_propiedad', file.galeria[i]);
            }
        } else {

        }

        if (caratulaImg.caratula) {
            formdata.append('galeria_propiedad', caratulaImg.caratula);

        } else {
            formdata.append('caratula_propiedad', propiedadSeleccionado.caratula_propiedad);
        }

        if (caratulaImg.folleto) {
            formdata.append('galeria_propiedad', caratulaImg.folleto);
        } else {

        }

        if (planoCatastralSeleccionado !== null) {
            formdata.append('galeria_propiedad', planoCatastralSeleccionado);
        } else {

        }

        formdata.append('nombre_propiedad', propiedadSeleccionado.nombre_propiedad);
        formdata.append('precio_propiedad', propiedadSeleccionado.precio_propiedad);
        formdata.append('ciudad_estado_pais_propiedad', propiedadSeleccionado.ciudad_estado_pais_propiedad);
        formdata.append('id_tipo_oferta', propiedadSeleccionado.id_tipo_oferta);
        formdata.append('id_tipo_inmueble', propiedadSeleccionado.id_tipo_inmueble);
        formdata.append('construccion_propiedad', propiedadSeleccionado.construccion_propiedad);
        formdata.append('terreno_propiedad', propiedadSeleccionado.terreno_propiedad);
        formdata.append('cantidad_recamaras_propiedad', propiedadSeleccionado.cantidad_recamaras_propiedad);
        formdata.append('cantidad_bano_propiedad', propiedadSeleccionado.cantidad_bano_propiedad);
        formdata.append('cantidad_garaje_propiedad', propiedadSeleccionado.cantidad_garaje_propiedad);
        formdata.append('colonia_propiedad', propiedadSeleccionado.colonia_propiedad);
        formdata.append('referencias_propiedad', propiedadSeleccionado.referencias_propiedad);
        formdata.append('descripcion_propiedad', propiedadSeleccionado.descripcion_propiedad);
        formdata.append('id_tipo_pago', propiedadSeleccionado.id_tipo_pago);
        formdata.append('mapa_propiedad', propiedadSeleccionado.mapa_propiedad);

        setEnviado(false)

        await axios.put(baseUrl + "/api/propiedad/" + propiedadSeleccionado.id_propiedad + "/" + propiedadSeleccionado.caratula_propiedad, formdata, {

        }).then(response => {

            setTimeout(() => {
                Swal.fire({
                    position: 'top-end',
                    background: '#353535',
                    icon: 'success',
                    title: '¡Propiedad actualizada!',
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
            title: `¿Estas segur@ de eliminar la propiedad con el ID: ${row.identificador_propiedad}?`,
            showCancelButton: true,
            background: '#353535',
            confirmButtonText: `Borrar`,
            cancelButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(baseUrl + "/api/propiedad/" + row.id_propiedad + "/" + row.caratula_propiedad, {

                }).then(response => {

                    peticionGet();

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

                                <ExcelFile element={<button className="btn-generar-excel"> <i className="fas fa-download"></i> Excel</button>}>
                                    <ExcelSheet data={data} name="Propiedades">
                                        <ExcelColumn label="#" value="identificador_propiedad" />
                                        <ExcelColumn label="Nombre" value="nombre_propiedad" />
                                        <ExcelColumn label="Precio" value="precio_propiedad" />
                                        <ExcelColumn label="Locación" value="ciudad_estado_pais_propiedad" />
                                        <ExcelColumn label="Tipo" value="nombre_tipo_inmueble" />
                                        <ExcelColumn label="Forma pago" value="nombre_tipo_pago" />
                                        <ExcelColumn label="Referencias" value="referencias_propiedad" />

                                        {/* <ExcelColumn label="Marital Status"
                                        value={(col) => col.is_married ? "Married" : "Single"} /> */}
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
                        <p>Nueva Propiedad</p>
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal" encType="multipart/form-data" style={{ overflow: 'hidden' }} >

                        <label>Caratula / Folleto</label>

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
                            <label style={{ marginLeft: '3px', marginRight: '3px', width: '180px', height: '180px', backgroundColor: '#d7d7d7' }} className="filelabel">
                                {
                                    caratulaImg.folleto ? <img src={Pdf} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt="Folleto" />
                                        :
                                        <Fragment >
                                            <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                                <i className="far fa-file-pdf" >
                                                </i>
                                                <span className="title">
                                                    Folleto
                                                </span>
                                            </div>

                                        </Fragment>
                                }
                                <input className="FileUpload1" onChange={selectedFile} name="folleto" type="file" accept="application/pdf" />
                            </label>
                        </div>



                        <label style={{ marginTop: '20px' }}>Galeria</label>
                        <div style={{ padding: '1px', marginBottom: '10px' }}>
                            <strong>Nota:</strong> Debe elegir 6 archivos (como máximo recomendado)
                        </div>
                        <input onChange={selectedHandler} name="caratula_propiedad" multiple type="file" accept="image/*" />


                        {
                            file.galeria && file.galeria.length > 0 &&
                            <div className="alert alert-secondary docs-archivos-prop" role="alert">
                                {file.galeria.map(item =>
                                    <div key={item}>
                                        <img src={URL.createObjectURL(item)} />
                                    </div>
                                )}
                            </div>
                        }



                        <label>Plano Catastral</label>
                        <input onChange={selectImagMapaCatastral} name="plano_catastral" type="file" />


                        <label>Nombre propiedad</label>
                        <input type="text" autoComplete="off" name="nombre_propiedad" onChange={handleChange} placeholder="Propiedad exclusiva en..." required ></input>

                        <div className="div-varios-seccion">
                            <div>
                                <label>Precio</label>
                                <input type="text" autoComplete="off" name="precio_propiedad" onChange={handleChange} placeholder="1230000" required ></input>
                            </div>
                            <div>
                                <label>Ciudad, Estado, País</label>
                                <input type="text" name="ciudad_estado_pais_propiedad" onChange={handleChange} placeholder="Mérida, Yucatán, México" required ></input>
                            </div>

                            <div>
                                <label>Tipo de oferta</label>
                                <select onChange={handleChange} required name="id_tipo_oferta">
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {tipoOferta.map(items =>
                                        <option key={items.id_tipo_oferta} value={items.id_tipo_oferta}>{items.nombre_tipo_oferta}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className="div-varios-seccion">
                            <div>
                                <label>Tipo de inmueble</label>
                                <select onChange={handleChange} required name="id_tipo_inmueble">
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {tipoInmueble.map(items =>
                                        <option key={items.id_tipo_inmueble} value={items.id_tipo_inmueble}>{items.nombre_tipo_inmueble}</option>
                                    )}
                                </select>
                            </div>
                            <div>
                                <label>Tamaño propiedad</label>
                                <input type="text" autoComplete="off" name="construccion_propiedad" onChange={handleChange} placeholder="50 x 20" required ></input>
                            </div>
                            <div>
                                <label>Tamaño terreno</label>
                                <input type="text" autoComplete="off" name="terreno_propiedad" onChange={handleChange} placeholder="60 x 25" required ></input>
                            </div>
                        </div>

                        <div className="div-varios-seccion">
                            <div>
                                <label>Cantidad recámara(s)</label>
                                <input type="text" autoComplete="off" name="cantidad_recamaras_propiedad" onChange={handleChange} placeholder="2" ></input>
                            </div>
                            <div>
                                <label>Cantidad baño(s)</label>
                                <input type="text" autoComplete="off" name="cantidad_bano_propiedad" onChange={handleChange} placeholder="3" required ></input>
                            </div>
                            <div>

                                <label>Cantidad garaje</label>
                                <input type="text" autoComplete="off" name="cantidad_garaje_propiedad" onChange={handleChange} placeholder="1" required ></input>
                            </div>
                        </div>

                        <label>Colonia</label>
                        <input type="text" autoComplete="off" name="colonia_propiedad" onChange={handleChange} placeholder="Las américas" required ></input>

                        <label>Referencias</label>
                        <textarea autoComplete="off" name="referencias_propiedad" onChange={handleChange} placeholder="A 100 metros de..." required rows="4" ></textarea>

                        <label>Descripcion de propiedad</label>
                        <textarea autoComplete="off" name="descripcion_propiedad" onChange={handleChange} placeholder="La propiedad cuenta con x baños..." required rows="4" ></textarea>

                        <label>Opciones de pago</label>
                        <select onChange={handleChange} required name="id_tipo_pago">
                            <option value="" defaultValue>Seleccione una opción</option>
                            {tipoPago.map(items =>
                                <option key={items.id_tipo_pago} value={items.id_tipo_pago}>{items.nombre_tipo_pago}</option>
                            )}
                        </select>

                        <label>Mapa propiedad</label>
                        <textarea autoComplete="off" name="mapa_propiedad" onChange={handleChange} placeholder="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1107081372984!2d-89.57675355061079!3d20.988198894471555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5670cf18011f9f%3A0xc501d23123471d2f!2sCITRA%20S.A.%20DE%20C.V.!5e0!3m2!1ses-419!2smx!4v1614376632493!5m2!1ses-419!2smx" required rows="4" ></textarea>

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
                        <p>Editar Propiedad</p>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal" encType="multipart/form-data" style={{ overflow: 'hidden' }}>
                        {/* 
                        <label>Imagenes</label>

                        {cambiarImagen ?
                            <input onChange={selectedHandler} name="caratula_propiedad" multiple type="file" />
                            :
                            <img alt="img propiedad" title="Clic para actualizar las imagenes" width="250px" onClick={() => cambiarCaratula()} src={nubeUrl + propiedadSeleccionado.caratula_propiedad + ".jpg"} />
                        } */}

                        <label>Caratula / Folleto</label>

                        <div className="cont-caratula-folleto">
                            <label style={{ marginLeft: '3px', marginRight: '3px', width: '180px', height: '180px', backgroundColor: '#d7d7d7' }} className="filelabel">
                                {
                                    caratulaImg.caratula || propiedadSeleccionado ? <img src={caratulaImg.caratula ? URL.createObjectURL(caratulaImg.caratula) : nubeUrl + propiedadSeleccionado.caratula_propiedad + ".jpg"} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt="Caratula" />
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
                            <label style={{ marginLeft: '3px', marginRight: '3px', width: '180px', height: '180px', backgroundColor: '#d7d7d7' }} className="filelabel">
                                {
                                    caratulaImg.folleto !== null || folleto.identificador_imagen_propiedad !== undefined ? <img src={Pdf} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt="Folleto" />
                                        :
                                        <Fragment >
                                            <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                                <i className="far fa-file-pdf" >
                                                </i>
                                                <span className="title">
                                                    Folleto
                                                </span>
                                            </div>

                                        </Fragment>
                                }
                                <input className="FileUpload1" onChange={selectedFile} name="folleto" type="file" accept="application/pdf" />
                            </label>
                        </div>

                        {/* {console.log(folleto.identificador_imagen_propiedad)}
                        {console.log(caratulaImg.folleto)} */}


                        <label style={{ marginTop: '20px' }}>Galeria</label>
                        <div style={{ padding: '1px', marginBottom: '10px' }}>
                            <strong>Nota:</strong> Debe elegir 6 archivos (como máximo recomendado)
                        </div>
                        <input onChange={selectedHandler} name="caratula_propiedad" multiple type="file" accept="image/*" />


                        {
                            file.galeria && file.galeria.length > 0 ?
                                <div className="alert alert-secondary docs-archivos-prop" role="alert">
                                    {file.galeria.map(item =>
                                        <div key={item}>
                                            <img src={URL.createObjectURL(item)} />
                                        </div>
                                    )}
                                </div>
                                : fotos && fotos.length > 0 ?
                                    <div className="alert alert-secondary docs-archivos-prop" role="alert">
                                        {fotos.map(item =>
                                            <div key={item}>
                                                <img src={nubeUrl + item.nombre_imagen + ".jpg"} />
                                            </div>
                                        )}
                                    </div>
                                    : <div></div>
                        }

                        <label>Plano Catastral</label>
                        {/* mapaCatastral */}


                        <input onChange={selectImagMapaCatastralEdit} name="plano_catastral" type="file" />


                        {
                            planoCatastralSeleccionado !== null ?
                                planoCatastralSeleccionado.length >= 0 ?

                                    <div className="alert alert-secondary docs-archivos-prop" role="alert">
                                        <div>
                                            <img src={nubeUrl + planoCatastralSeleccionado + ".jpg"} />
                                        </div>
                                    </div>
                                    :
                                    <div className="alert alert-secondary docs-archivos-prop" role="alert">

                                        <div>
                                            {
                                                tipoPlano === "pdf" ?
                                                    <img src={Pdf} style={{ width: '100%', height: '100%', objectFit: "cover" }} alt="Folleto" />
                                                    :
                                                    <img src={URL.createObjectURL(planoCatastralSeleccionado)} />
                                            }
                                        </div>
                                    </div>

                                : <div></div>
                        }


                        {/* <input onChange={selectImagMapaCatastral} name="plano_catastral" type="file" accept="image/*" /> */}

                        <label>Identificador propiedad</label>
                        <input type="text" name="identificador_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.identificador_propiedad} required ></input>

                        <label>Nombre propiedad</label>
                        <input type="text" name="nombre_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.nombre_propiedad} placeholder="Propiedad exclusiva en..." required ></input>

                        <div className="div-varios-seccion">
                            <div>
                                <label>Precio</label>
                                <input type="text" name="precio_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.precio_propiedad} placeholder="1230000" required ></input>


                            </div>
                            <div>
                                <label>Ciudad, Estado, País</label>
                                <input type="text" name="ciudad_estado_pais_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.ciudad_estado_pais_propiedad} placeholder="Mérida, Yucatán, México" required ></input>


                            </div>
                            <div>
                                <label>Tipo de oferta</label>
                                <select onChange={handleChange} required name="id_tipo_oferta" value={propiedadSeleccionado && propiedadSeleccionado.id_tipo_oferta}>
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {tipoOferta.map(items =>
                                        <option key={items.id_tipo_oferta} value={items.id_tipo_oferta}>{items.nombre_tipo_oferta}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className="div-varios-seccion">
                            <div>
                                <label>Tipo de inmueble</label>
                                <select onChange={handleChange} required name="id_tipo_inmueble" value={propiedadSeleccionado && propiedadSeleccionado.id_tipo_inmueble}>
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {tipoInmueble.map(items =>
                                        <option key={items.id_tipo_inmueble} value={items.id_tipo_inmueble}>{items.nombre_tipo_inmueble}</option>
                                    )}
                                </select>


                            </div>
                            <div>
                                <label>Tamaño propiedad</label>
                                <input type="text" name="construccion_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.construccion_propiedad} placeholder="50 x 20" required ></input>


                            </div>
                            <div>
                                <label>Tamaño terreno</label>
                                <input type="text" name="terreno_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.terreno_propiedad} placeholder="60 x 25" required ></input>
                            </div>
                        </div>

                        <div className="div-varios-seccion">
                            <div>

                                <label>Cantidad recámara(s)</label>
                                <input type="text" name="cantidad_recamaras_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.cantidad_recamaras_propiedad} placeholder="2" ></input>


                            </div>
                            <div>
                                <label>Cantidad baño(s)</label>
                                <input type="text" name="cantidad_bano_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.cantidad_bano_propiedad} placeholder="3" required ></input>


                            </div>
                            <div>
                                <label>Cantidad garaje</label>
                                <input type="text" name="cantidad_garaje_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.cantidad_garaje_propiedad} placeholder="1" required ></input>

                            </div>
                        </div>


                        <label>Colonia</label>
                        <input type="text" name="colonia_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.colonia_propiedad} placeholder="Las américas" required ></input>

                        <label>Referencias</label>
                        <textarea autoComplete="off" name="referencias_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.referencias_propiedad} placeholder="A 100 metros de..." required rows="4" ></textarea>
                        {/* <input type="text" name="" onChange={handleChange}  placeholder="" required ></input> */}

                        <label>Descripcion de propiedad</label>
                        <textarea autoComplete="off" name="descripcion_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.descripcion_propiedad} placeholder="La propiedad cuenta con x baños..." required rows="4" ></textarea>
                        {/* <input type="text" name="descripcion_propiedad" onChange={handleChange}  placeholder="La propiedad cuenta con x baños..." required ></input> */}

                        <label>Opciones de pago</label>
                        <select onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.id_tipo_pago} required name="id_tipo_pago">
                            <option value="" defaultValue>Seleccione una opción</option>
                            {tipoPago.map(items =>
                                <option key={items.id_tipo_pago} value={items.id_tipo_pago}>{items.nombre_tipo_pago}</option>
                            )}
                        </select>

                        <label>Mapa propiedad</label>
                        <textarea autoComplete="off" name="mapa_propiedad" onChange={handleChange} value={propiedadSeleccionado && propiedadSeleccionado.mapa_propiedad} placeholder="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1107081372984!2d-89.57675355061079!3d20.988198894471555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5670cf18011f9f%3A0xc501d23123471d2f!2sCITRA%20S.A.%20DE%20C.V.!5e0!3m2!1ses-419!2smx!4v1614376632493!5m2!1ses-419!2smx" required rows="4" ></textarea>
                        {/* <input type="text" name="" onChange={handleChange}  placeholder="" required ></input> */}

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

export default Propiedades;