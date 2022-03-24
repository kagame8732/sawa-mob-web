import React from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { MdClose } from "react-icons/md";

function MobileMenu({ setShowMobileNav }) {
  const location = useLocation();
  const history = useHistory();
  return (
    <div className="absolute left-0 top-0 z-30 w-2/3 sm:w-1/2 bg-darkblue h-screen">
      <div className="flex flex-col items-center space-x-2 font-medium relative text-whitecolor">
        <button
          onClick={() => setShowMobileNav(false)}
          className="absolute top-0 right-0 p-2 bg-white"
        >
          <MdClose className="text-darkblue" />
        </button>
        <NavLink
          exact
          to="/"
          className="hover:text-whitecolor   py-4 px-2 text-sm  border-b-4 border-opacity-0  hover:border-blue-400 rounded-1"
          activeClassName=" border-opacity-100 border-blue-400"
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/about"
          className=" hover:text-whitecolor   py-4 px-2 text-sm  border-b-4 border-opacity-0  hover:border-blue-400 rounded-1"
          activeClassName=" border-opacity-100 border-blue-400"
        >
          About
        </NavLink>
        <NavLink
          exact
          to="/membership"
          className=" hover:text-whitecolor   py-4 px-2 text-sm  border-b-4 border-opacity-0  hover:border-blue-400 rounded-1"
          activeClassName=" border-opacity-100 border-blue-400"
        >
          Become a member
        </NavLink>
        {/* <NavLink
exact
to="/membership"
className={
  (location?.pathname === "/"
    ? " hover:text-whitecolor  "
    : " hover:text-darkergray  ") +
  " p-3 text-sm  border-b-4 border-opacity-0  hover:border-blue-400 "
}
activeClassName=" border-opacity-100 border-blue-400"
>
Download App
</NavLink> */}
        <button className=" hover:text-whitecolor  text-whitecolor   py-4 px-2 text-sm  border-b-4 border-opacity-0  hover:border-blue-400 rounded-1">
          Download App
        </button>

        <Dropdown className="d-inline">
          <DropdownToggle
            variant=""
            className={
              " hover:text-whitecolor text-whitecolor " +
              (location?.pathname === "/bikeride" ||
              location?.pathname === "/busride"
                ? " border-blue-400 border-opacity-100 "
                : "  ") +
              "focus:outline-none focus:ring-0  py-4 px-2 text-sm border-l-0 border-r-0 border-t-0 border-b-4 border-opacity-0  hover:border-blue-400 rounded-1"
            }
            id="dropdown-basic"
          >
            Hire a ride
          </DropdownToggle>

          <Dropdown.Menu className="z-40">
            <Dropdown.Item>
              <button
                className="dropdown-item  text-xs"
                data-toggle="modal"
                data-target="#logoutModal"
                onClick={() => {
                  history.push("/busride");
                }}
              >
                Bus
              </button>
            </Dropdown.Item>

            <Dropdown.Item>
              <button
                className="dropdown-item  text-xs "
                data-toggle="modal"
                data-target="#logoutModal"
                onClick={() => {
                  history.push("/bikeride");
                }}
              >
                Cab / bike / School bus
              </button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default MobileMenu;
