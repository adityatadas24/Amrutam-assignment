import Image from "next/image";
import React from "react";

export const Discover = () => {
  return (
    <div className="flex justify-start items-center w-full mt-20 flex-col gap-8 mb-10">
      <div className="flex justify-center items-center w-1/2 flex-col gap-6 max-sm:w-full">
        <h1 className="text-[#3a643b] text-4xl font-bold text-center max-sm:w-11/12 max-sm:text-3xl">
          Discover Ayurveda's Magic With Us
        </h1>
        <p className="text-[#809e80] w-[70%] text-center max-sm:w-11/12">
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony and vitality. It's like a journey to better health using
          ancient wisdom, a totally effective approach for a better life.{" "}
        </p>

        <div className="justify-center items-center flex-col w-10/12
         hover:scale-110 transition-transform duration-300 hidden cursor-pointer max-sm:block">
        <Image src="/meditation.png" width="500" height="500" alt="heart" />

        </div>
      </div>

      <div className="flex justify-evenly items-center w-full">

        <div className="flex justify-center items-center flex-col w-full gap-24 max-sm:gap-4">

          <div className="flex justify-end items-center w-full gap-3 hover:scale-105
           transition-transform duration-300 max-sm:flex-col  max-sm:border-4 max-sm:p-2 max-sm:h-[230px] max-sm:w-11/12">
                        <Image className="hidden max-sm:block" src="/wellness.png" width="80" height="80" alt="heart" />

            <div className="w-[37%] text-right max-sm:w-full">
              <h3 className=" text-[16px] font-bold mb-1 max-sm:w-full max-sm:text-center max-sm:text-sm">
                Personalized Wellness
              </h3>
              <p className="text-gray-400 text-[12px] text-right font-semibold max-sm:w-full max-sm:text-center">
                Get tretment made just for you based on your induvisual doshas
                [body type]
              </p>
            </div>
            <Image className=" max-sm:hidden" src="/wellness.png" width="80" height="80" alt="heart" />
          </div>

          <div className="flex justify-center items-center w-full gap-3 ml-24 max-sm:ml-0  hover:scale-105
           transition-transform duration-300 max-sm:flex-col
            max-sm:border-4 max-sm:p-2 max-sm:h-[230px] max-sm:w-11/12">
                <Image className="hidden max-sm:block" src="/focus.png" width="80" height="80" alt="focus" />

            <div className="w-[37%] text-right max-sm:w-full">
              <h3 className=" text-[16px] font-bold mb-1 max-sm:w-full max-sm:text-center max-sm:text-sm">
                Focus on prevention
              </h3>
              <p className="text-gray-400 text-[12px] text-right font-semibold max-sm:w-full max-sm:text-center">
                Stop problems even before they start.
              </p>
            </div>
            <Image className=" max-sm:hidden" src="/focus.png" width="80" height="80" alt="focus" />
          </div>

          <div className="flex justify-end items-center w-full gap-3  hover:scale-105 transition-transform duration-300
           max-sm:border-4 max-sm:p-2 max-sm:h-[230px] max-sm:w-11/12 max-sm:flex-col">
                        <Image className="hidden max-sm:block" src="/mind-body.png" width="70" height="70" alt="mind" />

            <div className="w-[37%] text-right max-sm:w-full">
              <h3 className="text-[#3a643b] text-[16px] font-bold mb-1 max-sm:w-full max-sm:text-center max-sm:text-sm">
                Mind-Body Connection
              </h3>
              <p className="text-gray-400 text-[12px] text-right font-semibold max-sm:w-full max-sm:text-center">
                Keep your mind and body in sync for a happy life.
              </p>
            </div>
            <Image className=" max-sm:hidden" src="/mind-body.png" width="70" height="70" alt="mind" />
          </div>

        </div>

        <div className="flex justify-center items-center flex-col w-full
         hover:scale-110 transition-transform duration-300 cursor-pointer max-sm:hidden">
        <Image src="/meditation.png" width="500" height="500" alt="heart" />

        </div>

        <div className="flex justify-center items-center flex-col w-full gap-24 max-sm:gap-4">
          <div className="flex justify-start items-center w-full gap-3  hover:scale-105
           transition-transform duration-300 max-sm:flex-col max-sm:border-4  max-sm:w-11/12 max-sm:p-4 max-sm:h-[230px]">
          <Image src="/healing.png" width="80" height="80" alt="heart" />

            <div className="w-[37%] text-left max-sm:w-full">
              <h3 className=" text-[16px] font-bold mb-1 max-sm:w-full max-sm:text-center max-sm:text-sm">
                Holistic Healing
              </h3>
              <p className="text-gray-400 text-[12px] text-left font-semibold max-sm:w-full max-sm:text-center">
                Fix the root problem for long-lasting health.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center w-full mr-20 max-sm:mr-0 gap-3 
           hover:scale-105 transition-transform duration-300  max-sm:w-11/12
           max-sm:flex-col max-sm:border-4 max-sm:p-4 max-sm:h-[230px]">
          <Image src="/ayurveda.png" width="80" height="80" alt="heart" />

            <div className="w-[37%] text-left max-sm:w-full">
              <h3 className=" text-[16px] font-bold mb-1 max-sm:w-full max-sm:text-center max-sm:text-sm">
                Natural Remedies
              </h3>
              <p className="text-gray-400 text-[12px] text-left font-semibold max-sm:w-full max-sm:text-center">
                Using herbs and natural therapies for healing.
              </p>
            </div>
          </div>

          <div className="flex justify-start items-center w-full gap-3 
           hover:scale-105 transition-transform duration-300  max-sm:w-11/12
           max-sm:flex-col max-sm:border-4 max-sm:p-4 max-sm:h-[230px]">
          <Image src="/boosting.png" width="80" height="80" alt="boost" />

            <div className="w-[37%] text-left max-sm:w-full">
              <h3 className=" text-[16px] font-bold mb-1 max-sm:w-full max-sm:text-center max-sm:text-sm">
                Boosting immunity
              </h3>
              <p className="text-gray-400 text-[12px] text-left font-semibold max-sm:w-full max-sm:text-center">
               Stay strong and unhealthy for life. not ust for today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
