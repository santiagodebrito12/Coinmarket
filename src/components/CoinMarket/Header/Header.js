import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../img/logo3.png';

import './Header.css';

const Header = () => {
    return (
        <header>
        <div className="container header"> 
            <div className="contenedor-logo">
                <Link to="/coinmarket"><img src={logo} alt="logo" className="logo"/></Link>
            </div>
            <nav>
                <ul>
                <li><Link className="link" to="/coinmarket/fav">Favoritos</Link></li>
          
                <li><Link className="link">Portafolio</Link></li>
               
                <li><Link className="link ">Sign In</Link></li>
                <li><Link className="link">Log out</Link></li>


                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header;

