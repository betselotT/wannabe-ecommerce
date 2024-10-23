"use client";
import Cart from "@/components/icons/cart";
import Heart from "@/components/icons/heart";
import React, { useState } from "react";

const Hero = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-56">
        <h1 className="text-2xl font-bold">Exclusive</h1>
        <div className="flex justify-center items-center gap-10">
          <a
            href="/home"
            onClick={() => handleClick("/home")}
            className={activeLink === "/home" ? "underline" : ""}
          >
            Home
          </a>
          <a
            href="/contact"
            onClick={() => handleClick("/contact")}
            className={activeLink === "/contact" ? "underline" : ""}
          >
            Contacts
          </a>
          <a
            href="/about"
            onClick={() => handleClick("/about")}
            className={activeLink === "/about" ? "underline" : ""}
          >
            About
          </a>
          <a
            href="#"
            onClick={() => handleClick("#")}
            className={activeLink === "#" ? "underline" : ""}
          >
            Sign Up
          </a>
        </div>
        <div className="flex justify-center items-center gap-5">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="px-2"
          />
          <Heart />
          <Cart />
        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default Hero;
