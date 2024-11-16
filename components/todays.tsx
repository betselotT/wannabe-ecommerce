"use client";
import React, { useRef } from "react";
import Image from "next/image";
import LeftArrow from "@/components/icons/left-arrow";
import RightArrow from "@/components/icons/right-arrow";
import { sales } from "@/constants/sales";
import FlashSales from "./flash-sales";

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

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-4 lg:px-12">
      {/* Section Header */}
      <div className="flex justify-start items-center gap-3 mb-6">
        <Image
          src="/images/rectangle.png"
          width={20}
          height={40}
          alt="Rectangle decoration"
        />
        <h1 className="text-[#db4444] font-semibold">Today&apos;s</h1>
      </div>

      {/* Flash Sales Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
        {/* Title & Countdown */}
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold">Flash Sales</h1>
          <div className="flex justify-start gap-4 pt-3">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
              <div key={i} className="text-center">
                <p className="text-sm font-semibold">{label}</p>
                <div className="flex items-center gap-1">
                  <p className="text-2xl lg:text-3xl font-semibold">
                    {
                      i === 0 ? "03" : "23" // Example values; replace with actual countdown logic
                    }
                  </p>
                  {i !== 3 && (
                    <Image
                      src="/images/semicolon.png"
                      width={4}
                      height={4}
                      alt="Semicolon separator"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Buttons */}
        <div className="flex gap-2">
          <button
            className="border bg-gray-200 rounded-full p-2"
            aria-label="Scroll left"
            onClick={scrollLeft}
          >
            <LeftArrow />
          </button>
          <button
            className="border bg-gray-200 rounded-full p-2"
            aria-label="Scroll right"
            onClick={scrollRight}
          >
            <RightArrow />
          </button>
        </div>
      </div>

      {/* Flash Sales Items */}
      <div className="pt-6">
        <div
          ref={scrollRef}
          className="flex gap-4 lg:gap-8 w-full overflow-x-auto scroll-smooth whitespace-nowrap hide-scrollbar"
        >
          {sales.map((item, index) => (
            <FlashSales
              key={index}
              discount={item.discount}
              image={item.image}
              name={item.name}
              currPrice={item.currPrice}
              prevPrice={item.prevPrice}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      {/* View All Products */}
      <div className="flex justify-center pt-6">
        <button className="bg-[#db4444] text-white w-full max-w-[234px] h-[56px] rounded">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Todays;
