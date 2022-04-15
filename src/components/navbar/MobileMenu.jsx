import React from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { MdClose } from "react-icons/md";
import rdaLogo from "../../assets/images/rda flag 1.png";
import { useDispatch, useSelector } from "react-redux";
import { onChangeLocation } from "../../store/actions";
function MobileMenu({ setShowMobileNav }) {
  const { locations, selectedLocation } = useSelector(
    ({ Locations }) => Locations
  );
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
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
          className="hover:text-whitecolor   py-4 px-2 text-base  border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
          activeClassName=" border-opacity-100 border-lightblue"
          onClick={() => setShowMobileNav(false)}
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/about"
          className=" hover:text-whitecolor   py-4 px-2 text-base  border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
          activeClassName=" border-opacity-100 border-lightblue"
          onClick={() => setShowMobileNav(false)}
        >
          About
        </NavLink>
        <NavLink
          exact
          to="/membership"
          className=" hover:text-whitecolor   py-4 px-2 text-base  border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
          activeClassName=" border-opacity-100 border-lightblue"
          onClick={() => setShowMobileNav(false)}
        >
          Drive & Earn
        </NavLink>
        <NavLink
          exact
          to="/corporate"
          className=" hover:text-whitecolor   py-4 px-2 text-base  border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
          activeClassName=" border-opacity-100 border-lightblue"
          onClick={() => setShowMobileNav(false)}
        >
          For corporate
        </NavLink>
        <NavLink
          exact
          to="/schools"
          className=" hover:text-whitecolor   py-4 px-2 text-base  border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
          activeClassName=" border-opacity-100 border-lightblue"
          onClick={() => setShowMobileNav(false)}
        >
          For schools
        </NavLink>
        <NavLink
          exact
          to="/contact"
          className=" hover:text-whitecolor   py-4 px-2 text-base  border-b-4 border-opacity-0  hover:border-lightblue rounded-1"
          activeClassName=" border-opacity-100 border-lightblue"
          onClick={() => setShowMobileNav(false)}
        >
          Contact
        </NavLink>
        <Dropdown className="d-inline">
          <DropdownToggle
            variant=""
            className="   border-0 focus:outline-none focus:ring-0  py-4 px-4  text-white flex"
            id="dropdown-basic"
          >
            <div className="flex items-center justify-center space-x-3">
              <img
                src={rdaLogo}
                alt="Rda flag"
                className="max-h-6 object-cover"
              />
              <p className="text-xs font-semibold text-whitecolor">
                {selectedLocation?.name}
              </p>
            </div>
          </DropdownToggle>

          <Dropdown.Menu className="z-40">
            {locations?.map((location, index) => (
              <Dropdown.Item key={index}>
                <button
                  data-toggle="modal"
                  data-target="#logoutModal"
                  className="flex items-center justify-center space-x-3"
                  onClick={() => {
                    dispatch(onChangeLocation(location));
                    setShowMobileNav(false);
                  }}
                >
                  <img
                    src={rdaLogo}
                    alt="Rda flag"
                    className="max-h-6 object-cover"
                  />
                  <p className="text-xs font-semibold text-darkblue">
                    {location?.name}
                  </p>
                </button>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default MobileMenu;
