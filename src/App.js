import React, { Fragment } from 'react';
import './App.css';
import NavBar from './componentes/navBar/NavBar';
import Slider from './componentes/slider/Slider';
import QuienesSomos from './componentes/quienesSomos/QuienesSomos';
import Servicios from './componentes/servicios/Servicios';
import MenuFiltros from './componentes/menuFiltro/MenuFiltros';
import TarjetaCasa from './componentes/tarjetaCasa/TarjetaCasa';
import Footer from './componentes/footer/Footer';


const App = () => {



  return (
    <Fragment>
      <div className="contenedor-principal-app">
        <NavBar />

        <Slider />

        <QuienesSomos />

        <Servicios />

        <MenuFiltros />

        <TarjetaCasa />

        <Footer />
      </div>
    </Fragment>
  )
}

export default App;
