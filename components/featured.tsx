import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div>
      <div className="flex justify-start items-center gap-5">
        <Image
          src="/images/rectangle.png"
          width={20}
          height={40}
          alt="Picture of the home page"
        />
        <h1 className="text-[#db4444] font-semibold">Featured</h1>
      </div>
      <h1 className="text-3xl font-semibold pt-5">New Arrival</h1>
      <div className="pt-10 flex gap-5">
        <div className="bg-black w-[570px] h-[590px] flex items-center justify-center">
          <div
            className="w-[510px] h-[510px] bg-center bg-no-repeat bg-[length:90%] flex flex-col items-start gap-3 justify-end text-white"
            style={{ backgroundImage: "url('/images/playstation.png')" }}
          >
            <p className="font-medium text-xl">PlayStation 5</p>
            <p className="text-sm w-72 font-light">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="font-medium border-b border-white border-transparent pb-0.5">
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="bg-black w-[570px] h-[284px] flex items-center justify-center">
            <div
              className="w-[570px] h-[284px] bg-center bg-no-repeat bg-[length:80%] flex flex-col items-start gap-3 justify-end text-white ml-6 pb-6"
              style={{ backgroundImage: "url('/images/women.png')" }}
            >
              <p className="font-medium text-xl">Women&apos;s Collections</p>
              <p className="text-sm w-60 font-light">
                Featured woman collections that give you another vibe.
              </p>
              <button className="font-medium border-b border-white border-transparent pb-0.5">
                Shop Now
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="bg-black w-[274px] h-[284px] flex items-center justify-center">
              <div
                className="w-[270px] h-[284px] bg-center bg-no-repeat bg-[length:80%] flex flex-col items-start gap-2 justify-end text-white pl-5 pb-6"
                style={{ backgroundImage: "url('/images/speakers.png')" }}
              >
                <p className="font-medium text-xl">Speakers</p>
                <p className="text-sm w-72 font-light">
                  Amazon wireless speakers
                </p>
                <button className="font-medium border-b border-white border-transparent pb-0.5">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="bg-black w-[274px] h-[284px] flex items-center justify-center">
              <div
                className="w-[270px] h-[284px] bg-center bg-no-repeat bg-[length:80%] flex flex-col items-start gap-2 justify-end text-white pl-5 pb-6"
                style={{ backgroundImage: "url('/images/purfume.png')" }}
              >
                <p className="font-medium text-xl">Purfume</p>
                <p className="text-sm w-72 font-light">GUCCI INTENSE OUD EDP</p>
                <button className="font-medium border-b border-white border-transparent pb-0.5">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
