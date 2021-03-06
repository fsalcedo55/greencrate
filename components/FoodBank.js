import React from "react";
import Image from "next/image";

export default function FoodBank() {
  return (
    <div className="bg-white py-12 rounded-xl">
      <div className="max-w-2xl mx-auto">
        <h1 className="flex justify-center text-4xl font-bold">
          Help People Fight Food Inflation Costs
        </h1>
        <div className="relative h-[500px]">
          <div className="absolute top-12 -left-12 w-80 h-80 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-100"></div>
          <div className="absolute top-12 left-48 w-80 h-80 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full opacity-100 flex justify-center items-center">
            <Image
              src="/logo.svg"
              className="w-48"
              alt="greencrate-logo"
              width={200}
              height={45}
            />
          </div>
          <div className="absolute top-12 -right-28 w-80 h-80 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-100"></div>
          <div className="absolute top-96 -right-0 font-bold text-xl">
            Full Cost
          </div>
          <div className="absolute top-96 left-20 font-bold text-xl">
            Food Bank
          </div>
        </div>
      </div>
    </div>
  );
}
