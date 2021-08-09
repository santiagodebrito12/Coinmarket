import React,{useReducer} from 'react'
import FavContext from './FavListContext'
import { FavReducer } from './FavLisReducer';

const FavListState = (props) => {
    
    const initialState = [];

    const [state, dispatch] = useReducer(FavReducer, initialState)
    

    const addFav = (cripto)=>{
        dispatch({
            type:'ADD-FAV',
            payload:cripto,
        })
    }
    return (
        <FavContext.Provider value={{
            
            favs:state,
            addFav,
            
        }}>
            {props.children}
        </FavContext.Provider>
    )
}

export default FavListState
