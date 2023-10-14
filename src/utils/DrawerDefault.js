import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const DrawerDefault = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <nav
      className={`bg-primary-color text-white bg-red-300 border-b border-line-primary ${
        isCollapsed ? "pb-3" : "pb-56"
      } pt-3 sm:pb-3`}
    >
      <div className="container">
        <div className="flex items-center relative">
          {/* logo */}
          <Link to="/">{/* Include your Logo component */}</Link>

          {/* collapse button */}
          <button
            onClick={() => setIsCollapsed((prev) => !prev)}
            className="block items-center px-3 py-2 border rounded text-cyan-200 border-cyan-400 hover:text-white hover:border-white ms-2 sm:hidden order-9"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          {/* links */}
          <div
            className={`${
              isCollapsed ? "hidden" : ""
            } absolute w-100 top-5 sm:block sm:relative py-5 pl-5 pr-2 sm:text-center sm:top-0 grow bg-inherit`}
          >
            <ul className="sm:flex justify-center sm:space-x-2 md:space-x-8 items-center w-4/5 m-auto text-lg">
              <li className="pt-2 sm:pt-0">
                <NavLink
                  to="/"
                  className="hover:border-b-2 border-line-primary py-1 transition"
                >
                  Home
                </NavLink>
              </li>
              <li className="pt-2 sm:pt-0">
                <NavLink
                  to="/store"
                  className="hover:border-b-2 border-line-primary py-1 transition"
                >
                  Store
                </NavLink>
              </li>
              <li className="pt-2 sm:pt-0">
                <NavLink
                  to="/support"
                  className="hover:border-b-2 border-line-primary py-1 transition"
                >
                  Support
                </NavLink>
              </li>
              <li className="pt-2 sm:pt-0">
                <NavLink
                  to="/about"
                  className="hover:border-b-2 border-line-primary py-1 transition"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DrawerDefault;
