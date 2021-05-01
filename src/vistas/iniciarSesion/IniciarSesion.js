import React, { Fragment, useState } from 'react';
import './IniciarSesion.css';
import { Link, Redirect } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';
import Cookies from 'universal-cookie';


import Footer from '../../componentes/footer/Footer';
import fondo from '../../imagenes/login.jpg';
import logoiniciosesion from '../../imagenes/iconos/logo-inicio-sesion.svg';
import flecha from '../../imagenes/iconos/flecha.png';


const IniciarSesion = () => {

    window.onload = window.scrollTo(0, 0);

    const baseUrl = window.$baseUrl;
    const cookies = new Cookies();

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

        if (credenciales.email.length <= 0) {
            MySwal.fire({
                title: "¡Ingresa tu correo electrónico!",
                background: '#353535',
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "2000"

            });
        } else if (credenciales.password.length <= 0) {
            MySwal.fire({
                title: "Ingresa tu contraseña",
                background: '#353535',
                icon: "warning",
                confirmButtonText: "Aceptar",
                timer: "2000"
            });
            setEnviado(true);
        } else {
            setEnviado(false);
            await axios.get(baseUrl + "/api/usuarios/" + credenciales.email + "/" + credenciales.password)
                .then(response => {

                    const savedata = response.data;

                    const datauser = (Object.keys(response.data).length);


                    if (datauser > 0) {
                        cookies.set('id_usuario', savedata.id_usuario, { path: "/" });
                        cookies.set('nombre_completo_usuario', savedata.nombre_completo_usuario, { path: "/" });
                        cookies.set('correo_usuario', savedata.correo_usuario, { path: "/" });

                        window.location.href = "/tablero";



                    } else {

                        MySwal.fire({
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


    const MySwal = withReactContent(Swal);

    const RecuperarContrasena = () => {
        MySwal.fire({
            title: 'Escriba su correo para enviarle su contraseña',
            background: '#353535',
            input: 'email',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Enviar',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                axios.get(baseUrl + "/api/usuarios/" + login)
                .then(response => {
        
                  const savedata = response.data;
                  const datauser = (Object.keys(response.data).length);
        
                    if (datauser > 0) {
        
                      let pass = savedata[0].contrasena_usuario;
                      let nom_usu = savedata[0].nombre_completo_usuario;
                        
                        axios.post(baseUrl + '/api/usuarios/resetpass', {  
                            nombre: nom_usu,
                            email: login,
                            password: pass
                        }).then(response => {
                          setEnviado(true);
                          Swal.fire({
                            title: "¡Contraseña enviada!",
                            text: `¡La contraseña fue enviado a: ${login}!, sino encuentra el correo verifica en sección de correos no deseados o Spam`,
                            icon: "success",
                            confirmButtonText: "Aceptar",
                            timer: "6000"
                        });
                        }).catch(e => {
                            console.log(e);
                        });
                        
        
                    } else {
                      setEnviado(true);
                      Swal.fire({
                            title: "¡Aviso!",
                            text: "¡El correo ingresado no se encuentra registrado!",
                            icon: "warning",
                            confirmButtonText: "Aceptar",
                            timer: "4000"
                        });
        
                    }
        
                })
                
                .catch(error => {
                    console.log(error);
                })
            },
            allowOutsideClick: () => !Swal.isLoading()
        })
    }


    return (
        <Fragment>
            {cookies.get('correo_usuario') && <Redirect to="./tablero" />}

            <div className="contenedor-iniciar-sesion">

                <div className="contenedor-formulario-inicio-sesion">
                    <form onSubmit={iniciarSesion} autoComplete="off">

                        <img src={logoiniciosesion} />

                        <label>Inicia Sesión</label>

                        <input type="email" name="email" onChange={handleInputChange} placeholder="Correo" />
                        <input type="password" name="password" onChange={handleInputChange} placeholder="Contraseña" />

                        <h4 onClick={RecuperarContrasena}>Olvidé mi contraseña</h4>

                        {enviado ?
                            <input type="submit" value="Enviar" />
                            :
                            <div className="spinner"></div>
                        }
                        <Link to="/">
                            <img id="flecha-regresar" src={flecha} />
                        </Link>

                    </form>
                </div>

                <div className="contenedor-fondo-inicio-sesion">

                    <img src={fondo} />
                </div>

            </div>

            <Footer />
        </Fragment>

    )
}

export default IniciarSesion;