import React, { Fragment, useState, useEffect } from 'react';
import './Registro.css';
import fondo from '../../imagenes/fondo-registrocolaboradores.jpg';
import flecha from '../../imagenes/iconos/flecha.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import logo from '../../imagenes/logoverticalblanco.png';


const Registro = () => {

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

        if (!datosSeleccionados.nombre) {
            Swal.fire({
                title: "¡Ingrese su nombre completo!",
                background: '#353535',
                icon: "warning",
                confirmButtonText: `Aceptar`,
            })
            return
        }

        else if (!datosSeleccionados.numero) {
            Swal.fire({
                title: "¡Ingrese su número telefónico!",
                background: '#353535',
                icon: "warning",
                confirmButtonText: `Aceptar`,
            })
            return
        }

        else if (datosSeleccionados.numero.length < 10) {
            Swal.fire({
                title: "¡Número telefónico incompleto!",
                background: '#353535',
                icon: "warning",
                confirmButtonText: `Aceptar`,
            })
            return
        }

        else if (!datosSeleccionados.correo) {
            Swal.fire({
                title: "¡Ingrese su correo electrónico!",
                background: '#353535',
                icon: "warning",
                confirmButtonText: `Aceptar`,
            })
            return
        }

        else if (correoSelec.length >= 1) {
            Swal.fire({
                title: "¡El correo ingresado ya se encontra registrado!",
                background: '#353535',
                icon: "warning",
                confirmButtonText: `Aceptar`,
            })
            return
        }


        else if (!datosSeleccionados.relacion) {
            Swal.fire({
                title: "¡Ingrese la relacion que tiene con nosotros!",
                background: '#353535',
                icon: "warning",
                confirmButtonText: `Aceptar`,
            })
            return
        }

        else if (!datosSeleccionados.estado) {
            Swal.fire({
                title: "¡Ingrese su estado!",
                background: '#353535',
                icon: "warning",
                confirmButtonText: `Aceptar`,
            })
            return
        }

        else if (!datosSeleccionados.municipio) {
            Swal.fire({
                title: "¡Ingrese su municipio!",
                background: '#353535',
                icon: "warning",
                confirmButtonText: `Aceptar`,
            })
            return
        }

        else if (!datosSeleccionados.direccion) {
            Swal.fire({
                title: "¡Ingrese su direccion!",
                background: '#353535',
                icon: "warning",
                confirmButtonText: `Aceptar`,
            })
            return
        }



        setCargando(true)
        let caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
        let GenerarContrasena = "IKK-";
        for (let i = 0; i < 5; i++) GenerarContrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));


        await axios.post(baseUrl + "/api/registro/colaboradores", {

            nombre_colaborador: datosSeleccionados.nombre,
            numero_colaborador: datosSeleccionados.numero,
            correo_colaborador: datosSeleccionados.correo,
            tipo_colaborador: datosSeleccionados.relacion,
            estado_colaborador: datosSeleccionados.estado,
            municipio_colaborador: datosSeleccionados.municipio,
            direccionestado_colaborador: datosSeleccionados.direccion,
            contrasena_colaborador: GenerarContrasena

        })
            .then(response => {

                Swal.fire({
                    position: 'top-end',
                    background: '#353535',
                    icon: 'success',
                    title: '¡Felicidades, fuiste registrado correctamente!',
                    text: "Sino encuentra el correo con sus datos de acceso verifica en sección de correos no deseados o Spam",
                    confirmButtonText: "Aceptar",
                    timer: "5000"
                })

                setCargando(false)
                enviarCredencialesUsuarios(GenerarContrasena);


                setTimeout(() => {
                    document.getElementById("formulario").reset();
                    setDatosSeleccionados({});
                }, 900)


                setTimeout(() => {
                    window.location.href = "/colaboradores";
                }, 5500)

            })
            .catch(error => {
                console.error(error)
            })
    }


    const enviarCredencialesUsuarios = (GenerarContrasena) => {

        axios.post(baseUrl + '/api/colaboradores/enviarcredenciales', {
            nombre: datosSeleccionados.nombre,
            email: datosSeleccionados.correo,
            password: GenerarContrasena
        }).then(response => {

        }).catch(e => {
            console.log(e);
        });

    }


    return (

        <div className="contenedor-registro-colaboradores">
            <img src={fondo} alt="fondo" />

            <div className="contenido-registro-colaboradores">
                <h1>Gracias por el interés</h1>
                <p> <strong>Inmobiliaria Koolel Kaab</strong> te invita a que formes parte de su equipo... </p>
                <strong>¡Juntos logremos cosas increibles!</strong>

                <div className="contenedor-form-div-registro">

                    <form id="formulario" autoComplete="off" className="form-registro" onSubmit={peticionPost}>
                        <input name="nombre" onChange={handleChange} type="text" placeholder="Nombre Completo" />
                        <input name="numero" maxLength="10" maxLength="10" onChange={handleChange} type="text" placeholder="Número Celular" />
                        <input name="correo" onChange={handleChange} type="email" placeholder="Correo electrónico" />
                        <select name="relacion" onChange={handleChange} placeholder="Relación Laboral"  >
                            <option value="" defaultValue>Seleccione una opción</option>
                            <option value="Interno">Interno</option>
                            <option value="Externo">Externo</option>
                        </select>

                        <input name="estado" type="text" placeholder="Ingrese su estado" onChange={handleChange} />


                        <input name="municipio" type="text" placeholder="Ingrese su municipio" onChange={handleChange} />


                        <input name="direccion" onChange={handleChange} type="text" placeholder="Dirección" />
                        {cargando ?
                            <div className="spinner"></div>
                            :
                            <input type="submit" value="Registrarme" />
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

export default Registro;