import React, { useEffect } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartItemSum,
  ondecreaseProductUnitNumber,
  onIncreaseProductUnitNumber,
  removeCartItem,
} from "../../store/actions";

function CartItems() {
  const { cart, cartSum } = useSelector(({ Cart, cartSum }) => Cart);

  return (
    <div>
      <div className="space-y-3  rounded-xl bg-light overflow-hidden">
        {cart && cart.length > 0 ? (
          <div>
            <div>
              <div className="flex flex-col items-center justify-center">
                <div className="row  mt-3 px-4 overflow-x-auto">
                  <table
                    className="table table-hover responsive "
                    cellSpacing="0"
                  >
                    <thead>
                      <tr>
                        <th className="small black fonts fw-bold text-lightblue text-sm ">
                          Product
                        </th>
                        <th className="small black fonts fw-bold text-lightblue text-sm ">
                          kg/Unit
                        </th>
                        <th className="small black fonts fw-bold text-lightblue text-sm ">
                          Units
                        </th>
                        <th className="small black fonts fw-bold text-lightblue text-sm ">
                          Price/Unit
                        </th>
                        <th className="small black fonts fw-bold text-lightblue text-sm ">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item, index) => (
                        <tr key={index} className="">
                          <td className="small text-secondary align-middle fonts ">
                            {item.name} kg
                          </td>
                          <td className="small text-secondary align-middle fonts ">
                            {item.unit_quantity} kg
                          </td>

                          <td className="small text-secondary align-middle fonts">
                            {item?.unit_number}
                          </td>
                          <td className="small text-secondary align-middle fonts">
                            {item?.unit_price} Rwf
                          </td>
                          <td className="small text-secondary align-middle fonts">
                            {" "}
                            {item?.price} Rwf
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex justify-end">
                    <div className="flex justify-center my-4 text-lightblue">
                      <p className="font-bold text-base">Total : </p>
                      <p className="text-base font-bold">{cartSum} Rwf</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CartItems;
