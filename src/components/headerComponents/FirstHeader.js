import React from "react";
import { NavLink } from "react-router-dom";

const FirstHeader = () => {
  return (
    <nav className={`bg-blue-800 text-[white]  border-b rounded-b-2xl  py-3 `}>
      <ul className="flex flex-row justify-end gap-4   items-end w-4/5 m-auto text-base">
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
      </ul>
    </nav>
  );
};

export default FirstHeader;
