import Image from "next/image";
import React from "react";

const Front = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center md:pl-16 px-4">
        <div className="flex flex-col gap-5 md:w-[525px] w-full">
          <h1 className="font-semibold text-4xl tracking-widest">Our Story</h1>
          <p className="md:w-[525px] w-full">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="md:w-[525px] w-full">
            Exclusive has more than 1 million products to offer, growing very
            fast. Exclusive offers a diverse assortment in categories ranging
            from consumer.
          </p>
        </div>
        {/* Image visible on medium and larger screens */}
        <div className="pt-10 hidden md:block md:w-[605px]">
          <Image
            src="/images/girls.png"
            width={605}
            height={509}
            alt="Picture of the home page"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Front;
