import React from "react";

export default function DiscountTiers() {
  return (
    <div className="bg-white py-16">
      <h1 className="flex justify-center text-4xl font-bold">
        Healthy Foods Get More Discounts
      </h1>
      <div className="container px-6 py-16 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50">
                Unhealthy
              </h2>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-3xl font-bold text-gray-800">
                10% Off
              </span>
            </div>
            <ul className="flex-1 space-y-4">
              <li className="text-gray-500">Soft Drinks</li>
              <li className="text-gray-500">Refined Foods</li>
              <li className="text-gray-500">Alcoholic Drinks</li>
            </ul>
          </div>

          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50">
                Regular
              </h2>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-3xl font-bold text-gray-800">
                30% Off
              </span>
            </div>
            <ul className="flex-1 space-y-4">
              <li className="text-gray-500">Dairy Products</li>
              <li className="text-gray-500">Grains</li>
              <li className="text-gray-500">Eggs</li>
            </ul>
          </div>

          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50">
                Healthy
              </h2>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-3xl font-bold text-gray-800">
                50% Off
              </span>
            </div>
            <ul className="flex-1 space-y-4">
              <li className="text-gray-500">Vegetables</li>
              <li className="text-gray-500">Fruits</li>
              <li className="text-gray-500">Animal Protein</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
