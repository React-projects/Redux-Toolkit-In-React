import { ADD_PRODUCTS, GET_PRODUCTS } from "../actions/products_action";

export const productReducer = (
  state = [
 
  ],
  action
) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...action.payload];
    case ADD_PRODUCTS:
      return [state, action.payload];

    default:
      return state;
  }
};
