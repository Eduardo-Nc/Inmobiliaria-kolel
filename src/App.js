import React, {Fragment} from 'react';
import './App.css';
import NavBar from './componentes/navBar/NavBar';
import Slider from './componentes/slider/Slider';

const App = () =>{
  return(
    <Fragment>
      <div className="contenedor-principal-app"> 
        <NavBar/>
        
        <Slider />

        <Slider />

        <Slider />
        
      </div>
    </Fragment>
  )
}

export default App;
