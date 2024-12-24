import Image from 'next/image'
import React from 'react'

export const Experts = () => {
  return (
    <div className='flex justify-center items-center w-full h-full gap-10 flex-col mb-10'>
        <h1 className="text-5xl text-[#355d36] text-center font-bold max-sm:text-3xl">Meet Our Ayurvedic Experts</h1>
        <div className='overflow-x-auto whitespace-nowrap flex flex-row gap-6 md:justify-center md:items-center md:flex-wrap max-md:w-11/12 scrollbar-hide'>
            <Image className='max-sm:w-[440px] h-[440px] ' src='/experts.png' width='300' height='300' alt='expert' />
            <Image className='max-sm:w-[440px] h-[440px]' src='/experts.png' width='300' height='300' alt='expert' />
            <Image className='max-sm:w-[440px] h-[440px]' src='/experts.png' width='300' height='300' alt='expert' />

        </div>

        <button className='border-2 border-gray-400 font-medium px-4 text-green-800 p-4 rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer'>Find more experts {">"}</button>
    </div>
  )
}
