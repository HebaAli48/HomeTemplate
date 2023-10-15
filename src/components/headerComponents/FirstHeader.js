import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MenuBar } from "../../utils/Icons";
import { CollapsedContext } from "./../../utils/MenuContext";

const FirstHeader = () => {
  const { isCollapsed, setIsCollapsed, isShown, setIsShown } =
    useContext(CollapsedContext);

  return (
    <div className="bg-white z-40 relative">
      <nav
        className={`bg-blue-800 text-[white]  border-b rounded-b-2xl  py-3 `}
      >
        <ul className="flex flex-row xs:justify-end justify-center gap-2 sm:gap-4   items-end w-4/5 m-auto text-base">
          <li className="pt-2 sm:pt-0  ">
            <NavLink
              to="/"
              className="hover:border-b-2 border-line-primary py-1 transition  hover:text-teal-400 hover:border-teal-400"
            >
              خدمات الدعم
            </NavLink>
          </li>
          <li className="pt-2 sm:pt-0 ">
            <NavLink
              to="/"
              className="hover:border-b-2 border-line-primary py-1 transition  hover:text-teal-400 hover:border-teal-400"
            >
              مواضيغ هامة
            </NavLink>
          </li>
          <li className="pt-2 sm:pt-0 ">
            <NavLink
              to="/"
              className="hover:border-b-2 border-line-primary py-1 transition  hover:text-teal-400 hover:border-teal-400"
            >
              من نحن
            </NavLink>
          </li>
          <li className="pt-2 sm:pt-0 ">
            <button
              onClick={() => {
                setIsCollapsed((prev) => !prev);
                setIsShown((prev) => !prev);
                console.log(isCollapsed);
                console.log("sss", isShown);
              }}
              className="block  items-center px-3 py-2 border rounded  border-white hover:text-slate-400 hover:border-slate-400 sm:hidden order-9"
            >
              {MenuBar}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FirstHeader;
