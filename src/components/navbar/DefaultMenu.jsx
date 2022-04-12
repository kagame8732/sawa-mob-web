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
            ? " hover:text-darkergray  "
            : " hover:text-darkergray  ") +
          " py-9 px-2 text-sm  border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
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
            ? " hover:text-darkergray  "
            : " hover:text-darkergray  ") +
          " py-9 px-2 text-sm  border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
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
            ? " hover:text-darkergray  "
            : " hover:text-darkergray  ") +
          " py-9 px-2 text-sm  border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
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
            ? " hover:text-darkergray  "
            : " hover:text-darkergray  ") +
          " py-9 px-2 text-sm  border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
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
            ? " hover:text-darkergray  "
            : " hover:text-darkergray  ") +
          " py-9 px-2 text-sm  border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
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
            ? " hover:text-darkergray  "
            : " hover:text-darkergray  ") +
          " py-9 px-2 text-sm  border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
        }
        activeClassName=" border-opacity-100 border-lightblue"
      >
        Contact
      </NavLink>
    </div>
  );
}

export default DefaultMenu;
