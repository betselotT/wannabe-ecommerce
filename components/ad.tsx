import Image from "next/image";
import React from "react";

const Ad = () => {
  return (
    <div className="bg-black w-full max-w-[1250px] h-auto lg:h-[500px] flex flex-col lg:flex-row justify-between px-6 sm:px-12 lg:px-20 py-10 items-center mx-auto">
      {/* Text Section */}
      <div className="flex flex-col items-start gap-6 lg:gap-10">
        <h3 className="text-[#00f763] font-medium text-sm sm:text-base">
          Categories
        </h3>
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl tracking-wide font-medium leading-snug lg:w-[500px]">
          Enhance Your Music Experience
        </h1>
        {/* Countdown Timer */}
        <div className="flex gap-2 sm:gap-3">
          {["05", "23", "59", "35"].map((time, index) => (
            <div
              key={index}
              className="bg-white h-10 w-10 sm:h-12 sm:w-12 rounded-full flex items-center justify-center text-center"
            >
              <div>
                <p className="font-semibold text-sm sm:text-base">{time}</p>
                <p className="text-[8px] sm:text-xs -mt-2 font-medium">
                  {["Days", "Hours", "Minutes", "Seconds"][index]}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Buy Button */}
        <div className="pt-5">
          <button className="bg-[#00ff66] text-white w-[140px] sm:w-[170px] h-[48px] sm:h-[56px] rounded">
            Buy Now!
          </button>
        </div>
      </div>
      {/* Image Section */}
      <div className="pt-8 lg:pt-0">
        <Image
          src="/images/ad.png"
          width={600}
          height={420}
          alt="Picture of an AD"
          className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto"
        />
      </div>
    </div>
  );
};

export default Ad;
