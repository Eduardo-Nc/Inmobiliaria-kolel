import React, { Fragment, useState, useEffect } from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import NavBar from '../../componentes/navBar/NavBar';
import Footer from '../../componentes/footer/Footer';
import ChatBot from '../../componentes/botonChatbot/botonChatbot';
import fondoServicios from '../../imagenes/fondo-blog-header.jpg';
import moment from 'moment';
import axios from 'axios';

import 'moment/locale/es';
moment.locale('es');



const Blog = () => {

    const baseUrl = window.$baseUrl;
    const nubeUrl = window.$nubeUrl;

    const [data, setData] = useState([1]);
    const [cargando, setCargando] = useState(false);


    const peticionGet = async () => {
        setCargando(false)
        await axios.get(baseUrl + "/api/todos/blogs")
            .then(response => {
                setData(response.data);
                setCargando(true);
            }).catch(error => {
                console.log(error);
                setCargando(true);
            })

        setCargando(true);
    }

    // console.log(data)

    useEffect(() => {
        peticionGet()
    }, [])

    return (
        <Fragment>
            <NavBar />
            <div className="contenedor-prin-blog">


                <div className="content-principal-items-blog">

                    <div data-aos="fade-left" style={{ marginTop: '-25px', marginBottom: '35px' }} className="contenedor-fondo-servicios">
                        <img alt="Fondo servicios" title="Fondo servicios" src={fondoServicios} />
                        <div className="contenedor-textos-fondo-servicios">
                            {/* <h1>Servicios</h1> */}
                            <p className="text-header-blog" style={{ fontSize: '35px', fontWeight: 'bold', color: 'white' }}>¡Que no te lo inviertan! </p>
                        </div>
                    </div>

                    {
                        cargando ?
                            data.length > 0 ?
                                <>
                                    {data.map(item =>
                                        <Link key={item.id_blog} to={`/blog-detalles/${item.id_blog}`} className="content-prin-item-blog">

                                            <div className="cont-img-blog">
                                                <div style={{ background: '#d7d7d7' }}>
                                                    <img src={nubeUrl + item.caratula + ".jpg"} />
                                                </div>
                                            </div>

                                            <div className="cont-title-detalles-blog">
                                                <div className="cont-desc-title">
                                                    <h2>{item.titulo}</h2>
                                                    {/* <h2>Yucalpetén Resort Marina, la imperdible inversión en la Costa Yucateca</h2> */}
                                                </div>
                                                <div className="cont-desc-fecha-blog">
                                                    <label style={{ textTransform: "capitalize" }}>
                                                        <i style={{ marginRight: '7px' }} className="fas fa-calendar"></i>
                                                        {moment(item.fecha_creacion).format('MMMM DD, YYYY')}
                                                    </label>
                                                    <div className="barra-fecha"></div>
                                                </div>

                                                <div className="cont-description-blog">
                                                    <p>{item.descripcion}</p>
                                                </div>

                                                <div className="cont-btn-blog">
                                                    <a style={{ color: "#c9a857" }} >
                                                        Continua Leyendo...
                                                    </a>
                                                </div>
                                            </div>
                                        </Link>
                                    )}

                                </>
                                :
                                <div style={{ width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Sin Información</p>
                                </div>
                            :

                            <div style={{ width: '100vw', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ fontSize: '200px' }} className="spinner-grow text-dark" role="status">
                                    <span className="sr-only"></span>
                                </div>
                            </div>
                    }


                </div>

            </div>

            <Footer />
            <ChatBot />
        </Fragment>
    )
}


export default Blog;