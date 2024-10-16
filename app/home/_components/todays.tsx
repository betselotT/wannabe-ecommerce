"use client";
import React, { useRef } from "react";
import Image from "next/image";
import FlashSales from "./flash-sales";
import LeftArrow from "@/public/icons/left-arrow";
import RightArrow from "@/public/icons/right-arrow";
import { sales } from "@/constants/sales";

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
        <h1 className="text-[#db4444] font-semibold">Today's</h1>
      </div>
      <div className="flex items-center gap-24 pt-5">
        <h1 className="text-3xl font-semibold">Flash Sales</h1>
        <div className="flex items-center gap-96">
          <div>
            <div className="flex justify-center items-center gap-5">
              <div>
                <p className="text-sm font-semibold">Days</p>
                <div className="flex justify-center items-center gap-4">
                  <p className="text-3xl font-semibold">03</p>
                  <Image
                    src="/images/semicolon.png"
                    width={4}
                    height={4}
                    alt="Semicolon"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold">Hours</p>
                <div className="flex justify-center items-center gap-4">
                  <p className="text-3xl font-semibold">23</p>
                  <Image
                    src="/images/semicolon.png"
                    width={4}
                    height={4}
                    alt="Semicolon"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold">Minutes</p>
                <div className="flex justify-center items-center gap-4">
                  <p className="text-3xl font-semibold">19</p>
                  <Image
                    src="/images/semicolon.png"
                    width={4}
                    height={4}
                    alt="Semicolon"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold">Seconds</p>
                <p className="text-3xl font-semibold">56</p>
              </div>
            </div>
          </div>
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
          ref={scrollRef}
          className="flex gap-12 w-full overflow-x-auto scroll-smooth whitespace-nowrap hide-scrollbar"
          style={{ scrollBehavior: "smooth" }}
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
      <div className="flex justify-center items-center pt-5">
        <button className="bg-[#db4444] text-white w-[234px] h-[56px] rounded">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Todays;
