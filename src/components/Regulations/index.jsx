import React from "react";

function Regulations() {
  return (
    <div>
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

export default Regulations;
