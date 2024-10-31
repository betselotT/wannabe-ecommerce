import React from "react";

const Right = () => {
  return (
    <div className="border border-gray-100 shadow-md py-10 px-20">
      <form action="#">
        <legend className="text-[#db4444] font-medium text-xl">
          Edit Your Profile
        </legend>
        <div className="flex items-center gap-10 mt-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="fname" className="font-semibold">
              First Name
            </label>
            <input
              type="text"
              className="bg-gray-100 w-[300px] h-[50px] rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lname" className="font-semibold">
              Last Name
            </label>
            <input
              type="text"
              className="bg-gray-100 w-[300px] h-[50px] rounded"
            />
          </div>
        </div>
        <div className="flex items-center gap-10 mt-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              className="bg-gray-100 w-[300px] h-[50px] rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="font-semibold">
              Address
            </label>
            <input
              type="text"
              className="bg-gray-100 w-[300px] h-[50px] rounded"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="address" className="font-semibold">
            Password Changes
          </label>
          <input
            type="password"
            className="bg-gray-100 w-[640px] h-[50px] pl-4 rounded"
            placeholder="Current Password"
          />
          <input
            type="password"
            className="bg-gray-100 w-[640px] h-[50px] pl-4 rounded"
            placeholder="New Password"
          />
          <input
            type="password"
            className="bg-gray-100 w-[640px] h-[50px] pl-4 rounded"
            placeholder="Confirm New Password"
          />
        </div>
        <div className="flex justify-end items-center mt-5">
          <button className="text-black w-[150px] h-[50px] rounded">
            Cancel
          </button>
          <button className="bg-[#db4444] text-white w-[215px] h-[50px] rounded">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Right;
