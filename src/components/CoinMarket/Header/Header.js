import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../img/logo4.svg';

import './Header.css';

const Header = () => {
    return (
        <header>
        <div className="container-xl header"> 
            <div className="contenedor-logo">
                <Link to="/coinmarket"><img src={logo} alt="logo" className="logo"/></Link>
            </div>
            <nav>
                <ul>
                <li><Link className="link" to="/coinmarket/fav">Favoritos</Link></li>
                <li><Link className="link">Portafolio</Link></li>
                <input type="text" placeholder="Buscar" className="w-50 input" />



                </ul>
            </nav>
            </div>
            
        </header>
    )
}

export default Header;

