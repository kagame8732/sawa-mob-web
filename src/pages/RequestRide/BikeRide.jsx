import React from "react";
import RequestRideForm from "../../components/form/RequestRideForm";

function BikeRide() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-50 px-40">
        <div className="space-y-8">
          <h2 className="text-2xl text-darkblue font-bold">
            We’re here to make your Transport easy
          </h2>
          <p className="text-sm text-ligtgray">
            Fill all the requested information here our system will keep in
            touch soon
          </p>
          <RequestRideForm />
        </div>
        <div>
          {/* <Carousel indicators={true} interval={5000}>
          <Carousel.Item>
            <div className="">
               <img src={tapgologo2Img} alt="Tap & Go logo" />
                
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="">
              
                <img src={tapgologo2Img} alt="Tap & Go logo" />
               
              
            </div>
          </Carousel.Item>
        </Carousel> */}
        </div>
      </div>
      <div className="flex justify-center bg-white text-darkblue p-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 lg:gap-20 ">
          <div>
            <h5 className="text-2xl font-bold">500</h5>
            <p className="text-sm">Availble Vehicles</p>
          </div>
          <div>
            <h5 className="text-2xl font-bold">1800</h5>
            <p className="text-sm">Completed Rides</p>
          </div>
          <div>
            <h5 className="text-2xl font-bold">5 +</h5>
            <p className="text-sm">Transport Means</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BikeRide;
