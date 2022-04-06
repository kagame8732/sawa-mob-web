import React from "react";
import { HiArrowRight } from "react-icons/hi";
import trackingImg from "../../assets/images/tracking.png";
import PhoneImg from "../../assets/images/phones2.png";
// import busImg from "../../assets/images/shuribus.png";
import busImg from "../../assets/images/bus Rda 3.png";
import useElementOnScreen from "../../utils/useElementOnScreen.js";
import { useInView } from "react-intersection-observer";

function Schools() {
  const [containerRef, moveleftRef, moveleftRight, isVisible] =
    useElementOnScreen({
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });
  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
    trackVisibility: true,
    delay: 100,
  });

  // console.log("visible", isVisible);
  return (
    <div className="pb-20">
      <div className="schools-hero ">
        <div className="bg-transparent absolute z-10 w-100 p-10 md:p-32 text-white grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-10 p-6">
            <h5 className="text-5xl font-black fade-in appear leading-7">
              ShuriBus
            </h5>
            <p className="text-sm lg:w-80  fade-in appear">
              Providing safer, cheaper and more reliable STUDENTS transportation
              services.
            </p>
            <button className="button-fade flex items-center space-x-3 bg-darkblue hover:opacity-70 py-3 px-10 rounded-xl ">
              <p className="text-lg ">Get started</p>
              <HiArrowRight />
            </button>
          </div>
          <div className="zoom-in appear ">
            <img
              src={busImg}
              alt="Bus"
              // className=""
              className=" absolute right-0  md:w-1/2 md:bottom-32 lg:bottom-0 lg:top-12 w-3/4"
            />
          </div>
        </div>
      </div>
      <div className="px-10 my-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          // className={(isVisible ? " appear " : "") + "fade-left "}
          className=" fade-left "
          ref={moveleftRef}
        >
          <img src={trackingImg} alt="Statistics " className="" />
        </div>

        <div className="align-self-center space-y-10 text-darkblue">
          <h5 className="font-black text-5xl text-darkblue ">
            Real-time tracking of the kids and ETA
          </h5>
          <p className="text-base ">
            Establishing dynamic bus stops/ routes based on students
            home-schools distance. Track every step of kids once they leave the
            house until their return, send alerts withETA(Estimated Time of
            Arrival) information or any abnormal events.
          </p>
        </div>
      </div>
      <div className="bg-yellow-500 my-10 mx-10 md:mx-20 grid grid-cols-1 md:grid-cols-2 gap-10  ">
        <div className="align-self-center space-y-10 text-white px-10 lg:px-20 pt-20 md:h-80">
          <h5 className="font-black text-4xl  ">
            Affordable Monthly subscriptions
          </h5>
          <p className="text-base ">
            A flexible and transparent subscriptions model to pay competitive
            fees using fast digital payment methods. (Weekly, Be-Weekly,
            Monthly, Termly)
          </p>
        </div>
        <div
          className="pt-10  align-self-end md:relative fade-right "
          ref={moveleftRight}
        >
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
