import React,{useContext,useState} from 'react'
import FavContext from '../../../context/FavList/FavListContext';

const TableTr = ({cripto,i}) => {
    
    const {addFav} = useContext(FavContext);
  
    const{CoinInfo,DISPLAY:{USD}}=cripto;
    
    const [fav, setfav] = useState(false)

    return (
        
             <tr key={cripto.CoinInfo.Id} >
                                  <td>{i+1}</td>
                                 
                                  <td onClick={()=>{
                                      addFav(cripto)
                                      setfav(true)
                                  }}><i class={fav ? "fas fa-heart" : "far fa-heart"}></i></td>
                                 
                    
                                 
                                  <td>{CoinInfo.FullName}</td>
                                  <td>{USD.PRICE}</td>
                                  <td>{USD.CHANGEPCT24HOUR}</td>
                                  <td>{USD.MKTCAP}</td>
                                  <td>{USD.TOTALVOLUME24H}</td>
                                  <td>{USD.SUPPLY}</td>

             </tr>
        
    )
}

export default TableTr;
