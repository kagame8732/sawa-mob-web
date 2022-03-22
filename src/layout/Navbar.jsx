import React, { useEffect } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import rdaLogo from "../assets/images/rda flag 1.png";
function Navbar(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <header
      className={
        (location?.pathname === "/"
          ? " bg-darkblue text-whitecolor "
          : " bg-white border ") + " lg:px-32 px-20 sticky top-0 z-20"
      }
    >
      <nav className="flex justify-between items-center ">
        <div>
          <NavLink
            eaxct
            to="/"
            className={
              (location?.pathname === "/"
                ? " hover:text-whitecolor  "
                : " hover:text-black  ") +
              " py-4 px-2 font-semibold text-lg uppercase "
            }
          >
            SAWA
          </NavLink>
        </div>
        <div className="flex items-center space-x-2 font-medium">
          <NavLink
            exact
            to="/"
            className={
              (location?.pathname === "/"
                ? " hover:text-whitecolor  "
                : " hover:text-black  ") +
              " py-4 px-2 text-sm  border-b-4 border-opacity-0  hover:border-blue-400 "
            }
            activeClassName=" border-opacity-100 border-blue-400"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/about"
            className={
              (location?.pathname === "/"
                ? " hover:text-whitecolor  "
                : " hover:text-black  ") +
              " py-4 px-2 text-sm  border-b-4 border-opacity-0  hover:border-blue-400 "
            }
            activeClassName=" border-opacity-100 border-blue-400"
          >
            About
          </NavLink>
          <NavLink
            exact
            to="/membership"
            className={
              (location?.pathname === "/"
                ? " hover:text-whitecolor  "
                : " hover:text-black  ") +
              " py-4 px-2 text-sm  border-b-4 border-opacity-0  hover:border-blue-400 "
            }
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
                : " hover:text-black  ") +
              " p-3 text-sm  border-b-4 border-opacity-0  hover:border-blue-400 "
            }
            activeClassName=" border-opacity-100 border-blue-400"
          >
            Download App
          </NavLink> */}
          <button
            className={
              (location?.pathname === "/"
                ? " hover:text-whitecolor  "
                : " hover:text-black  ") +
              " py-4 px-2 text-sm  border-b-4 border-opacity-0  hover:border-blue-400 "
            }
          >
            Download App
          </button>
          <NavLink
            exact
            to="/requestride"
            className={
              (location?.pathname === "/"
                ? " hover:text-whitecolor  "
                : " hover:text-black  ") +
              " py-4 px-2 text-sm  border-b-4 border-opacity-0  hover:border-blue-400 "
            }
            activeClassName=" border-opacity-100 border-blue-400"
          >
            Hire a ride
          </NavLink>
        </div>
        <div className="flex items-center space-x-3">
          <img src={rdaLogo} alt="Rda flag" />
          <p className="text-base font-semibold">Rwanda</p>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
