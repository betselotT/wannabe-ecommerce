import Base from "@/components/base";
import Hero from "@/components/hero";
import React from "react";
import Types from "./_components/types";

const Home = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Base />
      <div className="mt-10">
        <Hero />
      </div>

      {/* Home Section */}
      <Types />
    </div>
  );
};

export default Home;
