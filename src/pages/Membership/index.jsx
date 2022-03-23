import React, { useState } from "react";
import driverImg from "../../assets/images/driver.png";
import SignUp from "../../components/auth/SignUp";
function index() {
  return (
    <div className="py-10">
      <div className="flex">
        <div className=" hidden md:block w-3/4">
          <img
            src={driverImg}
            alt="driver"
            className="max-h-96 w-100 object-cover "
          />
        </div>
        <div className="align-self-center  space-y-10">
          <h2 className="text-darker-gray text-2xl px-10 font-bold">
            Make your vehicle be Benefecial to you today
          </h2>
          <div className=" bg-gray-50 p-10 space-y-10">
            <p className="text-sm text-lightgray pt-2">
              Join Hundreds of drivers (heroes) rescue lives while profiting
              from their empty vehicle seats.
            </p>
            <button className="bg-darkblue hover:opacity-70 text-sm py-2 px-6 text-whitecolor rounded-xl">
              Become a Member
            </button>
          </div>
        </div>
      </div>
      <div className="px-20 md:px-32 py-10 space-y-10">
        <div className=" space-y-3">
          <h5 className="text-darkergray font-bold text-xl text-center">
            How is it beneficial
          </h5>
          <p className=" text-center text-sm text-lightgray">
            Join a community of drivers making profits everday
          </p>
        </div>
        <div className="bg-darkblue grid grid-cols-1 md:grid-cols-3  py-10 px-10 lg:px-20 text-white gap-6 md:gap-10  lg:gap-32">
          <div className="flex flex-col">
            <svg
              className="align-self-center w-16 h-16 mb-3.5"
              width="101"
              height="121"
              viewBox="0 0 101 121"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M97.4025 0H72.9167C71.0588 0 69.5582 1.50059 69.5582 3.35846C69.5582 5.21634 71.0588 6.71693 72.9167 6.71693H89.2803L53.8616 42.1595L40.9279 29.2258C39.6179 27.9157 37.498 27.9157 36.1641 29.2258L1.22179 64.1681C-0.088252 65.4781 -0.088252 67.598 1.22179 68.9319C2.36509 70.0752 4.8899 70.0037 5.98557 68.9319L38.546 36.3715L47.1446 44.9701C33.02 47.6854 23.4448 54.6644 23.4448 63.2868V99.2057C23.4448 111.425 39.7608 121 60.5547 121C81.3724 121 97.6645 111.425 97.6645 99.2057V63.263C97.6645 52.3301 82.3251 44.0411 61.7694 43.7315L94.044 11.4807V27.8443C94.044 29.7022 95.5446 31.2028 97.4025 31.2028C99.2604 31.2028 100.761 29.7022 100.761 27.8443V3.35846C100.761 1.50059 99.2601 0 97.4025 0ZM90.9476 99.2057C90.9476 106.47 78.7285 114.283 60.5547 114.283C42.3808 114.283 30.1618 106.494 30.1618 99.2057V93.4177C36.831 98.9913 47.8354 102.564 60.5547 102.564C73.274 102.564 84.3021 98.9913 90.9476 93.4177V99.2057ZM90.9476 80.7461C90.9476 88.0346 78.7285 95.8234 60.5547 95.8234C42.3808 95.8234 30.1618 88.0346 30.1618 80.7461V74.7675C36.7596 79.7218 47.6925 82.8421 60.5547 82.8421C73.4407 82.8421 84.3497 79.7218 90.9476 74.7675V80.7461ZM90.9473 63.263C90.9473 69.3368 78.4662 76.1252 60.5544 76.1252C42.6426 76.1252 30.1615 69.3606 30.1615 63.263C30.1615 57.1654 42.6426 50.4008 60.5544 50.4008C78.4665 50.4246 90.9473 57.1892 90.9473 63.263Z"
                fill="white"
              />
            </svg>
            <h5 className="text-base text-center font-bold">
              Enjoy Huge Amount of income
            </h5>
            <p className="text-xs my-2">
              Consectetur eiusmod mollit et excepteur ea nisi nisi reprehen
              derit quis consectetur tempor mollit. Irure cupidatat.
            </p>
          </div>
          <div className="flex flex-col">
            <svg
              className="align-self-center w-16 h-20"
              width="117"
              height="117"
              viewBox="0 0 117 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.875 97.5H29.25C18.4804 97.5 9.75 88.7694 9.75 78V34.125C9.75 23.3554 18.4804 14.625 29.25 14.625H82.875C93.6444 14.625 102.375 23.3554 102.375 34.125V48.75"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M39 9.75V19.5"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M73.125 9.75V19.5"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.75 39H102.375"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M90.1875 76.2592L82.875 83.5717"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M82.875 107.25C96.3369 107.25 107.25 96.3369 107.25 82.875C107.25 69.4131 96.3369 58.5 82.875 58.5C69.4131 58.5 58.5 69.4131 58.5 82.875C58.5 96.3369 69.4131 107.25 82.875 107.25Z"
                stroke="white"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h5 className="text-base text-center font-bold">
              Drive on your own schedule
            </h5>
            <p className="text-xs my-2">
              Consectetur eiusmod mollit et excepteur ea nisi nisi reprehen
              derit quis consectetur tempor mollit. Irure cupidatat.
            </p>
          </div>
          <div className="flex flex-col">
            <svg
              className="align-self-center w-20 h-20"
              width="136"
              height="82"
              viewBox="0 0 136 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M92.3738 0.200012H74.12C72.42 0.200012 70.7838 0.837512 69.53 1.98501L48.6413 21.11C48.62 21.1313 48.5988 21.1738 48.5775 21.195C45.05 24.51 45.1138 29.8013 48.1313 33.095C50.83 36.0488 56.5038 36.835 60.0525 33.6688C60.0738 33.6475 60.1163 33.6475 60.1375 33.6263L77.1162 18.0713C78.4975 16.8175 80.665 16.9025 81.9188 18.2838C83.1938 19.665 83.0875 21.8113 81.7063 23.0863L76.16 28.165L107.1 53.2825C107.716 53.7925 108.269 54.345 108.779 54.9188V13.8L97.1762 2.19751C95.9225 0.922512 94.18 0.200012 92.3738 0.200012ZM115.6 13.8425V61.4213C115.6 65.1825 118.639 68.2213 122.4 68.2213H136V13.8425H115.6ZM125.8 61.4213C123.93 61.4213 122.4 59.8913 122.4 58.0213C122.4 56.1513 123.93 54.6213 125.8 54.6213C127.67 54.6213 129.2 56.1513 129.2 58.0213C129.2 59.8913 127.67 61.4213 125.8 61.4213ZM0 68.2H13.6C17.3612 68.2 20.4 65.1613 20.4 61.4V13.8425H0V68.2ZM10.2 54.6213C12.07 54.6213 13.6 56.1513 13.6 58.0213C13.6 59.8913 12.07 61.4213 10.2 61.4213C8.33 61.4213 6.8 59.8913 6.8 58.0213C6.8 56.13 8.33 54.6213 10.2 54.6213ZM102.829 58.5738L71.1025 32.8188L64.7275 38.6625C58.4163 44.4213 48.7475 43.8688 43.1162 37.7275C37.4 31.48 37.8463 21.8113 44.0513 16.1163L61.4338 0.200012H43.6263C41.82 0.200012 40.0988 0.922512 38.8237 2.19751L27.2 13.8V61.3788H31.0888L50.32 78.7825C56.1425 83.5213 64.7063 82.6288 69.445 76.8063L69.4875 76.7638L73.2913 80.0575C76.67 82.82 81.6638 82.2888 84.405 78.91L91.0775 70.7075L92.225 71.6425C95.1363 74.0013 99.4287 73.5763 101.788 70.6438L103.806 68.1575C106.186 65.225 105.74 60.9538 102.829 58.5738Z"
                fill="white"
              />
            </svg>
            <h5 className="text-base text-center font-bold">
              Make meaningful connections
            </h5>
            <p className="text-xs my-2">
              Consectetur eiusmod mollit et excepteur ea nisi nisi reprehen
              derit quis consectetur tempor mollit. Irure cupidatat.
            </p>
          </div>
        </div>
        <div className=" space-y-3 my-2">
          <h5 className="text-darkergray font-bold text-xl text-center">
            Create an Account
          </h5>
          <p className=" text-center text-sm text-lightgray">
            Kindly provide all the information requested below.
          </p>
        </div>
        <SignUp />
      </div>
    </div>
  );
}

export default index;
