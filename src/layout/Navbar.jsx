import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import rdaLogo from "../assets/images/rda flag 1.png";
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DefaultMenu from "../components/navbar/DefaultMenu";
import { ImMenu } from "react-icons/im";
import MobileMenu from "../components/navbar/MobileMenu";
function Navbar(props) {
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
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
        " lg:px-32 px-6 sm:px-10  md:px-20 sticky top-0 z-20"
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
                : " hover:text-darkergray  ") +
              " py-4 px-2 font-semibold text-lg uppercase "
            }
          >
            SAWA MOBILITY
          </NavLink>
        </div>
        {isMobile ? (
          <button onClick={() => setShowMobileNav(true)} className="py-6">
            <ImMenu className="text-xl" />
          </button>
        ) : (
          <DefaultMenu />
        )}

        <div className="flex items-center space-x-3">
          <img src={rdaLogo} alt="Rda flag" />
          <p className="text-base font-semibold">Rwanda</p>
        </div>
      </nav>
      {showMobileNav ? (
        <MobileMenu setShowMobileNav={setShowMobileNav} />
      ) : null}
    </header>
  );
}

export default Navbar;
