import React,{useReducer,useState}  from 'react'
import CriptoContext from './CriptoContext';
import { CriptoReducer } from './CriptoReducer';
import {firebase ,googleAuthProvider, GithubAuthProvider , FacebookAuthProvider} from '../../firebase/conector';
import axios from 'axios';


const CriptoState = (props) => {
    
    const initialState ={
        toplist:[],
        select:'',
        res:0,
    }
    
    const[user,setUser]=useState({})
    const[activeUser,setActiveUser]=useState(false);

    const [state, dispatch] = useReducer(CriptoReducer, initialState)


    const getTopList = async() =>{ 
       
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&limit=20&order=market_cap_desc&per_page=50&page=1&sparkline=false`) 
        dispatch({
            type:'OPTION-CRIPTO',
            payload:res.data
        })
    }

    const getSelect = (select) => {
     
        dispatch({
            type:'SELECT-CRIPTO',
            payload:select,
        })
    }

   const addFav = (cripto) =>{
       dispatch({
           type:'ADD-FAV',
           payload:cripto,
       })
   }

    const getRes = async()=>{
        const res = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${state.select}&tsyms=USD`);
    }

    const googleAuth = ( ) =>{
        firebase.auth().signInWithPopup(googleAuthProvider)
         .then( (userCred) =>{
            console.log(userCred)
            setUser(userCred)
            setTimeout(()=>{
                setActiveUser(true);
    
               },2000)
         })
    } 
    const gitAuth = () =>{
        firebase.auth().signInWithPopup(GithubAuthProvider)
        .then( (userCred) =>{
           console.log(userCred)
           setUser(userCred)
           setTimeout(()=>{
            setActiveUser(true);

           },2000)
        })
    }
    const FacebookAuth= () =>{
        firebase.auth().signInWithPopup(FacebookAuthProvider)
        .then( (userCred) =>{
           console.log(userCred)
           setUser(userCred);
           setTimeout(()=>{
            setActiveUser(true);

           },2000)
           
        })
    }

    return (
       <CriptoContext.Provider
       value={{
           toplist:state.toplist,
           select:state.select,
           res:state.res,
           activeUser,
           user,
           getTopList,
           getSelect,
           getRes,
           addFav,
           googleAuth,
           FacebookAuth,
           gitAuth,
         
       }}>
           {props.children}
       </CriptoContext.Provider>
    )
}

export default CriptoState;
