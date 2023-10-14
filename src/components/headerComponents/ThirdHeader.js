import React from "react";
import { NavLink } from "react-router-dom";

const ThirdHeader = () => {
  return (
    <nav className={`text-blue-800  bg-teal-100 `}>
      <ul className="flex f flex-row  text-center items-start  sm:justify-center text-[8px]  sm:text-sm sm:items-end   w-4/5 m-auto">
        <li
          className={` xl:px-12 lg:px-8 md:px-5 px-0 py-2 w-32 sm:w-fit    rounded-b-2xl border shadow-md bg-white hover:text-white  hover:bg-red-700 hover:scale-125`}
        >
          <NavLink to="/" className={`py-1 transition`}>
            سيدات
          </NavLink>
        </li>

        <li
          className={` xl:px-12 lg:px-8 md:px-5 px-0 py-2 w-32 sm:w-fit    rounded-b-2xl border shadow-md bg-white hover:text-white hover:bg-teal-700 hover:scale-125`}
        >
          <NavLink to="/" className={`py-1 transition`}>
            كبـار السن
          </NavLink>
        </li>

        <li
          className={` xl:px-12 lg:px-8 md:px-5 px-0 py-2 w-32 sm:w-fit    rounded-b-2xl border shadow-md bg-white hover:text-white hover:bg-red-300 hover:scale-125`}
        >
          <NavLink to="/" className={`py-1 transition`}>
            أباء و وصاه
          </NavLink>
        </li>

        <li
          className={` xl:px-12 lg:px-8 md:px-5 px-0 py-2 w-32 sm:w-fit    rounded-b-2xl border shadow-md bg-white hover:text-white hover:bg-amber-600 hover:scale-125`}
        >
          <NavLink to="/" className={`py-1 transition`}>
            المعلمين
          </NavLink>
        </li>

        <li
          className={` xl:px-12 lg:px-8 md:px-5 px-0 py-2 w-32 sm:w-fit    rounded-b-2xl border shadow-md bg-white hover:text-white hover:bg-purple-700 hover:scale-125`}
        >
          <NavLink to="/" className={`py-1 transition`}>
            شبـاب
          </NavLink>
        </li>

        <li
          className={` xl:px-12 lg:px-8 md:px-5 px-0 py-2 w-32 sm:w-fit    rounded-b-2xl border shadow-md bg-white hover:text-white hover:bg-teal-400 hover:scale-125`}
        >
          <NavLink to="/" className={`py-1 transition`}>
            أطفال
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ThirdHeader;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const ThirdHeader = () => {
//   const initialHoverState = Array(6).fill(false); // Initialize with 6 items

//   const [isHovered, setIsHovered] = useState(initialHoverState);

//   const HeaderData = [
//     {
//       id: 0,
//       title: "سيدات",
//       color: "red-700",
//     },
//     {
//       id: 1,
//       title: "كبـار السن",
//       color: "teal-700",
//     },
//     {
//       id: 2,
//       title: " أباء و وصاه",
//       color: "red-300",
//     },
//     {
//       id: 3,
//       title: "المعلمين",
//       color: "amber-600",
//     },
//     {
//       id: 4,
//       title: "شبـاب",
//       color: "violet-700",
//     },
//     {
//       id: 5,
//       title: "أطفال",
//       color: "teal-400",
//     },
//   ];

//   const handleHover = (id) => {
//     const updatedHoverState = isHovered.map((_, index) => index === id);
//     setIsHovered(updatedHoverState);
//     console.log(id);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(initialHoverState);
//   };

//   return (
//     <nav className={`text-blue-800`}>
//       <ul className="flex flex-row justify-center items-end w-4/5 m-auto">
//         {HeaderData.map((data) => (
//           <li
//             onMouseEnter={() => handleHover(data.id)}
//             onMouseLeave={handleMouseLeave}
//             className={`px-8 py-2 min-w-fit w-4/5 rounded-b-2xl border shadow-xl ${
//               isHovered[data.id] ? `bg-${data.color} scale-110` : ""
//             }`}
//             key={data.id}
//           >
//             <NavLink to="/" className={`py-1 transition`}>
//               {data.title}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default ThirdHeader;
