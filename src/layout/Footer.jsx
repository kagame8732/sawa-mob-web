import React from "react";

import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-darkblue text-whitecolor py-3 px-10">
      <div className="grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-5 gap-10  md:gap-2  my-10 ">
        <div className="flex justify-center items-center col-span-5 md:col-span-1">
          <h5 className="font-bold text-2xl">Sawa Mob</h5>
        </div>
        <div className="space-y-2 col-span-5 sm:col-span-2 md:col-span-1">
          <h5 className="font-bold text-lg ">Contact</h5>
          <div className="space-y-2">
            <p className="text-sm">Phone - 0789878237</p>
            <p className="text-sm">support@sawa.com</p>
          </div>
        </div>
        <div className="space-y-2 col-span-5 sm:col-span-3 md:col-span-2">
          <h5 className="font-bold text-lg ">Follow</h5>
          <div className="grid grid-cols-2 gap-2">
            <a className="text-sm font-light cursor-pointer" href="/#">
              Twiter
            </a>
            <a className="text-sm font-thin cursor-pointer" href="/#">
              Instagram
            </a>
            <a className="text-sm font-thin cursor-pointer" href="/#">
              Facebook
            </a>
            <a className="text-sm cursor-pointer" href="/#">
              Linkedin
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-end space-y-1 col-span-5 md:col-span-1">
          <Link to="/" className="text-sm font-semibold">
            Privacy policy
          </Link>
          <Link to="/" className="text-sm font-semibold">
            Terms & Conditions
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-1">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.87 7.90175C12.2566 7.96675 12.6141 9.14758 12.6358 9.70008H14.575C14.4883 7.55508 12.9608 6.24425 10.8375 6.24425C8.44329 6.24425 6.66663 7.75008 6.66663 11.1517C6.66663 13.2534 7.67413 15.7451 10.8266 15.7451C13.2316 15.7451 14.5208 13.9576 14.5533 12.5492H12.6141C12.5816 13.1884 12.1266 14.0442 10.8483 14.1092C9.42913 14.0659 8.83329 12.9609 8.83329 11.1517C8.83329 8.02092 10.22 7.92342 10.87 7.90175ZM11 0.166748C5.01996 0.166748 0.166626 5.02008 0.166626 11.0001C0.166626 16.9801 5.01996 21.8334 11 21.8334C16.98 21.8334 21.8333 16.9801 21.8333 11.0001C21.8333 5.02008 16.98 0.166748 11 0.166748ZM11 19.6667C6.22246 19.6667 2.33329 15.7776 2.33329 11.0001C2.33329 6.22258 6.22246 2.33341 11 2.33341C15.7775 2.33341 19.6666 6.22258 19.6666 11.0001C19.6666 15.7776 15.7775 19.6667 11 19.6667Z"
            fill="white"
          />
        </svg>

        <p className="text-lighterblue text-xs">SawaMobility2022</p>
      </div>
    </footer>
  );
}

export default Footer;
