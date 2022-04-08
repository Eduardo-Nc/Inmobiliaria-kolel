import React, { Fragment, useState, useEffect } from 'react';
import './TarjetaCasa.css';
import '../menuFiltro/MenuFiltros.css';
import axios from 'axios';
import Pagination from './Pagination';
import Posts from './Posts';

import Swal from 'sweetalert2';

const TarjetaCasa = () => {

    const baseUrl = window.$baseUrl;
    const [datosF, setDatosF] = useState({});
    const [data, setData] = useState([]);
    const [tipoInmueble, setTipoInmueble] = useState([]);
    const [tipoOferta, setTipoOferta] = useState([]);
    const [cargando, setCargando] = useState(false);


    const peticionGet = async () => {
        await axios.get(baseUrl + "/api/todas/propiedades")
            .then(response => {
                setData(response.data);
                setCargando(true)
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
    }


    useEffect(() => {
        peticionGet();
    }, [])


    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);


    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    const handleChange = (event) => {
        setDatosF({
            ...datosF,
            [event.target.name]: event.target.value,
        });
    };





    const [result, setResult] = useState([]);

    const buscarPropiedad = (e) => {

        e.preventDefault();

        if (Object.keys(datosF).length === 0) {
            Swal.fire({
                customClass: {
                    title: 'swalTitleColor'
                },
                icon: 'warning',
                title: '¡Ingresa al menos un dato para realizar el filtrado!',
                confirmButtonText: `Aceptar`,
            })
        }

        if (datosF.id_prop) {

            setResult(data.filter(item => item.identificador_propiedad === datosF.id_prop))

            const i = data.filter(item => item.identificador_propiedad === datosF.id_prop)
            if (i.length === 0) {
                Swal.fire({
                    customClass: {
                        title: 'swalTitleColor'
                    },
                    icon: 'warning',
                    title: '¡No se encontraron resultados!',
                    text: "Intente ingresar datos diferentes",
                    confirmButtonText: `Aceptar`,
                })
            }

        } else if (datosF.tipo_oferta && Object.keys(datosF).length === 1) {

            setResult(data.filter(item => item.id_tipo_oferta === parseInt(datosF.tipo_oferta)))

            const i = data.filter(item => item.id_tipo_oferta === parseInt(datosF.tipo_oferta))
            if (i.length === 0) {
                Swal.fire({
                    customClass: {
                        title: 'swalTitleColor'
                    },
                    icon: 'warning',
                    title: '¡No se encontraron resultados!',
                    text: "Intente ingresar datos diferentes",
                    confirmButtonText: `Aceptar`,
                })
            }



        } else if (datosF.tipo_inmueble && Object.keys(datosF).length === 1) {

            setResult(data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble)))

            const i = data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble))
            if (i.length === 0) {
                Swal.fire({
                    customClass: {
                        title: 'swalTitleColor'
                    },
                    icon: 'warning',
                    title: '¡No se encontraron resultados!',
                    text: "Intente ingresar datos diferentes",
                    confirmButtonText: `Aceptar`,
                })
            }

        } else if (datosF.cant_habitaciones && Object.keys(datosF).length === 1) {

            setResult(data.filter(item => item.cantidad_recamaras_propiedad === parseInt(datosF.cant_habitaciones)))

            const i = data.filter(item => item.cantidad_recamaras_propiedad === parseInt(datosF.cant_habitaciones))
            if (i.length === 0) {
                Swal.fire({
                    customClass: {
                        title: 'swalTitleColor'
                    },
                    icon: 'warning',
                    title: '¡No se encontraron resultados!',
                    text: "Intente ingresar datos diferentes",
                    confirmButtonText: `Aceptar`,
                })
            }

        } else if (datosF.cant_banos && Object.keys(datosF).length === 1) {

            setResult(data.filter(item => item.cantidad_bano_propiedad === parseInt(datosF.cant_banos)))

            const i = data.filter(item => item.cantidad_bano_propiedad === parseInt(datosF.cant_banos))
            if (i.length === 0) {
                Swal.fire({
                    customClass: {
                        title: 'swalTitleColor'
                    },
                    icon: 'warning',
                    title: '¡No se encontraron resultados!',
                    text: "Intente ingresar datos diferentes",
                    confirmButtonText: `Aceptar`,
                })
            }

        } else if (datosF.tipo_precio && Object.keys(datosF).length === 1) {
            if (parseInt(datosF.tipo_precio) === 1) {
                setResult(data.filter(item => item.precio_propiedad > 3000000))

                const i = data.filter(item => item.precio_propiedad > 3000000)
                if (i.length === 0) {
                    Swal.fire({
                        customClass: {
                            title: 'swalTitleColor'
                        },
                        icon: 'warning',
                        title: '¡No se encontraron resultados!',
                        text: "Intente ingresar datos diferentes",
                        confirmButtonText: `Aceptar`,
                    })
                }
            } else if (parseInt(datosF.tipo_precio) === 2) {
                setResult(data.filter(item => item.precio_propiedad >= 2000000 && item.precio_propiedad <= 3000000))

                const i = data.filter(item => item.precio_propiedad >= 2000000 && item.precio_propiedad <= 3000000)
                if (i.length === 0) {
                    Swal.fire({
                        customClass: {
                            title: 'swalTitleColor'
                        },
                        icon: 'warning',
                        title: '¡No se encontraron resultados!',
                        text: "Intente ingresar datos diferentes",
                        confirmButtonText: `Aceptar`,
                    })
                }
            } else if (parseInt(datosF.tipo_precio) === 3) {
                setResult(data.filter(item => item.precio_propiedad >= 1000000 && item.precio_propiedad <= 2000000))

                const i = data.filter(item => item.precio_propiedad >= 1000000 && item.precio_propiedad <= 2000000)
                if (i.length === 0) {
                    Swal.fire({
                        customClass: {
                            title: 'swalTitleColor'
                        },
                        icon: 'warning',
                        title: '¡No se encontraron resultados!',
                        text: "Intente ingresar datos diferentes",
                        confirmButtonText: `Aceptar`,
                    })
                }
            } else if (parseInt(datosF.tipo_precio) === 4) {
                setResult(data.filter(item => item.precio_propiedad < 1000000))

                const i = data.filter(item => item.precio_propiedad < 1000000)
                if (i.length === 0) {
                    Swal.fire({
                        customClass: {
                            title: 'swalTitleColor'
                        },
                        icon: 'warning',
                        title: '¡No se encontraron resultados!',
                        text: "Intente ingresar datos diferentes",
                        confirmButtonText: `Aceptar`,
                    })
                }
            }



        } else if (datosF.tipo_inmueble && datosF.tipo_oferta && Object.keys(datosF).length === 2) {

            setResult(data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta)))

            const i = data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta))
            if (i.length === 0) {
                Swal.fire({
                    customClass: {
                        title: 'swalTitleColor'
                    },
                    icon: 'warning',
                    title: '¡No se encontraron resultados!',
                    text: "Intente ingresar datos diferentes",
                    confirmButtonText: `Aceptar`,
                })
            }


        } else if (datosF.tipo_inmueble && datosF.tipo_oferta && datosF.cant_habitaciones && Object.keys(datosF).length === 3) {

            setResult(data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.cantidad_recamaras_propiedad === parseInt(datosF.cant_habitaciones)))

            const i = data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.cantidad_recamaras_propiedad === parseInt(datosF.cant_habitaciones))
            if (i.length === 0) {
                Swal.fire({
                    customClass: {
                        title: 'swalTitleColor'
                    },
                    icon: 'warning',
                    title: '¡No se encontraron resultados!',
                    text: "Intente ingresar datos diferentes",
                    confirmButtonText: `Aceptar`,
                })
            }


        } else if (datosF.tipo_inmueble && datosF.tipo_oferta && datosF.cant_habitaciones && datosF.cant_banos && Object.keys(datosF).length === 4) {

            setResult(data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.cantidad_recamaras_propiedad === parseInt(datosF.cant_habitaciones) && item.cantidad_bano_propiedad === parseInt(datosF.cant_banos)))

            const i = data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.cantidad_recamaras_propiedad === parseInt(datosF.cant_habitaciones) && item.cantidad_bano_propiedad === parseInt(datosF.cant_banos))
            if (i.length === 0) {
                Swal.fire({
                    customClass: {
                        title: 'swalTitleColor'
                    },
                    icon: 'warning',
                    title: '¡No se encontraron resultados!',
                    text: "Intente ingresar datos diferentes",
                    confirmButtonText: `Aceptar`,
                })
            }

        } else if (datosF.tipo_inmueble && datosF.tipo_oferta && datosF.tipo_precio && Object.keys(datosF).length === 3) {

            if (datosF.tipo_oferta && datosF.tipo_inmueble && datosF.tipo_precio) {

                if (parseInt(datosF.tipo_precio) === 1) {
                    setResult(data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.precio_propiedad > 3000000))

                    const i = data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.precio_propiedad > 3000000)
                    if (i.length === 0) {
                        Swal.fire({
                            customClass: {
                                title: 'swalTitleColor'
                            },
                            icon: 'warning',
                            title: '¡No se encontraron resultados!',
                            text: "Intente ingresar datos diferentes",
                            confirmButtonText: `Aceptar`,
                        })
                    }
                } else if (parseInt(datosF.tipo_precio) === 2) {
                    setResult(data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.precio_propiedad >= 2000000 && item.precio_propiedad <= 3000000))

                    const i = data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.precio_propiedad >= 2000000 && item.precio_propiedad <= 3000000)
                    if (i.length === 0) {
                        Swal.fire({
                            customClass: {
                                title: 'swalTitleColor'
                            },
                            icon: 'warning',
                            title: '¡No se encontraron resultados!',
                            text: "Intente ingresar datos diferentes",
                            confirmButtonText: `Aceptar`,
                        })
                    }
                } else if (parseInt(datosF.tipo_precio) === 3) {
                    setResult(data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.precio_propiedad >= 1000000 && item.precio_propiedad <= 2000000))

                    const i = data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.precio_propiedad >= 1000000 && item.precio_propiedad <= 2000000)
                    if (i.length === 0) {
                        Swal.fire({
                            customClass: {
                                title: 'swalTitleColor'
                            },
                            icon: 'warning',
                            title: '¡No se encontraron resultados!',
                            text: "Intente ingresar datos diferentes",
                            confirmButtonText: `Aceptar`,
                        })
                    }
                } else if (parseInt(datosF.tipo_precio) === 4) {
                    setResult(data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.precio_propiedad < 1000000))

                    const i = data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.precio_propiedad < 1000000)
                    if (i.length === 0) {
                        Swal.fire({
                            customClass: {
                                title: 'swalTitleColor'
                            },
                            icon: 'warning',
                            title: '¡No se encontraron resultados!',
                            text: "Intente ingresar datos diferentes",
                            confirmButtonText: `Aceptar`,
                        })
                    }
                }
            }

        }

        else if (datosF.tipo_inmueble && datosF.tipo_oferta && datosF.tipo_precio && datosF.cant_habitaciones && datosF.cant_banos && Object.keys(datosF).length === 5) {

            if (datosF.tipo_inmueble && datosF.tipo_oferta && datosF.tipo_precio && datosF.cant_habitaciones && datosF.cant_banos) {

                if (parseInt(datosF.tipo_precio) === 1) {
                    setResult(data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.precio_propiedad > 3000000 && item.cantidad_recamaras_propiedad === parseInt(datosF.cant_habitaciones) && item.cantidad_bano_propiedad === parseInt(datosF.cant_banos)))

                    const i = data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.precio_propiedad > 3000000 && item.cantidad_recamaras_propiedad === parseInt(datosF.cant_habitaciones) && item.cantidad_bano_propiedad === parseInt(datosF.cant_banos))
                    if (i.length === 0) {
                        Swal.fire({
                            customClass: {
                                title: 'swalTitleColor'
                            },
                            icon: 'warning',
                            title: '¡No se encontraron resultados!',
                            text: "Intente ingresar datos diferentes",
                            confirmButtonText: `Aceptar`,
                        })
                    }
                } else if (parseInt(datosF.tipo_precio) === 2) {
                    setResult(data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.precio_propiedad >= 2000000 && item.precio_propiedad <= 3000000 && item.cantidad_recamaras_propiedad === parseInt(datosF.cant_habitaciones) && item.cantidad_bano_propiedad === parseInt(datosF.cant_banos)))

                    const i = data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.precio_propiedad >= 2000000 && item.precio_propiedad <= 3000000 && item.cantidad_recamaras_propiedad === parseInt(datosF.cant_habitaciones) && item.cantidad_bano_propiedad === parseInt(datosF.cant_banos))
                    if (i.length === 0) {
                        Swal.fire({
                            customClass: {
                                title: 'swalTitleColor'
                            },
                            icon: 'warning',
                            title: '¡No se encontraron resultados!',
                            text: "Intente ingresar datos diferentes",
                            confirmButtonText: `Aceptar`,
                        })
                    }
                } else if (parseInt(datosF.tipo_precio) === 3) {
                    setResult(data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.precio_propiedad >= 1000000 && item.precio_propiedad <= 2000000 && item.cantidad_recamaras_propiedad === parseInt(datosF.cant_habitaciones) && item.cantidad_bano_propiedad === parseInt(datosF.cant_banos)))

                    const i = data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.precio_propiedad >= 1000000 && item.precio_propiedad <= 2000000 && item.cantidad_recamaras_propiedad === parseInt(datosF.cant_habitaciones) && item.cantidad_bano_propiedad === parseInt(datosF.cant_banos))
                    if (i.length === 0) {
                        Swal.fire({
                            customClass: {
                                title: 'swalTitleColor'
                            },
                            icon: 'warning',
                            title: '¡No se encontraron resultados!',
                            text: "Intente ingresar datos diferentes",
                            confirmButtonText: `Aceptar`,
                        })
                    }
                } else if (parseInt(datosF.tipo_precio) === 4) {
                    setResult(data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.precio_propiedad < 1000000 && item.cantidad_recamaras_propiedad === parseInt(datosF.cant_habitaciones) && item.cantidad_bano_propiedad === parseInt(datosF.cant_banos)))

                    const i = data.filter(item => item.id_tipo_inmueble === parseInt(datosF.tipo_inmueble) && item.id_tipo_oferta === parseInt(datosF.tipo_oferta) && item.precio_propiedad < 1000000 && item.cantidad_recamaras_propiedad === parseInt(datosF.cant_habitaciones) && item.cantidad_bano_propiedad === parseInt(datosF.cant_banos))
                    if (i.length === 0) {
                        Swal.fire({
                            customClass: {
                                title: 'swalTitleColor'
                            },
                            icon: 'warning',
                            title: '¡No se encontraron resultados!',
                            text: "Intente ingresar datos diferentes",
                            confirmButtonText: `Aceptar`,
                        })
                    }
                }
            }

        }



        document.getElementById("myForm").reset();

        setDatosF([]);
    }





    return (

        <Fragment>

            <div className="contenedor-filtros-titulo">
                <h1>¡Estás listo!</h1>
                <p>Te ayudamos a simplificar tu búsqueda</p>
            </div>

            <div className="contenedor-principal-menu-filtros">

                <form onSubmit={buscarPropiedad} id="myForm" className="contenedor-filtros-fondo" >

                    <div className="contenedor-menu-filtros">
                        <select onChange={handleChange} name="tipo_oferta">
                            <option value="" defaultValue>Tipo oferta</option>
                            {tipoOferta.map(items =>
                                items.id_tipo_oferta === 3 || items.id_tipo_oferta === 4 ?
                                    ""
                                    :
                                    <option key={items.id_tipo_oferta} value={items.id_tipo_oferta}>{items.nombre_tipo_oferta}</option>
                            )}
                        </select>

                        <select onChange={handleChange} name="tipo_inmueble">
                            <option value="" defaultValue>Tipo de inmueble</option>
                            {tipoInmueble.map(items =>
                                <option key={items.id_tipo_inmueble} value={items.id_tipo_inmueble}>{items.nombre_tipo_inmueble}</option>
                            )}
                        </select>

                        <select onChange={handleChange} name="tipo_precio">
                            <option value="" defaultValue>Precio</option>
                            <option value="1">+3,000,000</option>
                            <option value="2">2,000,000 - 3,000,000</option>
                            <option value="3">1,000,000 - 2,000,000</option>
                            <option value="4">-1,000,000</option>
                        </select>

                        <div className="contenedor-menu-filtros-selec">
                            <select onChange={handleChange} name="cant_habitaciones">
                                <option value="" defaultValue>Habitaciones</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">7</option>
                            </select>

                            <select onChange={handleChange} name="cant_banos">
                                <option value="" defaultValue>Baños</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>

                    <div className="contenedor-filtro-id">
                        <input type="text" name="id_prop" onChange={handleChange} placeholder="Identificador" />

                        <div className="contenedor-menu-filtros-boton">
                            <input type="submit" value="Buscar"></input>
                        </div>
                    </div>
                </form>

            </div>





            <div className="contenedor-principal-tarjeta-casa">
                {result.length === 0 ?
                    <div className="contenedor-tarjeta-casa-pre-titulo">
                        <p>Novedades</p>
                    </div>
                    :
                    <div className="contenedor-tarjeta-casa-pre-titulo">
                        <p></p>
                    </div>
                }

                {result.length === 0 ?
                    <div className="contenedor-tarjeta-casa-titulo">
                        <h1>Inmuebles Recientes</h1>
                    </div>
                    :
                    <div className="contenedor-tarjeta-casa-titulo">
                        <h1>Resultado(s) de la búsqueda</h1>
                    </div>
                }

                <Posts posts={currentPosts} result={result} cargando={cargando} setResult={setResult} />

            </div>


            <div className="contenedor-paginacion-tarjetas">
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={data.length}
                    paginate={paginate}
                />
            </div>


        </Fragment>
    )
}

export default TarjetaCasa;