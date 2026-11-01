"use client"
import { useState, useEffect } from 'react';
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { motion } from 'framer-motion';

export default function SlideShowCarousel  ({ slides = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Auto-advance slides every 5 seconds
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentIndex, isAutoPlaying]);
  
  // Pause autoplay when user interacts
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    // Resume after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };
  
  const nextSlide = () => {
    pauseAutoPlay();
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    pauseAutoPlay();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  
  const goToSlide = (index) => {
    pauseAutoPlay();
    setCurrentIndex(index);
  };
  
  // If no slides, return nothing
  if (!slides.length) return null;
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentIndex === index ? 1 : 0,
              zIndex: currentIndex === index ? 10 : 0,
            }}
            transition={{ duration: 0.7 }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="absolute top-0 left-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-[#00000084] bg-opacity-40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-16 text-center">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: currentIndex === index ? 0 : 20, opacity: currentIndex === index ? 1 : 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-white text-[3rem] max-md:text-[2rem] max-md:font-medium font-bold mb-4"
              >
                {slide.title}
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: currentIndex === index ? 0 : 20, opacity: currentIndex === index ? 1 : 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-white text-base md:text-xl max-w-3xl mb-8"
              >
                {slide.description}
              </motion.p>
              {slide.button && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: currentIndex === index ? 0 : 20, opacity: currentIndex === index ? 1 : 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  {slide.button}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Controls */}
      <div className="absolute z-20 bottom-10 left-0 right-0 flex justify-center items-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
   
    </div>
  );
};
