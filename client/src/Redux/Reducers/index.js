import AuthReducer from "./AuthReducer"
import {combineReducers} from "redux"
import ErrorReducer from "./ErrorReducer"
import ProductReducer from "./ProductReducer"

const rootReducer = combineReducers({AuthReducer,ErrorReducer,ProductReducer})

export default rootReducer