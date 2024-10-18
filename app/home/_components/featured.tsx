import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div>
      <div className="flex justify-start items-center gap-5">
        <Image
          src="/images/rectangle.png"
          width={20}
          height={40}
          alt="Picture of the home page"
        />
        <h1 className="text-[#db4444] font-semibold">Featured</h1>
      </div>
      <h1 className="text-3xl font-semibold pt-5">New Arrival</h1>
      <div className="pt-5 flex justify-center items-center gap-5">
        <div>

        </div>
        <div className="flex flex-col items-center justify-center gap-5">
            <div>

            </div>
            <div className="flex justify-center items-center gap-5">
                <div>

                </div>
                <div>
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
