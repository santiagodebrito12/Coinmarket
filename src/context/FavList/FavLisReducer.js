export const FavReducer = (state,action)=>{

        const{type,payload}=action;

        switch (type) {
            
            case 'ADD-FAV':
               return [...state , payload];



            default:
                break;
        }



        




}