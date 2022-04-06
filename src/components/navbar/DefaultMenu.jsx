import React from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
function DefaultMenu() {
  const location = useLocation();
  const history = useHistory();
  return (
    <div className="flex items-center space-x-2 font-medium">
      <NavLink
        exact
        to="/"
        className={
          (location?.pathname === "/"
            ? " hover:text-whitecolor  "
            : " hover:text-darkergray  ") +
          " py-10 px-2 text-base  border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
        }
        activeClassName=" border-opacity-100 border-lightblue"
      >
        Home
      </NavLink>
      <NavLink
        exact
        to="/about"
        className={
          (location?.pathname === "/"
            ? " hover:text-whitecolor  "
            : " hover:text-darkergray  ") +
          " py-10 px-2 text-base  border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
        }
        activeClassName=" border-opacity-100 border-lightblue"
      >
        About
      </NavLink>
      <NavLink
        exact
        to="/membership"
        className={
          (location?.pathname === "/"
            ? " hover:text-whitecolor  "
            : " hover:text-darkergray  ") +
          " py-10 px-2 text-base  border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
        }
        activeClassName=" border-opacity-100 border-lightblue"
      >
        Drive & Earn
      </NavLink>
      <NavLink
        exact
        to="/corporate"
        className={
          (location?.pathname === "/"
            ? " hover:text-whitecolor  "
            : " hover:text-darkergray  ") +
          " py-10 px-2 text-base  border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
        }
        activeClassName=" border-opacity-100 border-lightblue"
      >
        Corporate
      </NavLink>
      <NavLink
        exact
        to="/schools"
        className={
          (location?.pathname === "/"
            ? " hover:text-whitecolor  "
            : " hover:text-darkergray  ") +
          " py-10 px-2 text-base  border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
        }
        activeClassName=" border-opacity-100 border-lightblue"
      >
        Schools
      </NavLink>
      <NavLink
        exact
        to="/contact"
        className={
          (location?.pathname === "/"
            ? " hover:text-whitecolor  "
            : " hover:text-darkergray  ") +
          " py-10 px-2 text-base  border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
        }
        activeClassName=" border-opacity-100 border-lightblue"
      >
        Contact
      </NavLink>
      {/* <Dropdown className="d-inline">
        <DropdownToggle
          variant=""
          className={
            (location?.pathname === "/"
              ? " hover:text-whitecolor text-whitecolor "
              : " hover:text-darkergray  ") +
            (location?.pathname === "/bikeride" ||
            location?.pathname === "/busride"
              ? " border-lightblue border-opacity-100 "
              : "  ") +
            "focus:outline-none focus:ring-0  py-10 px-2 text-base border-l-0 border-r-0 border-t-0 border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
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
      </Dropdown> */}
    </div>
  );
}

export default DefaultMenu;
