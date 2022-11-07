import React, { Fragment, useState, useEffect } from 'react';
import "./Cotizador.css";
import Plano from "./Plano";
import { Redirect, Link } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import whatsapp from '../../imagenes/whatsapp.png';
import axios from 'axios';
import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';
import Cookies from 'universal-cookie';
import ReactTooltip from 'react-tooltip';
import { Button, Modal, Form, InputGroup, FormControl } from 'react-bootstrap';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');


const Cotizador = (props) => {

    const cookies = new Cookies();
    const baseUrl = window.$baseUrl;

    const [data, setData] = useState([]);
    const [enviado, setEnviado] = useState(false);
    const [enviado2, setEnviado2] = useState(false);
    const [datosSeleccionados, setDatosSeleccionados] = useState({
        plan: "",
        enganche: "",
        total_financiar: null

    });
    const [item, setItem] = useState(props.location.item);
    const [datosLote, setDatosLote] = useState({
        estado_lote: 0,
        etapa_desarrollo: 0,
        id_desarrollo: 0,
        id_lote: 0,
        nombre_lote: "",
        precio_metro_cuadrado: 0,
        precio_total: 0,
        nombre_colaborador: "",
        plazo_seleccionado: null,
        correo_colaborador: "",
        tipo_plan: null,
        preciototal: null,
        preciototaldescuento: null,
        precio_metros_cuadra: null,
        total_enganche: null,
        total_financiar: null,
        total_enganche_apartado: null,
        fecha: null,
    });


    const [textEncanche, setTextEnganche] = useState(15)
    const [abrirModal, setAbrirModal] = useState(false);
    const [abrirModalNoDisponible, setAbrirModalNoDisponible] = useState(false);

    const [datosTooltip, setDatosTooltip] = useState({
        estado_lote: 1,
        etapa_desarrollo: 0,
        id_desarrollo: 0,
        id_lote: 0,
        nombre_lote: "ESPERE...",
        precio_metro_cuadrado: 0,
        precio_total: 0,
    });

    // console.log(datosSeleccionados.plan === "01")

    if (item === undefined) {
        window.location.href = "/disponibilidad"
    }

    const peticionGet = async () => {

        await axios.get(baseUrl + "/api/obtener/lotes")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const numeroLotePropiedad = (lote) => {
        let resultado = data.filter(item => parseInt(item.nombre_lote) === lote);
        setDatosTooltip(resultado[0])

    }

    const abrirCotizador = (num_lote) => {

        let resultado = data.filter(item => parseInt(item.nombre_lote) === num_lote)
        setDatosLote(resultado[0])

        resultado[0].nombre_estado_lote === "Disponible" ? setAbrirModal(!abrirModal) : setAbrirModalNoDisponible(!abrirModalNoDisponible)

    };

    const cerrarModal = () => {
        setDatosSeleccionados({
            plan: "",
            enganche: "",
            total_financiar: null,


        })
        setAbrirModal(!abrirModal);
        setEnviado(false)

    }

    const cerrarModalNoDisponible = () => {

        setAbrirModalNoDisponible(!abrirModalNoDisponible);

    }



    useEffect(() => {
        peticionGet();
    }, [])



    const handleChange = e => {
        const { name, value } = e.target;
        setDatosSeleccionados((prevState) => ({
            ...prevState,
            [name]: value
        }))

    }

    const handleChangeEnganche = e => {
        const { name, value } = e.target;
        setTextEnganche(value)

    }



    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    let date = new Date()
    let fechaActual = "";
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if (month < 10) {
        fechaActual = (`${day} de ${meses[month]} del ${year}`)
    } else {
        fechaActual = (`${day} de ${meses[month]} del ${year}`)
    }


    let diez_enganche = parseFloat(datosLote.precio_total) - (10 * (parseFloat(datosLote.precio_total)) / 100)

    let CantDescuento = (parseInt(datosSeleccionados.plan) === 0 ? 15 : parseInt(datosSeleccionados.plan) === 6 ? 10 : parseInt(datosSeleccionados.plan) === 12 ? 7 : parseInt(datosSeleccionados.plan) === 24 ? 5 : parseInt(datosSeleccionados.plan) === 36 ? 3 : parseInt(datosSeleccionados.plan) === 48 ? 0 : parseInt(datosSeleccionados.plan) === 60 && 5) * parseFloat(datosLote.precio_total) / 100;

    datosLote.fecha = moment().format(`LL`);
    datosLote.fechaMesSiguiente = moment().add(1, 'month').format(`LL`);
    datosLote.total_financiar = (datosSeleccionados.plan === "01" || datosSeleccionados.plan === "0") ? 0 : parseInt(datosSeleccionados.plan) === 0 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format((datosLote.precio_total - CantDescuento).toFixed(2)) : parseInt(datosSeleccionados.plan) > 60 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format((datosLote.precio_total) - ((textEncanche === "" ? 0 : parseFloat(textEncanche) * (parseFloat(datosLote.precio_total)) / 100)).toFixed(2)) : parseInt(datosSeleccionados.plan) === 60 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format((datosLote.precio_total - CantDescuento) - ((textEncanche === "" ? 0 : parseFloat(textEncanche) * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100)).toFixed(2)) : parseInt(datosSeleccionados.plan) <= 48 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format((datosLote.precio_total - CantDescuento) - ((textEncanche === "" ? 0 : parseFloat(textEncanche) * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100)).toFixed(2)) : "";
    datosLote.total_enganche = (datosSeleccionados.plan === "01" || datosSeleccionados.plan === "0") ? 0 : Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(((textEncanche === "" ? 0 : parseFloat(textEncanche) * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100)).toFixed(2));
    datosLote.total_enganche_apartado = Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format((datosLote.plazo_seleccionado === 60 ? (textEncanche === "" ? 0 : parseFloat(textEncanche) * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100).toFixed(2) : datosLote.plazo_seleccionado > 1 & datosLote.plazo_seleccionado < 60 ? (textEncanche === "" ? 0 : parseFloat(textEncanche) * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100).toFixed(2) : "") - 5000);
    datosLote.precio_metros_cuadra = Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(datosLote.precio_metro_cuadrado) + " MXN";
    datosLote.preciototal = Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(datosLote.precio_total) + " MXN";
    datosLote.preciototaldescuento = datosSeleccionados.plan === "01" ? datosLote.precio_total : parseInt(datosSeleccionados.plan) === 0 ? (datosLote.precio_total - CantDescuento) : parseInt(datosSeleccionados.plan) > 60 ? (datosLote.precio_total) - ((textEncanche === "" ? 0 : parseFloat(textEncanche) * (parseFloat(datosLote.precio_total)) / 100)).toFixed(2) : parseInt(datosSeleccionados.plan) === 60 ? (datosLote.precio_total - CantDescuento) - ((textEncanche === "" ? 0 : parseFloat(textEncanche) * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100)).toFixed(2) : parseInt(datosSeleccionados.plan) <= 48 ? (datosLote.precio_total - CantDescuento) - ((textEncanche === "" ? 0 : parseFloat(textEncanche) * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100)).toFixed(2) : "";
    datosLote.tipo_plan = datosSeleccionados.plan === "01" ? "PAGO DE CONTADO" : parseInt(datosLote.plazo_seleccionado) === 0 ? "PAGO DE CONTADO - 15% DESCUENTO" : parseInt(datosLote.plazo_seleccionado) > 60 ? datosLote.plazo_seleccionado === 481 ? 48 + ` MESES SIN INTERESES` : datosLote.plazo_seleccionado === 361 ? 36 + ` MESES SIN INTERESES` : datosLote.plazo_seleccionado === 241 ? 24 + ` MESES SIN INTERESES` : datosLote.plazo_seleccionado === 121 ? 12 + ` MESES SIN INTERESES` : datosLote.plazo_seleccionado === 61 ? 6 + ` MESES SIN INTERESES` : 0 + ` MESES SIN INTERESES` : datosLote.plazo_seleccionado + ` MESES SIN INTERESES - ${parseInt(datosLote.plazo_seleccionado) === 60 ? "5% DESCUENTO" : parseInt(datosLote.plazo_seleccionado) === 48 ? "0% DESCUENTO" : parseInt(datosLote.plazo_seleccionado) === 36 ? "3% DESCUENTO" : parseInt(datosLote.plazo_seleccionado) === 24 ? "5% DESCUENTO" : parseInt(datosLote.plazo_seleccionado) === 12 ? "7% DESCUENTO" : parseInt(datosLote.plazo_seleccionado) === 6 && "10% DESCUENTO"}`;
    datosLote.correo_colaborador = cookies.get("correo_colaborador");
    datosLote.nombre_colaborador = cookies.get("nombre_colaborador");
    datosLote.numero_colaborador = cookies.get("numero_colaborador");
    datosLote.plazo_seleccionado = parseInt(datosSeleccionados.plan);
    datosLote.descuento = Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(CantDescuento)


    // console.log(Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format((datosLote.plazo_seleccionado > 60 ? (10 * (parseFloat(datosLote.precio_total)) / 100).toFixed(2) : datosLote.plazo_seleccionado === 60 ? (10 * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100).toFixed(2) : datosLote.plazo_seleccionado > 1 & datosLote.plazo_seleccionado < 60 ? (10 * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100).toFixed(2) : "")))

    // let CantDescuento = Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format((parseInt(datosSeleccionados.plan) === 0 ? 25 : parseInt(datosSeleccionados.plan) === 12 ? 20 : parseInt(datosSeleccionados.plan) === 24 ? 18 : parseInt(datosSeleccionados.plan) === 36 ? 15 : parseInt(datosSeleccionados.plan) === 48 ? 12 : parseInt(datosSeleccionados.plan) === 60 && 10) * parseFloat(datosLote.precio_total) / 100);

    // console.log(datosLote.plazo_seleccionado === 481 ? 48 : datosLote.plazo_seleccionado === 361 ? 36 : datosLote.plazo_seleccionado === 241 ? 24 : datosLote.plazo_seleccionado === 121 ? 12 : datosLote.plazo_seleccionado === 61 ? 6 : 0)

    const enviarDatos = async () => {
        setEnviado(true)
        setTimeout(() => {
            axios.post(baseUrl + "/api/crear/cotizacion/pdf", datosLote)
                .then((response) => {
                    setEnviado(false)
                    saveAs(baseUrl + "/" + response.data.message, "Cotizacion.pdf");


                })
                .catch((error) => {
                    console.log(error)
                })
        }, 2000)
    }

    const enviarDatosApartar = async () => {
        setEnviado(true)
        setTimeout(() => {
            axios.post(baseUrl + "/api/apartado/pdf", datosLote)
                .then((response) => {
                    setEnviado(false)
                    saveAs(baseUrl + "/" + response.data.message, "Cotizacion.pdf");
                })
                .catch((error) => {
                    console.log(error)
                })
        }, 2000)
    }



    datosSeleccionados.total_financiar = parseFloat(datosLote.precio_total) - (20 * (parseFloat(datosLote.precio_total)) / 100)




    const [existe, setExiste] = useState(false);
    setTimeout(() => {
        setExiste(true)
    }, 4500)


    const cotizarAlert = (id) => {
        Swal.fire({
            title: `¿Deseas apartar el lote #${id}?`,
            text: `ksksksks`,
            html:
                `
                <a style="color:#4C4C4C; " href="https://wa.me/529991295931/?text=Quiero solicitar más información para poder apartar el lote: ${id} " target="_blank">
                <div style="width: 100%; display:flex; justify-content:center; align-items:center; margin-bottom:5px; ">
                <div style="width: 47px; height: 47px;  border-radius: 50%; display:flex; justify-content:center; align-items:center; "}}>
                <img style="width: 100%; height: 100%; object-fit: cover;"  src=${whatsapp} alt="Logo WhatsApp"></img> <br></br> 
                </div>
                </div>
                </a>
                `+
                `<a style="color:#4C4C4C; " href="https://wa.me/529991295931/?text=Quiero solicitar más información para poder apartar el lote: ${id} " target="_blank">Contactar a un asesor</a>`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `DESCARGAR COTIZACIÓN`,
            denyButtonText: `CANCELAR`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                enviarDatosApartar()

                // Swal.fire({
                //     // title: 'Cargando',
                //     text: 'Espere...',
                //     html:
                //         `<div class="spinner-border" role="status">
                //             <span class="sr-only">Loading...</span>
                //           </div>`,
                //     showConfirmButton: false,
                //     allowOutsideClick: true
                // })


            } else if (result.isDenied) {

            }
        })
    }

    useEffect(() => {

    }, [textEncanche])


    return (



        <Fragment>
            {!cookies.get('correo_colaborador') && <Redirect to="/colaboradores" />}
            <div className="contenedor-principal-cotizador">
                <NavBar />
                <div className="contenido-cotizador">

                    <p>Plano {item.nombre_desarrollo}</p>

                    <table className="table table-responsive">
                        <thead>
                            <tr>

                            </tr>
                        </thead>
                        <tbody style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflowX: 'scroll' }}>
                            <tr>
                                <th><label style={{ padding: '0px', background: '#70954a', border: 'none', width: '40px', height: '40px' }} /></th>
                                <td>Disponibles</td>
                                <th><label style={{ padding: '0px', background: '#ffff00', border: 'none', width: '40px', height: '40px' }} desabled /></th>
                                <td>Apartados</td>
                                <th><label style={{ padding: '0px', background: '#ff0000', border: 'none', width: '40px', height: '40px' }} desabled /></th>
                                <td>Vendidos</td>
                                <th><label style={{ padding: '0px', background: '#138f34', border: 'none', width: '40px', height: '40px' }} desabled /></th>
                                <td>A. Verdes</td>
                                <th><label style={{ padding: '0px', background: '#6462ac', border: 'none', width: '40px', height: '40px' }} desabled /></th>
                                <td>Casa Club</td>
                            </tr>
                        </tbody>

                    </table>

                    {existe ?
                        <ReactTooltip type="dark" place="top" data-multiline="true" id="tooltipbotom" >
                            <h2 style={datosTooltip.id_estado_lote === 1 ? { color: "#ff0000" } : datosTooltip.id_estado_lote === 2 ? { color: "#ffff00" } : datosTooltip.id_estado_lote === 3 ? { color: "#70954a" } : {}}>{datosTooltip.nombre_estado_lote}</h2>

                            <p><strong>Lote: </strong>{datosTooltip.nombre_lote} - {datosTooltip.metros_cuadrados}m<sup>2</sup></p>

                            <p><strong>{Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(datosTooltip.precio_total)} MXN</strong></p>

                        </ReactTooltip>
                        :
                        ""
                    }
                </div>


            </div>



            {existe ?
                <Plano data={data} numeroLotePropiedad={numeroLotePropiedad} abrirCotizador={abrirCotizador} />
                : <div style={{ width: '100wv', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ fontSize: '200px' }} className="spinner-grow text-dark" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>}





            <Modal size="xl" className="modal-cotizador" show={abrirModal} onHide={cerrarModal}>
                <Modal.Header closeButton>

                    <div className="titulo-modal">
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal" >
                        {/* <div className="alert alert-info" role="alert">
                            <strong>Info</strong>
                        </div> */}
                        <div className="contenedor-cotizador-modal">
                            <div className="modal-cotizador-lateral">
                                <label>Desarrollo</label>
                                <h4>{datosLote.nombre_desarrollo}</h4>

                                {/* <label>Modena de venta</label>
                                    <h4>MXN</h4>
                                  */}
                                <label>Lote</label>
                                <h4>{datosLote.nombre_lote}</h4>

                                <label>Área</label>
                                <h4>{datosLote.metros_cuadrados} m<sup>2</sup></h4>

                                <label>Precio por m<sup>2</sup></label>
                                <h4>{Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(datosLote.precio_metro_cuadrado)} MXN</h4>

                                <label>Precio de Lista</label>
                                <h4>{Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(datosLote.precio_total)} MXN</h4>
                            </div>

                            <div className="modal-tabla-cotizador">
                                <div className="modal-titulo-cotizador">
                                    <div className="alert alert-dark" role="alert">
                                        <h4>Cotizador</h4>
                                    </div>
                                </div>

                                <Form.Control as="select" name="plan" onChange={handleChange} >
                                    <option defaultValue>Seleccione un plan</option>

                                    {/* <option value="48">48 MESES SIN INTERES - 0% DESCUENTO</option>
                                    <option value="36">36 MESES SIN INTERES - 3% DESCUENTO</option>
                                    <option value="24">24 MESES SIN INTERES - 5% DESCUENTO</option>
                                    <option value="12">12 MESES SIN INTERES - 7% DESCUENTO</option>
                                    <option value="6">06 MESES SIN INTERES - 10% DESCUENTO</option> */}
                                    <option value="0">PAGO DE CONTADO - 15% DESCUENTO</option>
                                    <option value="01">PAGO DE CONTADO</option>

                                    {/* <option defaultValue>--------------------------------------------------------------</option> */}

                                    <option value="481">48 MESES SIN INTERES</option>
                                    <option value="361">36 MESES SIN INTERES</option>
                                    <option value="241">24 MESES SIN INTERES</option>
                                    <option value="121">12 MESES SIN INTERES</option>
                                    <option value="61">06 MESES SIN INTERES</option>
                                </Form.Control>

                                <div className="contenedor-opciones-pago">
                                    <label>Descuento: </label>
                                    <InputGroup className="mb-3" >
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1"><i className="fas fa-percentage"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            readOnly={true}
                                            name="enganche"
                                            onChange={handleChange}
                                            value={datosSeleccionados.plan === "" ? "" : parseInt(datosSeleccionados.plan) === 0 ? "15" : parseInt(datosSeleccionados.plan) === 6 ? "10" : parseInt(datosSeleccionados.plan) === 12 ? "7" : parseInt(datosSeleccionados.plan) === 24 ? "5" : parseInt(datosSeleccionados.plan) === 36 ? "3" : parseInt(datosSeleccionados.plan) === 48 ? "0" : parseInt(datosSeleccionados.plan) === 60 ? "5" : ""}
                                        />

                                    </InputGroup>
                                    <i className="fas fa-equals"></i>
                                    <InputGroup className="mb-3" >
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1"> <i className="fas fa-dollar-sign"></i> </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            readOnly
                                            value={Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(CantDescuento)}
                                        />
                                    </InputGroup>

                                </div>


                                {datosSeleccionados.plan === "01" || datosSeleccionados.plan === "0" ?
                                    <></>
                                    :
                                    <div className="contenedor-opciones-pago">
                                        <label>Enganche: </label>
                                        <InputGroup className="mb-3" >
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1"><i className="fas fa-percentage"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                // readOnly={true}
                                                min="0"
                                                max="3"

                                                name="enganche"
                                                onChange={handleChangeEnganche}
                                                value={textEncanche}
                                            />

                                        </InputGroup>
                                        {/* {console.log(datosLote.precio_total)} */}
                                        <i className="fas fa-equals"></i>
                                        <InputGroup className="mb-3" >
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1"> <i className="fas fa-dollar-sign"></i> </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                readOnly
                                                value={
                                                    textEncanche === "" ?
                                                        ""
                                                        :
                                                        Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(((parseFloat(textEncanche) * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100)).toFixed(2))
                                                    // datosSeleccionados.plan === "" ? "" : parseInt(datosSeleccionados.plan) === 0 ? "0" : parseInt(datosSeleccionados.plan) === 1 ? "0" : parseInt(datosSeleccionados.plan) > 60 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(((10 * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100)).toFixed(2)) : parseInt(datosSeleccionados.plan) === 60 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(((10 * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100)).toFixed(2)) : parseInt(datosSeleccionados.plan) <= 48 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(((10 * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100)).toFixed(2)) : ""
                                                }
                                            />
                                        </InputGroup>

                                    </div>
                                }

                                {datosSeleccionados.plan === "01" || datosSeleccionados.plan === "0" ?
                                    <></>
                                    :
                                    <div className="contenedor-opciones-pago">
                                        <label>Total a Financiar: </label>
                                        <InputGroup className="mb-3" >
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1"><i className="fas fa-percentage"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                readOnly
                                                value={
                                                    textEncanche === "" ?
                                                        datosSeleccionados.plan === "" ? "" : parseInt(datosSeleccionados.plan) === 0 ? "100" : parseInt(datosSeleccionados.plan) === 1 ? "100" : parseInt(datosSeleccionados.plan) > 60 ? "90" : parseInt(datosSeleccionados.plan) === 60 ? "90" : parseInt(datosSeleccionados.plan) <= 48 ? "90" : ""
                                                        :
                                                        100 - textEncanche
                                                }
                                            />
                                        </InputGroup>
                                        <i className="fas fa-equals"></i>
                                        <InputGroup className="mb-3" >
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1"> <i className="fas fa-dollar-sign"></i> </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                readOnly
                                                value={
                                                    datosSeleccionados.plan === "" ? "" : parseInt(datosSeleccionados.plan) === 0 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(datosLote.precio_total - CantDescuento) : parseInt(datosSeleccionados.plan) === 1 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(datosLote.precio_total) : parseInt(datosSeleccionados.plan) > 60 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format((datosLote.precio_total) - ((textEncanche === "" ? 0 : parseFloat(textEncanche) * (parseFloat(datosLote.precio_total)) / 100)).toFixed(2)) : parseInt(datosSeleccionados.plan) === 60 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format((datosLote.precio_total - CantDescuento) - ((textEncanche === "" ? parseFloat(textEncanche) : 10 * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100)).toFixed(2)) : parseInt(datosSeleccionados.plan) <= 48 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format((datosLote.precio_total - CantDescuento) - ((textEncanche === "" ? 0 : parseFloat(textEncanche) * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100)).toFixed(2)) : ""
                                                }
                                            />
                                        </InputGroup>
                                    </div>
                                }

                                {datosSeleccionados.plan === "01" || datosSeleccionados.plan === "0" ?
                                    <></>
                                    :
                                    <div className="contenedor-opciones-pago">
                                        <label>Mensualidades: </label>
                                        <InputGroup className="mb-3" >
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1"><i className="fas fa-hashtag"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                readOnly
                                                value={datosSeleccionados.plan === "" ? "" : !isNaN(parseInt(datosSeleccionados.plan)) & parseInt(datosSeleccionados.plan) === 481 ? 48 : parseInt(datosSeleccionados.plan) === 361 ? 36 : parseInt(datosSeleccionados.plan) === 241 ? 24 : parseInt(datosSeleccionados.plan) === 121 ? 12 : parseInt(datosSeleccionados.plan) === 61 ? 6 : parseInt(datosSeleccionados.plan) > 0 ? parseInt(datosSeleccionados.plan) : "1"}
                                            />
                                        </InputGroup>
                                        <i className="fas fa-equals"></i>
                                        <InputGroup className="mb-3" >
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1"> <i className="fas fa-dollar-sign"></i> </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                readOnly
                                                value={datosSeleccionados.plan === "" ? "" : parseInt(datosSeleccionados.plan) === 0 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(datosLote.precio_total - CantDescuento) : parseInt(datosSeleccionados.plan) === 1 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(datosLote.precio_total) : parseInt(datosSeleccionados.plan) === 60 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format((((datosLote.precio_total - CantDescuento) - ((textEncanche === "" ? 0 : parseFloat(textEncanche) * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100))) / 60).toFixed(2)) : parseInt(datosSeleccionados.plan) > 60 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format((((datosLote.precio_total - CantDescuento) - ((textEncanche === "" ? 0 : parseFloat(textEncanche) * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100))) / parseInt(datosSeleccionados.plan === "481" ? "48" : datosSeleccionados.plan === "361" ? "36" : datosSeleccionados.plan === "241" ? "24" : datosSeleccionados.plan === "121" ? "12" : datosSeleccionados.plan === "61" ? "6" : "0")).toFixed(2)) : parseInt(datosSeleccionados.plan) <= 48 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format((((datosLote.precio_total - CantDescuento) - ((textEncanche === "" ? 0 : parseFloat(textEncanche) * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100))) / parseInt(datosSeleccionados.plan)).toFixed(2)) : ""}
                                            />
                                        </InputGroup>
                                    </div>
                                }

                                {datosSeleccionados.plan === "01" || datosSeleccionados.plan === "0" ?
                                    <div className="contenedor-opciones-pago">
                                        <label>Total a liquidar </label>
                                        <InputGroup className="mb-3" >
                                            <InputGroup.Prepend>
                                                {/* <InputGroup.Text id="basic-addon1"><i className="fas fa-hashtag"></i></InputGroup.Text> */}
                                            </InputGroup.Prepend>

                                        </InputGroup>
                                        <i className="fas fa-equals"></i>
                                        <InputGroup className="mb-3" >
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1"> <i className="fas fa-dollar-sign"></i> </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                readOnly
                                                value={datosSeleccionados.plan === "" ? "" : parseInt(datosSeleccionados.plan) === 0 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(datosLote.precio_total - CantDescuento) : parseInt(datosSeleccionados.plan) === 1 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(datosLote.precio_total) : parseInt(datosSeleccionados.plan) === 60 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format((((datosLote.precio_total - CantDescuento) - ((textEncanche === "" ? 0 : parseFloat(textEncanche) * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100))) / 60).toFixed(2)) : parseInt(datosSeleccionados.plan) > 60 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format((((datosLote.precio_total - CantDescuento) - ((textEncanche === "" ? 0 : parseFloat(textEncanche) * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100))) / parseInt(datosSeleccionados.plan === "481" ? "48" : datosSeleccionados.plan === "361" ? "36" : datosSeleccionados.plan === "241" ? "24" : datosSeleccionados.plan === "121" ? "12" : datosSeleccionados.plan === "61" ? "6" : "0")).toFixed(2)) : parseInt(datosSeleccionados.plan) <= 48 ? Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format((((datosLote.precio_total - CantDescuento) - ((textEncanche === "" ? 0 : parseFloat(textEncanche) * (parseFloat(datosLote.precio_total) - parseFloat(CantDescuento)) / 100))) / parseInt(datosSeleccionados.plan)).toFixed(2)) : ""}
                                            />
                                        </InputGroup>
                                    </div>
                                    :
                                    <></>
                                }

                                {/* <div className="contenedor-opciones-pago">
                                    <label>Contra Entrega: </label>
                                    <InputGroup className="mb-3" >
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1"><i className="fas fa-percentage"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            readOnly
                                        />
                                    </InputGroup>
                                    <i className="fas fa-equals"></i>
                                    <InputGroup className="mb-3" >
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1"> <i className="fas fa-dollar-sign"></i> </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            readOnly
                                        />
                                    </InputGroup>
                                </div> */}

                                {
                                    enviado == true ?
                                        <div className="spinner-border text-dark" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                        : datosSeleccionados.plan == "" ?
                                            <Button variant="primary" onClick={enviarDatos} disabled>PDF</Button>
                                            :
                                            <div>
                                                <Button variant="primary" onClick={enviarDatos} > <i className="fas fa-file-pdf"></i> DESCARGAR COTIZACIÓN</Button>
                                                {/* <a href={`https://wa.me/529991295931/?text=Quisiera apartar el lote: ${datosLote.nombre_lote}, ¿Me podría brindar más información?`} target="_blank">
                                                    <Button style={{ marginLeft: '20px' }} variant="secondary" ><i className="fas fa-money-check-alt"></i> APARTAR</Button>
                                                </a> */}

                                                <Button onClick={() => cotizarAlert(datosLote.nombre_lote)} style={{ marginLeft: '20px' }} variant="secondary" ><i className="fas fa-money-check-alt"></i> APARTAR</Button>

                                            </div>
                                }




                            </div>
                        </div>

                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => cerrarModal()} >
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>





            <Modal size="lg" className="modal-cotizador" show={abrirModalNoDisponible} onHide={cerrarModalNoDisponible}>
                <Modal.Header closeButton>

                    <div className="titulo-modal">
                    </div>

                </Modal.Header>

                <Modal.Body>
                    <form className="form-modal" >


                        <div style={{ width: '100%' }} className="modal-titulo-cotizador">
                            <div className="alert alert-danger" role="alert">
                                <h4>LOTE NO DISPONIBLE</h4>
                            </div>
                        </div>



                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => cerrarModalNoDisponible()} >
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Footer />
            {/* <div style={{position:"absolue", bottom:"-100vh"}} className="boton-flotante-contacto" >
                <a href={`https://wa.me/529991295931/?text=Quiero recibir más información del desarrollo: *${datosSeleccionados.desarrollo === undefined ? "" : datosSeleccionados.desarrollo}*`} target="_blank">
                    <img title="Contactanos" src={whatsapp} alt="WhatsApp" />
                </a>
            </div> */}

        </Fragment>



    )
}

export default Cotizador;