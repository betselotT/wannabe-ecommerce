import React from "react";
import View from "@/components/icons/view";
import { FaStar } from "react-icons/fa";
import Heart from "@/components/icons/heart";
import Image from "next/image";
import { FlashSalesTypes } from "@/types";

const FlashSales: React.FC<FlashSalesTypes> = ({
  discount,
  image,
  name,
  currPrice,
  prevPrice,
  rating,
}) => {
  return (
    <div>
      <div className="h-[350px]">
        <div className="bg-[#f5f5f5] w-[270px] h-[230px] relative">
          <div className="flex justify-between pt-3 px-3">
            <div className="bg-[#db4444] w-12 h-6 rounded">
              <p className="text-white text-xs text-center p-1">{discount}</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-white rounded-3xl p-2 cursor-pointer">
                <Heart />
              </div>
              <div className="bg-white rounded-3xl p-2 cursor-pointer">
                <View />
              </div>
            </div>
          </div>
          <div className="flex justify-center absolute top-12 left-12">
            <Image
              src={image}
              width={172}
              height={152}
              alt="Picture of a gamepad"
            />
          </div>
        </div>
        <h1 className="pt-1 font-semibold">{name}</h1>
        <div className="flex gap-5 pt-1">
          <p className="text-[#db4444]">{currPrice}</p>
          <p className="text-[#c3bfbf] line-through">{prevPrice}</p>
        </div>
        <div className="flex gap-2 pt-1">
          {Array.from({ length: Math.floor(rating / 20) }, (_, i) => (
            <span key={i}>
              <FaStar
                style={{ fontSize: "24px", color: "gold", cursor: "pointer" }}
              />
            </span>
          ))}
          <p className="text-[#c3bfbf]">({rating})</p>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
