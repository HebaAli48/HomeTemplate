import React from "react";

const QuickMenu = () => {
  const quickMenuSlider = Array.from(
    { length: 9 },
    (_, index) => `لـوريم ابسم `
  );

  return (
    <>
      <div className="pt-4  mt-12 flex flex-col justify-evenly bg-slate-50 px-3 rounded-ss-[400px] rounded-se-[400px]">
        <h2 className="text-blue-700 text-2xl font-semibold mx-auto mb-8">
          القائـمة السريعة
        </h2>
        <div className=" grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5 pb-14 w-4/5 mx-auto text-center text-sm md:text-base">
          {quickMenuSlider.map((data, index) => (
            <div className="flex gap-1 justify-center items-center">
              <div key={index} className="py-2  border-r-2 pr-1 sm:pr-3">
                {data}
              </div>
              <div className="bg-white w-8 h-8 sm:w-10 sm:h-10 shadow-md ps-3 hover:translate-x-[-1px]  hover:bg-slate-100  rounded-ss-[80px] rounded-se-[80px] rounded-es-[50px] rounded-ee-[50px] "></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuickMenu;
