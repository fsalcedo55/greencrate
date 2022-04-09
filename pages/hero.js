import React from "react";
import Image from "next/image";
import Form from "./Form";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src="/blair-fraser-VF4t6jLMD5g-unsplash.jpg"
            width={600}
            height={600}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Apply for food subsidies
            <br className="hidden lg:inline-block" />
            with GreenCrate
          </h1>
          <p className="mb-8 leading-relaxed">
            If your household income is less than $30,000 per year you will
            qualify for this subsidy.
          </p>
          <Form />
        </div>
      </div>
    </section>
  );
}
