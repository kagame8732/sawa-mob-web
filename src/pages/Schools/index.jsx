import React from "react";
import { HiArrowRight } from "react-icons/hi";
import trackingImg from "../../assets/images/tracking.png";
import PhoneImg from "../../assets/images/phones2.png";
import busImg from "../../assets/images/shuribus.png";
function Schools() {
  return (
    <div className="pb-20">
      <div className="schools-hero ">
        <div className="bg-transparent absolute z-10 w-100 p-10 md:p-32 text-white grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-10 p-6">
            <h5 className="text-2xl font-bold ">ShuriBus</h5>
            <p className="text-sm ">
              Providing safer, cheaper and more reliable STUDENTS transportation
              services.
            </p>
            <button className="button-fade flex space-x-3 bg-darkblue hover:opacity-70 py-2 px-3 rounded-xl ">
              <p className="text-sm">Get started</p>
              <HiArrowRight />
            </button>
          </div>
          <div>
            <img src={busImg} alt="Bus" className="" />
          </div>
        </div>
      </div>
      <div className="px-10 my-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img src={trackingImg} alt="Statistics " className="" />
        </div>
        <div className="align-self-center space-y-4 text-darkblue">
          <h5 className="font-bold text-lg ">
            Real-time tracking of the kids and ETA
          </h5>
          <p className="text-sm ">
            Establishing dynamic bus stops/ routes based on students
            home-schools distance. Track every step of kids once they leave the
            house until their return, send alerts withETA(Estimated Time of
            Arrival) information or any abnormal events.
          </p>
        </div>
      </div>
      <div className="bg-yellow-500 my-10 mx-10 md:mx-20 grid grid-cols-1 md:grid-cols-2 gap-10  ">
        <div className="align-self-center space-y-4 text-white px-10 pt-20 md:h-80">
          <h5 className="font-bold text-lg ">
            Affordable Monthly subscriptions
          </h5>
          <p className="text-sm ">
            A flexible and transparent subscriptions model to pay competitive
            fees using fast digital payment methods. (Weekly, Be-Weekly,
            Monthly, Termly)
          </p>
        </div>
        <div className="pt-10  align-self-end md:relative">
          <img
            src={PhoneImg}
            alt="Finances"
            className="md:absolute -right-10 md:-bottom-4 lg:-bottom-10 "
          />
        </div>
      </div>
    </div>
  );
}

export default Schools;
