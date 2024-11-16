"use client";
import Check from "@/components/icons/check";
import Lorry from "@/components/icons/lorry";
import Phone from "@/components/icons/phone";
import UpArrow from "@/components/icons/up-arrow";
import React from "react";

const MiniFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-4">
      {/* Features Section */}
      <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-32">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center gap-3 w-[250px]">
          <div className="flex justify-center items-center">
            <div className="bg-[#c1c0c1] w-[70px] h-[70px] rounded-full flex justify-center items-center">
              <div className="flex justify-center items-center bg-black rounded-full w-[50px] h-[50px]">
                <Lorry />
              </div>
            </div>
          </div>
          <h1 className="font-bold text-lg lg:text-xl">
            FREE AND FAST DELIVERY
          </h1>
          <p className="text-sm text-gray-600">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center gap-3 w-[250px]">
          <div className="flex justify-center items-center">
            <div className="bg-[#c1c0c1] w-[70px] h-[70px] rounded-full flex justify-center items-center">
              <div className="flex justify-center items-center bg-black rounded-full w-[50px] h-[50px]">
                <Phone />
              </div>
            </div>
          </div>
          <h1 className="font-bold text-lg lg:text-xl">
            24/7 CUSTOMER SERVICE
          </h1>
          <p className="text-sm text-gray-600">
            Friendly 24/7 customer support
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center gap-3 w-[250px]">
          <div className="flex justify-center items-center">
            <div className="bg-[#c1c0c1] w-[70px] h-[70px] rounded-full flex justify-center items-center">
              <div className="flex justify-center items-center bg-black rounded-full w-[50px] h-[50px]">
                <Check />
              </div>
            </div>
          </div>
          <h1 className="font-bold text-lg lg:text-xl">MONEY BACK GUARANTEE</h1>
          <p className="text-sm text-gray-600">
            We return money within 30 days
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="flex justify-end mt-16">
        <div
          onClick={scrollToTop}
          className="border bg-gray-200 rounded-full w-[40px] h-[40px] cursor-pointer flex justify-center items-center"
        >
          <UpArrow />
        </div>
      </div>
    </div>
  );
};

export default MiniFooter;
