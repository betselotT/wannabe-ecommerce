import React from "react";
import Image from "next/image";
import FlashSales from "./flash-sales";

const Todays = () => {
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
            <div className="border bg-gray-200 rounded-3xl p-2 cursor-pointer">
              <LeftArrow />
            </div>
            <div className="border bg-gray-200 rounded-3xl p-2 cursor-pointer">
              <RightArrow />
            </div>
          </div>
        </div>
      </div>
      <FlashSales />
    </div>
  );
};

const LeftArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
};

const RightArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
};

export default Todays;
