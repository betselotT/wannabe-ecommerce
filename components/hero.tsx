import Cart from "@/public/icons/cart";
import Heart from "@/public/icons/heart";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-56">
        <h1 className="text-2xl font-bold">Exclusive</h1>
        <div className="flex justify-center items-center gap-10">
          <a href="/home">Home</a>
          <a href="/contact">Contacts</a>
          <a href="/about">About Us</a>
          <a href="#">Sign Up</a>
        </div>
        <div className="flex justify-center items-center gap-5">
          <input type="text" placeholder="What are you looking for?" className="px-2" />
          <Heart />
          <Cart />
        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default Hero;
