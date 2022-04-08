import React from "react";
import { HiArrowRight } from "react-icons/hi";
import statisticsImg from "../../assets/images/statistics.png";
import financesImg from "../../assets/images/finances.png";
import phoneImg from "../../assets/images/phones1.png";
import useElementOnScreen from "../../utils/useElementOnScreen";
function Corporate() {
  const [containerRef, moveleftRef, moveleftRight, isVisible] =
    useElementOnScreen({
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });
  return (
    <div className="space-y-28 md:space-y-20 pb-20">
      <div className="corporate-hero ">
        <div className="bg-transparent absolute z-10 w-100 p-10 md:p-32 text-white grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-10 p-6 ">
            <h5 className="text-3xl font-black w-60 fade-in appear">
              Tailored mass transporation
            </h5>
            <p className="text-sm lg:w-96 leading-7 fade-in appear">
              Providing the best way to manage transportation for groups such as
              Students, Office Staff, event attendees etc.
            </p>
            <button className=" button-fade fade-in-down appear flex items-center space-x-3 bg-darkblue hover:opacity-70 py-3 px-10 rounded-xl ">
              <p className="text-lg">Get started</p>
              <HiArrowRight />
            </button>
          </div>
          <div className="zoom-in appear">
            <img src={phoneImg} alt="Shuri Bus App" className="" />
          </div>
        </div>
      </div>
      <div className="mx-10 md:mx-20 my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="align-self-center space-y-10 text-darkblue">
          <h5 className="font-black text-3xl text-darkblue ">
            Total Organisation of company’s Mobility
          </h5>
          <p className="text-base ">
            Total Organizational Awareness Mobility is a valuable tool for
            achieving strategic goals. Sawa implements all-encompassing mobility
            strategies, giving businesses complete control over their mobility
            landscape..
          </p>
        </div>
        <div className="md:order-first fade-left " ref={moveleftRef}>
          <img src={statisticsImg} alt="Statistics " className="" />
        </div>
      </div>
      <div className="bg-lightblue my-10 mx-10 md:mx-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="align-self-center space-y-10 text-white p-10">
          <h5 className="font-black text-3xl ">
            Total Organisation of company’s Mobility
          </h5>
          <p className="text-base ">
            Organizations are now focusing on Total Reward, looking for new
            methods to improve their employee benefit package. A SawaMobility
            Budget gives you access to all kinds of transportation and allows
            you to plan all of your professional and leisure trips.
          </p>
        </div>
        <div className="pt-10  align-self-end fade-right " ref={moveleftRight}>
          <img src={financesImg} alt="Finances" className="" />
        </div>
      </div>
    </div>
  );
}

export default Corporate;
