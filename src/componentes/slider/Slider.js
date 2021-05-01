import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import './Slider.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';



import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import img1 from '../../imagenes/apartamento1.jpg';
import img3 from '../../imagenes/apartamento3.jpg';
import img4 from '../../imagenes/apartamento4.jpeg';
import img5 from '../../imagenes/apartamento5.jpg';
import img6 from '../../imagenes/apartamento6.jpg';
import img7 from '../../imagenes/apartamento7.jpg';

const Slider = () => {

    return (
        <Fragment>
            <div className="contenedor-slider">
                <div className="contenedor-slider-imagenes">
                    <Splide options={{
                        type: 'loop',
                        perPage: 1,
                        autoplay: true,
                        pauseOnHover: false,
                        isNavigation: false,
                        lazyLoad: true,
                    }}>

                        <SplideSlide>
                            <img src={img3} alt="apartamento" />
                            <div className="texto-imagen">
                                <h1>Para tú mejor inversión <br></br> <strong>Elige bien, elige con nosotros</strong> </h1>
                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <img src={img1} alt="apartamento" />
                            <div className="texto-imagen">
                                <h1>Tú idea, la volvemos realidad <br></br> <strong><Link to="/contacto" >¡Contáctanos!</Link></strong> </h1>
                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <img src={img4} alt="apartamento" />
                            <div className="texto-imagen">
                                <h1>¿Quieres cambiar de residencia? <br></br> <strong>Te ayudamos a encontrar la mejor opción</strong> </h1>
                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <img src={img5} alt="apartamento" />
                            <div className="texto-imagen">                                    
                                <h1>Deseas invertír <br></br> <strong>Nosotros te asesoramos para una mejor inversión</strong> </h1>
                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <img src={img6} alt="apartamento" />
                            <div className="texto-imagen">
                                <h1>¿Tienes propiedades y no sabes que hacer? <br></br> <strong><Link to="/contacto" >¡Contáctanos!</Link></strong> </h1>
                            </div>
                        </SplideSlide>

                        <SplideSlide>
                            <img src={img7} alt="apartamento" />
                            <div className="texto-imagen">
                                <h1>¿Quiéres promover nuestros desarrollos? <br></br> <strong><Link to="/colaboradores" >¡Quiero ser colaborador!</Link></strong> </h1>
                            </div>
                        </SplideSlide>

                    </Splide>
                </div>
            </div>

        </Fragment>
    )
}

export default Slider;