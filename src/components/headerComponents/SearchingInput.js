import React from "react";
import { Search } from "../../utils/Icons";
import Shield from "./../UI/Shield";

const SearchingInput = () => {
  return (
    <>
      <div className="flex  w-[14rem] sm:w-full ">
        <form className="">
          <div className="flex">
            <div className="relative w-full">
              <div className="absolute top-0 p-2.5 text-sm font-medium text-white">
                <button className="rounded-2xl px-3 py-[1px] bg-teal-400 ">
                  أبحث
                </button>
                <span className="sr-only">Search</span>
              </div>
              <input
                type="text"
                className="px-3 py-2 w-full right-0 text-right text-sm text-gray-900 border rounded-l-xl border-slate-400 focus:border-slate-300"
                placeholder="أنا أحــتاج"
                required
              />
            </div>
          </div>
        </form>
        <Shield className="h-12 w-12  px-3  hover:fill-blue-800 relative right-3 bottom-[5px] pt-[15px] bg-teal-400 ">
          {Search}
        </Shield>
      </div>
    </>
  );
};

export default SearchingInput;
