import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center w-full h-[60vh] bg-[#dce3dc] gap-5 flex-col max-sm:h-[100vh] max-sm:pt-24 max-sm:pb-24">
      
      <div className="flex justify-start items-start flex-col max-sm:block max-sm:w-[70%]">
        <h3 className="text-green-800 text-start py-2 font-semibold">Get in touch</h3>
        <p>support@amrutam.co.in</p>
        <p className="py-2">Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001</p>
        <p>+91 9713171999</p>
        <Image className="py-2"  src='/media.png' width='300' height='300' alt='media' />
        
      </div>

      <ul className="text-gray-500">
        <li className="text-xl text-black font-bold pb-2">Information</li>
        <li>About Us</li>
        <li>Terms and Conditions</li>
        <li>Privacy Policy</li>
        <li>Privacy Policy for Mobile Apps</li>
        <li>Shipping and Returns Policy </li>
        <li>International Delivery</li>
        <li>For Businesses, Hotels and Resorts</li>
      </ul>

      <div className="flex justify-start items-start flex-col  max-sm:block max-sm:w-[70%]">
        <h3 className="text-green-800 text-start font-semibold py-3">Subscribe to our 
          Newsletter and join Amrutam Family today!</h3>
          <div className="flex justify-start items-center border-2 border-black rounded-full">
            <input className="bg-transparent placeholder:text-black" type="text" placeholder="Your Email Address" />
            <button className="bg-black p-2 text-white rounded-e-full">Subscribe</button>
          </div>
      </div>
    </div>
  );
};

export default Footer;
