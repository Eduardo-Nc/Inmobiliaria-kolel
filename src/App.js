import React, {Fragment} from 'react';
import './App.css';
import NavBar from './componentes/navBar/NavBar';
import Slider from './componentes/slider/Slider';

const App = () =>{
  return(
    <Fragment>
      
      <NavBar/>
      
      <Slider />
      
      <Slider />

      <Slider />

      <Slider />

    </Fragment>
  )
}

export default App;
