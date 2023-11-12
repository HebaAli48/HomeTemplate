import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SigningInButton from "./SigningInButton";
import SearchingInput from "./SearchingInput";
import { CollapsedContext } from "./../../utils/MenuContext";

const SecondHeader = () => {
  const { isCollapsed } = useContext(CollapsedContext);
  const { pathname } = useLocation();
  // console.log(pathname);
  // ${pathname === "/about" ? "bg-slate-50" : ""}
  return (
    <div
      className={`${
        isCollapsed
          ? "bg-slate-50"
          : pathname === "/about"
          ? "bg-slate-50"
          : "bg-gradient-to-r from-teal-100 to-teal-300"
      }  z-40 relative`}
    >
      <nav
        className={`sm:shadow-md text-[white]  z-40 relative bg-white border-b rounded-b-[30px]  py-3 `}
      >
        <div
          className={`${
            isCollapsed ? "" : ""
          }w-4/5 flex flex-col sm:flex-row gap-5 justify-between items-center m-auto`}
        >
          <ul
            className={`
          flex flex-col  gap-5 sm:flex-row items-baseline  sm:justify-between w-fit sm:gap-12 sm:order-first order-last   text-base`}
          >
            {/* signing component */}
            <li className="w-fit">
              <NavLink
                to="/sign-in"
                className=" py-1 transition  hover:text-blue-800 "
              >
                <SigningInButton />
              </NavLink>
            </li>
            {/* searching component */}
            {!isCollapsed && (
              <li className="">
                <NavLink to="/" className=" py-1 transition ">
                  <SearchingInput />
                </NavLink>
              </li>
            )}
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
