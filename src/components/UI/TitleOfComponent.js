import React from "react";
import Shield from "./Shield";

const TitleOfComponent = ({ children, img, className = "" }) => {
  return (
    <div className="flex gap-1 justify-center items-center mx-auto mt-10 hover:translate-x-[-2px] w-fit">
      <span className="text-blue-700 text-2xl font-semibold "> {children}</span>
      <Shield className="bg-blue-700  hover:bg-blue-500 w-14 h-14    p-3">
        {img}
      </Shield>
    </div>
  );
};

export default TitleOfComponent;
