export const FavReducer = (state,action)=>{

        const{type,payload}=action;

        switch (type) {
            
            case 'ADD-FAV':
               return [...state,payload]

            case 'DELETE_FAV':
                return  state.filter(state => state.id !== payload)
                    
           

            default:
                break;
        }



        




}