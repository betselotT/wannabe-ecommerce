import React from "react";

const Left = () => {
  return (
    <div className="flex flex-col space-y-6 px-4 lg:px-8">
      {/* Manage My Account Section */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Manage My Account</h3>
        <ul className="text-gray-600 space-y-2 ml-6 lg:ml-8">
          <li className="text-[#db4444]">My Profile</li>
          <li>Address Book</li>
          <li>My Payment Options</li>
        </ul>
      </div>

      {/* My Orders Section */}
      <div>
        <h3 className="font-semibold text-lg mb-2">My Orders</h3>
        <ul className="text-gray-600 space-y-2 ml-6 lg:ml-8">
          <li>My Returns</li>
          <li>My Cancellations</li>
        </ul>
      </div>

      {/* My Wishlist Section */}
      <div>
        <h3 className="font-semibold text-lg">My Wishlist</h3>
      </div>
    </div>
  );
};

export default Left;
