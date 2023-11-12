import React, { useState } from "react";
import { User } from "../../utils/Icons";
import Shield from "./../UI/Shield";

const SigningInButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <button
        onMouseEnter={handleMouseEnter} // Pass the function here
        onMouseLeave={handleMouseLeave} // Pass the function here
        className="  w-[12.6rem] sm:w-fit flex justify-center items-center  h-8 rounded-l-xl bg-teal-400  rounded-r-2xl text-sm hover:bg-white hover:border hover:border-blue-800 hover:fill-blue-800 hover:scale-[1.01]"
      >
        <span className="ps-4 w-24 ">تـسجيل دخـول</span>
        <Shield
          className={`${
            isHovered ? "bg-white border border-blue-800" : "bg-teal-400"
          } h-12 w-12 px-3 relative left-9 sm:left-3 pt-3 `}
        >
          {User}
        </Shield>
      </button>
    </>
  );
};

export default SigningInButton;
