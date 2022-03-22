import html2pdf from "html2pdf.js";
import AlertMessage from "../../utils/Alert";
import actionTypes from "./types";
export const getCartItems = () => {
  return (dispatch, getState) => {
    const cart = getState().Cart.cart;
    dispatch({ type: actionTypes.getCartItems });

    dispatch({ type: actionTypes.getCategoriesSuccess, payload: cart });

    // dispatch({type:actionTypes.getCategoriesFail,payload:err})
  };
};
export const addCartItem = (newCartItem, alert) => {
  return (dispatch, getState) => {
    const cart = getState().Cart.cart;
    var newCartArray = cart.slice();
    if (cart.find((item) => item.id === newCartItem.id) !== undefined) {
      console.log("item exist");
      alert.info(
        <AlertMessage message="This product is already added to you cart !" />
      );
    } else {
      newCartArray.push(newCartItem);
    }

    dispatch({ type: actionTypes.addCartItem, payload: newCartArray });
  };
};
export const getCartItemSum = () => {
  return (dispatch, getState) => {
    const cart = getState().Cart.cart;
    var sum = 0;
    cart.forEach((element) => {
      sum += element?.price;
    });
    console.log("sum equals: ", sum);
    dispatch({ type: actionTypes.setCartSum, payload: sum });
  };
};

export const onIncreaseProductUnitNumber = (cartItem, index) => {
  return (dispatch, getState) => {
    const cart = getState().Cart.cart;
    var newStateArray = cart.slice();
    var item = cart.find((item) => item.id === cartItem.id);
    var newUnitNumber = cartItem.unit_number + 1;
    newStateArray[index] = {
      ...newStateArray[index],
      unit_number: newUnitNumber,
      price: cartItem.unit_price * newUnitNumber,
    };
    console.log("cartitems", newStateArray, index, item, cartItem);
    console.log(
      "cartitems",
      newStateArray,
      "index",
      index,
      "item",
      item,
      "cartItem",
      cartItem
    );

    dispatch({
      type: actionTypes.increaseProductUnitNumber,
      payload: newStateArray,
    });
    dispatch(getCartItemSum());
  };
};
export const ondecreaseProductUnitNumber = (cartItem, index) => {
  return (dispatch, getState) => {
    console.log("item number", cartItem?.unit_number);
    const cart = getState().Cart.cart;
    var newStateArray = cart.slice();
    var item = cart.find((item) => item.id === cartItem.id);
    // newStateArray[index].unit_number = cartItem.unit_number - 1;

    var newUnitNumber = cartItem.unit_number - 1;
    newStateArray[index] = {
      ...newStateArray[index],
      unit_number: newUnitNumber,
      price: cartItem.unit_price * newUnitNumber,
    };
    console.log(
      "cartitems",
      newStateArray,
      "index",
      index,
      "item",
      item,
      "cartItem",
      cartItem
    );

    dispatch({
      type: actionTypes.decreaseProductUnitNumber,
      payload: newStateArray,
    });
    dispatch(getCartItemSum());
  };
};

export const removeCartItem = (cartItem) => {
  return (dispatch, getState) => {
    const cart = getState().Cart.cart;
    var data = [...cart];
    data.splice(
      data.findIndex((c) => c.id === cartItem.id),
      1
    );
    var newStateArray = cart.slice();
    newStateArray = data;
    dispatch({ type: actionTypes.deleteCartItem, payload: newStateArray });
  };
};
export const generatePdf = () => {
  return (dispatch) => {
    var element = document.getElementById("element-to-print");
    var clonedElement = element.cloneNode(true);
    // change display of cloned element

    clonedElement.style.display = "block";
    var opt = {
      margin: 1,
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(clonedElement).set(opt).save();
    clonedElement.remove();
  };
};
