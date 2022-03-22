import actionTypes from "../actions/types";

const initialState = {
  cart: [],
  isFetching: false,
  errors: null,
  cartSum: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getCart:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.getCartSuccess:
      return {
        ...state,
        cart: action.payload,
        isFetching: false,
      };

    case actionTypes.getCartFail:
      return {
        ...state,
        errors: action.payload,
        isFetching: false,
      };

    case actionTypes.addCartItem:
      return {
        ...state,
        cart: action.payload,
      };
    case actionTypes.setCartSum:
      return {
        ...state,
        cartSum: action.payload,
      };
    case actionTypes.increaseProductUnitNumber:
      return {
        ...state,
        cart: action.payload,
      };

    case actionTypes.decreaseProductUnitNumber:
      return {
        ...state,
        cart: action.payload,
      };
    case actionTypes.deleteCartItem:
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
};
