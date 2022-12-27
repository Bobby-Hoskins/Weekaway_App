import React from "react";
import { TbPlane } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="w-full bg-PrimaryColor py-8 m-auto border-t-4">
      <div className="flex items-center m-auto justify-center">
        <TbPlane size={30} className="text-PrimaryLight mr-2" />
        <h1 className="text-lg font-bold text-PrimaryLight">WEEKAWAY</h1>
      </div>
    </div>
  );
};

export default Footer;
