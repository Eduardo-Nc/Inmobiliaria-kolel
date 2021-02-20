import React, { Fragment} from 'react';
import './MenuIzquierdo.css'; 
import {NavLink} from 'react-router-dom';

const MenuIzquierdo = ({menu}) =>{

    const estilosAbrir = {
        left: '0px',
        transition: '0.6s'
    }

    const estilosCerrar = {
        left: '-100%',
        transition: '0.5s'
    }


    return(
        <Fragment>
            <div style={menu ? estilosCerrar : estilosAbrir} className="contenedor-principal-menu-izquierdo">
                <ul >
                    <li ActiveClassName="active" ><NavLink  to="/tablero"> Inicio</NavLink></li>
                    <li ActiveClassName="active" ><NavLink  to="/propiedes"> Propiedes</NavLink></li>
                </ul>
            </div>
        </Fragment>
    )
}

export default MenuIzquierdo;