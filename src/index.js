import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Descripcion from './vistas/descripcion/Descripcion';
import IniciarSesion from './vistas/iniciarSesion/IniciarSesion';


window.$baseUrl = "https://";


  const Index = () =>{
    return(
      <Router>
      <Route exact path="/" component={App} />
      <Route path="/inicio" component={App} />
      <Route path="/descripcion" component={Descripcion} />
      <Route path="/iniciar-sesion" component={IniciarSesion} />
      </Router>
    )
  }


ReactDOM.render(<Index/>,document.getElementById('root'));
