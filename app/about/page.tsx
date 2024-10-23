import Base from "@/components/base";
import Hero from "@/components/hero";
import Image from "next/image";
import React from "react";
import Front from "./_components/front";
import Four from "./_components/four";
import Avatars from "./_components/avatars";
import MiniFooter from "../home/_components/mini-footer";
import Footer from "../home/_components/footer";
import Dots from "./_components/dots";

const About = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Base />
      <div className="mt-10">
        <Hero />
      </div>

      {/* About Us Section */}
      <div className="pt-20 pl-36">
        <p>
          <span className="text-gray-500">Home /</span>{" "}
          <span className="font-semibold">About</span>
        </p>
      </div>
      <Front />

      {/* The four  */}
      <div className="mt-32">
        <Four />
      </div>

      {/* The avatars  */}
      <div className="mt-32">
        <Avatars />
      </div>

      {/* The dots  */}
      <div className="mt-8">
        <Dots />
      </div>

      {/* Mini Footer */}
      <div className="ml-36 mt-32">
        <MiniFooter />
        <hr className="bg-[#dcdfe8] w-[1200px] mt-10 mb-10" />
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default About;
