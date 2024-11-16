import React from "react";

const Right = () => {
  return (
    <div className="border border-gray-100 shadow-md py-10 px-6 sm:px-10 lg:px-20">
      <form action="#">
        <legend className="text-[#db4444] font-medium text-xl">
          Edit Your Profile
        </legend>
        {/* First and Last Name Fields */}
        <div className="flex flex-col sm:flex-row sm:gap-10 mt-5">
          <div className="flex flex-col gap-2 sm:w-[300px] w-full">
            <label htmlFor="fname" className="font-semibold">
              First Name
            </label>
            <input type="text" className="bg-gray-100 h-[50px] rounded px-4" />
          </div>
          <div className="flex flex-col gap-2 sm:w-[300px] w-full">
            <label htmlFor="lname" className="font-semibold">
              Last Name
            </label>
            <input type="text" className="bg-gray-100 h-[50px] rounded px-4" />
          </div>
        </div>
        {/* Email and Address Fields */}
        <div className="flex flex-col sm:flex-row sm:gap-10 mt-5">
          <div className="flex flex-col gap-2 sm:w-[300px] w-full">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input type="email" className="bg-gray-100 h-[50px] rounded px-4" />
          </div>
          <div className="flex flex-col gap-2 sm:w-[300px] w-full">
            <label htmlFor="address" className="font-semibold">
              Address
            </label>
            <input type="text" className="bg-gray-100 h-[50px] rounded px-4" />
          </div>
        </div>
        {/* Password Fields */}
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="password" className="font-semibold">
            Password Changes
          </label>
          <input
            type="password"
            className="bg-gray-100 w-full sm:w-[640px] h-[50px] pl-4 rounded"
            placeholder="Current Password"
          />
          <input
            type="password"
            className="bg-gray-100 w-full sm:w-[640px] h-[50px] pl-4 rounded"
            placeholder="New Password"
          />
          <input
            type="password"
            className="bg-gray-100 w-full sm:w-[640px] h-[50px] pl-4 rounded"
            placeholder="Confirm New Password"
          />
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end items-center mt-5 gap-3">
          <button className="text-black w-full sm:w-[150px] h-[50px] rounded border">
            Cancel
          </button>
          <button className="bg-[#db4444] text-white w-full sm:w-[215px] h-[50px] rounded">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Right;
