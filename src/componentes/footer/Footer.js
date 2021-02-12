import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <Fragment>
            <div className="content-footer">
                <Link to="/"> &copy; 2021 Copyright: Inmobiliaria S.A DE C.V. </Link>
            </div>
        </Fragment>
    )
}


export default Footer;