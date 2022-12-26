import React from "react";
import { TbPlane } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="max-w-[1140px] w-full py-8 m-auto border-t-4">
      <div className="flex items-center m-auto justify-center">
        <TbPlane size={30} className="text-PrimaryDark mr-2" />
        <h1 className="text-lg font-bold text-gray-700">WEEKAWAY</h1>
      </div>
    </div>
  );
};

export default Footer;
