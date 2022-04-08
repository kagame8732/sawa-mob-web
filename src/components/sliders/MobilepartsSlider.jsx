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
                  Consectetur eiusmod mollit et excepteur ea nisi nisi repr ehen
                  derit quis
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
                  Consectetur eiusmod mollit et excepteur ea nisi nisi repr ehen
                  derit quis
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="grid grid-cols-1 gap-3 sm:px-20 px-10">
              <div className=" flex flex-col justify-between items-center p-6 rounded-xl bg-white border-blue-50 border-t-2 border-l-0 border-r-4 border-b-4 space-y-3">
                <img src={tapgologo2Img} alt="Tap & Go logo" />
                <p className="text-sm text-gray-500 py-2">
                  Consectetur eiusmod mollit et excepteur ea nisi nisi repr ehen
                  derit quis
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
                <p className="text-xs text-gray-500">
                  {" "}
                  Consectetur eiusmod mollit et excepteur ea nisi nisi repr ehen
                  derit quis
                </p>
              </div>
              <div className=" flex flex-col justify-between items-center p-6 rounded-xl bg-white border-blue-50 border-t-2 border-l-0 border-r-4 border-b-4 space-y-3">
                <img src={shuriBusLogoImg} alt="shuri bus logo" />
                <p className="text-xs text-gray-500">
                  {" "}
                  Consectetur eiusmod mollit et excepteur ea nisi nisi repr ehen
                  derit quis
                </p>
              </div>
              <div className=" flex flex-col justify-between items-center p-6 rounded-xl bg-white border-blue-50 border-t-2 border-l-0 border-r-4 border-b-4 space-y-3">
                <img src={tapgologo2Img} alt="Tap & Go logo" />
                <p className="text-xs text-gray-500">
                  Consectetur eiusmod mollit et excepteur ea nisi nisi repr ehen
                  derit quis
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="grid grid-cols-3 gap-3 px-20">
              <div className=" flex flex-col justify-between items-center p-6 rounded-xl bg-white border-blue-50 border-t-2 border-l-0 border-r-4 border-b-4 space-y-3">
                <img src={tapgologoImg} alt="Tap & Go logo" />
                <p className="text-xs text-gray-500">
                  {" "}
                  Consectetur eiusmod mollit et excepteur ea nisi nisi repr ehen
                  derit quis
                </p>
              </div>
              <div className=" flex flex-col justify-between items-center p-6 rounded-xl bg-white border-blue-50 border-t-2 border-l-0 border-r-4 border-b-4 space-y-3">
                <img src={shuriBusLogoImg} alt="shuri bus logo" />
                <p className="text-xs text-gray-500">
                  {" "}
                  Consectetur eiusmod mollit et excepteur ea nisi nisi repr ehen
                  derit quis
                </p>
              </div>
              <div className=" flex flex-col justify-between items-center p-6 rounded-xl bg-white border-blue-50 border-t-2 border-l-0 border-r-4 border-b-4 space-y-3">
                <img src={tapgologo2Img} alt="Tap & Go logo" />
                <p className="text-xs text-gray-500">
                  Consectetur eiusmod mollit et excepteur ea nisi nisi repr ehen
                  derit quis
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
