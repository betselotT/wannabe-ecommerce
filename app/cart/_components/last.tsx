import React from "react";

const Last = () => {
  return (
    <div>
      <div className="flex items-start gap-60">
        <div className="flex items-start gap-5">
          <input
            type="text"
            className="border border-black w-[235px] h-[46px] pl-4 rounded"
            placeholder="Coupon Code"
          />
          <button className="text-white w-[200px] h-[46px] bg-[#db4444] rounded">
            Apply Coupon
          </button>
        </div>
        <div className="border-2 rounded border-black w-[470px] h-[324px] p-10">
          <h1 className="font-semibold text-medium pb-5">Cart Total</h1>
          <div className="flex justify-between items-center">
            <p>Subtotal:</p>
            <p>$1750</p>
          </div>
          <hr className="w-[400px] mt-5 mb-5" />
          <div className="flex justify-between items-center">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr className="w-[400px] mt-5 mb-5" />
          <div className="flex justify-between items-center">
            <p>Total:</p>
            <p>Free</p>
          </div>
          <button className="text-white w-[200px] h-[46px] bg-[#db4444] rounded mt-5 ml-24">
            Process To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Last;
