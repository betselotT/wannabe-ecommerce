import Base from "@/components/base";
import Hero from "@/components/hero";
import React from "react";
import Types from "./_components/types";
import Image from "next/image";
import Todays from "./_components/todays";
import Categories from "./_components/categories";
import ThisMonth from "./_components/this-month";

const Home = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Base />
      <div className="mt-10">
        <Hero />
      </div>

      {/* Home Section */}
      <div className="flex justify-center items-start gap-24 mt-10">
        <Types />
        <hr className="w-px h-[350px] bg-[#dcdfe8]" />
        <Image
          src="/images/home-image.png"
          width={890}
          height={340}
          alt="Picture of the home page"
        />
      </div>

      {/* Today's */}
      <div className="ml-36 mt-36">
        <Todays />
        <hr className="bg-[#dcdfe8] w-[1200px] mt-10 mb-10" />
      </div>

      {/* Categories */}
      <div className="ml-36">
        <Categories />
        <hr className="bg-[#dcdfe8] w-[1200px] mt-10 mb-10" />
      </div>

      {/* This Month */}
      <div className="ml-36">
        <ThisMonth />
        <hr className="bg-[#dcdfe8] w-[1200px] mt-10 mb-10" />
      </div>
    </div>
  );
};

export default Home;