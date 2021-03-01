import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Descripcion from './vistas/descripcion/Descripcion';
import Nosotros from './vistas/nosotros/Nosotros';
import Servicios from './vistas/servicios/Servicios';
import Contacto from './vistas/contacto/Contacto';
import IniciarSesion from './vistas/iniciarSesion/IniciarSesion';
import Tablero from './administrador/tablero/Tablero';
import Propiedades from './administrador/propiedades/Propiedades';


import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';



window.$baseUrl = "http://192.168.100.217:30010";


  const Index = () =>{
    return(
      <Router>
      <Route exact path="/" component={App} />
      <Route path="/inicio" component={App} />
      <Route path="/descripcion" component={Descripcion} />
      <Route path="/nosotros" component={Nosotros} />
      <Route path="/servicios" component={Servicios} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/iniciar-sesion" component={IniciarSesion} />
      <Route path="/tablero" component={Tablero} />
      <Route path="/propiedades" component={Propiedades} />
      </Router>
    )
  }


ReactDOM.render(<Index/>,document.getElementById('root'));
