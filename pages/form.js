import React, { useState } from "react";
import Link from "next/link";

export default function Form() {
  const [formData, setFormData] = useState({
    walletAddress: "",
    income: "",
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleApply() {}

  return (
    <div>
      <form className="flex lg:w-full w-full sm:flex-row flex-col flex-start px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
          <label
            type="wallet-address"
            className="leading-7 text-sm text-gray-600"
          >
            Wallet Address
          </label>
          <input
            type="text"
            id="walletAddress"
            name="walletAddress"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleChange}
            value={formData.walletAddress}
          />
        </div>
        <div className="relative flex-grow w-full">
          <label type="number" className="leading-7 text-sm text-gray-600">
            Household Income
          </label>
          <input
            type="number"
            id="income"
            name="income"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={handleChange}
            value={formData.income}
            placeholder="$"
          />
        </div>
        <Link href="/walletconnect" passHref>
          <button
            className="text-white border-0 py-2 px-8 focus:outline-none bg-[#DD6C03] rounded text-lg"
            onSubmit={handleApply}
          >
            Apply
          </button>
        </Link>
      </form>
    </div>
  );
}
