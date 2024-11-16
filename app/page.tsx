import Base from "@/components/base";
import Hero from "@/components/hero";
import React from "react";
import Image from "next/image";
import Types from "@/components/types";
import Categories from "@/components/categories";
import ThisMonth from "@/components/this-month";
import Ad from "@/components/ad";
import Products from "@/components/products";
import Featured from "@/components/featured";
import MiniFooter from "@/components/mini-footer";
import Footer from "@/components/footer";
import Todays from "@/components/todays";

const Home = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Base />
      <div className="mt-10">
        <Hero />
      </div>

      {/* Home Section */}
      <div className="flex flex-col justify-center items-center gap-8 mt-10 lg:flex-row lg:gap-24">
        <Types />
        <hr className="hidden lg:block w-px h-[350px] bg-[#dcdfe8]" />
        <div className="hidden lg:block">
          <Image
            src="/images/home-image.png"
            width={890}
            height={340}
            alt="Picture of the home page"
          />
        </div>
      </div>

      {/* Today's */}
      <div className="mt-36">
        <Todays />
        <hr className="bg-[#dcdfe8] w-full sm:w-[600px] md:w-[800px] lg:w-[1200px] mt-10 mb-10 mx-auto" />
      </div>

      {/* Categories */}
      <div>
        <Categories />
        <hr className="bg-[#dcdfe8] w-full sm:w-[600px] md:w-[800px] lg:w-[1200px] mt-10 mb-10 mx-auto" />
      </div>

      {/* This Month */}
      <div className="mb-10">
        <ThisMonth />
      </div>

      {/* AD */}
      <div className="">
        <Ad />
      </div>

      {/* Our Products */}
      <div className="mt-20">
        <Products />
        <hr className="bg-[#dcdfe8] w-full sm:w-[600px] md:w-[800px] lg:w-[1200px] mt-10 mb-10 mx-auto" />
      </div>

      {/* Featured */}
      <div className="mt-20">
        <Featured />
        <hr className="bg-[#dcdfe8] w-full sm:w-[600px] md:w-[800px] lg:w-[1200px] mt-10 mb-10 mx-auto" />
      </div>

      {/* Mini Footer */}
      <div className="mt-20">
        <MiniFooter />
        <hr className="bg-[#dcdfe8] w-full sm:w-[600px] md:w-[800px] lg:w-[1200px] mt-10 mb-10 mx-auto" />
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
