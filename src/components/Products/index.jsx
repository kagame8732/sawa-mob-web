import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { RiWhatsappFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { useAlert } from "react-alert";
import { addCartItem } from "../../store/actions";
function ProductsList() {
  const { products } = useSelector(({ Products }) => Products);
  const location = useLocation();
  const [data, setData] = useState([]);
  const [activeProduct, setActiveProduct] = useState();
  const dispatch = useDispatch();
  const alert = useAlert();
  return (
    <div className="">
      <div className="flex  items-center justify-center">
        {" "}
        <RiWhatsappFill className="text-green-500 text-3xl" />
        <p className="text-sm md:text-base">+250 781168030</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div
          className="row  mt-3 px-10 md:px-0 md:w-7/12 overflow-x-auto"
          // overflow-auto
        >
          {/* <DataTable
            columns={columns}
            data={products}
            // customStyles={customStyles}
            highlightOnHover
            pointerOnHover
            onRowClicked={(row, event) => {
              console.log("row clicked");
            }}
          /> */}
          <table
            className="table table-hover responsive "
            // table-sm
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th className="small black fonts fw-bold text-blue-800 text-sm md:text-base ">
                  Description
                </th>
                <th className="small black fonts fw-bold text-blue-800 md:text-base  ">
                  kg/Unit
                </th>
                <th className="small black fonts fw-bold text-blue-800 md:text-base  ">
                  Price/Unit
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  onMouseEnter={() => {
                    setActiveProduct(index);
                  }}
                  onMouseLeave={() => {
                    setActiveProduct({});
                  }}
                  // onClick={() => {
                  //   console.log("clicked product", products[index]);
                  //   setActiveProduct(index);
                  // }}
                  className={
                    (products[index]?.id - 1 === activeProduct
                      ? " relative bg-gray-200 shadow "
                      : " ") + " cursor-pointer"
                  }
                >
                  <td className="text-xs md:text-sm text-secondary align-middle fonts ">
                    {product.name}
                  </td>

                  <td className="text-xs md:text-sm text-secondary align-middle fonts">
                    {product.unit_quantity}
                  </td>
                  <td className="text-xs md:text-sm  text-lightgreen align-middle fonts ">
                    <div>
                      <p>{product.unit_price} RWF</p>

                      {products[index]?.id - 1 === activeProduct && (
                        <button
                          onClick={() => {
                            dispatch(addCartItem(product, alert));
                          }}
                          className="p-2 bg-gray-800 hover:bg-gray-900 z-1 text-white h-100 rounded w-32 absolute top-0 right-0"
                        >
                          add to cart
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
