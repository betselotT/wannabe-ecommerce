import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      {/* Header Section */}
      <div className="flex items-center gap-5">
        <Image
          src="/images/rectangle.png"
          width={20}
          height={40}
          alt="Decoration for Featured Section"
        />
        <h1 className="text-[#db4444] font-semibold">Featured</h1>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-semibold pt-5">New Arrival</h1>

      {/* Featured Products */}
      <div className="pt-10 flex flex-wrap lg:flex-nowrap gap-5">
        {/* Main Item */}
        <div className="bg-black w-full lg:w-[570px] h-[590px] flex items-center justify-center">
          <div
            className="w-[90%] h-[90%] bg-center bg-no-repeat flex flex-col items-start gap-3 justify-end text-white p-6"
            style={{ backgroundImage: "url('/images/playstation.png')" }}
            aria-label="PlayStation 5"
          >
            <p className="font-medium text-xl sm:text-2xl">PlayStation 5</p>
            <p className="text-sm sm:text-base font-light">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="font-medium border-b border-white pb-0.5">
              Shop Now
            </button>
          </div>
        </div>

        {/* Secondary Items */}
        <div className="flex flex-col gap-5 flex-1">
          <div className="bg-black w-full lg:w-[570px] h-[284px] flex items-center justify-center">
            <div
              className="w-full h-full bg-center bg-no-repeat bg-[length:80%] flex flex-col items-start gap-3 justify-end text-white p-6"
              style={{ backgroundImage: "url('/images/women.png')" }}
              aria-label="Women's Collections"
            >
              <p className="font-medium text-xl sm:text-2xl">
                Women&apos;s Collections
              </p>
              <p className="text-sm sm:text-base font-light">
                Featured woman collections that give you another vibe.
              </p>
              <button className="font-medium border-b border-white pb-0.5">
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap gap-5">
            {/* Item 1 */}
            <div className="bg-black w-[45%] lg:w-[274px] h-[200px] lg:h-[284px] flex items-center justify-center">
              <div
                className="w-full h-full bg-center bg-no-repeat bg-[length:80%] flex flex-col items-start gap-2 justify-end text-white p-5"
                style={{ backgroundImage: "url('/images/speakers.png')" }}
                aria-label="Speakers"
              >
                <p className="font-medium text-lg sm:text-xl">Speakers</p>
                <p className="text-sm sm:text-base font-light">
                  Amazon wireless speakers
                </p>
                <button className="font-medium border-b border-white pb-0.5">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-black w-[45%] lg:w-[274px] h-[200px] lg:h-[284px] flex items-center justify-center">
              <div
                className="w-full h-full bg-center bg-no-repeat bg-[length:80%] flex flex-col items-start gap-2 justify-end text-white p-5"
                style={{ backgroundImage: "url('/images/purfume.png')" }}
                aria-label="Perfume"
              >
                <p className="font-medium text-lg sm:text-xl">Perfume</p>
                <p className="text-sm sm:text-base font-light">
                  GUCCI INTENSE OUD EDP
                </p>
                <button className="font-medium border-b border-white pb-0.5">
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
