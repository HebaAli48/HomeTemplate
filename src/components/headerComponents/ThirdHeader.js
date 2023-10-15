import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CollapsedContext } from "./../../utils/MenuContext";

const ThirdHeader = () => {
  const { isCollapsed, isShown } = useContext(CollapsedContext);
  const menuData = [
    {
      id: 0,
      title: "سيدات",
      color: "bg-red-700",
    },
    {
      id: 1,
      title: "كبار السن",
      color: "bg-teal-700",
    },
    {
      id: 2,
      title: "اباء ووصاه",
      color: "bg-red-300",
    },
    {
      id: 3,
      title: "المعلمين",
      color: "bg-amber-600",
    },
    {
      id: 4,
      title: "شباب",
      color: "bg-purple-700",
    },
    {
      id: 5,
      title: "أطفال",
      color: "bg-teal-400",
    },
  ];

  return (
    <div className="text-blue-800 transform relative z-50 sm:z-10 bg-transparent">
      <nav
        className={`relative z-30 text-blue-800 ${
          !isCollapsed ? "bg-teal-100" : "bg-transparent"
        }`}
      >
        <div className="relative z-50">
          {isCollapsed && (
            <div
              id="slide-bar"
              className={` border shadow-md rounded-b-md translate-x-0 bottom-20 relative z-50 h-[75vh] w-[80w] `}
            >
              <ul
                className={` relative  h-full w-full pt-10 bg-white sm:flex-wrap z-50 flex flex-col gap-10 px-5 mx-auto md:px-14 py-9 rounded border   m-auto text-center items-start text-[8px]`}
              >
                {menuData.map((data) => (
                  <li
                    key={data.id}
                    className={` px-3 py-2 border h-full w-full shadow-md  hover:text-white hover:${data.color} hover:scale-125`}
                  >
                    <NavLink to="/" className={`py-1 transition z-50`}>
                      {data.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!isCollapsed && (
            <ul className=" hidden sm:flex flex-row flex-wrap text-center items-start sm:justify-center text-[8px] sm:text-sm sm:items-end w-4/5 m-auto">
              {" "}
              {menuData.map((data) => (
                <li
                  key={data.id}
                  className={` px-3 py-2 w-32  rounded-b-2xl border shadow-md bg-white hover:text-white hover:${data.color} hover:scale-125`}
                >
                  <NavLink to="/" className={`py-1 transition`}>
                    {data.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default ThirdHeader;
