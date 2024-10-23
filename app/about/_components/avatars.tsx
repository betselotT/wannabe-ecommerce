import Image from "next/image";
import React from "react";

const Avatars = () => {
  return (
    <div>
      <div className="flex gap-20 justify-center">
        <div>
          <div className="bg-gray-200 w-[370px] h-[430px] mb-3 flex justify-center items-end">
            <Image
              src="/images/avatar-one.png"
              width={236}
              height={391}
              alt="Picture of the home page"
            />
          </div>
          <h1 className="font-semibold text-xl">Tom Cruise</h1>
          <p className="text-sm">Founder & Chairman</p>
        </div>
        <div>
          <div className="bg-gray-200 w-[370px] h-[430px] mb-3 flex justify-center items-end">
            <Image
              src="/images/avatar-two.png"
              width={236}
              height={391}
              alt="Picture of the home page"
            />
          </div>
          <h1 className="font-semibold text-xl">Emma Watson</h1>
          <p className="text-sm">Managing Director</p>
        </div>
        <div>
          <div className="bg-gray-200 w-[370px] h-[430px] mb-3 flex justify-center items-end">
            <Image
              src="/images/avatar-three.png"
              width={236}
              height={391}
              alt="Picture of the home page"
            />
          </div>
          <h1 className="font-semibold text-xl">Will Smith</h1>
          <p className="text-sm">Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Avatars;
