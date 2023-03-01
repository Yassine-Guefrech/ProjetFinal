
import { GETONEPRODUCT, GETPRODUCTS } from "../ActionTypes/ProductTypes"
const initialState = {
    product : {},
    errors : [],
    products : [],
    oneProduct : {}
}

const ProductReducer=(state=initialState,action)=>{
    switch (action.type) {
        
        case GETPRODUCTS : return {...state,products : action.payload}
        case GETONEPRODUCT : return {...state, oneProduct : action.payload}
        default: return state
    }
}

export default ProductReducer