import React from "react";
import { HiArrowRight } from "react-icons/hi";
import statisticsImg from "../../assets/images/statistics.png";
import financesImg from "../../assets/images/finances.png";
import phoneImg from "../../assets/images/phones1.png";
function Corporate() {
  return (
    <div className="space-y-20 pb-20">
      <div className="corporate-hero ">
        <div className="bg-transparent absolute z-10 w-100 p-10 md:p-32 text-white grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-10 p-6">
            <h5 className="text-2xl font-bold w-60">
              Tailored mass transporation
            </h5>
            <p className="text-sm ">
              Providing the best way to manage transportation for groups such as
              Students, Office Staff, event attendees etc.
            </p>
            <button className="flex space-x-3 bg-darkblue hover:opacity-70 py-2 px-3 rounded-xl ">
              <p className="text-sm">Get started</p>
              <HiArrowRight />
            </button>
          </div>
          <div>
            <img src={phoneImg} alt="Shuri Bus App" className="" />
          </div>
        </div>
      </div>
      <div className="mx-10 md:mx-20 my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img src={statisticsImg} alt="Statistics " className="" />
        </div>
        <div className="align-self-center space-y-4 text-darkblue">
          <h5 className="font-bold text-lg ">
            Total Organisation of company’s Mobility
          </h5>
          <p className="text-sm ">
            Total Organizational Awareness Mobility is a valuable tool for
            achieving strategic goals. Sawa implements all-encompassing mobility
            strategies, giving businesses complete control over their mobility
            landscape..
          </p>
        </div>
      </div>
      <div className="bg-lightblue my-10 mx-10 md:mx-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="align-self-center space-y-4 text-white p-10">
          <h5 className="font-bold text-lg ">
            Total Organisation of company’s Mobility
          </h5>
          <p className="text-sm ">
            Organizations are now focusing on Total Reward, looking for new
            methods to improve their employee benefit package. A SawaMobility
            Budget gives you access to all kinds of transportation and allows
            you to plan all of your professional and leisure trips.
          </p>
        </div>
        <div className="pt-10  align-self-end">
          <img src={financesImg} alt="Finances" className="" />
        </div>
      </div>
    </div>
  );
}

export default Corporate;
