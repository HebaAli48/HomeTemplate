import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Close, MenuBar } from "../../utils/Icons";

const ThirdHeader = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="text-blue-800 transform relative z-10 bg-teal-100">
      <nav className={`relative z-50 text-blue-800  bg-teal-100`}>
        <div className="relative z-50">
          {isCollapsed && (
            <button
              onClick={() => setIsCollapsed((prev) => !prev)}
              className="block  items-center px-3 py-2 border rounded text-blue-700 border-blue-700 hover:text-blue-600 hover:border-blue-600 sm:hidden order-9"
            >
              {MenuBar}
            </button>
          )}
          <div
            id="slide-bar"
            className={`${
              isCollapsed ? "translate-x-full hidden" : "translate-x-0 "
            } transform w-fit  sm:z-0 mx-auto  z-50  h-fit  sm:w-64 sm:block sm:text-center sm:top-0 transition-transform duration-400 ease-in-out fixed   sm:right-[80vw] right-4 top-[-30px]`}
          >
            {!isCollapsed && (
              <div
                className="cursor-pointer relative  z-50 top-7 right-4 text-red-800 ms-44"
                onClick={() => setIsCollapsed((prev) => !prev)}
              >
                {Close}
              </div>
            )}
            <ul className="relative z-40 sm:bg-transparent bg-white sm:flex-wrap  sm:bottom-10 flex flex-col gap-2 px-5  sm:right-5 md:right-0 mx-auto md:px-14 py-9 rounded  w-fit sm:w-[80vw] m-auto  sm:gap-0 sm:flex-row text-center items-start sm:justify-center text-[8px] sm:text-sm sm:items-end">
              <li
                className={`  px-3 py-2 w-36    rounded-b-2xl border shadow-md bg-white hover:text-white  hover:bg-red-700 hover:scale-125`}
              >
                <NavLink to="/" className={`py-1 transition`}>
                  سيدات
                </NavLink>
              </li>

              <li
                className={`  px-3 py-2 w-36    rounded-b-2xl border shadow-md bg-white hover:text-white hover:bg-teal-700 hover:scale-125`}
              >
                <NavLink to="/" className={`py-1 transition`}>
                  كبـار السن
                </NavLink>
              </li>

              <li
                className={`  px-3 py-2 w-36    rounded-b-2xl border shadow-md bg-white hover:text-white hover:bg-red-300 hover:scale-125`}
              >
                <NavLink to="/" className={`py-1 transition`}>
                  أباء و وصاه
                </NavLink>
              </li>

              <li
                className={`  px-3 py-2 w-36    rounded-b-2xl border shadow-md bg-white hover:text-white hover:bg-amber-600 hover:scale-125`}
              >
                <NavLink to="/" className={`py-1 transition`}>
                  المعلمين
                </NavLink>
              </li>

              <li
                className={`  px-3 py-2 w-36    rounded-b-2xl border shadow-md bg-white hover:text-white hover:bg-purple-700 hover:scale-125`}
              >
                <NavLink to="/" className={`py-1 transition`}>
                  شبـاب
                </NavLink>
              </li>

              <li
                className={`  px-3 py-2 w-36    rounded-b-2xl border shadow-md bg-white hover:text-white hover:bg-teal-400 hover:scale-125`}
              >
                <NavLink to="/" className={`py-1 transition`}>
                  أطفال
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ThirdHeader;
