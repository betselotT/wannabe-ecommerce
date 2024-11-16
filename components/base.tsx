import React from "react";
import Dropdown from "./dropdown";

const Base = () => {
  return (
    <div>
      <div className="bg-black w-full">
        <div className="flex flex-wrap justify-between items-center px-4 sm:px-10 py-2">
          {/* Banner Text */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5">
            <p className="text-white text-sm sm:text-base text-center ml-0 sm:ml-32">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <button className="text-white underline font-semibold text-sm sm:text-base">
              Shop Now
            </button>
          </div>

          {/* Dropdown */}
          <div className="mt-2 sm:mt-0">
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
