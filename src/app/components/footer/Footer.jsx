"use client"

import Link from 'next/link';
// import { Heart, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 text-Skyy py-10 px-6 md:px-10 lg:px-20">
      <div className="">
        {/* Top Section with Logo and Navigation */}
       
        
        {/* Nav Pills */}
        <div className=" border-t-2 py-10 max-md:py-5  flex max-md:flex-col justify-center items-center  border-gray-300">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 ">
          {/* Logo and Description */}
          <div className="md:col-span-4  ">
            <div className=" max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
              <img src="logo-r.png" alt="Infolite Logo" className="w-32 " />
              <p className="text-sm text-gray-600 max-w-sm max-md:text-justify py-2">
                Empowering businesses with innovative technology solutions to drive growth and efficiency in the digital landscape.
              </p>
            </div>
            
    
          </div>
          
        </div>
          <div className="flex flex-wrap gap-3 text-para">
            <Link href="/" className="px-5 py-2 bg-white rounded-full text-sm border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition duration-200">Home</Link>
            <Link href="/products" className="px-5 py-2 bg-white rounded-full text-sm border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition duration-200">Products</Link>
            <Link href="#" className="px-5 py-2 bg-white rounded-full text-sm border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition duration-200">Resource & Catalogue</Link>
            <Link href="service" className="px-5 py-2 bg-white rounded-full text-sm border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition duration-200">Services</Link>
            <Link href="about" className="px-5 py-2 bg-white rounded-full text-sm border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition duration-200">About Us</Link>
              <Link href="contact" className="px-5 py-2 bg-white rounded-full text-sm border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition duration-200">Contact Us</Link>
            <Link href="#" className="px-5 py-2 bg-white rounded-full text-sm border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition duration-200">Privacy Policy</Link>
            <Link href="#" className="px-5 py-2 bg-white rounded-full text-sm border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition duration-200">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className=" mx-auto border-t-2 pt-2 border-gray-300 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm  text-gray-600">
          © 2025 Infolite. All rights reserved.
        </div>
        
        <div className="text-sm text-gray-600 flex items-center">
          <span >Designed By </span>
          {/* <Heart size={14} className="mx-1 text-red-500" /> */}
          <Link href="https://www.webseeder.in/" className="ml-1 text-sky-500 ">
            WebSeeder Technologies
          </Link>
        </div>
      </div>
    </footer>
  );
}