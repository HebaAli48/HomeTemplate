import React from "react";

const TitleOfComponent = ({ children, img, className = "" }) => {
  return (
    <div className="flex gap-1 justify-center items-center mx-auto mt-10 hover:translate-x-[-2px] w-fit">
      <span className="text-blue-700 text-2xl font-semibold "> {children}</span>
      <span className="bg-blue-700  hover:bg-blue-500  rounded-ss-[80px] rounded-se-[80px] rounded-es-[50px] rounded-ee-[50px] p-1">
        {img}
      </span>
    </div>
  );
};

export default TitleOfComponent;
