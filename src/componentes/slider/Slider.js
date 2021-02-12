import React, { Fragment } from 'react';
import './Slider.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import img1 from '../../imagenes/apartamento.jpg';
import img2 from '../../imagenes/apartamento2.jpg';

const Slider = () => {
    return (
        <Fragment>
            <div className="contenedor-slider">
                <div data-aos="fade-up" className="contenedor-slider-imagenes">
                    <Splide options={{
                        type: 'loop',
                        perPage: 1,
                        autoplay: true,
                        pauseOnHover: false,

                    }}
                    >
                        <SplideSlide>
                            <img src={img1} alt="apartamento" />
                        </SplideSlide>

                        <SplideSlide>
                            <img src={img2} alt="apartamento2" />
                        </SplideSlide>
                        
                    </Splide>
                </div>
            </div>
        </Fragment>
    )
}

export default Slider;