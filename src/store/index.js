import { createStore,combineReducers, applyMiddleware } from "redux";
import { counterReducer } from "./reducres/counter_Reducer";
import { productReducer } from "./reducres/product_reducer";
import { thunk } from "redux-thunk";


const appRedter = combineReducers({
    counter:counterReducer,
    products:productReducer

})



 export const store = createStore(appRedter,applyMiddleware(thunk));
