import React, { Fragment } from 'react';
import './MenuMovil.css';
import { NavLink } from 'react-router-dom';

const MenuMovil = () => {


    return (
        <Fragment>
            <div className="cont-principal-colaboradores-menu">
                <nav className="menu-movil-colaboradores">
                    <ul>
                        <li><NavLink to="/">Cerrar sesión</NavLink></li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    )

    
}

export default MenuMovil;