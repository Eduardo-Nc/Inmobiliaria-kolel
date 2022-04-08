import React, { Fragment, useState, useEffect } from 'react';
import './Disponibilidad.css';
import { Redirect, Link } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import whatsapp from '../../imagenes/whatsapp.png';

import Swal from 'sweetalert2'
import Cookies from 'universal-cookie';
import axios from 'axios';

const Disponibilidad = () => {

    const nubeUrl = window.$nubeUrl;
    const baseUrl = window.$baseUrl;
    const cookies = new Cookies();

    const [datosSeleccionados, setDatosSeleccionados] = useState({});

    const [data, setData] = useState([]);
    const [info, setInfo] = useState([]);
    const [desarrollo, setDesarrollo] = useState([]);

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

        await axios.get(baseUrl + "/api/obtener/desarrollos")
            .then(response => {
                setDesarrollo(response.data)
            })
            .catch(error => {
                console.log(error.message)
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

            <div className="contenedor-principal-disponibilidad">
                <NavBar />
                <div className="contenido-disponibilidad">

                    <div className="contenedor-info-disponibilidad">

                        <p>Cotizador</p>

                        <div>

                            {desarrollo.map(item =>

                                <div key={item.id_desarrollo} className="card zoom" style={{ width: "15rem", background: "rgba(0, 0, 0, 0.692)", marginBottom: "20px", marginLeft: "20px", marginRight: "20px" }}>
                                    <Link to={{ pathname: "/cotizador", item }} >
                                    <img className="card-img-top" src={nubeUrl + item.imagen_logo_desarrollo} alt="Card image cap" />
                                    </Link>
                                    <div className="card-body">
                                        <h5 style={{ color: "white", textAlign: "center" }} className="card-title">{item.nombre_desarrollo}</h5>
                                        <Link style={{ width: "100%", marginTop: "10px" }} to={{ pathname: "/cotizador", item }} className="btn btn-primary">Cotizar</Link>
                                    </div>
                                    
                                </div>
                             
                            )}
                    </div>


                </div>



            </div>



            <Footer />
            <div className="boton-flotante-contacto" >
                <a href={`https://wa.me/529991295931/?text=Quiero recibir más información del desarrollo: *${datosSeleccionados.desarrollo === undefined ? "" : datosSeleccionados.desarrollo}*`} target="_blank">
                    <img title="Contactanos" src={whatsapp} alt="WhatsApp" />
                </a>
            </div>

            </div>

        </Fragment >
    )


}

export default Disponibilidad;