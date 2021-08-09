import React from 'react'
import { Link } from 'react-router-dom';
const SingUp = () => {
    return (
        <div className="contenedor-auth">
            <h1>Create a new Account</h1>
          
           <form>
            <input
            type="text"
            placeholder="Ingrese su nombre "
            className="w-75"
            />
            <input
            type="text"
            placeholder="Ingrese su apellido"
            className="w-75"
            />
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
             <input
            type="password"
            placeholder="Confirme su contraseña"
            className="w-75"
            />
            <button className="button button-primary w-50">Sign in</button>
            </form>
            
            <p>Ingrese con redes sociales <Link to="/">Log in</Link></p>


        </div>
    )
}

export default SingUp;
