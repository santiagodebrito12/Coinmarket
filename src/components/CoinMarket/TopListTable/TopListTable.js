import React,{useContext,useEffect,useState} from 'react'
import CriptoContext from '../../../context/CriptoContext/CriptoContext';
import FavContext from '../../../context/FavList/FavListContext';
import TableTr from '../TableTr/TableTr';
import './TopListTable.css';

const TopListTable = () => {
    const {toplist,getTopList} = useContext(CriptoContext);
    const {addFav} = useContext(FavContext);
    
    
   useEffect(()=>{
    getTopList();
   },[])
    
    

    return (
        <div className="container-xl p-3 mt-5 m-auto table-responsive ">
            <table className="table p-5 mb-5  rounded   table-hover" id="table">
              
                <thead className="table-light">
                    <tr className="m-2 p-2">
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">%24</th>
                    <th scope="col">Market Cap</th>
                    <th scope="col">Volumen(24h)</th>
                    <th scope="col">Circulating Supply</th>
                    <th scope="col">Select</th>
                    </tr>
                </thead>
              
                <tbody>
                   { toplist.map((cripto,i)=>{
                        
                      

                        return(
                            <TableTr
                            
                            cripto={cripto}
                            i={i}
                            key={cripto.id}
                            />
                           
                        )

                    })}


                    {/* <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td >Larry the Bird</td>
                    <td>@twitter</td>
                    </tr> */}
                </tbody>
                </table>
        </div>
    )
}

export default TopListTable;
