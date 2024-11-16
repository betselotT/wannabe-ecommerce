import Selling from "@/components/selling";
import { selling } from "@/constants/selling";
import Image from "next/image";
import React from "react";

const JustYou = () => {
  return (
    <div className="mx-4 sm:mr-24">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <Image
            src="/images/rectangle.png"
            width={20}
            height={40}
            alt="Picture of the home page"
          />
          <h1 className="text-[#db4444] font-semibold">Just For You</h1>
        </div>
        <div className="flex justify-end items-center pt-5">
          <button
            className="text-black w-[160px] h-[56px] border-2 border-gray-600 rounded"
            aria-label="See all products"
          >
            See All
          </button>
        </div>
      </div>

      <div className="pt-8">
        <div
          className="flex gap-8 sm:gap-16 w-full overflow-x-auto scroll-smooth whitespace-nowrap hide-scrollbar"
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

export default JustYou;
