import React from 'react'
import { BrowserRouter as  Router,Switch,Route,Redirect } from 'react-router-dom';
import CriptoDetail from './CriptoDetail/CriptoDetail';
import FavList from './FavList/FavList';
import Header from './Header/Header';
import TopListTable from './TopListTable/TopListTable';
const CoinMarket = () => {
    return (
        <>
            <Header/>
           
                <Switch>
                    <Route  exact path="/coinmarket" component={TopListTable}/>
                    <Route exact path="/coinmarket/fav" component={FavList}/>
                    <Route exact path="/coinmarket/detail" component={CriptoDetail}/>                  
                </Switch>
              

         
        </>
    )
}

export default CoinMarket;
