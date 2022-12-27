import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { TbPlane } from "react-icons/tb";
const TopBar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-PrimaryColor">
      <div className="flex items-center">
        <TbPlane size={30} className="text-PrimaryLight mr-2" />
        <h1 className="font-logoText text-lg font-bold text-PrimaryLight">
          WEEKAWAY
        </h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle size={20} className="mr-2 text-PrimaryLight" />
          <p className="text-sm text-PrimaryLight">9AM - 5PM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className="mr-2 text-PrimaryLight" />
          <p className="text-sm text-PrimaryLight">1-888-815-1234</p>
        </div>
        <button className="">Get a Free Quote</button>
      </div>
    </div>
  );
};

export default TopBar;
