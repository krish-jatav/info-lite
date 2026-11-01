"use client"

import React, { useState, useEffect } from 'react'
import UnderlinedHeading from './UnderLine'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md"

// Import Swiper components and required modules
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const Testimonials = () => {
  const testimonials = [
    {
      text: "InfoLite transformed our operations with their innovative solutions. Their team's expertise and dedication made the entire process seamless. We've seen a significant improvement in efficiency since implementation.",
      name: "Sarah Johnson",
      position: "CTO, TechVision Inc."
    },
    {
      text: "Working with InfoLite has been a game-changer for our business. Their support team is always available, and the solutions they've implemented have helped us stay ahead of the competition.",
      name: "Robert Chen",
      position: "CEO, GlobalTech Solutions"
    },
    {
      text: "The custom software InfoLite built for us perfectly addressed our unique challenges. Their attention to detail and commitment to quality exceeded our expectations.",
      name: "Michael Torres",
      position: "Operations Director, Nexus Enterprises"
    },
    {
      text: "InfoLite's team understood our requirements perfectly from day one. Their technical knowledge combined with business acumen delivered exactly what we needed.",
      name: "Jennifer Williams",
      position: "Project Manager, Innovate Systems"
    },
    {
      text: "InfoLite transformed our operations with their innovative solutions. Their team's expertise and dedication made the entire process seamless. We've seen a significant improvement in efficiency since implementation.",
      name: "Sarah Johnson",
      position: "CTO, TechVision Inc."
    },
    {
      text: "Working with InfoLite has been a game-changer for our business. Their support team is always available, and the solutions they've implemented have helped us stay ahead of the competition.",
      name: "Robert Chen",
      position: "CEO, GlobalTech Solutions"
    },
    {
      text: "The custom software InfoLite built for us perfectly addressed our unique challenges. Their attention to detail and commitment to quality exceeded our expectations.",
      name: "Michael Torres",
      position: "Operations Director, "
    },
    {
      text: "InfoLite's team understood our requirements perfectly from day one. Their technical knowledge combined with business acumen delivered exactly what we needed.",
      name: "Jennifer Williams",
      position: "Project Manager, Innovate Systems"
    }
  ];

  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isHovering, setIsHovering] = useState(false);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(2);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };
    
    // Set initial value
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div >
      <div className="md:px-20 px-10">
        <div className="flex justify-center items-center   text-para">
          <UnderlinedHeading headingText="What Our Clients Say"></UnderlinedHeading>
        </div>
        
        <div 
          className="relative" 
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={slidesPerView}
            navigation={{
              nextEl: '.swiper-button-next-1',
              prevEl: '.swiper-button-prev-2',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="px-4 py-10">
                  <div className="bg-white p-3 md:p-6 lg:p-8  border-l-2 rounded-lg shadow-lg border-sky-500 max-md:h-[25vh] ">
                    <p className="text-sm md:text-base text-gray-600 italic mb-4 md:mb-6">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-300 mr-3 md:mr-4"></div>
                      <div>
                        <h4 className="font-bold text-sm md:text-base">{testimonial.name}</h4>
                        <p className="text-xs md:text-sm  text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom navigation buttons - only visible on hover */}
          <button 
            className={`swiper-button-prev-2 absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none z-10 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
            aria-label="Previous testimonial"
          >
            <MdOutlineArrowBackIos size={20} />
          </button>
          
          <button 
            className={`swiper-button-next-1 absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none z-10 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
            aria-label="Next testimonial"
          >
            <MdOutlineArrowForwardIos size={20} />
          </button>
          
          {/* Custom pagination dots */}
          <div className="swiper-pagination flex justify-center mt-6  space-x-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;