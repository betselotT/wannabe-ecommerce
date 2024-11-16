"use client";
import { categories } from "@/constants/categories";
import LeftArrow from "@/components/icons/left-arrow";
import RightArrow from "@/components/icons/right-arrow";
import Image from "next/image";
import React, { useRef } from "react";
import Browse from "./browse";

const Categories = () => {
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
          Categories
        </h1>
      </div>

      {/* Browse By Category */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          Browse By Category
        </h1>
        <div className="flex justify-center items-center gap-2">
          <button
            className="border bg-gray-200 rounded-full p-2 sm:p-3"
            aria-label="Scroll left"
            onClick={scrollLeft}
          >
            <LeftArrow />
          </button>
          <button
            className="border bg-gray-200 rounded-full p-2 sm:p-3"
            aria-label="Scroll right"
            onClick={scrollRight}
          >
            <RightArrow />
          </button>
        </div>
      </div>

      {/* Categories List */}
      <div className="pt-8">
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 lg:gap-12 w-full overflow-x-auto scroll-smooth whitespace-nowrap hide-scrollbar"
        >
          {categories.map((item, index) => (
            <Browse key={index} image={item.image} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
