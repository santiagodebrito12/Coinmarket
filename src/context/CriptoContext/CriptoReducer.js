export const CriptoReducer = (state,action) => {

    const{type,payload} = action;

    switch(type){

        case 'OPTION-CRIPTO':
            return {
                ...state,
                toplist: payload,
            }
        
        case 'SELECT-CRIPTO':
            return{
                ...state,
                select:payload,
            }

        case 'ADD-FAV':
            return{
                ...state,
                fav:[...state,payload],
            }
        
        case 'RESPONSE':
            return{
                ...state,
                res:payload,
            }
            
            
            default:
                break;







    }

    




}