import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { TbPlane } from "react-icons/tb";
const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <TbPlane size={30} className="text-PrimaryDark mr-2" />
        <h1 className="font-h1Text text-lg font-bold text-gray-700">
          WEEKAWAY
        </h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle size={20} className="mr-2 text-PrimaryDark" />
          <p className="text-sm text-gray-700">9AM - 5PM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className="mr-2 text-PrimaryDark" />
          <p className="text-sm text-gray-700">1-888-815-1234</p>
        </div>
        <button className="">Get a Free Quote</button>
      </div>
    </div>
  );
};

export default TopBar;
