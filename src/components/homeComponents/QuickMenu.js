import React from "react";

const QuickMenu = () => {
  const quickMenuSlider = Array.from(
    { length: 9 },
    (_, index) => `لـوريم ابسم `
  );

  return (
    <>
      <div className="pt-2  mt-12 flex flex-col justify-evenly">
        <h2 className="text-blue-700 text-2xl font-semibold mx-auto mb-5">
          أخر الأخبار
        </h2>
        <div className="bg-slate-50 rounded-t-full grid grid-cols-3 gap-5 py-14 text-center">
          {quickMenuSlider.map((data, index) => (
            <div className="flex gap-1 justify-center items-center">
              <div key={index} className="py-2  border-r-2 pr-3">
                {data}
              </div>
              <div className="bg-white w-10 h-10 shadow-md ps-3 hover:translate-x-[-1px]  hover:bg-slate-100  rounded-ss-[80px] rounded-se-[80px] rounded-es-[50px] rounded-ee-[50px] py-3 px-2"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuickMenu;
