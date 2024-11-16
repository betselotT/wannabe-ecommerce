"use client";
import React, { useRef } from "react";
import Image from "next/image";
import LeftArrow from "@/components/icons/left-arrow";
import RightArrow from "@/components/icons/right-arrow";
import { explore } from "@/constants/explore";
import Explore from "./explore";

const Products = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4">
      {/* Header */}
      <div className="flex justify-start items-center gap-5">
        <Image
          src="/images/rectangle.png"
          width={20}
          height={40}
          alt="Picture of the home page"
        />
        <h1 className="text-[#db4444] font-semibold">Our Products</h1>
      </div>

      {/* Title and Controls */}
      <div className="flex justify-between items-center pt-5">
        <h1 className="text-3xl font-semibold">Explore Our Products</h1>
        <div className="flex gap-2">
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

      {/* Product Grid */}
      <div className="pt-8">
        <div
          ref={scrollRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-auto hide-scrollbar"
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

      {/* Button */}
      <div className="flex justify-center items-center pt-5">
        <button className="bg-[#db4444] text-white w-[200px] sm:w-[234px] h-[48px] sm:h-[56px] rounded">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Products;
