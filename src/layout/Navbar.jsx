import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import rdaLogo from "../assets/images/rda flag 1.png";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DefaultMenu from "../components/navbar/DefaultMenu";
import { ImMenu } from "react-icons/im";
import MobileMenu from "../components/navbar/MobileMenu";
import { onChangeLocation } from "../store/actions";
function Navbar(props) {
  const { locations, selectedLocation } = useSelector(
    ({ Locations }) => Locations
  );
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const handleResize = () => {
    if (window.innerWidth < 890) {
      console.log("mobile screen");
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <header
      className={
        (location?.pathname === "/"
          ? " bg-darkblue text-whitecolor "
          : " bg-white border text-darkergray ") +
        "px-6 sm:px-10  md:px-20 sticky top-0 z-20"
      }
    >
      <nav className="flex justify-between items-center ">
        <div className="lg:hidden">
          <button onClick={() => setShowMobileNav(true)} className="py-6">
            <ImMenu className="text-xl" />
          </button>
        </div>
        {/* {isMobile ? (
          <button onClick={() => setShowMobileNav(true)} className="py-6">
            <ImMenu className="text-xl" />
          </button>
        ) : null} */}

        <div>
          <NavLink
            eaxct
            to="/"
            className={
              (location?.pathname === "/"
                ? " hover:text-whitecolor  "
                : " hover:text-darkergray  ") +
              " py-4 px-2 font-semibold text-lg uppercase "
            }
          >
            SAWA MOBILITY
          </NavLink>
        </div>
        <div className="hidden lg:block">
          <DefaultMenu />
        </div>
        {/* {isMobile ? null : <DefaultMenu />} */}
        <Dropdown className="d-inline">
          <DropdownToggle
            variant=""
            className={
              (location?.pathname === "/"
                ? "text-whitecolor  "
                : "text-darkergray  ") +
              "   border-0 focus:outline-none focus:ring-0  py-4 px-4 hidden  lg:flex"
            }
            id="dropdown-basic"
          >
            <div className="flex items-center justify-center space-x-3">
              <img
                src={rdaLogo}
                alt="Rda flag"
                className="max-h-6 object-cover"
              />
              <p className="text-xs font-semibold ">{selectedLocation?.name}</p>
            </div>
          </DropdownToggle>

          <Dropdown.Menu className="z-40">
            {locations?.map((location, index) => (
              <Dropdown.Item key={index}>
                <button
                  data-toggle="modal"
                  data-target="#logoutModal"
                  className="flex items-center justify-center space-x-3"
                  onClick={() => dispatch(onChangeLocation(location))}
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
      </nav>
      {showMobileNav ? (
        <MobileMenu setShowMobileNav={setShowMobileNav} />
      ) : null}
    </header>
  );
}

export default Navbar;
