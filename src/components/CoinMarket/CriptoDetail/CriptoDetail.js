import React,{useContext} from 'react'
import CriptoContext from '../../../context/CriptoContext/CriptoContext'
import './CriptoDetail.css';

const CriptoDetail = () => {
    const{select}=  useContext(CriptoContext)
  
    return (
        <div className="container mt-5 m-auto d-flex w-100">
            
            <div className="container contenedor-detail">
          
            <div className="contenedor-cadena">
                <p>Criptocurrencies <span> &#62; </span> Coins <span> &#62; </span> {select.name} </p>
            </div>
           
            <div className="mt-5 d-flex align-items-center">
            <img src={select.image} width="50px" alt="logo"/>
            <h2 className="cripto-name">{select.name}
            <small className="cripto-symbol">{select.symbol}</small></h2>
            
            </div>
            <div className="d-flex mt-5">
                <h3 className="cripto-symbol">Rank# {select.market_cap_rank}</h3>
                <h3 className="cripto-symbol">Coin</h3> 
               
            </div>
            <div className="d-flex mt-5">
                <h3 className="cripto-symbol">Explorers</h3>
                <h3 className="cripto-symbol">Community</h3> 
                <h3 className="cripto-symbol">Source code </h3> 
                <h3 className="cripto-symbol">Whitepaper </h3> 


               
            </div>
            </div>
            
            <div className="container contenedor-values">
            <div className="contenedor-price-detail">
                <h3>{select.name} Price ({select.symbol})</h3>
                <h1>${select.current_price} </h1>
            </div>
            <div className="contenedor-market-values ">
            <div className=" contenedor-market-values-detail">
            <h3>% 24</h3>
            <p>{select.market_cap_change_percentage_24h*100}</p>
            </div>
            <div className=" contenedor-market-values-detail">
           
            <h3>Market Cap</h3>
            <p>{select.market_cap}</p>
           
            </div>
           
            <div className=" contenedor-market-values-detail">
            <h3>Volume(24h)</h3>
            <p>{select.total_volume}</p>
            </div>
           
            <div className=" contenedor-market-values-detail">
            <h3>Circulating Supply</h3>
            <p>{select.total_supply}</p>
            </div>
            
            </div>
            </div>
        </div>
    )
}

export default CriptoDetail
