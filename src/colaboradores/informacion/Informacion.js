import React, { Fragment, useState, useEffect } from 'react';
import './Informacion.css';


import { Redirect } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import whatsapp from '../../imagenes/whatsapp.png';

import Swal from 'sweetalert2'
import Cookies from 'universal-cookie';
import axios from 'axios';

const Informacion = () => {

    const nubeUrl = window.$nubeUrl;
    const baseUrl = window.$baseUrl;
    const cookies = new Cookies();

    const [datosSeleccionados, setDatosSeleccionados] = useState({});

    const [data, setData] = useState([]);
    const [info, setInfo] = useState([]);

    // console.log(datosSeleccionados)

    const peticionGet = async () => {
        await axios.get(baseUrl + "/api/obtener/desarrollos")
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log(error)
            })

        await axios.get(baseUrl + "/api/obtener/desarrollos/" + datosSeleccionados.desarrollo)
            .then(response => {
                setInfo(response.data)
            })
            .catch(error => {
                console.log(error)
            })

    }


    useEffect(() => {
        peticionGet()
    }, [datosSeleccionados])

    const handleChange = (e) => {

        setDatosSeleccionados({
            ...datosSeleccionados,
            [e.target.name]: e.target.value,
        });

    };


    const link = datosSeleccionados.informacion;




    const revisar = () => {


        if (!datosSeleccionados.informacion)
            Swal.fire({
                title: "¡Elija que información necesita!",
                icon: "warning",
                background: '#353535',
                confirmButtonText: "Aceptar",
                timer: "4000"
            });

        if (!datosSeleccionados.desarrollo)
            Swal.fire({
                title: "¡Elija un desarrollo!",
                icon: "warning",
                background: '#353535',
                confirmButtonText: "Aceptar",
                timer: "4000"
            });


    }


    return (
        <Fragment>
            {!cookies.get('correo_colaborador') && <Redirect to="/colaboradores" />}

            <div className="contenedor-principal-informacion">
                <NavBar />
                <div className="contenido-informacion">

                    <div className="contenedor-info-colaboradores">

                        <p>Dejamos a su alcance la información los desarrollos con los que contamos actualmente</p>

                        <form id="myForm">

                            <label>Seleccione un desarrollo</label>
                            {data.map(item =>
                                <div key={item.id_desarrollo} className="form-check">
                                    <input className="form-check-input" value={item.nombre_desarrollo} onChange={handleChange} type="radio" name="desarrollo" id={item.id_desarrollo} />
                                    <label className="form-check-label" htmlFor={item.id_desarrollo}>
                                        {item.nombre_desarrollo}
                                    </label>
                                </div>
                            )}


                            <div className="form-group">

                                <select className="form-control" required onChange={handleChange} name="informacion" id="exampleFormControlSelect1" >
                                    <option value="" defaultValue>Seleccione una opción</option>

                                    {!info.brochure ? "" : <option value={info.brochure}>Brochure</option>}
                                    {/* {!info.master_plan ? "" : <option value={info.master_plan}>Master Plan</option>} */}
                                    {/* {!info.lista_disponibilidad ? "" : <option value={info.lista_disponibilidad}>Lista de disponibilidad</option>} */}

                                </select>
                            </div>

                            {
                                !datosSeleccionados.desarrollo || !datosSeleccionados.informacion ?

                                    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className="cont-boton-enviar">
                                        <a onClick={revisar} > <i style={{ color: "white" }} className="fas fa-download"></i> </a>
                                    </div>

                                    :

                                    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className="cont-boton-enviar">
                                        <a onClick={revisar} href={nubeUrl + link} target="_blank" download > <i className="fas fa-download"></i> </a>
                                    </div>
                            }


                        </form>

                    </div>



                </div>



                <Footer />
                <div className="boton-flotante-contacto" >
                    <a href={`https://wa.me/529991295931/?text=Quiero recibir más información del desarrollo: *${datosSeleccionados.desarrollo === undefined ? "" : datosSeleccionados.desarrollo}*`} target="_blank">
                        <img title="Contactanos" src={whatsapp} alt="WhatsApp" />
                    </a>
                </div>

            </div>

        </Fragment>
    )


}

export default Informacion;