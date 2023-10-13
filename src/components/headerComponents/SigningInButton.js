import React from "react";
import { User } from "../../utils/Icons";

const SigningInButton = () => {
  return (
    <>
      <div className="flex hover:fill-blue-800  hover:scale-110 hover:bg-white hover:border-blue-800  ">
        <button className=" h-10 rounded-l-xl  bg-teal-400 px-3 ">
          تـسجيل دخـول
        </button>
        <div className="h-12 px-2   relative right-2 bottom-1 pt-2 bg-teal-400 rounded-ss-[80px] rounded-se-[80px] rounded-es-[50px] rounded-ee-[50px]">
          {User}
        </div>
      </div>
    </>
  );
};

export default SigningInButton;
