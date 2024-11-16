import Base from "@/components/base";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const SignUp = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Base />
      <div className="mt-10 mb-10">
        <Hero />
      </div>

      {/* Sign-Up Section */}
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
            Create An Account
          </h1>
          <p className="text-sm pb-7">Enter Your Details Below</p>
          <form action="#" className="flex flex-col items-start">
            <div className="flex flex-col gap-5">
              <input
                type="text"
                className="w-full sm:w-[300px] h-[50px] px-4 border border-gray-300 rounded"
                placeholder="Name"
              />
              <input
                type="email"
                className="w-full sm:w-[300px] h-[50px] px-4 border border-gray-300 rounded"
                placeholder="Email or Phone Number"
              />
              <input
                type="password"
                className="w-full sm:w-[300px] h-[50px] px-4 border border-gray-300 rounded"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-end items-center pt-5 w-full sm:w-[300px]">
              <button className="bg-[#db4444] text-white w-full sm:w-[300px] h-[40px] rounded">
                Create Account
              </button>
            </div>
            <div className="flex justify-end items-center pt-5 w-full sm:w-[300px]">
              <button className="w-full sm:w-[300px] h-[40px] border-3 rounded flex items-center justify-center gap-2">
                <FcGoogle className="w-[24px] h-[24px]" /> Sign up with Google
              </button>
            </div>
          </form>
          <p className="text-sm mt-5 pl-5 flex">
            Already have an account?{" "}
            <span>
              <Link href="/login">
                <p className="border-b-2 pb-0.5 ml-2 border-black">Log In</p>
              </Link>
            </span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default SignUp;
