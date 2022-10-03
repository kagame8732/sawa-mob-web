import React from "react";
import BusFilter from "../../components/filter/BusFilter";
import downtownImg from "../../assets/images/downtown 1.png";
import remerestationImg from "../../assets/images/remera 1.png";
function BusRide() {
  return (
    <div className="">
      <div className="bus-hero flex items-center justify-center">
        <div className=" bg-transparent absolute z-10 p-10">
          <h2 className="text-whitecolor text-3xl font-bold text-center px-10">
            For your next road trip, look for low-cost KBS direction bus
            tickets.
          </h2>
          <p className="text-sm text-whitecolor mt-2 text-center mb-10">
            Compare all of your bus travel alternatives in one spot to save time
            and money.
          </p>
          <BusFilter />
        </div>
      </div>
      <div className="px-20 md:px-32 py-10 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h2 className="text-2xl text-darkblue font-bold text-center">
            Upcoming Buses
          </h2>
          <p className="text-sm text-lightgray text-center max-w-3xl">
            Consectetur eiusmod mollit et excepteur ea nisi nisi reprehenderit
            quis consectetur tempor mollit. Irure cupidatat voluptate tempor
            offict incididunt.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-b-2 border-r border-blue-50 rounded-1">
            <div className="">
              <img
                src={downtownImg}
                alt="bus image"
                className="w-100 max-h-60 object-cover"
              />
            </div>
            <div className="p-2">
              <h5 className="text-sm text-darkblue font-bold">
                Remera- Downtown
              </h5>
              <p className="text-xs text-lightgray">Time: 8:00AM</p>
              <p className="text-xs text-lightgray">Bus: KBS</p>
            </div>
          </div>
          <div className="border-b-2 border-r border-blue-50 rounded-1">
            <div className="">
              <img
                src={remerestationImg}
                alt="bus image"
                className="w-100 max-h-60 object-cover"
              />
            </div>
            <div className="p-2">
              <h5 className="text-sm text-darkblue font-bold">
                Nyabugogo-Remera
              </h5>
              <p className="text-xs text-lightgray">Time: 9:30AM</p>
              <p className="text-xs text-lightgray">Bus: KBS</p>
            </div>
          </div>
          <div className="border-b-2 border-r border-blue-50 rounded-1">
            <div className="">
              <img
                src={downtownImg}
                alt="bus image"
                className="w-100 max-h-60 object-cover"
              />
            </div>
            <div className="p-2">
              <h5 className="text-sm text-darkblue font-bold">
                Remera- Downtown
              </h5>
              <p className="text-xs text-lightgray">Time: 8:00AM</p>
              <p className="text-xs text-lightgray">Bus: KBS</p>
            </div>
          </div>
          <div className="border-b-2 border-r border-blue-50 rounded-1">
            <div className="">
              <img
                src={downtownImg}
                alt="bus image"
                className="w-100 max-h-60 object-cover"
              />
            </div>
            <div className="p-2">
              <h5 className="text-sm text-darkblue font-bold">
                Remera- Downtown
              </h5>
              <p className="text-xs text-lightgray">Time: 8:00AM</p>
              <p className="text-xs text-lightgray">Bus: KBS</p>
            </div>
          </div>
          <div className="border-b-2 border-r border-blue-50 rounded-1">
            <div className="">
              <img
                src={remerestationImg}
                alt="bus image"
                className="w-100 max-h-60 object-cover"
              />
            </div>
            <div className="p-2">
              <h5 className="text-sm text-darkblue font-bold">
                Nyabugogo-Remera
              </h5>
              <p className="text-xs text-lightgray">Time: 9:30AM</p>
              <p className="text-xs text-lightgray">Bus: KBS</p>
            </div>
          </div>
          <div className="border-b-2 border-r border-blue-50 rounded-1">
            <div className="">
              <img
                src={downtownImg}
                alt="bus image"
                className="w-100 max-h-60 object-cover"
              />
            </div>
            <div className="p-2">
              <h5 className="text-sm text-darkblue font-bold">
                Remera- Downtown
              </h5>
              <p className="text-xs text-lightgray">Time: 8:00AM</p>
              <p className="text-xs text-lightgray">Bus: KBS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusRide;
