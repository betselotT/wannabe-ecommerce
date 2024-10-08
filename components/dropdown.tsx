import React from "react";

const Dropdown = () => {
  return (
    <div>
      <select name="cars" id="cars" className="bg-black text-white border-none">
        <option value="volvo">English</option>
        <option value="saab">Amharic</option>
      </select>
    </div>
  );
};

export default Dropdown;
