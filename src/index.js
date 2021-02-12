import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';


window.$baseUrl = "https://";


  const Index = () =>{
    return(
      <Router>
      <Route exact path="/" component={App} />
      </Router>
    )
  }


ReactDOM.render(<Index/>,document.getElementById('root'));
