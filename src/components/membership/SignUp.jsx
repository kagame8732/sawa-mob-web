import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { MdImage, MdAccessTime } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { banks, districts } from "../../utils/data";
function SignUp() {
  const [passport, setPassport] = useState(null);
  const [license, setLicense] = useState(null);
  const [tripType, setTripType] = useState(null);
  return (
    <form className="flex flex-col space-y-10 px-6 signup">
      <div className="rounded-xs bg-blue-50 p-10 space-y-10">
        <div className="space-y-6">
          <h5 className="text-sm text-darkblue font-bold">
            Personal Information
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label htmlFor="first-name" className="sr-only">
                First Name
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="first-name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
                placeholder="First Name"
              />
            </div>
            <div className=" bg-white">
              <label htmlFor="last-name" className="sr-only">
                Last Name
              </label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="last-name"
                required
                className="flex-1 bg-white appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
                placeholder="Last Name"
              />
            </div>
            <div className=" bg-white">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="flex-1 appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
                placeholder="Email"
              />
            </div>
            <div className=" bg-white">
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                autoComplete="phone"
                required
                className="flex-1 bg-white appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-lightgray text-lightgray  focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
                placeholder="Phone Number"
              />
            </div>
            <div className=" bg-white">
              <label htmlFor="gender" className="sr-only">
                Gender
              </label>
              <Form.Select
                id="gender"
                className="text-xs border-0 py-2 appearance-none focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
              >
                <option className="text-xs text-lightgray" selected>
                  Gender
                </option>
                <option className="text-xs text-lightgray" value="male">
                  Male
                </option>
                <option className="text-xs text-lightgray" value="female">
                  Female
                </option>
                <option className="text-xs text-lightgray" value="other">
                  Other
                </option>
              </Form.Select>
            </div>
            <div className=" bg-white">
              <label htmlFor="district" className="sr-only">
                District{" "}
              </label>
              <Form.Select
                id="district"
                className="text-xs border-0 py-2 appearance-none focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
              >
                <option className="text-xs text-lightgray" selected>
                  Select District
                </option>
                {districts?.map((district, index) => (
                  <option
                    className="text-xs text-lightgray"
                    key={index}
                    value={district?.name}
                  >
                    {district.name ?? " "}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div>
              <input
                type="file"
                accept="image/*"
                id="passport"
                onChange={(e) => {
                  setPassport(e.target.files[0]);
                }}
                hidden
              />

              <label
                htmlFor="passport"
                className="overflow-auto cursor-pointer rounded-sm   border-dashed py-2.5 bg-white px-3  w-100 flex justify-between items-center"
              >
                <div>
                  <p className="text-xs text-darkblue  ">Passport Photo </p>
                  <p className="text-xs  text-red-500">
                    {passport?.name ?? " "}{" "}
                  </p>
                </div>
                <MdImage className="text-base text-darkblue" />
              </label>
            </div>
            <div>
              <input
                type="file"
                accept="image/*"
                id="driver-license"
                onChange={(e) => {
                  setLicense(e.target.files[0]);
                }}
                hidden
              />

              <label
                htmlFor="driver-license"
                className="overflow-auto cursor-pointer rounded-sm   border-dashed py-1 bg-white px-3  w-100 flex justify-between items-center"
              >
                <div>
                  <p className="text-xs text-darkblue  ">Driver’s Licence </p>
                  <p className="text-xs  text-red-500">
                    {license?.name ?? " "}{" "}
                  </p>
                </div>
                <svg
                  className="w-4"
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.8283 0.34549L24.8283 0.345485C25.0649 0.288974 25.3144 0.343787 25.5053 0.494599C25.6963 0.64536 25.8078 0.875248 25.8078 1.11854V1.11859V16.056C25.8078 16.4239 25.5556 16.7436 25.1978 16.8291L22.6002 17.45L22.6002 17.45C22.5383 17.4648 22.4762 17.4719 22.4149 17.4719L24.8283 0.34549ZM24.8283 0.34549L13.0657 3.15693M24.8283 0.34549L13.0657 3.15693M13.0657 3.15693L1.30319 0.345519C1.30317 0.345515 1.30315 0.345511 1.30313 0.345506L1.30307 0.34549L1.2682 0.491381L13.0657 3.15693ZM22.5154 12.3883C22.7129 12.7805 22.5551 13.2584 22.1631 13.4558C22.1631 13.4558 22.1631 13.4558 22.1631 13.4558L22.0956 13.3218L22.5154 12.3883ZM22.5154 12.3883C21.5001 10.3717 19.8313 8.70238 17.8153 7.687C17.4233 7.4894 16.9453 7.64724 16.748 8.03942C16.5506 8.43144 16.7083 8.90944 17.1003 9.10688C18.8135 9.96977 20.2328 11.3894 21.0957 13.1033C21.2355 13.3809 21.5156 13.5408 21.8059 13.5408L22.5154 12.3883ZM9.38321 26.2387L9.38322 26.2387C9.58056 25.8467 9.42289 25.3687 9.03088 25.1712C7.3173 24.3079 5.89806 22.8883 5.0355 21.1748C4.8382 20.7828 4.36044 20.6248 3.96821 20.8223L4.03567 20.9563L3.9682 20.8223C3.57619 21.0198 3.41842 21.4977 3.61577 21.8898C4.63077 23.9061 6.29959 25.5753 8.3159 26.5911C8.4303 26.6488 8.55248 26.6763 8.67289 26.6763C8.96321 26.6763 9.24343 26.5163 9.38321 26.2387ZM0.625972 0.494614C0.434965 0.645397 0.323633 0.875307 0.323633 1.11859V16.056C0.323633 16.4239 0.575988 16.7437 0.933762 16.8292L3.26441 17.3861C3.69128 17.4882 4.12013 17.2246 4.22211 16.7976C4.3241 16.3707 4.06071 15.9418 3.63374 15.8398L1.91316 15.4286V2.12585L12.271 4.60154V7.78197C12.271 8.22098 12.6267 8.57688 13.0657 8.57688C13.5047 8.57688 13.8605 8.22098 13.8605 7.78197V4.60154L24.2183 2.12585V15.4287L22.2307 15.9038C21.8038 16.0058 21.5404 16.4347 21.6424 16.8616C21.7296 17.2266 22.0555 17.472 22.4149 17.4719L0.625972 0.494614ZM13.0657 24.9438C17.3682 24.9438 20.8684 21.4427 20.8684 17.1391C20.8684 12.8355 17.3682 9.33432 13.0657 9.33432C8.76288 9.33432 5.2626 12.8354 5.2626 17.1391C5.2626 21.4428 8.76288 24.9438 13.0657 24.9438ZM12.2709 23.3034C9.47911 22.9454 7.26069 20.7265 6.90274 17.934H10.8112C11.0515 18.6141 11.5909 19.1537 12.2709 19.394V23.3034ZM13.8663 17.1391C13.8663 17.5806 13.5069 17.9401 13.0657 17.9401C12.6243 17.9401 12.2649 17.5806 12.2649 17.1391C12.2649 16.6976 12.6243 16.3382 13.0657 16.3382C13.507 16.3382 13.8663 16.6976 13.8663 17.1391ZM13.8604 19.394C14.5402 19.1536 15.0797 18.614 15.32 17.934H19.2283C18.8704 20.7265 16.6521 22.9454 13.8604 23.3034V19.394ZM13.0657 10.9241C16.2222 10.9241 18.8371 13.2913 19.2283 16.3442H15.32C14.9919 15.4156 14.1056 14.7483 13.0657 14.7483C12.0256 14.7483 11.1393 15.4156 10.8112 16.3442H6.90274C7.29399 13.2913 9.90898 10.9241 13.0657 10.9241Z"
                    fill="#0C2D48"
                    stroke="#0C2D48"
                    stroke-width="0.3"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h5 className="text-sm text-darkblue font-bold">
            Vehicle Information
          </h5>
          <div className="grid sm:grid-cols-2 gap-2">
            <div>
              <label htmlFor="Vehicle-make" className="sr-only">
                Vehicle Make
              </label>
              <input
                id="Vehicle-make"
                name="Vehicle-make"
                type="text"
                autoComplete="Vehicle-make"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
                placeholder="Vehicle Make"
              />
            </div>
            <div className=" bg-white">
              <label htmlFor="Vehicle-model" className="sr-only">
                Vehicle Model
              </label>
              <input
                id="Vehicle-model"
                name="Vehicle-model"
                type="text"
                autoComplete="Vehicle-model"
                required
                className="flex-1 bg-white appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
                placeholder="Vehicle Model"
              />
            </div>
            <div className=" bg-white">
              <label htmlFor="Vehicle-year" className="sr-only">
                Vehicle year
              </label>
              <input
                id="Vehicle-year"
                name="Vehicle-year"
                type="number"
                autoComplete="Vehicle-year"
                required
                className="flex-1 appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
                placeholder="Vehicle year"
              />
            </div>
            <div className=" bg-white">
              <label htmlFor="vehicle-type" className="sr-only">
                Vehicle Type
              </label>
              <Form.Select
                id="vehicle-type"
                className="text-xs border-0 py-2 appearance-none focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
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
                  bus
                </option>
              </Form.Select>
            </div>
            <div className=" bg-white">
              <label htmlFor="plate-nbr" className="sr-only">
                Plate Number
              </label>
              <input
                id="plate-nbr"
                name="plate-nbr"
                type="text"
                autoComplete="plate-nbr"
                required
                className="flex-1 bg-white appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-lightgray text-lightgray  focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
                placeholder="Plate Number"
              />
            </div>
            <div className=" bg-white">
              <label htmlFor="vehicle-color" className="sr-only">
                Vehicle Color
              </label>
              <Form.Select
                id="vehicle-color"
                className="text-xs border-0 py-2 appearance-none focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
              >
                <option className="text-xs text-lightgray" selected>
                  Vehicle Color
                </option>
                <option className="text-xs text-lightgray" value="blue">
                  blue
                </option>
                <option className="text-xs text-lightgray" value="black">
                  black
                </option>
                <option className="text-xs text-lightgray" value="white">
                  white
                </option>
              </Form.Select>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h5 className="text-sm text-darkblue font-bold">Bank Information</h5>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div>
              <label htmlFor="account-number" className="sr-only">
                Account Number
              </label>
              <input
                id="account-number"
                name="account-number"
                type="text"
                autoComplete="account-number"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
                placeholder="Account Number"
              />
            </div>

            <div className=" bg-white">
              <label htmlFor="account-type" className="sr-only">
                Account Type
              </label>
              <input
                id="account-type"
                name="account-type"
                type="text"
                autoComplete="account-type"
                required
                className="flex-1 bg-white appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-lightgray text-lightgray  focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
                placeholder="Account Type"
              />
            </div>
            <div className=" bg-white">
              <label htmlFor="bank" className="sr-only">
                Bank
              </label>
              <Form.Select
                id="bank"
                className="text-xs border-0 py-2 appearance-none focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10"
              >
                <option className="text-xs text-lightgray" selected>
                  Bank
                </option>
                {banks?.map((bank, index) => (
                  <option
                    className="text-xs text-lightgray"
                    key={index}
                    value={bank?.name}
                  >
                    {bank.name ?? " "}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h5 className="text-sm text-darkblue font-bold">Route</h5>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="form-check px-9 py-1.5 bg-white rounded-1">
              <input
                className="form-check-input "
                type="radio"
                name="trip-type"
                id="one-way-treep"
                value="One Way Treep"
                selected={tripType === "One Way Treep" ? true : false}
                required
                onChange={(e) => setTripType(e.target.value)}
              />
              <label
                className="form-check-label text-xs text-darkblue"
                for="one-way-treep"
              >
                One Way Treep
              </label>
            </div>

            <div className="form-check px-9 py-1.5 bg-white rounded-1">
              <input
                className="form-check-input"
                type="radio"
                name="trip-type"
                id="round-treep"
                value="Round Treep"
                selected={tripType === "Round Treep" ? true : false}
                required
                onChange={(e) => setTripType(e.target.value)}
              />
              <label
                className="form-check-label text-xs text-darkblue"
                for="round-treep"
              >
                Round Treep
              </label>
            </div>

            <div className="flex items-center bg-white pr-3 rounded-1">
              <label htmlFor="bus-top" className="sr-only">
                Pick up bus top
              </label>
              <input
                type="text"
                name="bus-top"
                id="bus-top"
                autoComplete="bus-top"
                className="flex-1 appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
                placeholder="Pick up bus top"
              />

              <IoLocationSharp className="text-base text-darkblue" />
            </div>
            <div className="flex items-center bg-white pr-3 rounded-1">
              <label htmlFor="bus-top-end" className="sr-only">
                End drop-off bus stop
              </label>
              <input
                type="text"
                name="bus-top-end"
                id="bus-top-end"
                autoComplete="bus-top-end"
                className="flex-1 appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
                placeholder="End drop-off bus stop"
              />

              <IoLocationSharp className="text-base text-darkblue" />
            </div>
            <div className="flex items-center bg-white pr-3 rounded-1">
              <label htmlFor="time" className="sr-only">
                Time
              </label>
              <input
                type="text"
                name="time"
                id="time"
                autoComplete="time"
                className="flex-1 appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
                placeholder="Time"
              />

              <MdAccessTime className="text-base text-darkblue" />
            </div>
            <div className=" bg-white">
              <label htmlFor="seats" className="sr-only">
                Available seats
              </label>
              <input
                id="seats"
                name="seats"
                type="number"
                autoComplete="seats"
                required
                className="flex-1 appearance-none rounded-none relative block w-full px-3 py-2.5 placeholder-lightgray text-lightgray rounded-b-md focus:outline-none focus:ring-darkblue focus:border-darkblue focus:z-10 sm:text-xs"
                placeholder="Available seats"
              />
            </div>
          </div>

          <div></div>
        </div>
        <p className="text-sm px-6 text-lightgray">
          Consectetur eiusmod mollit et excepteur ea nisi nisi reprehenderit
          quis consectetur tempor mollit. Irure cupidatat voluptate tempor
          offict incididunt. Irure e lit commo do proident officia labore elit
          laborum elit nostrud elit.
        </p>
      </div>
      <button className="align-self-center py-2 px-32 rounded-xl bg-lightdarkblue hover:opacity-70 text-whitecolor text-sm">
        Complete Sign Up
      </button>
    </form>
  );
}

export default SignUp;
