import { combineReducers } from "redux";
import CartReducers from "./Cart.reducers";
import productsReducers from "./products.reducers";
export default combineReducers({
  Products: productsReducers,
  Cart: CartReducers,
});
