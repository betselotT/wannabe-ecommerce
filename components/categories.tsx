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
        <h1 className="text-[#db4444] font-semibold">Categories</h1>
      </div>
      <div className="flex justify-between items-center pt-5 pr-32">
        <h1 className="text-3xl font-semibold">Browse By Category</h1>
        <div className="flex justify-center items-center gap-2">
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
      <div className="pt-8">
        <div
          ref={scrollRef}
          className="flex gap-12 w-full overflow-x-auto scroll-smooth whitespace-nowrap hide-scrollbar"
          style={{ scrollBehavior: "smooth" }}
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
