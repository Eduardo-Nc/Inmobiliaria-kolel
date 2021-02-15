import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Descripcion from './vistas/descripcion/Descripcion';



window.$baseUrl = "https://";


  const Index = () =>{
    return(
      <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/descripcion" component={Descripcion} />
      </Router>
    )
  }


ReactDOM.render(<Index/>,document.getElementById('root'));
