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
          <Image
            src="/images/playstation.png"
            width={510}
            height={510}
            alt="Picture of the home page"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="bg-black w-[570px] h-[284px] flex items-center justify-center">
            <Image
              src="/images/women.png"
              width={430}
              height={290}
              alt="Picture of the home page"
            />
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="bg-black w-[274px] h-[284px] flex items-center justify-center">
              <Image
                src="/images/speakers.png"
                width={210}
                height={220}
                alt="Picture of the home page"
              />
            </div>
            <div className="bg-black w-[274px] h-[284px] flex items-center justify-center">
              <Image
                src="/images/purfume.png"
                width={210}
                height={220}
                alt="Picture of the home page"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
