import React from "react";
import Cart from "../Cart";
import CartItems from "../Cart/CartItems";
import ProductsList from "../Products";
import Regulations from "../Regulations";

function Invoice() {
  return (
    <div id="element-to-print" className="hidden">
      <div
        className="flex flex-col items-center justify-center "
        // className="flex flex-col items-center justify-center md:items-start md:pt-11"
      >
        <h5 className="font-bold text-lg">Invoice</h5>
        <h5 className="font-bold text-sm text-lightblue">Ferabeto.com</h5>

        <div className="w-2/3  my-4">
          <CartItems />
        </div>
      </div>

      <Regulations />
      {/* <div class="html2pdf__page-break"></div> */}
    </div>
  );
}

export default Invoice;
