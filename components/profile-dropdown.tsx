import React, { useState } from "react";
import {
  FaUser,
  FaShoppingBag,
  FaBan,
  FaStar,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";
import Person from "./icons/person";

function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Profile Icon */}
      <button
        onClick={toggleDropdown}
        className="hover:text-white hover:bg-[#db4444] text-black rounded-full p-1 focus:outline-none"
      >
        <Person />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 text-white rounded-md shadow-lg font-light"
          style={{
            background: "linear-gradient(135deg, #a8a3a9, #261f27)",
          }}
        >
          <ul className="py-1">
            <li className="flex items-center px-4 py-2 hover:bg-black cursor-pointer">
              <FaCog className="mr-2" />
              Manage My Account
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-black cursor-pointer">
              <FaShoppingBag className="mr-2" />
              My Order
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-black cursor-pointer">
              <FaBan className="mr-2" />
              My Cancellations
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-black cursor-pointer">
              <FaStar className="mr-2" />
              My Reviews
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-black cursor-pointer">
              <FaSignOutAlt className="mr-2" />
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
