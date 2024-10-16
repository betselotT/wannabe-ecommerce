import { selling } from "@/constants/selling";
import Image from "next/image";
import React from "react";
import Selling from "./selling";

const ThisMonth = () => {
  return (
    <div>
      <div className="flex justify-start items-center gap-5">
        <Image
          src="/images/rectangle.png"
          width={20}
          height={40}
          alt="Picture of the home page"
        />
        <h1 className="text-[#db4444] font-semibold">This Month</h1>
      </div>
      <div className="flex justify-between items-center pt-5 pr-32">
        <h1 className="text-3xl font-semibold">Best Selling Products</h1>
        <button className="bg-[#db4444] text-white w-[160px] h-[56px] rounded">
          View All
        </button>
      </div>
      <div className="pt-8">
        <div
          className="flex gap-12 w-full overflow-x-auto scroll-smooth whitespace-nowrap hide-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
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
