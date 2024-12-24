import React from "react";

const Stories = () => {
  return (
    <div
      className="flex justify-center items-center w-full flex-col gap-10
     bg-[#fff7e2] mt-14 pt-16 mb-16 pb-16"
    >
      <h1 className="text-5xl text-[#355d36] text-center font-bold pb-10 max-sm:text-3xl">
        {" "}
        Stories from our values coustomers!
      </h1>
      <div className="w-full max-md:w-11/12 overflow-x-auto whitespace-nowrap flex gap-6 md:justify-center md:items-center md:flex-wrap scrollbar-hide">
        <div className="flex justify-start items-start flex-col gap-2 bg-white w-[28%] rounded-xl shadow-md pb-6 max-sm:w-11/12 whitespace-normal">
          <p className="font-semibold bg-violet-200 p-2 w-full rounded-t-xl">
            Consulted for skin
          </p>
          <div className="flex justify-start items-start p-2 gap-4">
            <p className="w-14 h-14 bg-gray-600 rounded-[50%]"></p>
            <div className="mr-20">
              <p className="font-bold">Sophie Moore</p>
              <p className="text-sm text-gray-500">Chennai</p>
            </div>
            <p className="text-gray-500">17/02/24</p>
          </div>
          <div className="px-4">
            <p className="text-start">⭐⭐⭐⭐⭐</p>
            <p className="font-bold text-lg text-start">
              "One of a kind service"
            </p>
            <p className="text-start pb-4 text-gray-600 leading-relaxed w-3/4">
              Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
              diam sit amet nisi suscipit adipis.
            </p>
          </div>
        </div>

        <div className="flex justify-start items-start flex-col gap-2 bg-white w-[28%] rounded-xl shadow-md pb-6 max-sm:w-11/12 whitespace-normal">
          <p className="font-semibold bg-violet-200 p-2 w-full rounded-t-xl">
            Consulted for skin
          </p>
          <div className="flex justify-start items-start p-2 gap-4">
            <p className="w-14 h-14 bg-gray-600 rounded-[50%]"></p>
            <div className="mr-20">
              <p className="font-bold">Sophie Moore</p>
              <p className="text-sm text-gray-500">Chennai</p>
            </div>
            <p className="text-gray-500">17/02/24</p>
          </div>
          <div className="px-4">
            <p className="text-start">⭐⭐⭐⭐⭐</p>
            <p className="font-bold text-lg text-start">
              "One of a kind service"
            </p>
            <p className="text-start pb-4 text-gray-600 leading-relaxed w-3/4">
              Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
              diam sit amet nisi suscipit adipis.
            </p>
          </div>
        </div>

        <div className="flex justify-start items-start flex-col gap-2 bg-white w-[28%] rounded-xl shadow-md pb-6 max-sm:w-11/12 whitespace-normal">
          <p className="font-semibold bg-violet-200 p-2 w-full rounded-t-xl">
            Consulted for skin
          </p>
          <div className="flex justify-start items-start p-2 gap-4">
            <p className="w-14 h-14 bg-gray-600 rounded-[50%]"></p>
            <div className="mr-20">
              <p className="font-bold">Sophie Moore</p>
              <p className="text-sm text-gray-500">Chennai</p>
            </div>
            <p className="text-gray-500">17/02/24</p>
          </div>
          <div className="px-4">
            <p className="text-start">⭐⭐⭐⭐⭐</p>
            <p className="font-bold text-lg text-start">
              "One of a kind service"
            </p>
            <p className="text-start pb-4 text-gray-600 leading-relaxed w-3/4">
              Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
              diam sit amet nisi suscipit adipis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
