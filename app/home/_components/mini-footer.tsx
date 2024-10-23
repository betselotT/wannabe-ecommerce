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
    <div>
      <div className="flex justify-center items-center gap-32">
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center">
            <div className="bg-[#c1c0c1] w-[70px] h-[70px] rounded-full flex justify-center items-center">
              <div className="flex justify-center items-center bg-black rounded-full w-[50px] h-[50px]">
                <Lorry />
              </div>
            </div>
          </div>
          <h1 className="font-bold text-xl">FREE AND FAST DELIVERY</h1>
          <p className="text-sm">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center">
            <div className="bg-[#c1c0c1] w-[70px] h-[70px] rounded-full flex justify-center items-center">
              <div className="flex justify-center items-center bg-black rounded-full w-[50px] h-[50px]">
                <Phone />
              </div>
            </div>
          </div>
          <h1 className="font-bold text-xl">24/7 CUSTOMER SERVICE</h1>
          <p className="text-sm">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-center items-center">
            <div className="bg-[#c1c0c1] w-[70px] h-[70px] rounded-full flex justify-center items-center">
              <div className="flex justify-center items-center bg-black rounded-full w-[50px] h-[50px]">
                <Check />
              </div>
            </div>
          </div>
          <h1 className="font-bold text-xl">MONEY BACK GUARANTEE</h1>
          <p className="text-sm">We return money within 30 days</p>
        </div>
      </div>
      <div className="flex justify-end mr-32">
        <div
          onClick={scrollToTop}
          className="border bg-gray-200 rounded-full w-[40px] h-[40px] cursor-pointer flex justify-center items-center mt-16"
        >
          <UpArrow />
        </div>
      </div>
    </div>
  );
};

export default MiniFooter;
