import Bag from "@/components/icons/bag";
import Credit from "@/components/icons/credit";
import Dollar from "@/components/icons/dollar";
import Home from "@/components/icons/home";
import React from "react";

const Four = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-20">
        <div className="border-3 w-[220px] h-[180px] flex items-center justify-center">
          <div className="flex flex-col gap-3 items-center">
            <div className="flex justify-center items-center">
              <div className="bg-[#c1c0c1] w-[70px] h-[70px] rounded-full flex justify-center items-center">
                <div className="flex justify-center items-center bg-black rounded-full w-[50px] h-[50px]">
                  <Home />
                </div>
              </div>
            </div>
            <h1 className="font-bold text-xl">10.5k</h1>
            <p className="text-sm">Sallers active our site</p>
          </div>
        </div>
        <div className="border-3 w-[220px] h-[180px] flex items-center justify-center">
          <div className="flex flex-col gap-3 items-center">
            <div className="flex justify-center items-center">
              <div className="bg-[#c1c0c1] w-[70px] h-[70px] rounded-full flex justify-center items-center">
                <div className="flex justify-center items-center bg-black rounded-full w-[50px] h-[50px]">
                  <Dollar />
                </div>
              </div>
            </div>
            <h1 className="font-bold text-xl">33k</h1>
            <p className="text-sm">Mopnthly Produduct Sale</p>
          </div>
        </div>
        <div className="border-3 w-[220px] h-[180px] flex items-center justify-center">
          <div className="flex flex-col gap-3 items-center">
            <div className="flex justify-center items-center">
              <div className="bg-[#c1c0c1] w-[70px] h-[70px] rounded-full flex justify-center items-center">
                <div className="flex justify-center items-center bg-black rounded-full w-[50px] h-[50px]">
                  <Bag />
                </div>
              </div>
            </div>
            <h1 className="font-bold text-xl">45.5k</h1>
            <p className="text-sm">Customer active in our site</p>
          </div>
        </div>
        <div className="border-3 w-[220px] h-[180px] flex items-center justify-center">
          <div className="flex flex-col gap-3 items-center">
            <div className="flex justify-center items-center">
              <div className="bg-[#c1c0c1] w-[70px] h-[70px] rounded-full flex justify-center items-center">
                <div className="flex justify-center items-center bg-black rounded-full w-[50px] h-[50px]">
                  <Credit />
                </div>
              </div>
            </div>
            <h1 className="font-bold text-xl">25k</h1>
            <p className="text-sm">Annual gross sale in our site</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Four;
