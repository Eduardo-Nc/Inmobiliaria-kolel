import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Descripcion from './vistas/descripcion/Descripcion';
import Servicios from './vistas/servicios/Servicios';
import IniciarSesion from './vistas/iniciarSesion/IniciarSesion';
import Tablero from './administrador/tablero/Tablero';



window.$baseUrl = "http://192.168.100.217:30010";


  const Index = () =>{
    return(
      <Router>
      <Route exact path="/" component={App} />
      <Route path="/inicio" component={App} />
      <Route path="/descripcion" component={Descripcion} />
      <Route path="/servicios" component={Servicios} />
      <Route path="/iniciar-sesion" component={IniciarSesion} />
      <Route path="/tablero" component={Tablero} />
      </Router>
    )
  }


ReactDOM.render(<Index/>,document.getElementById('root'));
