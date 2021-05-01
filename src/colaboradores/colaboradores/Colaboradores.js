import React, { Fragment, useState, useEffect } from 'react';
import './Colaboradores.css';
import fondo from '../../imagenes/fondo-login-colaboradores.jpg';
import logo from '../../imagenes/logoverticalblanco.png';
import usuario from '../../imagenes/iconos/icono-usuario.png';
import candado from '../../imagenes/iconos/candado.png';
import { Link, Redirect } from 'react-router-dom';
import flecha from '../../imagenes/iconos/flecha.png';

import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';

const Colaboradores = () => {

    const cookies = new Cookies();
    const baseUrl = window.$baseUrl;



    const [credenciales, setCredenciales] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (event) => {
        setCredenciales({
            ...credenciales,
            [event.target.name]: event.target.value,
        });
    };


    const [enviado, setEnviado] = useState(true);

    const iniciarSesion = async (e) => {

        e.preventDefault();

        if (!credenciales.email) {
            Swal.fire({
                title: "¡Ingresa tu correo electrónico!",
                background: '#353535',
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "2000"

            });
            return
        } else if (!credenciales.password) {
            Swal.fire({
                title: "Ingresa tu contraseña",
                background: '#353535',
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "2000"
            });
            setEnviado(true);
        } else {
            setEnviado(false);
            await axios.get(baseUrl + "/api/colaborador/" + credenciales.email + "/" + credenciales.password)
                .then(response => {

                    const savedata = response.data;

                    const datauser = (Object.keys(response.data).length);


                    if (datauser > 0) {
                        cookies.set('id_colaborador', savedata.id_colaborador, { path: "/" });
                        cookies.set('nombre_colaborador', savedata.nombre_colaborador, { path: "/" });
                        cookies.set('correo_colaborador	', savedata.correo_colaborador, { path: "/" });

                        window.location.href = "/informacion";



                    } else {

                        Swal.fire({
                            title: "El usuario o la contraseña no son correctos",
                            background: '#353535',
                            icon: "warning",
                            confirmButtonText: "Aceptar",
                            timer: "4500"
                        });
                        setEnviado(true);
                    }

                })

                .catch(error => {
                    console.log(error);
                })

        }

    }



    return (
        <Fragment>

            {cookies.get('correo_colaborador') && <Redirect to="./informacion" />}

            <div className="contenedor-login-colaboradores">
                <img src={fondo} alt="fondo" />

                <div className="contenido-login-colaboradores">

                    <div className="">
                        <img alt="Logo Koolel Kaab" src={logo} />
                    </div>


                    <form autoComplete="off" className="form-login-colaboradores" onSubmit={iniciarSesion} >
                        <div className="contenedor-input-colaboradores">
                            <img src={usuario} alt="Usuario" />
                            <input type="email" placeholder="Correo electrónico" onChange={handleInputChange} name="email" />
                        </div>
                        <div className="contenedor-input-colaboradores">
                            <img src={candado} alt="Candado" />
                            <input type="password" placeholder="Contraseña" onChange={handleInputChange} name="password" />
                        </div>

                        {enviado ?
                            <div className="contenedor-input-colaboradores">
                                <input type="submit" value="Ingresar" />
                            </div>

                            :
                            <div style={{marginBottom:'25px'}} className="spinner"></div>
                        }

                        <div className="contenedor-label-colaboradores">
                            <Link to="/registro-colaboradores">Registrarse</Link>
                        </div>

                    </form>

                    <Link to="/"><img id="flecha" src={flecha} alt="Regresar" title="Regresar" /></Link>

                </div>

            </div>



        </Fragment>
    )
}

export default Colaboradores;