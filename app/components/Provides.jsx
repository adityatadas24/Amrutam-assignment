import Image from 'next/image'
import React from 'react'

const Provides = () => {
  return (
    <div className='flex justify-center items-center w-full p-8 bg-[#fff7e2] text-[#3a643b] font-bold'>
      <div className='flex justify-start items-center w-11/12 gap-6 max-sm:flex-col max-sm:w-full'>
        <div className='flex justify-center items-center w-1/4 gap-1 text-[17px] max-sm:w-full'>
            <Image src='/message.png' width='140' height='140' alt='msg' />
            <p>Convenient Online & In-Clinic Consultations</p>
        </div>
        <div className='flex justify-center items-center w-1/4 gap-1 text-[17px] max-sm:w-full'>
            <Image src='/safe.png' width='100' height='100' alt='safe' />
            <p>Safe And Effective Treatment</p>
        </div>
        <div className='flex justify-center items-center w-1/4 gap-1 text-[17px] max-sm:w-full'>
            <Image src='/img-2.png' width='120' height='120' alt='imgs' />
            <p>Experienced Ayurvedic Practitioners</p>
        </div>
        <div className='flex justify-center items-center w-1/4 gap-1 text-[17px] max-sm:w-full' >
            <Image src='/plans.png' width='140' height='140' alt='plan' />
            <p>Personalished Treatment Plans & Guidance</p>
        </div>
      </div>
    </div>
  )
}

export default Provides
