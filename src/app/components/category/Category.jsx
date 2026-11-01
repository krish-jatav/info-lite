"use client";

import { useState, useRef, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";

const Category = () => {
  // Initialize with only one category expanded
  const [expandedCategory, setExpandedCategory] = useState('Smart Control Systems');
  const contentRefs = useRef({});

  const categoryData = {
    'Smart Control Systems': [
      'iLite Pro Touch Panels',
      'iLite Pro Touch Panels',
      'iLite Pro Touch Panels',
    ],
    'Security & Access Solutions': [
      'Access Control Systems',
      'Access Control Systems',
      'Access Control Systems',
    ],
    'Hospitality Automation': [
      'Hotel Room Management',
      'Hotel Room Management',
      'Hotel Room Management',
    ],
    'Audiovisual Solutions': [
      'Conference Room Systems',
      'Conference Room Systems',
      'Conference Room Systems',
    ],
    'Home Automation': [
      'Residential Control Systems',
      'Conference Room Systems',
      'Conference Room Systems',
    ],
    'Security and Surveillance': [
      'CCTV Systems',
      'CCTV Systems',
      'CCTV Systems',
    ],
    'Network Infrastructure Solutions': [
      'Structured Cabling',
    ],
    'Information & Communication Technology (ICT) Solutions': [
      'Enterprise IT Solutions',
    ],
  };

  const toggleCategory = (category) => {
    // If clicking on the already expanded category, close it
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      // Otherwise, expand the clicked category (and auto-close the previous one)
      setExpandedCategory(category);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm">
      {Object.keys(categoryData).map((category) => (
        <div key={category} className="border-b border-gray-200 last:border-b-0">
          <button
            className="flex justify-between cursor-pointer items-center w-full px-4 py-3 text-left focus:outline-none transition-all duration-300 hover:bg-gray-50"
            onClick={() => toggleCategory(category)}
          >
            <span className="text-Skyy font-medium">{category}</span>
            <div className={`transform transition-transform duration-300 ${expandedCategory === category ? 'rotate-180' : 'rotate-0'}`}>
              <IoChevronDownOutline />
            </div>
          </button>

          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedCategory === category ? 'max-h-96' : 'max-h-0'}`}
            ref={el => contentRefs.current[category] = el}
          >
            <div className="px-4 pb-3">
              {categoryData[category].map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="py-2 pl-4 cursor-pointer hover:bg-gray-50 flex items-center text-para"
                >
                  <span className="mr-2 text-gray-400"><FaCircle size={5} /></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;