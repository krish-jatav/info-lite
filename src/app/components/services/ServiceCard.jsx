"use client";

import { useState, useEffect } from 'react';
import { GoArrowDown, GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { Button } from "../Button"; // Assuming this exists in your project structure
import { ourServicesData } from '../../data/Data';
import UnderlinedHeading from '../UnderLine';
import { BiArrowToRight } from 'react-icons/bi';

export const ServiceCard = ({ count }) => {

  
  const [activeCard, setActiveCard] = useState(null);
  const [isHovering, setIsHovering] = useState({});
  
  // Determine how many cards to show
  const servicesToShow = count ? ourServicesData.slice(0, count) : ourServicesData;

  return (
    <div className="px-20 max-md:px-5 py-10 bg-gray-50">
      <div className="mb-8 flex flex-col items-center">
        {/* <div className='py-5 text-para'>
          <UnderlinedHeading headingText=" Our Services" />
        </div> */}
        
        <p className="text-[1.2rem] max-md:text-[1rem] text-gray-600 text-center">
          We provide smart, reliable solutions that connect and simplify your world. From <br className="hidden md:block" /> automation to security, we make technology work beautifully for you.
        </p>
      </div>
   <Link href="/contact" className=' flex justify-center items-center pb-10'>
       <Button label="Start A Project" icon={<GoArrowUpRight></GoArrowUpRight>}>


      </Button>
   </Link>
      
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesToShow.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden ${activeCard === item.id ? 'scale-105 shadow-xl z-10' : ''}`}
              onMouseEnter={() => {
                setActiveCard(item.id);
                setIsHovering({...isHovering, [item.id]: true});
              }}
              onMouseLeave={() => {
                setActiveCard(null);
                setIsHovering({...isHovering, [item.id]: false});
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={item.Img}
                  alt={item.title}
                  className={`object-cover w-full h-full transform transition-transform duration-700 ${isHovering[item.id] ? 'scale-110' : 'scale-100'}`}
                />
              </div>
              
              {item.tags && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 flex-grow mb-4">{item.description}</p>
              
              {/* <Link href={`/services/${item.id}`} className="flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors mt-auto group">
                Learn More 
                <GoArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
