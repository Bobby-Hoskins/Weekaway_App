import React from "react";
import herobg from "../assets/hero-bg.jpg";
const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src={herobg}
        alt="hero-background"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-h1Text text-3xl font-bold">
            Find Your Special Trip
          </h1>
          <h2 className="font-h1Text text-2xl italic py-1">With Weekaway</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            ducimus ipsum numquam, voluptas autem magni quidem incidunt
            cupiditate reiciendis, cum modi! Officia modi reprehenderit pariatur
            eius accusantium incidunt quis porro!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
