import React,{useContext,useState} from 'react';
import CriptoContext from '../../../context/CriptoContext/CriptoContext';
import { Link } from 'react-router-dom';
import FavContext from '../../../context/FavList/FavListContext';

const TableTr = ({cripto,i}) => {
    
    const [fav, setfav] = useState(false)
    

    const {getSelect}=useContext(CriptoContext);
    const {favs,addFav} = useContext(FavContext);
   
    const {name,current_price,market_cap,high_24h,low_24h,market_cap_change_percentage_24h,total_volume,total_supply}=cripto;
    
    
    

    return (
          
             <tr >
                 
                                  <td className="p-3"> {i+1}</td>
                                 
                                     
                            
                                    <td 
                                     className="p-3"
                                    
                                     >
                                     
                                     <i className={fav ? "fas fa-heart" : "far fa-heart"}   onClick={()=>{
                                       addFav(cripto)
                                       setfav(true);
                                     }}></i>
                                     </td>
                                  
                                 
                                 
                    
                                  
                                  <td className="p-3">{name}</td>
                                  <td className="p-3">{current_price}</td>
                                  <td className="p-3">{market_cap_change_percentage_24h*100}</td>
                                  <td className="p-3">{market_cap}</td>
                                  <td className="p-3">{total_volume}</td>
                                  <td className="p-3">{total_supply}</td>
                                  <td><Link to="/coinmarket/detail" onClick={()=>{

                                      getSelect(cripto);
                                  }} > Ver mas</Link></td>
             </tr>

    )
}

export default TableTr;
