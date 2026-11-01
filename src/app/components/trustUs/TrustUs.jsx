
"use client";
import React, { useState } from 'react';
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { GrUserSettings } from "react-icons/gr";
import { GiNetworkBars } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import UnderlinedHeading from '../UnderLine';
import { Button } from '../Button';
import { GoArrowUpRight } from 'react-icons/go';

export default function TrustUs() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    { 
      icon: <LiaHandsHelpingSolid size={45} />, 
      title: "Reliability", 
      description: "We deliver consistent results you can count on, time after time."
    },
    { 
      icon: <GrUserSettings size={45} />, 
      title: "Tailored Solutions", 
      description: "Custom strategies designed specifically for your unique business needs."
    },
    { 
      icon: <GiNetworkBars size={45} />, 
      title: "Expertise", 
      description: "Backed by years of industry experience and technical knowledge."
    },
    { 
      icon: <BiSupport size={45} />, 
      title: "Customer Support", 
      description: "24/7 assistance from our dedicated support team whenever you need help."
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className=" mx-auto px-20 max-md:px-10">
        {/* Section Title */}
       

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - Value Proposition */}
          <div className="lg:w-1/2 space-y-6">

           <div className="flex flex-col w-fit">
          <h2 className="inline-block text-sm font-semibold text-Skyy tracking-wider uppercase mb-2">Why Choose Us</h2>
          <UnderlinedHeading headingText="Why Leading Brands Trust us?"></UnderlinedHeading>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>
            <div>
              <p className="text-xl leading-relaxed text-gray-300">
              Leading brands trust InfoLite for our unwavering commitment to innovation,
              precision, and service. We deliver tailored solutions that not only meet today's
              needs but anticipate tomorrow's challenges — ensuring our clients stay ahead in
              a fast-moving world.
            </p>
            </div>
            
            <div className="flex space-x-4 ">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-[#F2F2F2] bg-opacity-20">
                <span className="text-2xl   text-[#242323] font-bold">97%</span>
              </div>
              <div>
                <p className="font-medium text-lg">Client Satisfaction Rate</p>
                <p className="text-gray-400">Based on customer feedback</p>
              </div>

             
            </div>
               {/* <button className=" px-8 py-3 bg-[#F2F2F2] hover:bg-cyan-600 text-[#242323] rounded-lg font-medium transition-all duration-300">
            
            </button> */}
            <Button label="  Learn More About Our Approach" icon={<GoArrowUpRight></GoArrowUpRight>}></Button>
          
          </div>

          {/* Right Side - Features */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`text-cyan-400 mb-4 transform transition-transform duration-300 ${hoveredIndex === index ? 'scale-110' : ''}`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

    
      </div>
    </div>
  );
}