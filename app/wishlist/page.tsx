import Base from "@/components/base";
import Hero from "@/components/hero";
import React from "react";
import JustYou from "./_components/just-you";
import MiniFooter from "@/components/mini-footer";
import Footer from "@/components/footer";

const Wishlist = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Base />
      <div className="mt-10">
        <Hero />
      </div>
      <div className="mx-4 sm:mx-36">
        <div className="flex justify-between items-center mt-10">
          <h1 className="text-xl sm:text-2xl font-semibold">Wishlist (4)</h1>
          <div className="flex justify-center items-center pt-5">
            <button className="text-black w-full sm:w-[223px] h-[56px] border-2 border-gray-600 rounded">
              Move All To Bag
            </button>
          </div>
        </div>
      </div>

      {/* Our Products */}
      <div className="ml-5 sm:ml-36 mt-20">
        <JustYou />
        <hr className="bg-[#dcdfe8] w-full max-w-screen-xl mx-auto mt-10 mb-10 border-t-2" />
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

export default Wishlist;
