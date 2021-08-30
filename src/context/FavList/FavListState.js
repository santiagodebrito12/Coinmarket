import React,{useReducer,useState} from 'react'
import FavContext from './FavListContext'
import { FavReducer } from './FavLisReducer';

const FavListState = (props) => {
    
    const initialState = [];

    const [state, dispatch] = useReducer(FavReducer, initialState)
    

    const addFav = cripto =>{
        dispatch({
            type:'ADD-FAV',
            payload:cripto,
        })
    }

    const deleteFav= id =>{
        dispatch({
            type:'DELETE_FAV',
            payload:id,
        })
    }

   

    return (
        <FavContext.Provider value={{
            
            favs:state,
            addFav,
            deleteFav,
            
            
        }}>
            {props.children}
        </FavContext.Provider>
    )
}

export default FavListState
