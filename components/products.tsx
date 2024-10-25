"use client";
import React, { useRef } from "react";
import Image from "next/image";
import LeftArrow from "@/components/icons/left-arrow";
import RightArrow from "@/components/icons/right-arrow";
import { explore } from "@/constants/explore";
import Explore from "./explore";

const Todays = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="flex justify-start items-center gap-5">
        <Image
          src="/images/rectangle.png"
          width={20}
          height={40}
          alt="Picture of the home page"
        />
        <h1 className="text-[#db4444] font-semibold">Our Products</h1>
      </div>
      <div className="flex items-center gap-[650px] pt-5">
        <h1 className="text-3xl font-semibold">Explore Our Products</h1>
        <div className="flex items-center gap-96">
          <div className="flex justify-center items-center gap-2 ml-52">
            <div
              className="border bg-gray-200 rounded-3xl p-2 cursor-pointer"
              onClick={scrollLeft}
            >
              <LeftArrow />
            </div>
            <div
              className="border bg-gray-200 rounded-3xl p-2 cursor-pointer"
              onClick={scrollRight}
            >
              <RightArrow />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <div
          className="grid grid-cols-4 gap-8 w-[94%] overflow-x-auto hide-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
          {explore.map((item, index) => (
            <Explore
              key={index}
              image={item.image}
              name={item.name}
              currPrice={item.currPrice}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center pt-5">
        <button className="bg-[#db4444] text-white w-[234px] h-[56px] rounded">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Todays;
