import React, { Fragment } from 'react';
import './Slider.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import MenuFiltros from './../menuFiltro/MenuFiltros';


import '@splidejs/splide/dist/css/themes/splide-default.min.css';
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
                        lazyLoad: true,
                        
                    }}>

                        <SplideSlide>
                            <img src={img1} alt="apartamento" />
                            <div className="texto-imagen"><h1>Lo que comienza como una idea, se convierte en realidad</h1></div>
                        </SplideSlide>

                    </Splide>
                </div>
            </div>

            <MenuFiltros />

        </Fragment>
    )
}

export default Slider;