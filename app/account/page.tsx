import Base from "@/components/base";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import React from "react";
import Left from "./_components/left";
import Right from "./_components/right";

const Account = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Base />
      <div className="mt-10">
        <Hero />
      </div>

      <div className="pt-20 pl-6 sm:pl-10 lg:pl-36">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-[1200px]">
          <p className="ml-0 sm:ml-10 text-center sm:text-left">
            <span className="text-gray-500">Home /</span>{" "}
            <span className="font-semibold">My Account</span>
          </p>
          <p className="font-semibold text-center sm:text-left">
            Welcome, <span className="text-[#db4444]">Betselot</span>!
          </p>
        </div>
      </div>

      <div className="flex items-start justify-center mt-20 gap-36 flex-col lg:flex-row">
        <Left />
        <Right />
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Account;
