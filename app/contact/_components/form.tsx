import React from "react";

const Form = () => {
  return (
    <div>
      <form action="#">
        <div className="flex flex-col gap-5">
          <div className="flex gap-4">
            <input
              type="text"
              className="bg-gray-200 w-[235px] h-[50px] pl-4"
              placeholder="Your Name *"
            />
            <input
              type="email"
              className="bg-gray-200 w-[235px] h-[50px] pl-4"
              placeholder="Your Email *"
            />
            <input
              type="text"
              className="bg-gray-200 w-[235px] h-[50px] pl-4"
              placeholder="Your Phone *"
            />
          </div>
          <textarea className="w-[737px] h-[207px] bg-gray-200 pt-4 pl-4" placeholder="Your Message" />
        </div>
        <div className="flex justify-end items-center pt-5">
          <button className="bg-[#db4444] text-white w-[215px] h-[56px] rounded">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
