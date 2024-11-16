import React from "react";

const Last = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-60">
        {/* Coupon Code Section */}
        <div className="flex flex-col md:flex-row gap-5">
          <input
            type="text"
            className="border border-black w-full md:w-[235px] h-[46px] pl-4 rounded"
            placeholder="Coupon Code"
          />
          <button className="text-white w-full md:w-[200px] h-[46px] bg-[#db4444] rounded mt-3 md:mt-0">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total Section */}
        <div className="border-2 rounded border-black w-full md:w-[470px] h-[324px] p-10">
          <h1 className="font-semibold text-medium pb-5">Cart Total</h1>
          <div className="flex justify-between items-center">
            <p>Subtotal:</p>
            <p>$1750</p>
          </div>
          <hr className="w-full mt-5 mb-5" />
          <div className="flex justify-between items-center">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr className="w-full mt-5 mb-5" />
          <div className="flex justify-between items-center">
            <p>Total:</p>
            <p>Free</p>
          </div>
          <button className="text-white w-full md:w-[200px] h-[46px] bg-[#db4444] rounded mt-5 md:ml-24">
            Process To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Last;
