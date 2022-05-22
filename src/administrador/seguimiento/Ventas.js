import React, { Fragment, useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Seguimiento.css';
import './Ventas.css';
import '../tablero/Tablero.css';
import NavBar from '../navBar/NavBar';
import Table from './TableVentas';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
import MenuIzquierdo from '../menu/MenuIzquierdo';
// import materiales from '../../imagenes/iconos/materiales.png';
import Select from 'react-select';
import DatePicker from 'react-date-picker';
import moment from 'moment';


const Ventas = () => {

    const cookies = new Cookies();
    const baseUrl = window.$baseUrl;

    const [cargando, setCargando] = useState(false);
    const [enviado, setEnviado] = useState(true);


    const initialState = {
        correo: "",
        cliente: "",
        lote: "",

    }

    const [datosFiltro, setDatosFiltro] = useState(initialState);
    const [data, setData] = useState([]);
    const [desarrollos, setDedesarrollos] = useState([]);
    const [lotes, setLotes] = useState([]);
    const [meses, setMeses] = useState([]);
    const [estadosLotesVentas, setEstadosLotesVentas] = useState([]);
    const [tiposPagosVentasLotes, setTiposPagosVentasLotes] = useState([]);
    const [brokers, setBrokers] = useState([])

    const [value, onChange] = useState(null);


    const [menu, setMenu] = useState(true);

    const abrirMenu = () => {
        setMenu(!menu);
    }

    const handleInputChange = (event) => {
        setDatosFiltro({
            ...datosFiltro,
            [event.target.name]: event.target.value,
        })
    }



    const [ventasSeleccionado, setVentasSeleccionado] = useState({});
    const handleChange = e => {
        const { name, value } = e.target;
        setVentasSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    // console.log(ventasSeleccionado)


    const [abrirModalInsertar, setAbrirModalInsertar] = useState(false);

    const modalInsertar = () => {
        setVentasSeleccionado({});
        setSelectedOption({});
        onChange(null);
        setAbrirModalInsertar(!abrirModalInsertar);
    };


    const [abrirModalEditarVisualizar, setAbrirModalEditarVisualizar] = useState(false);


    const modalEditarVisualizar = () => {

        if (abrirModalEditarVisualizar) {
            setVentasSeleccionado({});
            setSelectedOption({});
            onChange(null);
        } else {

        }

        setAbrirModalEditarVisualizar(!abrirModalEditarVisualizar);
        // onChange(null);
    };



    const peticionGet = async () => {
        setCargando(false)

        await axios.get(baseUrl + "/api/obtener/desarrollos")
            .then(response => {
                setDedesarrollos(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/obtener/lotes")
            .then(response => {
                // setLotes(response.data);
                let dataLotes = response.data.map(item => {
                    return ({ value: item.id_lote, label: item.nombre_lote, precio_metro_cuadrado: item.precio_metro_cuadrado, precio_total: item.precio_total, metros_cuadrados: item.metros_cuadrados })
                })

                setLotes(dataLotes);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/obtener/meses")
            .then(response => {
                setMeses(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/obtener/estados/venta")
            .then(response => {
                setEstadosLotesVentas(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/obtener/tipos/pagos/venta")
            .then(response => {
                setTiposPagosVentasLotes(response.data);
            }).catch(error => {
                console.log(error);
            })


        await axios.get(baseUrl + "/api/registro/colaboradores")
            .then(response => {
                setBrokers(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/todos/ventas")
            .then(response => {
                setData(response.data);
            }).catch(error => {
                console.log(error);
            })


        setCargando(true);
    }


    useEffect(() => {
        peticionGet();
    }, [])



    // Select
    const [selectedOption, setSelectedOption] = useState({});

    // console.log(selectedOption)
    console.log(ventasSeleccionado)

    useEffect(() => {

        if (Object.keys(selectedOption).length) {

            setVentasSeleccionado({
                ...ventasSeleccionado,
                precio_total_lote: selectedOption.precio_total ? selectedOption.precio_total : null,
                precio_m2_lote: selectedOption.precio_metro_cuadrado ? selectedOption.precio_metro_cuadrado : null,
                metros_cuadrados: selectedOption.metros_cuadrados ? selectedOption.metros_cuadrados : null,
                pago_mensual: 0,
                enganche_contado: 0,
                id_mes: '',
                id_lote: selectedOption.value ? selectedOption.value : 0
            })
        }

    }, [selectedOption])

    useEffect(() => {

        if (parseInt(ventasSeleccionado.id_mes) === 8) {

            setVentasSeleccionado({
                ...ventasSeleccionado,
                enganche_contado: selectedOption.precio_total ? selectedOption.precio_total : '',
                pago_mensual: 0,
            })
        }
    }, [ventasSeleccionado.id_mes])

    useEffect(() => {
        if (parseInt(ventasSeleccionado.id_mes) !== undefined) {
            if (parseInt(ventasSeleccionado.id_mes) !== 8) {

                setVentasSeleccionado({
                    ...ventasSeleccionado,
                    enganche_contado: 0,
                    pago_mensual: 0,
                })
            }
        }
    }, [ventasSeleccionado.id_mes])

    useEffect(() => {
        if (parseInt(ventasSeleccionado.enganche_contado) !== undefined) {
            // if (parseInt(ventasSeleccionado.enganche_contado) !== 0) {
            if (parseInt(ventasSeleccionado.enganche_contado) !== '') {

                let nombreMes = meses.filter(mes => mes.id_mes === parseInt(ventasSeleccionado.id_mes));
                let r1 = nombreMes.map(mes => {
                    return (mes.nombre_mes)
                })

                let resultado = (parseFloat(selectedOption.precio_total - ventasSeleccionado.enganche_contado) / parseInt(r1[0])).toFixed(2)

                setVentasSeleccionado({
                    ...ventasSeleccionado,
                    pago_mensual: resultado,

                })
                // }
            }
        }
    }, [ventasSeleccionado.enganche_contado])

    useEffect(() => {
        if (ventasSeleccionado.pago_mensual === 'NaN') {
            setVentasSeleccionado({
                ...ventasSeleccionado,
                pago_mensual: 0,

            })
        }
    }, [ventasSeleccionado.pago_mensual])

    useEffect(() => {
        setVentasSeleccionado({
            ...ventasSeleccionado,
            fecha_venta: value,
        })


    }, [value])


    useEffect(() => {

        if (abrirModalEditarVisualizar === true) {
            if (value === null) {
                onChange(ventasSeleccionado.fecha_venta)
            }
        }
    }, [abrirModalEditarVisualizar])

    // console.log(value)

    const guardarVenta = async (type) => {

        if (ventasSeleccionado.nombre_cliente === undefined || ventasSeleccionado.nombre_cliente === "") {
            Swal.fire({
                title: '¡Agrega nombre al cliente!',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (ventasSeleccionado.apellidos_cliente === undefined || ventasSeleccionado.apellidos_cliente === "") {
            Swal.fire({
                title: '¡Agrega apellidos al cliente!',

                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (ventasSeleccionado.telefono_cliente === undefined || ventasSeleccionado.telefono_cliente === "") {
            Swal.fire({
                title: '¡Agrega telfono al cliente!',

                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (ventasSeleccionado.correo_cliente === undefined || ventasSeleccionado.correo_cliente === "") {
            Swal.fire({
                title: '¡Agrega correo al cliente!',

                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (ventasSeleccionado.lugar_cliente === undefined || ventasSeleccionado.lugar_cliente === "") {
            Swal.fire({
                title: '¡Agrega lugar al cliente!',

                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (ventasSeleccionado.direccion_cliente === undefined || ventasSeleccionado.direccion_cliente === "") {
            Swal.fire({
                title: '¡Agrega dirección al cliente!',

                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (ventasSeleccionado.id_desarrollo === undefined || ventasSeleccionado.id_desarrollo === "") {
            Swal.fire({
                title: '¡Selecciona un desarrollo!',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (ventasSeleccionado.id_lote === undefined || ventasSeleccionado.id_lote === "") {
            Swal.fire({
                title: '¡Selecciona un lote!',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (ventasSeleccionado.id_mes === undefined || ventasSeleccionado.id_mes === "") {
            Swal.fire({
                title: '¡Selecciona Meses!',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (parseInt(ventasSeleccionado.id_mes) !== 8 && ventasSeleccionado.enganche_contado === 0) {
            Swal.fire({
                title: '¡Ingresa una cantidad de enganche!',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (value === undefined || value === null) {
            Swal.fire({
                title: '¡Selecciona la fecha de venta!',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (ventasSeleccionado.id_forma_pago === undefined || ventasSeleccionado.id_forma_pago === "") {
            Swal.fire({
                title: '¡Selecciona forma de pago!',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (ventasSeleccionado.id_estatus === undefined || ventasSeleccionado.id_estatus === "") {
            Swal.fire({
                title: '¡Selecciona un estatus!',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        } else if (ventasSeleccionado.id_broker === undefined || ventasSeleccionado.id_broker === "") {
            Swal.fire({
                title: '¡Selecciona un broker!',
                icon: 'warning',
                confirmButtonText: `Aceptar`,
            })
            return
        }

        if (type === "guardar") {
            setEnviado(false)
            await axios.post(baseUrl + '/api/ventas', {
                ventasSeleccionado
            }).then(response => {


                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: '¡Venta guardada!',
                    showConfirmButton: true,
                    confirmButtonText: 'Aceptar',
                }).then((result) => {
                    setEnviado(true);
                    if (result.isConfirmed) {
                        // peticionGet()

                    }
                })
                peticionGet()
                setEnviado(true);
                modalInsertar();



            }).catch(error => {
                peticionGet()
                setEnviado(true);
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: '¡Error al guardar la venta!',
                    showConfirmButton: true,
                    confirmButtonText: 'Aceptar',
                }).then((result) => {
                    setEnviado(true);
                    if (result.isConfirmed) {
                        // peticionGet()
                        // modalInsertar();
                    }
                })
                console.log(error);
            })
        } else {
            setEnviado(false)
            await axios.put(baseUrl + '/api/venta/' + ventasSeleccionado.id_venta_lote, {
                ventasSeleccionado
            }).then(response => {


                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: '¡Venta actualizada!',
                    showConfirmButton: true,
                    confirmButtonText: 'Aceptar',
                }).then((result) => {
                    setEnviado(true);
                    if (result.isConfirmed) {
                        // peticionGet()

                    }
                })
                peticionGet()
                setEnviado(true);
                modalEditarVisualizar();



            }).catch(error => {
                peticionGet()
                setEnviado(true);
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: '¡Error al actualizar la venta!',
                    showConfirmButton: true,
                    confirmButtonText: 'Aceptar',
                }).then((result) => {
                    setEnviado(true);
                    if (result.isConfirmed) {
                        // peticionGet()
                        // modalInsertar();
                    }
                })
                console.log(error);
            })
        }
    }

    return (
        <Fragment>
            {!cookies.get('correo_usuario') && <Redirect to="/iniciar-sesion" />}

            <NavBar menu={menu} setMenu={setMenu} abrirMenu={abrirMenu} />

            <div className="contenedor-principal-seguimiento">

                <div style={{ width: menu ? '0%' : '100%', height: menu ? '0%' : '100%' }} className="cont-menu-movil-seguimiento">
                    <MenuIzquierdo menu={menu} abrirMenu={abrirMenu} />
                </div>

                <div className="contenedor-title-seguimiento">
                    <div className="cont-back-seguimiento">
                        <Link to="/tablero">
                            <i className="fas fa-arrow-left"></i>
                        </Link>
                    </div>
                    <div className="cont-title-seguimiento">
                        <div className="title-ventas">
                            <h1>Ventas</h1>
                        </div>
                    </div>

                    {
                        cargando &&
                        <div className="cont-btn-add-venta">
                            <input onClick={() => {
                                modalInsertar()
                            }} type="button" value="Agregar" />
                        </div>
                    }

                </div>

                <div className="content-all-final-seguimiento">
                    <div className="content-all-filtros-ventas">



                        <div className="cont-seguimiento-inputs">
                            <label>Filtro</label>
                            <input value={datosFiltro.cliente ? datosFiltro.cliente : ''} onChange={handleInputChange} type="text" name="cliente" placeholder="Ingrese un dato" />
                        </div>

                        {/* <div className="cont-seguimiento-inputs">
                            <label>Número Lote</label>
                            <input min="0" value={datosFiltro.lote ? datosFiltro.lote : ''} onChange={handleInputChange} type="number" name="lote" placeholder="Ingrese #lote" />
                        </div>

                        <div className="cont-seguimiento-inputs">
                            <label>Correo Cliente</label>
                            <input value={datosFiltro.correo ? datosFiltro.correo : ''} onChange={handleInputChange} type="correo" name="correo" placeholder="Ingrese correo" />
                        </div> */}

                        <div className="cont-btn-limpiar-filtro">
                            <input onClick={() => {
                                setDatosFiltro(initialState)
                            }} type="button" value="Limpiar Filtro" />
                        </div>

                    </div>

                    <div className="content-all-tabla-datos-seguimiento">

                        <div className="content-all-tabla-separador"></div>

                        <Table datosFiltro={datosFiltro} setDatosFiltro={setDatosFiltro} initialState={initialState} setVentasSeleccionado={setVentasSeleccionado} modalEditarVisualizar={modalEditarVisualizar} setSelectedOption={setSelectedOption} data={data} setData={setData} peticionGet={peticionGet} cargando={cargando} />
                    </div>
                </div>
            </div>


            <Modal show={abrirModalInsertar} onHide={modalInsertar}>
                <Modal.Header closeButton>

                    <div className="titulo-modal">
                        <p>Nueva Venta</p>
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal" encType="multipart/form-data" style={{ overflow: 'hidden' }} >

                        <div className="cont-seccion-titile">
                            <label>
                                Datos del Cliente
                            </label>
                        </div>

                        <div className="div-varios-seccion-ventas">
                            <div>
                                <label>Nombre(s)</label>

                                <input type="text" autoComplete="off" value={ventasSeleccionado.nombre_cliente ? ventasSeleccionado.nombre_cliente : null} name="nombre_cliente" onChange={handleChange} placeholder="Ingrese Nombre" required ></input>
                            </div>
                            <div>
                                <label>Apellido(s)</label>
                                <input type="text" autoComplete="off" value={ventasSeleccionado.apellidos_cliente ? ventasSeleccionado.apellidos_cliente : null} name="apellidos_cliente" onChange={handleChange} placeholder="Ingrese Apellido(s)" required ></input>
                            </div>

                        </div>

                        <div className="div-varios-seccion-ventas">
                            <div>
                                <label>Teléfono</label>
                                <input type="text" maxLength="10" autoComplete="off" value={ventasSeleccionado.telefono_cliente ? ventasSeleccionado.telefono_cliente : null} name="telefono_cliente" onChange={handleChange} placeholder="Ingrese Teléfono" required ></input>
                            </div>
                            <div>
                                <label>Correo</label>
                                <input type="text" autoComplete="off" value={ventasSeleccionado.correo_cliente ? ventasSeleccionado.correo_cliente : null} name="correo_cliente" onChange={handleChange} placeholder="Ingrese Correo" required ></input>
                            </div>
                        </div>

                        <div className="div-varios-seccion-ventas">
                            <div>
                                <label>Lugar</label>
                                <input type="text" autoComplete="off" value={ventasSeleccionado.lugar_cliente ? ventasSeleccionado.lugar_cliente : null} name="lugar_cliente" onChange={handleChange} placeholder="Ingrese Lugar" required ></input>
                            </div>
                            <div>
                                <label>Dirección</label>
                                <input type="text" autoComplete="off" value={ventasSeleccionado.direccion_cliente ? ventasSeleccionado.direccion_cliente : null} name="direccion_cliente" onChange={handleChange} placeholder="Ingrese Dirección" required ></input>
                            </div>
                        </div>


                        <div style={{ marginTop: '20px' }} className="cont-seccion-titile">
                            <label>
                                Datos del Lote
                            </label>
                        </div>

                        <div className="div-varios-seccion-ventas">
                            <div>
                                <label>Desarrollo</label>
                                <select onChange={handleChange} value={ventasSeleccionado.id_desarrollo ? ventasSeleccionado.id_desarrollo : ""} required name="id_desarrollo">
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {desarrollos.map(items =>
                                        <option key={items.id_desarrollo} value={items.id_desarrollo}>{items.nombre_desarrollo}</option>
                                    )}
                                </select>
                            </div>

                            {
                                ventasSeleccionado.id_desarrollo ?
                                    <div>
                                        <label>Lote</label>
                                        <Select
                                            defaultValue={selectedOption}
                                            onChange={setSelectedOption}
                                            options={lotes}
                                            placeholder="Ingrese lote"
                                            noOptionsMessage={() => <p>Sin Resultados</p>}
                                        />
                                    </div>
                                    :
                                    <div></div>
                            }

                        </div>



                        <div style={{ marginTop: '20px' }} className="cont-seccion-titile">
                            <label>
                                Detalles
                            </label>
                        </div>

                        <div className="div-varios-seccion-ventas">
                            <div>
                                <label>Meses</label>
                                <select onChange={handleChange} value={ventasSeleccionado.id_mes ? ventasSeleccionado.id_mes : ""} required name="id_mes">
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {meses.map(items =>
                                        <option key={items.id_mes} value={items.id_mes}>{items.nombre_mes}</option>
                                    )}
                                </select>
                            </div>

                            {
                                ventasSeleccionado.id_mes ?
                                    <div>
                                        <label>Enganche/Contado</label>
                                        <input type="number" disabled={parseInt(ventasSeleccionado.id_mes) === 8 ? true : false} min="0" autoComplete="off" value={ventasSeleccionado.enganche_contado ? ventasSeleccionado.enganche_contado : ""} name="enganche_contado" onChange={handleChange} placeholder="Ingrese Cantidad" required ></input>
                                    </div>
                                    :
                                    <div>
                                        <label>Enganche/Contado</label>
                                        <input type="number" disabled={true} min="0" autoComplete="off" value={ventasSeleccionado.enganche_contado ? ventasSeleccionado.enganche_contado : ""} name="enganche_contado" onChange={handleChange} required ></input>
                                    </div>
                            }


                        </div>

                        {selectedOption &&
                            <>
                                <div className="div-varios-seccion-ventas">
                                    <div>
                                        <label>Metros Cuadrados</label>
                                        <input disabled={true} type="text" autoComplete="off" value={ventasSeleccionado.metros_cuadrados ? ventasSeleccionado.metros_cuadrados : null} name="metros_cuadrados" onChange={handleChange} placeholder="Ingrese Precio" required ></input>
                                    </div>

                                    <div>
                                        <label>Precio M<sup>2</sup></label>
                                        <input disabled={true} type="number" min="0" autoComplete="off" value={ventasSeleccionado.precio_m2_lote ? ventasSeleccionado.precio_m2_lote : null} name="precio_m2_lote" onChange={handleChange} placeholder="Ingrese Precio" required ></input>
                                    </div>

                                </div>

                                <div className="div-varios-seccion-ventas">
                                    <div>
                                        <label>Precio Total del Lote</label>
                                        <input disabled={true} type="number" min="0" autoComplete="off" value={ventasSeleccionado.precio_total_lote ? ventasSeleccionado.precio_total_lote : null} name="precio_total_lote" onChange={handleChange} placeholder="Ingrese Precio" required ></input>
                                    </div>

                                    <div>
                                        {ventasSeleccionado.enganche_contado === null ?
                                            ventasSeleccionado.enganche_contado === "" ?
                                                <>
                                                    <label>Pago Mensual</label>
                                                    <input disabled={true} type="number" min="0" autoComplete="off" value={ventasSeleccionado.pago_mensual ? ventasSeleccionado.pago_mensual : ""} name="pago_mensual" onChange={handleChange} required ></input>
                                                </>
                                                :

                                                <>
                                                    <label>Pago Mensual</label>
                                                    <input type="number" min="0" autoComplete="off" value={ventasSeleccionado.pago_mensual ? ventasSeleccionado.pago_mensual : ""} name="pago_mensual" onChange={handleChange} placeholder="Ingrese Precio" required ></input>
                                                </>
                                            :
                                            <>
                                                <label>Pago Mensual</label>
                                                <input disabled={true} type="number" min="0" autoComplete="off" value={ventasSeleccionado.pago_mensual ? ventasSeleccionado.pago_mensual : ""} name="pago_mensual" onChange={handleChange} required ></input>
                                            </>
                                        }
                                    </div>

                                </div>

                            </>
                        }

                        <div className="div-varios-seccion-ventas">
                            <div>
                                <label>Fecha Venta</label>

                                <DatePicker format="dd/MM/yyyy" onChange={onChange} value={value} />
                                {/* <input onChange={handleChange} type="date" value={ventasSeleccionado.fecha_venta ? ventasSeleccionado.fecha_venta : ""} name="fecha_venta" placeholder="Ingrese Fecha" /> */}
                            </div>
                            <div></div>
                        </div>


                        <div style={{ marginTop: '20px' }} className="cont-seccion-titile">
                            <label>
                                Forma de Pago
                            </label>
                        </div>

                        <div className="div-varios-seccion-ventas">
                            <div>
                                <label>Tipo de Pago</label>
                                <select onChange={handleChange} required value={ventasSeleccionado.id_forma_pago ? ventasSeleccionado.id_forma_pago : ""} name="id_forma_pago">
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {tiposPagosVentasLotes.map(items =>
                                        <option style={{ textTransform: 'uppercase' }} key={items.id_tipo_pago_venta_lote} value={items.id_tipo_pago_venta_lote}>{items.nombre_tipo_pago_venta_lote}</option>
                                    )}
                                </select>
                            </div>

                            <div>
                                <label>Estatus</label>
                                <select onChange={handleChange} required value={ventasSeleccionado.id_estatus ? ventasSeleccionado.id_estatus : ""} name="id_estatus">
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {estadosLotesVentas.map(items =>
                                        <option style={{ textTransform: 'uppercase' }} key={items.id_estado_venta_lote} value={items.id_estado_venta_lote}>{items.nombre_estado}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div style={{ marginTop: '20px' }} className="cont-seccion-titile">
                            <label>
                                Datos del Broker
                            </label>
                        </div>

                        <div className="div-varios-seccion-brokers">
                            <div className="select-brokers-all">
                                <label>Broker</label>
                                <select onChange={handleChange} value={ventasSeleccionado.id_broker ? ventasSeleccionado.id_broker : ""} required name="id_broker">
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {brokers.map(items =>
                                        <option className="select-brokers-option" key={items.id_colaborador} value={items.id_colaborador}>{items.nombre_colaborador}</option>
                                    )}
                                </select>
                            </div>

                        </div>


                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={modalInsertar}>
                        Cerrar
                    </Button>
                    {enviado ?
                        <Button variant="primary" onClick={() => guardarVenta("guardar")}>
                            Guardar
                        </Button>
                        :
                        <div className="spinner"></div>
                    }
                </Modal.Footer>
            </Modal>




            {/*  */}


            <Modal show={abrirModalEditarVisualizar} onHide={modalEditarVisualizar}>
                <Modal.Header closeButton>

                    <div className="titulo-modal">
                        <p>Editar Venta</p>
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal" encType="multipart/form-data" style={{ overflow: 'hidden' }} >
                        <div className="cont-seccion-titile">
                            <label>
                                Datos del Cliente
                            </label>
                        </div>

                        <div className="div-varios-seccion-ventas">
                            <div>
                                <label>Nombre(s)</label>
                                <input type="text" autoComplete="off" value={ventasSeleccionado.nombre_cliente ? ventasSeleccionado.nombre_cliente : null} name="nombre_cliente" onChange={handleChange} placeholder="Ingrese Nombre" required ></input>
                            </div>
                            <div>
                                <label>Apellido(s)</label>
                                <input type="text" autoComplete="off" value={ventasSeleccionado.apellidos_cliente ? ventasSeleccionado.apellidos_cliente : null} name="apellidos_cliente" onChange={handleChange} placeholder="Ingrese Apellido(s)" required ></input>
                            </div>

                        </div>

                        <div className="div-varios-seccion-ventas">
                            <div>
                                <label>Teléfono</label>
                                <input type="text" maxLength="10" autoComplete="off" value={ventasSeleccionado.telefono_cliente ? ventasSeleccionado.telefono_cliente : null} name="telefono_cliente" onChange={handleChange} placeholder="Ingrese Teléfono" required ></input>
                            </div>
                            <div>
                                <label>Correo</label>
                                <input type="text" autoComplete="off" value={ventasSeleccionado.correo_cliente ? ventasSeleccionado.correo_cliente : null} name="correo_cliente" onChange={handleChange} placeholder="Ingrese Correo" required ></input>
                            </div>
                        </div>

                        <div className="div-varios-seccion-ventas">
                            <div>
                                <label>Lugar</label>
                                <input type="text" autoComplete="off" value={ventasSeleccionado.lugar_cliente ? ventasSeleccionado.lugar_cliente : null} name="lugar_cliente" onChange={handleChange} placeholder="Ingrese Lugar" required ></input>
                            </div>
                            <div>
                                <label>Dirección</label>
                                <input type="text" autoComplete="off" value={ventasSeleccionado.direccion_cliente ? ventasSeleccionado.direccion_cliente : null} name="direccion_cliente" onChange={handleChange} placeholder="Ingrese Dirección" required ></input>
                            </div>
                        </div>


                        <div style={{ marginTop: '20px' }} className="cont-seccion-titile">
                            <label>
                                Datos del Lote
                            </label>
                        </div>

                        <div className="div-varios-seccion-ventas">
                            <div>
                                <label>Desarrollo</label>
                                <select onChange={handleChange} value={ventasSeleccionado.id_desarrollo ? ventasSeleccionado.id_desarrollo : ""} required name="id_desarrollo">
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {desarrollos.map(items =>
                                        <option key={items.id_desarrollo} value={items.id_desarrollo}>{items.nombre_desarrollo}</option>
                                    )}
                                </select>
                            </div>

                            {
                                ventasSeleccionado.id_desarrollo ?
                                    <div>
                                        <label>Lote</label>
                                        <Select
                                            defaultValue={selectedOption}
                                            onChange={setSelectedOption}
                                            options={lotes}
                                            placeholder="Ingrese lote"
                                            noOptionsMessage={() => <p>Sin Resultados</p>}
                                        />
                                    </div>
                                    :
                                    <div></div>
                            }

                        </div>



                        <div style={{ marginTop: '20px' }} className="cont-seccion-titile">
                            <label>
                                Detalles
                            </label>
                        </div>

                        <div className="div-varios-seccion-ventas">
                            <div>
                                <label>Meses</label>
                                <select onChange={handleChange} value={ventasSeleccionado.id_mes ? ventasSeleccionado.id_mes : ""} required name="id_mes">
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {meses.map(items =>
                                        <option key={items.id_mes} value={items.id_mes}>{items.nombre_mes}</option>
                                    )}
                                </select>
                            </div>

                            {
                                ventasSeleccionado.id_mes ?
                                    <div>
                                        <label>Enganche/Contado</label>
                                        <input type="number" disabled={parseInt(ventasSeleccionado.id_mes) === 8 ? true : false} min="0" autoComplete="off" value={ventasSeleccionado.enganche_contado ? ventasSeleccionado.enganche_contado : ""} name="enganche_contado" onChange={handleChange} placeholder="Ingrese Cantidad" required ></input>
                                    </div>
                                    :
                                    <div>
                                        <label>Enganche/Contado</label>
                                        <input type="number" disabled={true} min="0" autoComplete="off" value={ventasSeleccionado.enganche_contado ? ventasSeleccionado.enganche_contado : ""} name="enganche_contado" onChange={handleChange} required ></input>
                                    </div>
                            }


                        </div>

                        {selectedOption &&
                            <>
                                <div className="div-varios-seccion-ventas">
                                    <div>
                                        <label>Metros Cuadrados</label>
                                        <input disabled={true} type="text" autoComplete="off" value={ventasSeleccionado.metros_cuadrados ? ventasSeleccionado.metros_cuadrados : null} name="metros_cuadrados" onChange={handleChange} placeholder="Ingrese Precio" required ></input>
                                    </div>

                                    <div>
                                        <label>Precio M<sup>2</sup></label>
                                        <input disabled={true} type="number" min="0" autoComplete="off" value={ventasSeleccionado.precio_m2_lote ? ventasSeleccionado.precio_m2_lote : null} name="precio_m2_lote" onChange={handleChange} placeholder="Ingrese Precio" required ></input>
                                    </div>

                                </div>

                                <div className="div-varios-seccion-ventas">
                                    <div>
                                        <label>Precio Total del Lote</label>
                                        <input disabled={true} type="number" min="0" autoComplete="off" value={ventasSeleccionado.precio_total_lote ? ventasSeleccionado.precio_total_lote : null} name="precio_total_lote" onChange={handleChange} placeholder="Ingrese Precio" required ></input>
                                    </div>

                                    <div>
                                        {ventasSeleccionado.enganche_contado === null ?
                                            ventasSeleccionado.enganche_contado === "" ?
                                                <>
                                                    <label>Pago Mensual</label>
                                                    <input disabled={true} type="number" min="0" autoComplete="off" value={ventasSeleccionado.pago_mensual ? ventasSeleccionado.pago_mensual : ""} name="pago_mensual" onChange={handleChange} required ></input>
                                                </>
                                                :

                                                <>
                                                    <label>Pago Mensual</label>
                                                    <input type="number" min="0" autoComplete="off" value={ventasSeleccionado.pago_mensual ? ventasSeleccionado.pago_mensual : ""} name="pago_mensual" onChange={handleChange} placeholder="Ingrese Precio" required ></input>
                                                </>
                                            :
                                            <>
                                                <label>Pago Mensual</label>
                                                <input disabled={true} type="number" min="0" autoComplete="off" value={ventasSeleccionado.pago_mensual ? ventasSeleccionado.pago_mensual : ""} name="pago_mensual" onChange={handleChange} required ></input>
                                            </>
                                        }
                                    </div>

                                </div>

                            </>
                        }

                        {/* Colocar un boton en el modal editar mostrar en label la fecha y si se le da clic sale el input date */}
                        <div className="div-varios-seccion-ventas">
                            <div>
                                <label>Fecha Venta</label>
                                {/* <input onChange={handleChange} type="date" value={ventasSeleccionado.fecha_venta ? ventasSeleccionado.fecha_venta : ""} name="fecha_venta" placeholder="Ingrese Fecha" /> */}
                                <DatePicker format="dd/MM/yyyy" onChange={onChange} value={value ? value : null} />
                            </div>
                            <div></div>
                        </div>

                        {/* {console.log(ventasSeleccionado.fecha_venta ? moment(ventasSeleccionado.fecha_venta).format('y-MM-dd') : value)} */}


                        <div style={{ marginTop: '20px' }} className="cont-seccion-titile">
                            <label>
                                Forma de Pago
                            </label>
                        </div>

                        <div className="div-varios-seccion-ventas">
                            <div>
                                <label>Tipo de Pago</label>
                                <select onChange={handleChange} required value={ventasSeleccionado.id_forma_pago ? ventasSeleccionado.id_forma_pago : ""} name="id_forma_pago">
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {tiposPagosVentasLotes.map(items =>
                                        <option style={{ textTransform: 'uppercase' }} key={items.id_tipo_pago_venta_lote} value={items.id_tipo_pago_venta_lote}>{items.nombre_tipo_pago_venta_lote}</option>
                                    )}
                                </select>
                            </div>

                            <div>
                                <label>Estatus</label>
                                <select onChange={handleChange} required value={ventasSeleccionado.id_estatus ? ventasSeleccionado.id_estatus : ""} name="id_estatus">
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {estadosLotesVentas.map(items =>
                                        <option style={{ textTransform: 'uppercase' }} key={items.id_estado_venta_lote} value={items.id_estado_venta_lote}>{items.nombre_estado}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        <div style={{ marginTop: '20px' }} className="cont-seccion-titile">
                            <label>
                                Datos del Broker
                            </label>
                        </div>

                        <div className="div-varios-seccion-brokers">
                            <div className="select-brokers-all">
                                <label>Broker</label>
                                <select onChange={handleChange} value={ventasSeleccionado.id_broker ? ventasSeleccionado.id_broker : ""} required name="id_broker">
                                    <option value="" defaultValue>Seleccione una opción</option>
                                    {brokers.map(items =>
                                        <option className="select-brokers-option" key={items.id_colaborador} value={items.id_colaborador}>{items.nombre_colaborador}</option>
                                    )}
                                </select>
                            </div>

                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={modalEditarVisualizar}>
                        Cerrar
                    </Button>
                    {enviado ?
                        <Button variant="primary" onClick={() => guardarVenta("editar")}>
                            Guardar
                        </Button>
                        :
                        <div className="spinner"></div>
                    }
                </Modal.Footer>
            </Modal>


        </Fragment>
    )
}

export default Ventas;

