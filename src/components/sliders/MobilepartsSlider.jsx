import React from "react";
import tapgologoImg from "../../assets/images/TapGologo.png";
import tapgologo2Img from "../../assets/images/TapGologo2.png";
import shuriBusLogoImg from "../../assets/images/shuribusLogo.png";
import { Carousel } from "react-bootstrap";
function MobilepartsSlider() {
  return (
    <div>
      <div className="md:hidden">
        <Carousel indicators={true} interval={null}>
          <Carousel.Item>
            <div className="grid grid-cols-1 gap-3 sm:px-20 px-10">
              <div className=" flex flex-col justify-between items-center p-6 rounded-xl bg-white border-blue-50 border-t-2 border-l-0 border-r-4 border-b-4 space-y-3">
                <img src={tapgologoImg} alt="Tap & Go logo" />
                <p className="text-sm text-gray-500 py-2">
                  {" "}
                  Traveling with cash has never been safe. With Tap&Go card, you
                  don’t need cash to travel around Kigali. All you need is to
                  top up your card using the Tap&Go App or agents. Tap&Go keeps
                  your money safe for traveling. Easy. Convenient. Seamless.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="grid grid-cols-1 gap-3 sm:px-20 px-10">
              <div className=" flex flex-col justify-between items-center p-6 rounded-xl bg-white border-blue-50 border-t-2 border-l-0 border-r-4 border-b-4 space-y-3">
                <img src={shuriBusLogoImg} alt="shuri bus logo" />
                <p className="text-sm text-gray-500 py-2">
                  {" "}
                  ShuriBus is a school transportation platform that connects
                  parents, schools, and bus companies to offer the safest
                  transportation experience to students by accessing real-time
                  data of buses. We provide optimized transportation solutions
                  to fulfill daily transportation needs. ShuriBus is a one-stop
                  partner for all types of schools at all levels.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="grid grid-cols-1 gap-3 sm:px-20 px-10">
              <div className=" flex flex-col justify-between items-center p-6 rounded-xl bg-white border-blue-50 border-t-2 border-l-0 border-r-4 border-b-4 space-y-3">
                <img src={tapgologo2Img} alt="Tap & Go logo" />
                <p className="text-sm text-gray-500 py-2">
                  With Tap&Go Ride, passengers are able to use the hailing app
                  to call a moto and pay using their Tap&Go card at the end of
                  the journey. Convenient. Faster. Safer
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="hidden md:block">
        <Carousel indicators={true} interval={null}>
          <Carousel.Item>
            <div className="grid grid-cols-3 gap-3 px-20">
              <div className=" flex flex-col justify-between items-center p-6 rounded-xl bg-white border-blue-50 border-t-2 border-l-0 border-r-4 border-b-4 space-y-3">
                <img src={tapgologoImg} alt="Tap & Go logo" />
                <p className="text-sm text-gray-500 p-6">
                  {" "}
                  Traveling with cash has never been safe. With Tap&Go card, you
                  don’t need cash to travel around Kigali. All you need is to
                  top up your card using the Tap&Go App or agents. Tap&Go keeps
                  your money safe for traveling. Easy. Convenient. Seamless.
                </p>
              </div>
              <div className=" flex flex-col justify-between items-center p-6 rounded-xl bg-white border-blue-50 border-t-2 border-l-0 border-r-4 border-b-4 space-y-3">
                <img src={shuriBusLogoImg} alt="shuri bus logo" />
                <p className="text-sm text-gray-500">
                  {" "}
                  ShuriBus is a school transportation platform that connects
                  parents, schools, and bus companies to offer the safest
                  transportation experience to students by accessing real-time
                  data of buses. We provide optimized transportation solutions
                  to fulfill daily transportation needs. ShuriBus is a one-stop
                  partner for all types of schools at all levels.
                </p>
              </div>
              <div className=" flex flex-col justify-between items-center p-6 rounded-xl bg-white border-blue-50 border-t-2 border-l-0 border-r-4 border-b-4 space-y-3">
                <img src={tapgologo2Img} alt="Tap & Go logo" />
                <p className="text-sm text-gray-500 p-11">
                  With Tap&Go Ride, passengers are able to use the hailing app
                  to call a moto and pay using their Tap&Go card at the end of
                  the journey. Convenient. Faster. Safer
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="grid grid-cols-3 gap-3 px-20">
              <div className=" flex flex-col justify-between items-center p-6 rounded-xl bg-white border-blue-50 border-t-2 border-l-0 border-r-4 border-b-4 space-y-3">
                <img src={tapgologoImg} alt="Tap & Go logo p-4" />
                <p className="text-sm text-gray-500 p-6">
                  {" "}
                  Traveling with cash has never been safe. With Tap&Go card, you
                  don’t need cash to travel around Kigali. All you need is to
                  top up your card using the Tap&Go App or agents. Tap&Go keeps
                  your money safe for traveling. Easy. Convenient. Seamless.
                </p>
              </div>
              <div className=" flex flex-col justify-between items-center p-6 rounded-xl bg-white border-blue-50 border-t-2 border-l-0 border-r-4 border-b-4 space-y-3">
                <img src={shuriBusLogoImg} alt="shuri bus logo" />
                <p className="text-sm text-gray-500">
                  {" "}
                  ShuriBus is a school transportation platform that connects
                  parents, schools, and bus companies to offer the safest
                  transportation experience to students by accessing real-time
                  data of buses. We provide optimized transportation solutions
                  to fulfill daily transportation needs. ShuriBus is a one-stop
                  partner for all types of schools at all levels.
                </p>
              </div>
              <div className=" flex flex-col justify-between items-center p-6 rounded-xl bg-white border-blue-50 border-t-2 border-l-0 border-r-4 border-b-4 space-y-3">
                <img src={tapgologo2Img} alt="Tap & Go logo p-11" />
                <p className="text-sm text-gray-500 p-11">
                  With Tap&Go Ride, passengers are able to use the hailing app
                  to call a moto and pay using their Tap&Go card at the end of
                  the journey. Convenient. Faster. Safer
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default MobilepartsSlider;
