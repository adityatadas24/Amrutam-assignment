import Image from "next/image";
import React from "react";

export const Approach = () => {
  return (
    <div className="flex justify-center items-center w-full flex-col mt-14 gap-8 ">
      <h1 className="text-5xl text-[#355d36] text-center font-bold">
        Our Ayurvedic Approach
      </h1>
      <p className="text-center w-1/2 font-medium text-gray-500 max-md:w-11/12 max-sm:text-sm">
        At Amrutam we follow a unoque and Personalized approach to healing. Our
        expert practitioners begin each treatment process by conducting a
        through analysis of the patient body typw, medical history and current
        health conditions.
      </p>

      <div className="w-full overflow-x-auto whitespace-nowrap flex gap-2 md:justify-center md:items-center md:flex-wrap max-md:w-11/12 scrollbar-hide">
        <Image
          src="/make-appointment.png"
          width="305"
          height="305"
          alt="make"
          className="max-sm:w-[300px] max-sm:h-[300px]"
        />
        <Image
          className="max-sm:w-[300px] max-sm:h-[300px]"
          src="/consulting.png"
          width="305"
          height="305"
          alt="con"
        />
        <Image
          className="max-sm:w-[300px] max-sm:h-[300px]"
          src="/treat-plan.png"
          width="305"
          height="305"
          alt="tret"
        />
        <Image
          className="max-sm:w-[300px] max-sm:h-[300px]"
          src="/maintanence.png"
          width="305"
          height="305"
          alt="main"
        />
      </div>
    </div>
  );
};
