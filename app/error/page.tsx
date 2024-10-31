import Base from "@/components/base";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Base />
      <div className="mt-10">
        <Hero />
      </div>

      <div className="pt-20 pl-36">
        <p>
          <span className="text-gray-500">Home /</span>{" "}
          <span className="font-semibold">404 Error</span>
        </p>
      </div>

      <h1 className="text-8xl tracking-widest mt-32 text-center">
        404 Not Found
      </h1>
      <h1 className="mt-8 font-medium text-center">
        Your visited page is not found. You may go back to home page.
      </h1>
      <div className="flex items-center justify-center mt-16">
        <Link
          href="/"
          className="bg-[#db4444] text-white w-[215px] h-[56px] rounded flex items-center justify-center"
        >
          Back to Home Page
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Error;
