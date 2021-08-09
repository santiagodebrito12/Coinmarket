import React,{useReducer}  from 'react'
import CriptoContext from './CriptoContext';
import { CriptoReducer } from './CriptoReducer';
import {firebase ,googleAuthProvider } from '../../firebase/conector';
import axios from 'axios';


const CriptoState = (props) => {
    
    const initialState ={
        toplist:[],
        select:'',
        res:0,
    }
    

    const [state, dispatch] = useReducer(CriptoReducer, initialState)


    const getTopList = async() =>{ 
       
        const res = await axios.get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=50&tsym=USD`)
       
        console.log(res.data.Data);
        dispatch({
            type:'OPTION-CRIPTO',
            payload:res.data.Data
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
         })
    } 
    const gitAuth = () =>{
        
    }

    return (
       <CriptoContext.Provider
       value={{
           toplist:state.toplist,
           select:state.select,
           res:state.res,
           getTopList,
           getSelect,
           getRes,
           addFav,
           googleAuth,
         
       }}>
           {props.children}
       </CriptoContext.Provider>
    )
}

export default CriptoState;
