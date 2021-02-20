import React, { Fragment } from 'react';
import './MenuFiltros.css';

const MenuFiltros = () => {
    return (
        <Fragment>

            <div className="contenedor-filtros-titulo">
                <h1>¡Estas listo!</h1>
                <p>Te ayudamos a simplificar tu busqueda</p>
            </div>

            <div className="contenedor-principal-menu-filtros">

                <form className="contenedor-filtros-fondo">

                    <div className="contenedor-menu-filtros">
                        <select id="filtro" name="filtro">
                            <option value="" defaultValue>Oferta</option>
                            <option value="1">Venta</option>
                            <option value="2">Renta</option>
                        </select>

                        <select id="filtro" name="filtro">
                            <option value="" defaultValue>Tipo de inmueble</option>
                            <option value="1">Casa</option>
                            <option value="2">Bodega</option>
                        </select>

                        <select id="filtro" name="filtro">
                            <option value="" defaultValue>Precio</option>
                            <option value="1">+3,000,000</option>
                            <option value="2">3,000,000 - 2,000,000</option>
                        </select>

                        <div className="contenedor-menu-filtros-selec">
                            <select id="filtro" name="filtro">
                                <option value="" defaultValue>Habitaciones</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>

                            <select id="filtro" name="filtro">
                                <option value="" defaultValue>Baños</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>

                    <div className="contenedor-filtro-id">
                        <input type="text" placeholder="Identificador" />

                        <div className="contenedor-menu-filtros-boton">
                            <button><i className="fas fa-search"></i> Buscar</button>
                        </div>
                    </div>
                </form>

            </div>

        </Fragment>
    )
}


export default MenuFiltros;