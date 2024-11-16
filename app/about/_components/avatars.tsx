import Image from "next/image";
import React from "react";

const Avatars = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-20">
        {/* Avatar 1 */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 w-[250px] h-[350px] mb-3 flex justify-center items-end">
            <Image
              src="/images/avatar-three.png"
              width={236}
              height={391}
              alt="Tom Cruise"
            />
          </div>
          <h1 className="font-semibold text-xl text-center">Tom Cruise</h1>
          <p className="text-sm text-center">Founder & Chairman</p>
        </div>

        {/* Avatar 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 w-[250px] h-[350px] mb-3 flex justify-center items-end">
            <Image
              src="/images/avatar-two.png"
              width={236}
              height={391}
              alt="Emma Watson"
            />
          </div>
          <h1 className="font-semibold text-xl text-center">Emma Watson</h1>
          <p className="text-sm text-center">Managing Director</p>
        </div>

        {/* Avatar 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 w-[250px] h-[350px] mb-3 flex justify-center items-end">
            <Image
              src="/images/avatar-three.png"
              width={236}
              height={391}
              alt="Will Smith"
            />
          </div>
          <h1 className="font-semibold text-xl text-center">Will Smith</h1>
          <p className="text-sm text-center">Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default Avatars;
