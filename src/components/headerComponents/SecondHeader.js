import React from "react";
import { NavLink } from "react-router-dom";
import SigningInButton from "./SigningInButton";
import SearchingInput from "./SearchingInput";

const SecondHeader = () => {
  return (
    <div className="bg-teal-100">
      <nav
        className={`shadow-md text-[white]  z-50 relative bg-white border-b rounded-b-[30px]  py-3 `}
      >
        <div className="w-4/5 flex flex-col sm:flex-row gap-5 justify-between items-center m-auto">
          <ul className="flex flex-col gap-5 xs:flex-row items-center  xs:justify-start xs:gap-10 sm:order-first order-last   text-base">
            {/* signing component */}
            <li className="">
              <NavLink
                to="/"
                className=" py-1 transition  hover:text-blue-800 "
              >
                <SigningInButton />
              </NavLink>
            </li>
            {/* searching component */}
            <li className="">
              <NavLink to="/" className=" py-1 transition ">
                <SearchingInput />
              </NavLink>
            </li>
          </ul>
          {/* logo component */}
          <ul className="text-start  text-base">
            <li className=" ">
              <NavLink to="/" className=" py-1 transition text-gray-950">
                LOGO
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SecondHeader;
