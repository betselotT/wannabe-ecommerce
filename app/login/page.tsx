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

      <div className="flex items-center justify-start gap-40">
        <Image
          src="/images/side-image.png"
          width={800}
          height={300}
          alt="Picture of the home page"
        />
        <div>
          <h1 className="font-semibold text-3xl pb-2 tracking-wide">
            Log In To Exclusive
          </h1>
          <p className="text-sm pb-7">Enter Your Details Below</p>
          <form action="#" className="flex flex-col items-start">
            <div className="flex flex-col gap-5">
              <input
                type="email"
                className="w-[350px] h-[50px]"
                placeholder="Email or Phone Numebr"
              />
              <input
                type="password"
                className="w-[350pxpx] h-[50px]"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-between items-center pt-5 w-[350px]">
              <button className="bg-[#db4444] text-white w-[100px] h-[40px] rounded">
                Log In
              </button>
              <button className="w-[200px] h-[40px] text-[#db4444]">
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
