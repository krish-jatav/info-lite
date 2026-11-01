"use client";
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Button } from './Button';
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';

// Minimalist Card Component that matches the provided design
export const HomeServicesCard = ({ 
  id , 
  title, 
  description,
  Img
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-lg p-6 shadow-lg border-l-3 border-Skyy transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top number indicator with circle icon */}
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full mr-2 flex-shrink-0 overflow-hidden">
          <img 
            className='h-full w-full object-cover' 
            src={Img} 
            alt={title} 
          />
        </div>
        <div className="w-full h-px bg-gray-200"></div>
        <span className="text-gray-400 text-xl ml-2">{id}</span>
      </div>
      
      {/* Content */}
      <div className="mb-6">
        <h3 className="text-xl text-para  font-bold mb-2">{title}</h3>
        <p className="text-para   text-sm">{description}</p>
      </div>
      
      {/* CTA Button */}
     
      <Link className='text-sm' href="/service">
      <Button label="Read More" icon={<GoArrowUpRight></GoArrowUpRight>}></Button>
      </Link>
    </div>
  );
};

