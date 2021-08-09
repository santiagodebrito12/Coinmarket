import React,{useContext} from 'react'
import FavContext from '../../../context/FavList/FavListContext'

const FavList = () => {
    
    const{favs}= useContext(FavContext)
    console.log(favs)
    return (
        <div className="container p-5 mt-5 table-responsive ">
            <table className="table shadow-sm p-5 mb-5 bg-body rounded table-light  table-hover">
              
                <thead className="table-dark">
                    <tr className="m-5">
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">%24</th>
                    <th scope="col">Market Cap</th>
                    <th scope="col">Volumen(24h)</th>
                    <th scope="col">Circulating Supply</th>
                    </tr>
                </thead>
                <tbody>
                   { favs.map((cripto,i)=>{
                        
                        const{CoinInfo,DISPLAY:{USD}}=cripto;

                        return(
                            <tr key={cripto.CoinInfo.Id} >
                            <td>{i+1}</td>
                           
                            <td><i class="fas fa-heart" ></i></td>
                           
              
                           
                            <td>{CoinInfo.FullName}</td>
                            <td>{USD.PRICE}</td>
                            <td>{USD.CHANGEPCT24HOUR}</td>
                            <td>{USD.MKTCAP}</td>
                            <td>{USD.TOTALVOLUME24H}</td>
                            <td>{USD.SUPPLY}</td>

                         </tr>
                           
                        )

                    })}
                </tbody>
                </table>
        </div>
    )
}

export default FavList;
