import Image from "next/image";
import React from "react";

const Consultation = () => {
  return (
    <div className="flex justify-start items-center w-full flex-col gap-10 mt-10 pt-14 bg-[#fff7e2] pb-14">
      <h1 className="text-4xl text-[#3a643b] font-bold max-md:text-3xl text-center">
        What sets Ayurvedic consultations apart?
      </h1>
      <div className="flex justify-center items-center w-11/12 flex-wrap">
        <Image
          className="w-[520px]  hover:scale-110 transition-transform duration-300"
          src="/hindi.png"
          width="500"
          height="500"
          alt="hindi"
        />
        <Image
          className=" hover:scale-110 transition-transform duration-300"
          src="/picture.png"
          width="360"
          height="360"
          alt="pic"
        />
        <Image
          className="h-[280px] w-[320px]  hover:scale-110 transition-transform duration-300"
          src="/dignosis.png"
          width="300"
          height="310"
          alt="diagnosis"
        />
        <Image
          className=" hover:scale-110 transition-transform duration-300"
          src="/effect.png"
          width="305"
          height="305"
          alt="effect"
        />
        <Image
          className=" hover:scale-110 transition-transform duration-300"
          src="/medicine.png"
          width="305"
          height="305"
          alt="medicine"
        />
        <Image
          className=" hover:scale-110 transition-transform duration-300"
          src="/tretment.png"
          width="305"
          height="305"
          alt="tretment"
        />
        <Image
          className=" hover:scale-110 transition-transform duration-300"
          src="/deep.png"
          width="305"
          height="305"
          alt="deep"
        />
      </div>
    </div>
  );
};

export default Consultation;
