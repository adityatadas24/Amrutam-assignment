import Image from 'next/image'
import React from 'react'

export const Contact = () => {
  return (
    <div className='flex justify-center items-center w-full gap-8 flex-col mt-20 pt-14 bg-[#fff7e2] max-sm:pb-10'>
        <div className='flex justify-start items-start w-10/12 gap-4 flex-col'>
            <h1 className="text-[#3a643b] text-5xl font-bold max-sm:text-3xl">Amrutam Home App</h1>
            <p className='text-[16px] text-gray-400 w-1/2 max-sm:w-full max-sm:text-center '>The Amrutam Home App is your one-stop app for all things Ayurveda! Apart from mimicking the significant characteristics of our website, this app offers a wide range of additional features.</p>
        </div>
        <div className='flex justify-center items-start w-10/12 gap-8 max-sm:flex-col max-sm:items-start'>
            <div className='flex justify-start items-start w-full gap-8 flex-col'>
                <h3 className='text-3xl font-semibold w-11/12 max-sm:text-xl max-sm:text-center'>Get a diet & lifestyle consultation with ayurvedic experts across the globe </h3>
                <h1 className='text-lg font-extrabold max-sm:text-3xl max-sm:w-full'>Get The App Now</h1>
                <div className='flex justify-start items-start w-full gap-4 max-sm:flex-col'>
                    <Image className='hover:scale-110 transition-transform duration-300 cursor-pointer '  src='/googe-play.png' width='200' height='200' alt='google' />
                    <Image className='hover:scale-110 transition-transform duration-300 cursor-pointer' src='/app-store.png' width='200' height='200' alt='store' />
                    
                </div>
            </div>
            <div className='relative bottom-32 w-full max-md:bottom-0'>
            <Image className='hover:scale-110 transition-transform duration-300 cursor-pointer' src='/mobile-pic.png' width='900' height='900' alt='mobile' />

            </div>
        </div>
    </div>
  )
}
