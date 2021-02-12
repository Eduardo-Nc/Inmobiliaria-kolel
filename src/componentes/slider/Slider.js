import React, { Fragment } from 'react';
import './Slider.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import MenuFiltros from './../menuFiltro/MenuFiltros';


import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import img1 from '../../imagenes/apartamento1.jpg';
import img2 from '../../imagenes/apartamento1.jpg';

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
                        isNavigation: false,
                        lazyLoad: true
                    }}>

                        <SplideSlide>
                            <img src={img1} alt="apartamento" />
                        </SplideSlide>

                    </Splide>
                </div>
            </div>

            <MenuFiltros />
            
        </Fragment>
    )
}

export default Slider;