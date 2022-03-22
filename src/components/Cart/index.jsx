import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  generatePdf,
  getCartItemSum,
  ondecreaseProductUnitNumber,
  onIncreaseProductUnitNumber,
  removeCartItem,
} from "../../store/actions";
import jsPDF from "jspdf";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
function Cart() {
  const { cart, cartSum } = useSelector(({ Cart, cartSum }) => Cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItemSum());
  }, [cart]);
  return (
    <div className="py-2 px-8">
      {cart && cart.length > 0 ? (
        <div
          className="flex flex-col items-center justify-center "
          // className="flex flex-col items-center justify-center md:items-start md:pt-11"
        >
          {" "}
          <div
            className="md:w-2/3  my-10"
            // className="w-2/3 md:w-11/12 my-10  md:my-0"
          >
            <p className="text-base md:text-lg font-bold mx-2">Your cart</p>
            <div className="space-y-3  rounded-xl bg-light">
              {cart && cart.length > 0 ? (
                <div>
                  <div>
                    {cart.map((item, index) => (
                      <div
                        className={
                          "grid grid-cols-3 m-2 p-3 bg-white border-1  rounded-2xl  " +
                          (cart[cart.length - 1] === item
                            ? " shadow-2xl "
                            : " shadow-xl ")
                        }
                      >
                        <div className="col-span-2">
                          <p className="text-sm font-bold">
                            item :{"  "}
                            <span className="text-xs px-1 font-normal">
                              {item.name}
                            </span>
                          </p>

                          <p className="text-sm font-bold">
                            Quantity /Unit :
                            <span className="text-xs px-1  font-normal">
                              {" "}
                              {item.unit_quantity} kg
                            </span>
                          </p>
                          <div className="flex justify-start items-center">
                            <p className="font-bold text-sm">
                              Unit{item?.unit_number > 1 ? "s" : ""}:
                            </p>
                            <div className="flex justify-start space-x-3 border rounded mx-2 px-2">
                              <button
                                className=""
                                onClick={() => {
                                  if (item?.unit_number !== 1) {
                                    dispatch(
                                      ondecreaseProductUnitNumber(item, index)
                                    );
                                    console.log(
                                      "item number",
                                      item.unit_number
                                    );
                                  } else {
                                    console.log(
                                      "item number",
                                      item.unit_number
                                    );
                                  }
                                }}
                              >
                                <BiMinus className="text-sm" />
                              </button>
                              <p> {item?.unit_number}</p>
                              <button
                                className=" "
                                onClick={() => {
                                  dispatch(
                                    onIncreaseProductUnitNumber(item, index)
                                  );
                                }}
                              >
                                <BsPlus className="text-sm" />
                              </button>
                            </div>
                          </div>
                          <div>
                            <button
                              onClick={() => dispatch(removeCartItem(item))}
                              className="text-white bg-red-600 py-0.5 hover:bg-red-700 text-xs px-2 rounded"
                            >
                              remove
                            </button>
                          </div>
                        </div>
                        <div>
                          <p className="text-base font-bold">
                            Price :
                            <span className="text-base px-1  font-normal">
                              {" "}
                              {item?.price} Rwf
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-end">
                      <div className="flex justify-center mx-14 my-4 text-lightblue">
                        <p className="font-bold text-base md:text-lg">
                          Total :{" "}
                        </p>
                        <p className="text-base md:text-lg font-bold">
                          {cartSum} Rwf
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="my-10 px-2">
                  {" "}
                  <p className="text-sm text-gray-600">
                    You have no items in you cart for now
                  </p>
                </div>
              )}
            </div>
            {cart && cart.length > 0 && (
              <div className="flex m-2 my-4 items-center justify-end">
                <button
                  onClick={() => {
                    console.log("downloading the invoice");
                    dispatch(generatePdf());
                  }}
                  className="p-2 text-white bg-gray-800  hover:bg-gray-900 text-sm rounded-xl"
                >
                  Download Invoice
                </button>
              </div>
            )}
          </div>
        </div>
      ) : null}
      <div className="flex flex-col justify-center items-center text-center text-sm pb-10 border-b mx-20">
        <div>
          <h5 className=" text-lightblue">Notes:</h5>
          <p>Offer valid for 24 hrs</p>
          <p>Grade: 500 (RS EAS 412-2:2013)</p>
          <p>Length: 12mtr</p>
        </div>
        <div>
          <h5 className=" text-lightblue">Transport / Delivery:</h5>
          <p>
            Preferred drivers recommended upon request and price is based on
            location
          </p>
        </div>
        <div>
          <h5 className=" text-lightblue">Modes of Payment:</h5>
          <p>1) Cash</p>
          <p>
            2) Bank transfer or Deposit : Katona LTD //Bank of Kigali: 0004 0069
            8753 885
          </p>
          <p>
            From Mobile Money Account to Bank of Kigali:
            *182*4*2*3*000400698753885* RWF# or From MoMoPay to Bank of Kigali :
            *184*1*3*000400698753885* RWF#
          </p>
          <p>
            MTN MoMoPay : *182*8*1*015801* “katona ltd”
            <span className="text-red-500">
              {" "}
              N/B: Expect a MoMoPay surcharge of 0.5%
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
