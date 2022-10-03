import React from "react";

function BusFilter() {
  return (
    <form className="bg-white py-6 px-10 grid grid-cols-1 md:grid-cols-2 gap-2 rounded-xl">
      <div className="flex items-end space-x-2">
        <div className=" ">
          <label htmlFor="from" className="text-sm text-darkblue font-bold">
            From
          </label>
          <input
            type="text"
            name="from"
            id="from"
            autoComplete="from"
            className="flex-1 appearance-none bg-blue-50  rounded-1 relative block w-full px-3 py-2 placeholder-lightgray text-lightgray  focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
            placeholder="eg: Rwandex"
          />
        </div>
        <div className="p-2 rounded-circle bg-darkblue">
          <svg
            className="w-4"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_141_521)">
              <path
                d="M3.36819 7.44995C3.48995 7.57171 3.65268 7.63641 3.81831 7.63641C3.90027 7.63641 3.98295 7.62054 4.06165 7.58792C4.29944 7.48945 4.4545 7.25739 4.4545 7V4.45456H13.3635C13.715 4.45456 13.9999 4.16964 13.9999 3.8182C13.9999 3.46676 13.715 3.18184 13.3635 3.18184H4.4545V0.636404C4.4545 0.37906 4.29948 0.147001 4.06165 0.0484924C3.82386 -0.0500585 3.5501 0.00441389 3.36819 0.186413L0.18639 3.36821C-0.0621299 3.61673 -0.0621299 4.01963 0.18639 4.26815L3.36819 7.44995Z"
                fill="white"
              />
              <path
                d="M10.6317 6.55001C10.4497 6.36797 10.176 6.31354 9.93824 6.41204C9.70046 6.51055 9.5454 6.74261 9.5454 6.99996V9.54539H0.63636C0.284919 9.54539 0 9.83031 0 10.1818C0 10.5332 0.284919 10.8181 0.63636 10.8181H9.5454V13.3636C9.5454 13.6209 9.70041 13.853 9.93824 13.9515C10.0169 13.9841 10.0997 14 10.1816 14C10.3472 14 10.51 13.9353 10.6317 13.8135L13.8135 10.6317C14.062 10.3832 14.062 9.98032 13.8135 9.73176L10.6317 6.55001Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_141_521">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className=" flex-1">
          <label htmlFor="to" className="text-sm text-darkblue font-bold">
            To
          </label>
          <input
            type="text"
            name="to"
            id="to"
            autoComplete="to"
            className="flex-1 appearance-none bg-blue-50  rounded-1 relative block w-full px-3 py-2 placeholder-lightgray text-lightgray  focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
            placeholder="eg: Downtown"
          />
        </div>
      </div>

      <div className="flex items-end space-x-2">
        <div className="flex-1 ">
          <label
            htmlFor="departure"
            className="text-sm text-darkblue font-bold"
          >
            Departure
          </label>
          <input
            type="date"
            name="departure"
            id="departure"
            autoComplete="departure"
            className="flex-1 appearance-none bg-blue-50  rounded-1 relative block w-full px-3 py-1.5 placeholder-lightgray text-lightgray  focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
            placeholder="03/03/2022"
          />
        </div>
        <button className="text-sm text-white bg-darkblue hover:opacity-70 py-1.5 px-3 rounded-1">
          Search
        </button>
      </div>
    </form>
  );
}

export default BusFilter;
