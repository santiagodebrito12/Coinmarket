import React,{useContext} from 'react';
import { Link, Redirect } from 'react-router-dom';
import CriptoContext from '../../context/CriptoContext/CriptoContext';
import CoinMarket from '../CoinMarket/CoinMarket';
import './Login.css';

const Login = () => {
    const {googleAuth,gitAuth,FacebookAuth} = useContext(CriptoContext)
    
    return (
        
        <div className="contenedor-auth">
            <h1 className="login">Welcome to CoinMarket</h1>
           
            <div className="auth__social-networks ">
                

                <div 
                    className="redes-btn btn-google w-75"
                    onClick={()=>{
                        googleAuth()
                        
                    }}
                >
                    <div className="google-icon-wrapper">
                    <i className="fab fa-google fa-2x icono"></i>
                       
                    </div>
                    <p className="btn-text">
                        <b>Sign in with google</b>
                    </p>
                </div>
            
                <div 
                    className="redes-btn btn-twitter  w-75"
                    onClick={FacebookAuth}
                    
                >
                    <div className="google-icon-wrapper">
                    <i className="fab fa-twitter fa-2x icono"></i>
                    </div>
                    <p className="btn-text">
                        <b>Sign in with Twitter</b>
                    </p>
                     </div>
                <div 
                    className="redes-btn btn-git w-75"
                    onClick={gitAuth}
                >
                    <div className="google-icon-wrapper">
                    <i className="fab fa-github fa-2x icono"></i>
                    </div>
                    <p className="btn-text">
                        <b>Sign in with Github</b>
                    </p>
                </div>
            </div>
            <div>
                <p className="text-center">Already have an account? <Link to="singup">Log in</Link></p>
            </div>
        </div>
        
    )
}

export default Login;
