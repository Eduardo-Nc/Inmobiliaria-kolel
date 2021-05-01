import React, { Fragment, useState, useEffect } from 'react';
import './MenuFiltros.css';
import axios from 'axios';


const MenuFiltros = () => {

    const baseUrl = window.$baseUrl;

    const [datosF, setDatosF] = useState({});

  
    const [tipoInmueble, setTipoInmueble] = useState([]);
    const [tipoOferta, setTipoOferta] = useState([]);


    const peticionGet = async () => {


        await axios.get(baseUrl + "/api/todos/tipo/oferta")
            .then(response => {
                setTipoOferta(response.data);
            }).catch(error => {
                console.log(error);
            })

        await axios.get(baseUrl + "/api/todos/tipo/inmueble")
            .then(response => {
                setTipoInmueble(response.data);
            }).catch(error => {
                console.log(error);
            })

    }

    useEffect(() => {
        peticionGet();
    }, [])


    const handleChange = (event) => {
        setDatosF({
            ...datosF,
            [event.target.name]: event.target.value,
        });
    };

    

    return (
        <Fragment>

            <div className="contenedor-filtros-titulo">
                <h1>¡Estás listo!</h1>
                <p>Te ayudamos a simplificar tu busqueda</p>
            </div>

            <div className="contenedor-principal-menu-filtros">

                <form className="contenedor-filtros-fondo" >

                    <div className="contenedor-menu-filtros">
                        <select id="filtro" onChange={handleChange} name="tipo_oferta">
                            <option value="" defaultValue>Oferta</option>
                            {tipoOferta.map(items =>
                                items.id_tipo_oferta === 3 || items.id_tipo_oferta === 4 ? 
                                ""
                                :
                                <option key={items.id_tipo_oferta} value={items.id_tipo_oferta}>{items.nombre_tipo_oferta}</option>
                            )}
                        </select>

                        <select id="filtro" onChange={handleChange} name="tipo_inmueble">
                            <option value="" defaultValue>Tipo de inmueble</option>
                            {tipoInmueble.map(items =>
                                <option key={items.id_tipo_inmueble} value={items.id_tipo_inmueble}>{items.nombre_tipo_inmueble}</option>
                            )}
                        </select>

                        <select id="filtro" onChange={handleChange} name="tipo_precio">
                            <option value="" defaultValue>Precio</option>
                            <option value="1">+3,000,000</option>
                            <option value="2">2,000,000 - 3,000,000</option>
                            <option value="3">1,000,000 - 2,000,000</option>
                            <option value="4">-1,000,000</option>
                        </select>

                        <div className="contenedor-menu-filtros-selec">
                            <select id="filtro" onChange={handleChange} name="cant_habitaciones">
                                <option value="" defaultValue>Habitaciones</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>

                            <select id="filtro" onChange={handleChange} name="cant_banos">
                                <option value="" defaultValue>Baños</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>

                    <div className="contenedor-filtro-id">
                        <input type="text" name="id_prop" onChange={handleChange} placeholder="Identificador" />

                        <div className="contenedor-menu-filtros-boton">
                            <input type="submit"  value="Buscar"></input>
                        </div>
                    </div>
                </form>

            </div>


           

        </Fragment>
    )
}


export default MenuFiltros;