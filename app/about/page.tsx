import Base from "@/components/base";
import Hero from "@/components/hero";
import React from "react";
import Front from "./_components/front";
import Four from "./_components/four";
import Avatars from "./_components/avatars";
import MiniFooter from "../../components/mini-footer";
import Footer from "../../components/footer";
import Dots from "./_components/dots";

const About = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Base />

      {/* Hero Section */}
      <div className="mt-10">
        <Hero />
      </div>

      {/* About Us Section */}
      <div className="pt-20 pl-8 sm:pl-16 md:pl-36">
        <p>
          <span className="text-gray-500">Home /</span>{" "}
          <span className="font-semibold">About</span>
        </p>
      </div>

      {/* Front Section */}
      <Front />

      {/* The Four Section */}
      <div className="mt-32">
        <Four />
      </div>

      {/* The Avatars Section */}
      <div className="mt-32">
        <Avatars />
      </div>

      {/* Dots Section */}
      <div className="mt-8">
        <Dots />
      </div>

      {/* Mini Footer */}
      <div className="mt-20">
        <MiniFooter />
        <hr className="bg-[#dcdfe8] w-full sm:w-[600px] md:w-[800px] lg:w-[1200px] mt-10 mb-10 mx-auto" />
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default About;
