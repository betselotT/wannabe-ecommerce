import Image from 'next/image'
import React from 'react'

const Front = () => {
  return (
    <div>
      <div className="flex justify-between items-center pl-32">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-4xl tracking-widest">Our Story</h1>
          <p className="w-[525px]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="w-[525px]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.{" "}
          </p>
        </div>
        <div className="pt-10">
          <Image
            src="/images/girls.png"
            width={605}
            height={509}
            alt="Picture of the home page"
          />
        </div>
      </div>
    </div>
  )
}

export default Front
