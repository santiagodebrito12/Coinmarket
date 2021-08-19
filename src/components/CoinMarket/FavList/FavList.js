import React,{useContext} from 'react'
import FavContext from '../../../context/FavList/FavListContext'

const FavList = () => {
    
    const{favs}= useContext(FavContext)
    console.log(favs)
    return (
        <div className="container-xl p-5 mt-5 table-responsive ">
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
                        
                        const {id,name,current_price,market_cap,high_24h,low_24h,market_cap_change_percentage_24h,total_volume,total_supply}=cripto;

                        return(
                            <tr key={id} >
                            <td>{i+1}</td>
                           
                            <td><i class="fas fa-heart" ></i></td>
                           
              
                                  <td>{name}</td>
                                  <td>{current_price}</td>
                                  <td>{market_cap_change_percentage_24h}</td>
                                  <td>{market_cap}</td>
                                  <td>{total_volume}</td>
                                  <td>{total_supply}</td>

                         </tr>
                           
                        )

                    })}
                </tbody>
                </table>
        </div>
    )
}

export default FavList;
