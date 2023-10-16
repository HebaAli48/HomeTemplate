import React from "react";
import { Search } from "../../utils/Icons";

const SearchingInput = () => {
  return (
    <>
      <div className="flex ">
        <form className="">
          <div className="flex">
            <div className="relative w-full">
              <div className="absolute top-0 p-2.5 text-sm font-medium text-white">
                <button className="rounded-2xl px-3 py-[1px] bg-teal-400 hidden xxs:block">
                  أبحث
                </button>
                <span className="sr-only">Search</span>
              </div>
              <input
                type="text"
                className="px-2.5 py-2 w-full right-0 text-right text-sm text-gray-900 border rounded-l-xl border-slate-400 focus:border-slate-300"
                placeholder="أنا أحــتاج"
                required
              />
            </div>
          </div>
        </form>
        <div className="h-[45px] px-2  hover:fill-blue-800 relative right-2 bottom-1 pt-[15px] bg-teal-400 rounded-ss-[80px] rounded-se-[80px] rounded-es-[50px] rounded-ee-[50px]">
          {Search}
        </div>
      </div>
    </>
  );
};

export default SearchingInput;
