import React from "react";
import { Form } from "react-bootstrap";
import { IoLocationSharp } from "react-icons/io5";
function RequestRideForm() {
  return (
    <form className="space-y-3 pb-10">
      <div className="flex items-center bg-white pl-3 rounded-1">
        <IoLocationSharp className="text-xl text-darkblue" />
        <label htmlFor="location" className="sr-only">
          Enter your Location
        </label>
        <input
          type="text"
          name="location"
          id="location"
          autoComplete="location"
          className="flex-1 appearance-none rounded-none relative block w-full px-3 py-3 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
          placeholder="Enter your Location"
        />
      </div>
      <div className="flex items-center bg-white pl-3 rounded-1">
        <svg
          className="w-4"
          width="32"
          height="23"
          viewBox="0 0 32 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.4433 6.17216C30.5571 5.56324 28.1394 6.5882 27.5095 7.12014C27.3033 6.63853 27.0693 6.11104 26.8156 5.57095C25.5186 2.80955 24.4186 1.20931 23.4527 0.679015C23.414 0.657705 23.3739 0.640657 23.333 0.627962C23.2502 0.6023 21.2428 0 16 0C10.7573 0 8.74992 0.60239 8.66702 0.627962C8.62605 0.640657 8.58605 0.657705 8.5473 0.679015C7.58149 1.2094 6.48145 2.80955 5.18438 5.57095C4.9307 6.11104 4.69664 6.63853 4.49049 7.12014C3.86064 6.5882 1.44281 5.56324 0.556723 6.17216C-0.357617 6.80049 0.00874077 8.77814 0.556723 9.31451C0.898831 9.6493 1.83749 9.75123 2.82596 9.66499C2.60233 10.0559 2.42609 10.4959 2.30678 10.9698C3.86562 11.3534 7.52995 11.3368 6.98231 12.8962C6.18107 15.1773 3.71487 14.8615 2.19466 13.8474L2.47853 20.2788C2.47853 21.7817 3.40675 23 4.55177 23H5.79854C6.94356 23 7.87171 21.7817 7.87171 20.2788L7.83102 19.7022H24.1691L24.1284 20.2788C24.1284 21.7817 25.0565 23 26.2015 23H27.4483C28.5933 23 29.5216 21.7817 29.5216 20.2788L29.8054 13.8474C28.2852 14.8615 25.819 15.1774 25.0178 12.8962C24.4701 11.3368 28.1344 11.3534 29.6933 10.9698C29.574 10.4958 29.3978 10.0558 29.1741 9.66499C30.1626 9.75132 31.1013 9.64939 31.4434 9.31451C31.9912 8.77814 32.3576 6.80049 31.4433 6.17216ZM19.9894 16.6798H12.0105L11.1815 12.712H20.8183L19.9894 16.6798ZM5.93236 7.8395C6.92484 5.56034 8.1931 3.12639 9.07939 2.56544C9.451 2.46959 11.4784 2.00766 16 2.00766C20.5267 2.00766 22.5536 2.47068 22.9204 2.56535C23.8055 3.12548 25.0741 5.5598 26.0671 7.8395H5.93236Z"
            fill="#0C2D48"
          />
        </svg>
        <label htmlFor="vehicle-type" className="sr-only">
          Vehicle Type
        </label>
        <Form.Select
          id="vehicle-type"
          className="text-xs border-0 ml-3 py-3 appearance-none focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
        >
          <option className="text-xs text-lightgray" selected>
            Vehicle Type
          </option>
          <option className="text-xs text-lightgray" value="blue">
            cab
          </option>
          <option className="text-xs text-lightgray" value="black">
            school bus
          </option>
          <option className="text-xs text-lightgray" value="white">
            bike
          </option>
        </Form.Select>
      </div>
      <div className="flex items-center bg-white pl-3 rounded-1">
        <svg
          className="w-4"
          width="25"
          height="37"
          viewBox="0 0 25 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.6008 0H5.0955C3.03407 0 1.35707 1.591 1.35707 3.54671V4.625C0.972645 4.625 0.660645 4.92034 0.660645 5.28571V5.94643C0.660645 6.3118 0.972645 6.60714 1.35707 6.60714V7.26786C0.972645 7.26786 0.660645 7.5632 0.660645 7.92857V8.58929C0.660645 8.95466 0.972645 9.25 1.35707 9.25V9.91071C0.972645 9.91071 0.660645 10.2061 0.660645 10.5714V11.2321C0.660645 11.5975 0.972645 11.8929 1.35707 11.8929V33.4533C1.35707 35.409 3.03407 37 5.0955 37H20.6008C22.6622 37 24.3392 35.409 24.3392 33.4533V3.54671C24.3392 1.591 22.6622 0 20.6008 0ZM22.9464 33.4533C22.9464 34.6802 21.8941 35.6786 20.6008 35.6786H5.0955C3.80223 35.6786 2.74993 34.6802 2.74993 33.4533V3.54671C2.74993 2.31977 3.80223 1.32143 5.0955 1.32143H20.6008C21.8941 1.32143 22.9464 2.31977 22.9464 3.54671V33.4533Z"
            fill="#0C2D48"
          />
          <path
            d="M13.1964 3.96429H15.2857C15.6701 3.96429 15.9821 3.66895 15.9821 3.30357C15.9821 2.9382 15.6701 2.64286 15.2857 2.64286H13.1964C12.812 2.64286 12.5 2.9382 12.5 3.30357C12.5 3.66895 12.812 3.96429 13.1964 3.96429Z"
            fill="#0C2D48"
          />
          <path
            d="M10.4108 3.96429C10.5919 3.96429 10.7729 3.89161 10.9052 3.77268C11.0306 3.64714 11.1072 3.47536 11.1072 3.30357C11.1072 3.13179 11.0306 2.95934 10.9052 2.83446C10.6406 2.59 10.181 2.59 9.91632 2.83446C9.79096 2.95934 9.71436 3.12452 9.71436 3.30357C9.71436 3.47536 9.79096 3.64714 9.91632 3.77268C10.0486 3.89161 10.2297 3.96429 10.4108 3.96429Z"
            fill="#0C2D48"
          />
          <path
            d="M12.848 35.0179C13.8096 35.0179 14.5891 34.2783 14.5891 33.3661C14.5891 32.4538 13.8096 31.7143 12.848 31.7143C11.8864 31.7143 11.1069 32.4538 11.1069 33.3661C11.1069 34.2783 11.8864 35.0179 12.848 35.0179Z"
            fill="#0C2D48"
          />
          <path
            d="M3.44629 31.0536H22.2499V4.625H3.44629V31.0536Z"
            fill="#0C2D48"
          />
        </svg>
        <label htmlFor="contact" className="sr-only">
          Your contact
        </label>
        <input
          type="text"
          name="contact"
          id="contact"
          autoComplete="location"
          className="flex-1 appearance-none rounded-none relative block w-full px-6 py-3 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
          placeholder="Your contact
          "
        />
      </div>
      <button className="text-sm bg-darkblue text-whitecolor hover:opacity-70 py-3 w-100">
        Request Ride
      </button>
    </form>
  );
}

export default RequestRideForm;
