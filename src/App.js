import React from 'react';
import { BrowserRouter as  Router,Switch,Route,Redirect } from 'react-router-dom';
import Login from './components/auth/Login';
import SingUp from './components/auth/SingUp';
import CoinMarket from './components/CoinMarket/CoinMarket';

import CriptoState from './context/CriptoContext/CriptoState';
import FavListState from './context/FavList/FavListState';

function App() {
  return (
    <Router>
    
      <CriptoState>
        <FavListState>
           
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/singup" component={SingUp}/>
              <Route  path="/coinmarket" component={CoinMarket}/>
              
            <Redirect to="/login" component={Login}/>
            
            </Switch>
       
        </FavListState>
     </CriptoState>
    
    </Router>
  );
}

export default App;
