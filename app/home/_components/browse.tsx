import React from "react";
import { BrowseTypes } from "@/types";
import Image from "next/image";

const Browse: React.FC<BrowseTypes> = ({ image, name }) => {
  return (
    <div>
      <div className="w-[170px] h-[145px] flex flex-col items-center justify-center gap-3 border rounded border-[#c4c4c4]">
        <Image
          src={image}
          width={56}
          height={56}
          alt="Picture of a gamepad"
        />
        <h1 className="font-semibold">{name}</h1>
      </div>
    </div>
  );
};

export default Browse;
