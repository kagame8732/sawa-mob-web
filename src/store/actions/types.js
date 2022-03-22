const actionTypes = {
  //user action types
  LogUserIn: "LOG USER IN",
  LogUserInSuccess: "LOG USER IN SUCCESSFUL",
  LogUserInFail: "LOG USER IN FAILED",

  LogUserOut: "LOG USER OUT",

  updateUser: "UPDATE USER",
  updateUserSuccess: "UPDATE USER SUCCESSFUL",
  updateUserFail: "UPDATE USER FAILED",

  getUser: "GET USER",
  getUserSuccess: "GET USER SUCCESSFUL",
  getUserFail: "GET USER FAILED",

  //Products action types
  getProducts: "GET PRODUCTS",
  getProductsSuccess: "GET PRODUCTS SUCCESSFUL",
  getProductsFail: "GET PRODUCTS FAILED",

  setSelectedProduct: "SET SELECTED PRODUCT",

  increaseProductUnitNumber: "INCREASE PRODUCT UNIT NUMBER",

  decreaseProductUnitNumber: "DECREASE PRODUCT UNIT NUMBER",
  //Cart action types
  getCart: "GET  CART",
  getCartSuccess: "GET  CART SUCCESSFUL",
  getCartFail: "GET CART FAILED",

  addCartItem: "ADD CART ITEM",
  addCartItemSuccess: "GET  CART ITEM SUCCESSFUL",
  addCartItemFail: "GET CART ITEM FAILED",

  setCartSum: "SET CART SUM",

  deleteCartItem: "DELETE CART ITEM",
  //   getCartSum: "GET CART",
  //   getCartSumSuccess: "GET CART SUCCESSFUL",
  //   getCartSumFail: "GET CART FAILED",
};

export default actionTypes;
