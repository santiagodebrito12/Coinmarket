import React from 'react'
import { Link } from 'react-router-dom';
const SingUp = () => {
    return (
        <div className="contenedor-auth">
            <h1>Ingresar</h1>
          
           <form>
           
            <input
            type="email"
            placeholder="Ingrese su correo electronico"
            className="w-75"
            />
             <input
            type="password"
            placeholder="Ingrese una contraseña"
            className="w-75"
            />
            
            <button className="button button-primary w-50">Sign in</button>
            </form>
            
            <p>Ingrese con redes sociales <Link to="/">Log in</Link></p>


        </div>
    )
}

export default SingUp;
