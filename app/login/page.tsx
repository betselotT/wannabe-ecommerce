import Base from "@/components/base";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Image from "next/image";
import React from "react";

const LogIn = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Base />
      <div className="mt-10 mb-10">
        <Hero />
      </div>

      {/* Login Section */}
      <div className="flex flex-col sm:flex-row items-center justify-start gap-10 sm:gap-40 px-4 sm:px-0">
        <Image
          src="/images/side-image.png"
          width={800}
          height={300}
          alt="Picture of the home page"
          className="w-full sm:w-auto" // Ensures responsiveness for the image
        />
        <div className="flex flex-col items-start">
          <h1 className="font-semibold text-3xl pb-2 tracking-wide">
            Log In To Exclusive
          </h1>
          <p className="text-sm pb-7">Enter Your Details Below</p>
          <form action="#" className="flex flex-col items-start">
            <div className="flex flex-col gap-5">
              <input
                type="email"
                className="w-full sm:w-[350px] h-[50px] px-4 border border-gray-300 rounded"
                placeholder="Email or Phone Number"
              />
              <input
                type="password"
                className="w-full sm:w-[350px] h-[50px] px-4 border border-gray-300 rounded"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center pt-5 w-full sm:w-[350px]">
              <button className="bg-[#db4444] text-white w-full sm:w-[100px] h-[40px] rounded mb-3 sm:mb-0">
                Log In
              </button>
              <button className="w-full sm:w-[200px] h-[40px] text-[#db4444] text-center">
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default LogIn;
