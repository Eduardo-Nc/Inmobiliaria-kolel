import React, { Fragment, useState, useEffect } from 'react';
import './BlogDetalles.css';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../../componentes/navBar/NavBar';
import Footer from '../../componentes/footer/Footer';
import moment from 'moment';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import 'moment/locale/es';
moment.locale('es');



const BlogDetalles = () => {


    const baseUrl = window.$baseUrl;
    const nubeUrl = window.$nubeUrl;
    const params = useParams();
    // console.log(params.id)

    const [data, setData] = useState([]);
    const [cargando, setCargando] = useState(false);


    const [data2, setData2] = useState([]);
    const [cargando2, setCargando2] = useState(false);

    const peticionGet = async () => {
        setCargando(false)
        await axios.get(baseUrl + "/api/obtener/blog/" + params.id)
            .then(response => {
                setData(response.data);
                setCargando(true);
            }).catch(error => {
                console.log(error);
                setCargando(true);
            })
        setCargando(true);


        setCargando2(false)
        await axios.get(baseUrl + "/api/obtener/blogs/id/" + params.id)
            .then(response => {
                setData2(response.data);
                setCargando2(true);
            }).catch(error => {
                console.log(error);
                setCargando2(true);
            })
        setCargando2(true);

    }

    console.log(data2)

    useEffect(() => {
        peticionGet()
    }, [params.id])


    return (
        <Fragment>
            <NavBar />

            {
                cargando ?
                    <>
                        <div className="cont-principal-blogdesc-final">

                            <div className="cont-1-desc-principal-item">

                                <div className="cont-title-detalles-blog-decs">
                                    <div className="cont-desc-title-decs">
                                        <h2>{data && data[0].titulo}</h2>
                                    </div>
                                    <div className="cont-desc-fecha-blog-decs">
                                        <label style={{ textTransform: "capitalize" }}>
                                            <i style={{ marginRight: '7px' }} className="fas fa-calendar"></i>
                                            {moment(data && data[0].fecha_creacion).format('MMMM DD, YYYY')}
                                        </label>
                                    </div>
                                </div>

                                <div className="cont-img-blog-decs">
                                    {
                                        data.length > 0 ?
                                            <img src={nubeUrl + data[0].caratula + ".jpg"} />
                                            :
                                            <img src="" />
                                    }
                                </div>

                                <div className="cont-description-blog-decs">
                                    {/* <p>{data[0].descripcion}</p> */}
                                    {/* {ReactHtmlParser(data[0].content)} */}
                                    <div dangerouslySetInnerHTML={{ __html: data && data[0].content }}></div>
                                </div>

                            </div>

                            <div className="cont-2-desc-principal-item">
                                <h2>Lo más reciente</h2>

                                {
                                    cargando2 ?
                                        data2.length > 0 ?

                                            <>
                                                {
                                                    data2.map(item =>
                                                        <Link key={item.id_blog} to={`/blog-detalles/${item.id_blog}`} className="cont-2-desc-item-desc">
                                                            <div>
                                                                <img src={nubeUrl + item.caratula + ".jpg"} />
                                                            </div>
                                                            <h4 style={{ color: 'black' }}>{item.titulo}</h4>
                                                        </Link>

                                                    )}
                                            </>

                                            :
                                            <p style={{ fontSize: '16px', fontWeight: 450 }}>Sin Información</p>
                                        :
                                        <div style={{ width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                            <div style={{ fontSize: '200px' }} className="spinner-grow text-dark" role="status">
                                                <span className="sr-only"></span>
                                            </div>
                                        </div>
                                }

                            </div>

                        </div>

                        <>
                            <div className="contenedor-principal-movil-blog-decs">
                                <div className="cont-prin-movil-blog-titulo">
                                    <h2>{data && data[0].titulo}</h2>
                                    <Link to="/blog" >
                                        Regresar
                                    </Link>


                                </div>

                                <div className="cont-prin-movil-blog-caratula">
                                    <div>
                                        {
                                            data.length > 0 ?
                                                <img src={nubeUrl + data[0].caratula + ".jpg"} />
                                                :
                                                <img src="" />
                                        }
                                    </div>
                                    <label style={{ textTransform: "capitalize" }}>
                                        <i style={{ marginRight: '7px' }} className="fas fa-calendar"></i>
                                        {moment(data && data[0].fecha_creacion).format('MMMM DD, YYYY')}
                                    </label>
                                </div>

                                <div className="cont-prin-movil-blog-contenido">
                                    {/* <div className="cont-prin-movil-blog-contenido-interno" dangerouslySetInnerHTML={{ __html: data[0].content }}></div> */}
                                    {ReactHtmlParser(data && data[0].content)}
                                </div>



                                <div className="cont-prin-movil-blog-cont-mas-items">
                                    <p>Lo más visto</p>
                                </div>

                                <div className="cont-prin-movil-blog-cont-mas-items-todos">


                                    {
                                        cargando2 ?
                                            data2.length > 0 ?

                                                <>
                                                    {
                                                        data2.map(item =>
                                                            <Link key={item.id_blog} to={`/blog-detalles/${item.id_blog}`}>
                                                                <div className="cont-prin-todos-img">
                                                                    <div>
                                                                        <img src={nubeUrl + item.caratula + ".jpg"} />
                                                                    </div>
                                                                </div>
                                                                <div className="cont-prin-todos-p">
                                                                    <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.</p>
                                                                </div>
                                                            </Link>
                                                        )}
                                                </>

                                                :
                                                <p style={{ fontSize: '16px', fontWeight: 450 }}>Sin Información</p>
                                            :
                                            <div style={{ width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                                <div style={{ fontSize: '200px' }} className="spinner-grow text-dark" role="status">
                                                    <span className="sr-only"></span>
                                                </div>
                                            </div>
                                    }


                                </div>
                            </div>
                        </>

                    </>

                    :
                    <div style={{ marginTop: '10px', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ fontSize: '200px' }} className="spinner-grow text-dark" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
            }



            <Footer />
        </Fragment>
    )
}


export default BlogDetalles;