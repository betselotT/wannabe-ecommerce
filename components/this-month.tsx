import { selling } from "@/constants/selling";
import Image from "next/image";
import React from "react";
import Selling from "./selling";

const ThisMonth = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12">
      {/* Section Header */}
      <div className="flex justify-start items-center gap-4 mb-6">
        <Image
          src="/images/rectangle.png"
          width={20}
          height={40}
          alt="Rectangle decoration"
        />
        <h1 className="text-[#db4444] font-semibold text-lg sm:text-xl">
          This Month
        </h1>
      </div>

      {/* Title and Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 pt-5">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          Best Selling Products
        </h1>
        <button className="bg-[#db4444] text-white w-full sm:w-[160px] h-[48px] sm:h-[56px] rounded">
          View All
        </button>
      </div>

      {/* Best Selling Products List */}
      <div className="pt-8">
        <div className="flex gap-6 sm:gap-8 lg:gap-12 w-full overflow-x-auto scroll-smooth whitespace-nowrap hide-scrollbar">
          {selling.map((item, index) => (
            <Selling
              key={index}
              image={item.image}
              name={item.name}
              currPrice={item.currPrice}
              prevPrice={item.prevPrice}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThisMonth;
