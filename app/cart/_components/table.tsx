"use client";
import Down from "@/components/icons/down";
import Up from "@/components/icons/up";
import Image from "next/image";
import React, { useState } from "react";

const Table = () => {
  const [quantity, setQuantity] = useState(1);
  const min = 0;
  const max = 10;

  const increment = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-8">
        <div className="flex items-center border border-gray-100 rounded-md shadow-sm w-[1170px] h-[72px]">
          <p className="ml-28">Product</p>
          <p className="ml-[310px]">Price</p>
          <p className="ml-[220px]">Quantity</p>
          <p className="ml-[205px]">Subtotal</p>
        </div>
        <div className="flex items-center justify-around border border-gray-100 rounded-md shadow-sm w-[1170px] h-[72px]">
          <div className="flex gap-3 items-center">
            <Image
              src="/images/monitor.png"
              width={54}
              height={54}
              alt="Picture of the home page"
            />
            <p>LCD Monitor</p>
          </div>
          <p>$650</p>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={quantity}
              min={min}
              max={max}
              className="w-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-col gap-2 pb-3">
              <button onClick={increment}>
                <div className="w-[10px] h-[10px]">
                  <Up />
                </div>
              </button>
              <button onClick={decrement}>
                <div className="w-[10px] h-[10px]">
                  <Down />
                </div>
              </button>
            </div>
          </div>
          <p>$650</p>
        </div>
        <div className="flex items-center justify-around border border-gray-100 rounded-md shadow-sm w-[1170px] h-[72px]">
          <div className="flex gap-3 items-center">
            <Image
              src="/images/gamepad.png"
              width={54}
              height={54}
              alt="Picture of the home page"
            />
            <p>H1 Gamepad</p>
          </div>
          <p>$550</p>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={quantity}
              min={min}
              max={max}
              className="w-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-col gap-2 pb-3">
              <button onClick={increment}>
                <div className="w-[10px] h-[10px]">
                  <Up />
                </div>
              </button>
              <button onClick={decrement}>
                <div className="w-[10px] h-[10px]">
                  <Down />
                </div>
              </button>
            </div>
          </div>
          <p>$550</p>
        </div>
      </div>
    </div>
  );
};

export default Table;
