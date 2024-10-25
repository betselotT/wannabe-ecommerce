import Base from "@/components/base";
import Hero from "@/components/hero";
import React from "react";
import JustYou from "./_components/just-you";

const Wishlist = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Base />
      <div className="mt-10">
        <Hero />
      </div>
      <div className="mx-36">
        <div className="flex justify-between items-center mt-10">
          <h1 className="text-xl">Wishlist (4)</h1>
          <div className="flex justify-center items-center pt-5">
            <button className="text-black w-[223px] h-[56px] border-2 border-gray-600 rounded">
              Move All To Bag
            </button>
          </div>
        </div>
      </div>

      {/* Our Products */}
      <div className="ml-36 mt-20">
        <JustYou />
        <hr className="bg-[#dcdfe8] w-[1200px] mt-10 mb-10" />
      </div>
    </div>
  );
};

export default Wishlist;
