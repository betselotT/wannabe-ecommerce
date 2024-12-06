"use client";
import Cart from "@/components/icons/cart";
import Heart from "@/components/icons/heart";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import ProfileDropdown from "./profile-dropdown";
import Search from "./icons/search";

const Hero = () => {
  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for toggling mobile menu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-between items-center px-4 py-2 bg-white">
        {/* Left section */}
        <a href="/" className="text-2xl font-bold ml-0 sm:ml-10">
          Exclusive
        </a>

        {/* Right section (Desktop/Tablet Navbar) */}
        <div className="hidden lg:flex justify-center items-center gap-10">
          <a
            href="/"
            className={`border-b-2 ${
              path === "/" ? "border-[#db4444]" : "border-transparent"
            } pb-0.5`}
          >
            Home
          </a>
          <a
            href="/contact"
            className={`border-b-2 ${
              path === "/contact" ? "border-[#db4444]" : "border-transparent"
            } pb-0.5`}
          >
            Contacts
          </a>
          <a
            href="/about"
            className={`border-b-2 ${
              path === "/about" ? "border-[#db4444]" : "border-transparent"
            } pb-0.5`}
          >
            About
          </a>
          <a
            href="/sign-up"
            className={`border-b-2 ${
              path === "/signup" ? "border-[#db4444]" : "border-transparent"
            } pb-0.5`}
          >
            Sign Up
          </a>
        </div>

        {/* Right section (Icons & Profile) */}
        <div className="hidden lg:flex justify-center items-center gap-5">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="px-2"
          />
          <div className="cursor-pointer">
            <Search />
          </div>
          <a
            href="/wishlist"
            className={`border-b-2 ${
              path === "/wishlist" ? "border-[#db4444]" : "border-transparent"
            } pb-0.5`}
          >
            <Heart />
          </a>
          <a
            href="/cart"
            className={`border-b-2 ${
              path === "/cart" ? "border-[#db4444]" : "border-transparent"
            } pb-0.5`}
          >
            <Cart />
          </a>
          <ProfileDropdown />
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-2xl">
            {isMobileMenuOpen ? "X" : "☰"}{" "}
            {/* Toggle between Hamburger and X */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-5 p-4 bg-white border-t">
          <a
            href="/"
            className={`border-b-2 ${
              path === "/" ? "border-[#db4444]" : "border-transparent"
            } pb-0.5`}
          >
            Home
          </a>
          <a
            href="/contact"
            className={`border-b-2 ${
              path === "/contact" ? "border-[#db4444]" : "border-transparent"
            } pb-0.5`}
          >
            Contacts
          </a>
          <a
            href="/about"
            className={`border-b-2 ${
              path === "/about" ? "border-[#db4444]" : "border-transparent"
            } pb-0.5`}
          >
            About
          </a>
          <a
            href="/sign-up"
            className={`border-b-2 ${
              path === "/signup" ? "border-[#db4444]" : "border-transparent"
            } pb-0.5`}
          >
            Sign Up
          </a>
          <div className="flex justify-center items-center gap-5">
            <a
              href="/wishlist"
              className={`border-b-2 ${
                path === "/wishlist" ? "border-[#db4444]" : "border-transparent"
              } pb-0.5`}
            >
              <Heart />
            </a>
            <a
              href="/cart"
              className={`border-b-2 ${
                path === "/cart" ? "border-[#db4444]" : "border-transparent"
              } pb-0.5`}
            >
              <Cart />
            </a>
            <ProfileDropdown />
          </div>
        </div>
      )}

      <hr className="mt-5" />
    </div>
  );
};

export default Hero;
