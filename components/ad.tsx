import Image from "next/image";
import React from "react";

const Ad = () => {
  return (
    <div className="bg-black w-[1250px] h-[500px] flex justify-between px-20 items-center">
      <div className="flex flex-col items-start gap-10">
        <h3 className="text-[#00f763] font-medium">Categories</h3>
        <h1 className="text-white text-5xl tracking-wider font-medium w-[500px]">
          Enhance Your Music Experience
        </h1>
        <div className="flex gap-3">
          <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center text-center">
            <div>
              <p className="font-semibold">05</p>
              <p className="text-xs -mt-2 font-medium">Days</p>
            </div>
          </div>
          <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center text-center">
            <div>
              <p className="font-semibold">23</p>
              <p className="text-xs -mt-2 font-medium">Hours</p>
            </div>
          </div>
          <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center text-center">
            <div>
              <p className="font-semibold">59</p>
              <p className="text-[10px] -mt-2 font-medium">Minutes</p>
            </div>
          </div>
          <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center text-center">
            <div>
              <p className="font-semibold">35</p>
              <p className="text-[10px] -mt-2 font-medium">Seconds</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center pt-5">
          <button className="bg-[#00ff66] text-white w-[170px] h-[56px] rounded">
            Buy Now!
          </button>
        </div>
      </div>
      <Image
        src="/images/ad.png"
        width={600}
        height={420}
        alt="Picture of an AD"
      />
    </div>
  );
};

export default Ad;
