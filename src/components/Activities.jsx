import React from "react";
import ResortsImg from "../assets/resorts.jpg";
import CruiseImg from "../assets/cruise-ship.jpg";
import ExcursionImg from "../assets/excursion.jpg";

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src={ResortsImg}
          alt=""
        />
      </div>

      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Cruises
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src={CruiseImg}
          alt=""
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Excursions
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src={ExcursionImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Activities;
