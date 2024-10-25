"use client";
import Cart from "@/components/icons/cart";
import Heart from "@/components/icons/heart";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import ProfileDropdown from "./profile-dropdown";

const Hero = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const path = usePathname();

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
            className={`border-b-2 ${
              path === "/home" ? "border-black" : "border-transparent"
            } pb-0.5`}
          >
            Home
          </a>
          <a
            href="/contact"
            className={`border-b-2 ${
              path === "/contact" ? "border-black" : "border-transparent"
            } pb-0.5`}
          >
            Contacts
          </a>
          <a
            href="/about"
            className={`border-b-2 ${
              path === "/about" ? "border-black" : "border-transparent"
            } pb-0.5`}
          >
            About
          </a>
          <a
            href="#"
            className={`border-b-2 ${
              path === "/signup" ? "border-black" : "border-transparent"
            } pb-0.5`}
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
          <ProfileDropdown />
        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default Hero;
