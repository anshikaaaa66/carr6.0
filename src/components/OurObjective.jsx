import React from "react";
import TitleText from "./TitleText";
import { homeCards } from "@/contants/appdata";

const OurObjective = () => {
  return (
    <div className="relative bg-gradient-to-br from-black via-gray-800 to-black text-white pt-12 mb-10 overflow-hidden">
      {/* Sparkling effect */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[url('/path-to-sparkling-effect.svg')] bg-no-repeat bg-cover opacity-20"></div>
      
      <div className="relative z-20">
        <TitleText
          title={
            <span className="text-orange-100 font-extrabold">Our Objective</span>
          }
        />
        <div className="mx-10 md:mx-[10%] mt-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-10">
            {homeCards?.map((car, index) => (
              <div key={index} className="rounded-lg shadow-lg bg-gray-800">
                <div className="w-full relative">
                  <img src={car.img} alt="" className="w-full object-cover rounded-t-lg" />
                </div>
                <div className="font-bold text-xl mb-2 text-yellow-400 p-4">
                  {car.title}
                </div>
                <p className="text-gray-300 text-base p-4">{car.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurObjective;
