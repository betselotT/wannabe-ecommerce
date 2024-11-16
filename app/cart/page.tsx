import Base from "@/components/base";
import Hero from "@/components/hero";
import React from "react";
import Table from "./_components/table";
import Last from "./_components/last";
import Footer from "@/components/footer";

const Cart = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Base />
      <div className="mt-10">
        <Hero />
      </div>

      {/* Cart Section */}
      <div className="pt-20 pl-36">
        <p>
          <span className="text-gray-500">Home /</span>{" "}
          <span className="font-semibold">Cart</span>
        </p>
      </div>

      {/* Table Section */}
      <div className="ml-36 mt-20 hidden sm:block">
        <Table />
      </div>

      <div className="justify-between items-center w-[1170px] ml-36 mt-3 hidden sm:flex">
        {/* Return to Shop Button */}
        <div className="flex justify-end items-center pt-5">
          <button className="text-black w-[200px] h-[46px] border-2 border-gray-400 rounded">
            Return To Shop
          </button>
        </div>

        {/* Space between buttons */}
        <div className="w-5"></div>

        {/* Update Cart Button */}
        <div className="flex justify-end items-center pt-5">
          <button className="text-black w-[200px] h-[46px] border-2 border-gray-400 rounded">
            Update Cart
          </button>
        </div>
      </div>

      {/* Last Section */}
      <div className="mt-20 ml-0 sm:ml-36">
        <Last />
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
