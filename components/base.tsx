import React from "react";
import Dropdown from "./dropdown";

const Base = () => {
  return (
    <div>
      <div className="bg-black w-full">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center gap-5 py-2 pr-56">
            <p className="text-white">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <button className="text-white underline font-semibold">
              ShopNow
            </button>
          </div>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Base;
