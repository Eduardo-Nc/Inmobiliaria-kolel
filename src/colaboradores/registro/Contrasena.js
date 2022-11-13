import React, { Fragment, useState, useEffect } from 'react';
import './Registro.css';
import fondo from '../../imagenes/fondo-registrocolaboradores.jpg';
import flecha from '../../imagenes/iconos/flecha.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import logo from '../../imagenes/logoverticalblanco.png';


const Contrasena = () => {

    const [estados, setEstados] = useState([]);
    const [municipios, setMunicipios] = useState([]);
    const [datosSeleccionados, setDatosSeleccionados] = useState({});
    const [correoSelec, setCorreoSelec] = useState({});
    const [cargando, setCargando] = useState(false);

    const baseUrl = window.$baseUrl;


    const peticionGet = async () => {

        await axios.get(baseUrl + "/api/registro/colaboradores/" + datosSeleccionados.correo)
            .then(response => {
                setCorreoSelec(response.data)
            })
            .catch(error => {
                console.log(error)
            })


    }


    useEffect(() => {
        peticionGet();
    }, [datosSeleccionados])




    const handleChange = e => {
        const { name, value } = e.target;
        setDatosSeleccionados((prevState) => ({
            ...prevState,
            [name]: value
        }))

    }


    const peticionPost = async (event) => {

        event.preventDefault();

        if (!datosSeleccionados.correo) {
            Swal.fire({
                title: "¡Ingrese su correo electrónico!",
                background: '#353535',
                icon: "warning",
                confirmButtonText: `Aceptar`,
            })
            return
        }


        setCargando(true)

        await axios.get(baseUrl + "/api/usuarios/correo/" + datosSeleccionados.correo, {})
            .then(response => {

                console.log(response.data)
                enviarCredencialesUsuarios(response.data);

            })
            .catch(error => {
                Swal.fire({
                    position: 'top-end',
                    background: '#353535',
                    icon: 'success',
                    title: 'Error',
                    text: "No se encontró el correo electrónico",
                    confirmButtonText: "Aceptar",
                    timer: "5000"
                })
                setCargando(false)
                document.getElementById("formulario").reset();
                setDatosSeleccionados({});
                console.error(error)
            })
    }


    const enviarCredencialesUsuarios = (data) => {

        axios.post(baseUrl + '/api/colaboradores/enviarcredenciales/pass', {
            nombre: data.nombre_completo_usuario,
            email: data.correo_usuario,
            password: data.contrasena_usuario
        }).then(response => {
            Swal.fire({
                position: 'top-end',
                background: '#353535',
                icon: 'success',
                title: '¡Felicidades, su contraseña fue enviada a su correo electrónico!',
                text: "Sino encuentra el correo con sus datos de acceso verifica en sección de correos no deseados o Spam",
                confirmButtonText: "Aceptar",
                timer: "5000"
            })

            setCargando(false)
            document.getElementById("formulario").reset();
            setDatosSeleccionados({});

        }).catch(e => {
            Swal.fire({
                position: 'top-end',
                background: '#353535',
                icon: 'success',
                title: 'Error',
                text: "No se encontró el correo electrónico",
                confirmButtonText: "Aceptar",
                timer: "5000"
            })
            setCargando(false)
            document.getElementById("formulario").reset();
            setDatosSeleccionados({});
            console.log(e);
        });

    }


    return (

        <div className="contenedor-registro-colaboradores">
            <img src={fondo} alt="fondo" />

            <div className="contenido-registro-colaboradores">
                <h1>Recuperación de contraseña</h1>
                <p>Proporcione su correo para enviarle instrucciones de recuperación de contraseña</p>
                {/* <strong>¡Juntos logremos cosas increibles!</strong> */}

                <div className="contenedor-form-div-registro">

                    <form id="formulario" autoComplete="off" className="form-registro-contrasena" onSubmit={peticionPost}>
                        <input name="correo" onChange={handleChange} type="email" placeholder="Correo electrónico" />

                        {cargando ?
                            <div className="spinner"></div>
                            :
                            <input type="submit" value="Enviar" />
                        }
                    </form>

                    <div className="div-registro">

                        <img src={logo} alt="logo" />

                    </div>

                </div>
                <Link to="/colaboradores"><img src={flecha} width="35px" alt="Regresar" title="Regresar" /></Link>
            </div>


        </div>

    )
}

export default Contrasena;