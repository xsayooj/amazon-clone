export const initialState = {
    basket:[],
    user:null,
}
export const getSubtotal = (basket) => basket?.reduce((amount,item)=> item.price+amount,0);

const reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //Logic for adding to basket
            return {
                ...state,
                basket:[...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            //Logic for removing from basket

            //cloned the basket 
            let newBasket = [...state.basket]
            //checked for the index
            const index = state.basket.findIndex((basketItem) => basketItem.id===action.id);

            // if found remove the item.
            if(index>=0){
                //remove item from basket
                newBasket.splice(index,1);
            }else{
                console.warn(`Cannot remove the product with id:${action.id}`);
            }
            return {
                ...state,
                basket:newBasket
            };
        case 'ADD_USER':
            return {
                ...state,
                user:action.user
            }
        default:
            return state;
    }
}

export default reducer;