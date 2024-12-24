import React from "react";

const Background = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 h-full bg-[#951d1c] max-sm:hidden"></div>

      <div className="w-1/2 h-full bg-[url('/bg-img.png')] bg-cover bg-right max-sm:w-full max-sm:bg-[url('/bg-mobile.png')]">
        <div className="absolute w-full inset-0 bg-[url('/gradient.png')] bg-cover bg-center max-sm:w-full">
          <div className="flex justify-start items-start p-24 w-full h-full pt-44 flex-col gap-5 max-sm:p-10 max-sm:pt-44">
            <p className="text-[#FFF7E2] text-xl max-sm:w-full max-sm:text-sm max-sm:text-gray-300">
              Namaste, Welcome to Amrutam{" "}
            </p>
            <h1 className="text-white text-5xl w-[70%] leading-[1.2] max-sm:text-xl max-sm:font-bold max-sm:w-11/12">
              Step into Holistic Healing with <span className="underline">Ayurveda</span> Book Consultation with
              certified Experts.{" "}
            </h1>
            <p className="text-[#C9C9C9] text-[16px] w-1/2 max-sm:w-full max-sm:text-start max-sm:text-[11px]">
              Dive into the world of ayurveda and Experience Personalized Health
              Solutions and Holistic Guidance from Trusted Ayurvedic Doctors
              Anytime, anywhere.
            </p>
            <button className="p-4 px-8 text-white rounded-xl bg-[#355d36] max-sm:text-sm">BOOK AN APPOINTMENT</button>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Background
