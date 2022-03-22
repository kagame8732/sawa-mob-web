import actionTypes from "./types";
export const getProducts = () => {
  return (dispatch, getState) => {
    const products = getState().Products.products;
    dispatch({ type: actionTypes.getProducts });

    dispatch({ type: actionTypes.getProductsSuccess, payload: products });

    // dispatch({type:actionTypes.getCategoriesFail,payload:err})
  };
};
