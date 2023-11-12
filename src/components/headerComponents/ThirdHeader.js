import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CollapsedContext } from "./../../utils/MenuContext";

const ThirdHeader = () => {
  const { isCollapsed } = useContext(CollapsedContext);
  const { pathname } = useLocation();

  const menuData = [
    {
      id: 0,
      title: "سيدات",
      color: "hover:bg-red-700",
    },
    {
      id: 1,
      title: "كبار السن",
      color: "hover:bg-teal-700",
    },
    {
      id: 2,
      title: "أباء ووصاه",
      color: "hover:bg-red-300",
    },
    {
      id: 3,
      title: "المعلمين",
      color: "hover:bg-amber-600",
    },
    {
      id: 4,
      title: "شباب",
      color: "hover:bg-purple-700",
    },
    {
      id: 5,
      title: "أطفال",
      color: "hover:bg-teal-400",
    },
  ];

  return (
    <div className="text-blue-800 h-fit  bg-transparent">
      <nav
        className={` text-blue-800  ${
          isCollapsed
            ? "bg-slate-50"
            : pathname === "/about"
            ? "bg-slate-50"
            : "bg-teal-100"
        }`}
      >
        <div className="">
          <div
            className={` ${
              isCollapsed
                ? "bg-gradient-to-r from-teal-100 to-teal-300"
                : "bg-transparent"
            }`}
          >
            <ul
              className={` ${
                isCollapsed
                  ? "relative  h-[75vh]  w-full bg-slate-50 transition-all ease-in-out duration-500  shadow-md  rounded-b-2xl z-50 flex flex-col  gap-5 px-5 mx-auto py-5  border-b-[1px]    m-auto text-right  items-end text-[8px]"
                  : "hidden sm:flex flex-row flex-wrap text-center items-start sm:justify-center text-[8px] sm:text-sm sm:items-end w-4/5 m-auto"
              }`}
            >
              {menuData.map((data) => (
                <li
                  key={data.id}
                  className={` ${
                    isCollapsed
                      ? "px-3 py-4 hover:shadow-md text-lg  font-medium hover:border-b-[1px] h-full w-full hover:scale-105"
                      : "px-3 py-2 w-32  rounded-b-2xl border shadow-md bg-white  hover:scale-125"
                  } ${data.color} hover:text-white`}
                >
                  <NavLink to="/" className={`py-1 transition z-50`}>
                    {data.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ThirdHeader;
