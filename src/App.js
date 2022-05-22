import React, { Fragment } from 'react';
import './App.css';
import NavBar from './componentes/navBar/NavBar';
import Slider from './componentes/slider/Slider';
import QuienesSomos from './componentes/quienesSomos/QuienesSomos';
import Servicios from './componentes/servicios/Servicios';
import TarjetaCasa from './componentes/tarjetaCasa/TarjetaCasa';
import Footer from './componentes/footer/Footer';
import ChatBot from './componentes/botonChatbot/botonChatbot';



const App = () => {

  return (


    <Fragment>

      <div className="contenedor-principal-app">
        <NavBar />

        <Slider />

        <QuienesSomos />

        <Servicios />

        <TarjetaCasa />

        <Footer />

        <ChatBot />
      </div>
    </Fragment>
  )
}

export default App;
