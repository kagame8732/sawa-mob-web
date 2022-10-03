import React from "react";
import RequestRideForm from "../../components/form/RequestRideForm";
import BusesSlider from "../../components/sliders/BusesSlider";
import hireImg1 from "../../assets/images/hire1.png";
import hireImg2 from "../../assets/images/hire2.png";
import { Carousel } from "react-bootstrap";
function BikeRide() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-50 px-10 md:px-20 lg:px-40 pt-10 hire-hero">
        <div className="space-y-8 align-self-center">
          <h2 className="text-2xl text-darkblue font-bold">
            We’re here to make your Transport easy
          </h2>
          <p className="text-sm text-ligtgray">
            Fill all the requested information here our system will keep in
            touch soon
          </p>
          <RequestRideForm />
        </div>
        {/* <BusesSlider /> */}
        <div>
          <Carousel indicators={true} interval={null}>
            <Carousel.Item className="w-100">
              <div className="">
                <img
                  src={hireImg1}
                  alt="Tap & Go logo"
                  className=" object-cover"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="">
                <img
                  src={hireImg2}
                  alt="Tap & Go logo"
                  className="object-cover"
                />
              </div>
            </Carousel.Item>
          </Carousel>
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
