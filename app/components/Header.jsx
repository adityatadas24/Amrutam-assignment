import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className="fixed z-10 w-full bg-[#fff7e2] p-4 flex">
            <Image className='hidden max-sm:block' src='/burger.png' width='30' height='30' alt='logo' />

            <Image src='/logo.png' width='100' height='100' alt='logo' />
        </div>
    )
}

export default Header