'use client';
import { useState } from 'react';
import { Button } from '../Button';
import Link from 'next/link';
import { BiArrowToRight } from 'react-icons/bi';
import { MdOutlineArrowForward } from 'react-icons/md';

// ProductCard Component
export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="max-w-xs   rounded-lg overflow-hidden shadow-lg bg-[#F9FAFB] transition-all duration-300 hover:shadow-xl py-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative  p-2 overflow-hidden">
        <img 
          src={product.img} 
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
      </div>

    <div className='flex flex-col justify-center items-center'>
    <h1 className="text-center py-4 text-lg font-semibold text-gray-700">{product.name}</h1>
      <Link href="/productview">
      <Button label="Review" icon={<MdOutlineArrowForward></MdOutlineArrowForward>} >

      </Button></Link>
    </div>
      <div>
        {/* <p>{product.description}</p> */}
      </div>
    </div>
  );
}
