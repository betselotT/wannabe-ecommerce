"use client";
import Down from "@/components/icons/down";
import Up from "@/components/icons/up";
import Image from "next/image";
import React, { useState } from "react";

const Table = () => {
  // Set separate states for each product's quantity
  const [monitorQuantity, setMonitorQuantity] = useState(1);
  const [gamepadQuantity, setGamepadQuantity] = useState(1);

  const min = 0;
  const max = 10;

  const increment = (product: string) => {
    if (product === "monitor" && monitorQuantity < max) {
      setMonitorQuantity(monitorQuantity + 1);
    } else if (product === "gamepad" && gamepadQuantity < max) {
      setGamepadQuantity(gamepadQuantity + 1);
    }
  };

  const decrement = (product: string) => {
    if (product === "monitor" && monitorQuantity > min) {
      setMonitorQuantity(monitorQuantity - 1);
    } else if (product === "gamepad" && gamepadQuantity > min) {
      setGamepadQuantity(gamepadQuantity - 1);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-8">
        {/* Table Header */}
        <div className="flex items-center border border-gray-100 rounded-md shadow-sm w-[1170px] h-[72px]">
          <p className="ml-28">Product</p>
          <p className="ml-[310px]">Price</p>
          <p className="ml-[220px]">Quantity</p>
          <p className="ml-[205px]">Subtotal</p>
        </div>

        {/* Product Row: LCD Monitor */}
        <div className="flex items-center justify-around border border-gray-100 rounded-md shadow-sm w-[1170px] h-[72px]">
          <div className="flex gap-3 items-center">
            <Image
              src="/images/monitor.png"
              width={54}
              height={54}
              alt="LCD Monitor"
            />
            <p>LCD Monitor</p>
          </div>
          <p>$650</p>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={monitorQuantity}
              min={min}
              max={max}
              className="w-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-col gap-2 pb-3">
              <button onClick={() => increment("monitor")}>
                <div className="w-[10px] h-[10px]">
                  <Up />
                </div>
              </button>
              <button onClick={() => decrement("monitor")}>
                <div className="w-[10px] h-[10px]">
                  <Down />
                </div>
              </button>
            </div>
          </div>
          <p>${monitorQuantity * 650}</p> {/* Subtotal */}
        </div>

        {/* Product Row: H1 Gamepad */}
        <div className="flex items-center justify-around border border-gray-100 rounded-md shadow-sm w-[1170px] h-[72px]">
          <div className="flex gap-3 items-center">
            <Image
              src="/images/gamepad.png"
              width={54}
              height={54}
              alt="H1 Gamepad"
            />
            <p>H1 Gamepad</p>
          </div>
          <p>$550</p>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={gamepadQuantity}
              min={min}
              max={max}
              className="w-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-col gap-2 pb-3">
              <button onClick={() => increment("gamepad")}>
                <div className="w-[10px] h-[10px]">
                  <Up />
                </div>
              </button>
              <button onClick={() => decrement("gamepad")}>
                <div className="w-[10px] h-[10px]">
                  <Down />
                </div>
              </button>
            </div>
          </div>
          <p>${gamepadQuantity * 550}</p> {/* Subtotal */}
        </div>
      </div>
    </div>
  );
};

export default Table;
