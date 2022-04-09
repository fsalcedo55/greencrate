import React from "react";

export default function FoodBank() {
  return (
    <div className="bg-white py-16">
      <h1 className="flex justify-center text-4xl font-bold">
        Help People Fight Food Inflation Costs
      </h1>
      <div className="relative h-72">
        <div className="absolute top-12 left-8 w-72 h-72 bg-indigo-500 rounded-full opacity-100"></div>
        <div className="absolute top-12 left-48 w-72 h-72 bg-purple-500 rounded-full opacity-100"></div>
        <div className="absolute top-12 -right-8 w-72 h-72 bg-indigo-500 rounded-full opacity-100"></div>
      </div>
    </div>
  );
}
