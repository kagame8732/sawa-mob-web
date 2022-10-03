import React from "react";
import hireImg1 from "../../assets/images/hire1.png";
import hireImg2 from "../../assets/images/hire2.png";
function BusesSlider() {
  return (
    <div className="flex items-center overflow-hidden bg-black">
      <div className="slide-container">
        <span className="slider-span" id="slider-span1"></span>
        <span className="slider-span" id="slider-span2"></span>
        <span className="slider-span" id="slider-span3"></span>
        <span className="slider-span" id="slider-span4"></span>

        <div className="image-slider">
          <div className="slide-div" id="slide-1">
            <img src={hireImg1} alt="Slider Image" id="#img1" className="img" />
            <a href="#slider-span1" className="button" id="button-1"></a>
          </div>
          <div className="slide-div" id="slide-2">
            <img src={hireImg2} alt="Slider Image" id="#img2" className="img" />
            <a href="#slider-span2" className="button" id="button-2"></a>
          </div>
          <div className="slide-div" id="slide-3">
            <img src={hireImg1} alt="Slider Image" id="#img3" className="img" />
            <a href="#slider-span3" className="button" id="button-3"></a>
          </div>
          <div className="slide-div" id="slide-4">
            <img src={hireImg2} alt="Slider Image" id="#img4" className="img" />
            <a href="#slider-span4" className="button" id="button-4"></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusesSlider;
