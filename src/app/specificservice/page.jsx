"use client";

import { useState, useEffect } from "react";
import ContactUs from "../components/contactUs/ContactUs";
import ProductCard from "../components/productCards/ProductCards";
import { productImg } from "../data/Data";
import { Testimonials } from "../components/Testimonials";
import { CtaSection } from "../components/CtaSection";

export default function SpecificServicePage() {
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect on scroll
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-animate');
      
      scrollElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animate-in');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="">
      {/* Hero Section - Enhanced with overlay gradient and animated text */}
      <div className="relative w-full h-[50vh] bg-black overflow-hidden">
        <img
          src="servicess.png"
          alt="Home Automation Hero"
          className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00000090] to-[#00000070]" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-20 max-md:px-10">
          <h1 
            className={`text-white max-md:text-3xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Home Automation System
          </h1>
          
          <p 
            className={`text-gray-100 text-xl max-w-2xl transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Transform your home into an intelligent living space
          </p>
          
          <button className="mt-8 px-8 py-3 bg-[#43b0ce] hover:bg-[#3599b5] text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Explore Solutions
          </button>
        </div>
      </div>

      {/* Value Proposition - New section */}
      <div className="bg-white py-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-gray-700 text-center font-light leading-relaxed scroll-animate">
            Infolite's Home Automation Systems redefine the way you live — blending 
            <span className="text-[#43b0ce] font-medium"> comfort</span>, 
            <span className="text-[#43b0ce] font-medium"> convenience</span>, and 
            <span className="text-[#43b0ce] font-medium"> complete control</span> into every corner of your home.
          </h2>
        </div>
      </div>

      {/* Feature Highlights - New section */}
      <div className="py-8  px-20 max-md:px-10 bg-gray-50">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🔆",
              title: "Smart Lighting",
              description: "Customize your lighting scenes for any mood or occasion"
            },
            {
              icon: "🔒",
              title: "Home Security",
              description: "Monitor and control your home security from anywhere"
            },
            {
              icon: "🌡️",
              title: "Climate Control",
              description: "Perfect temperature all year round with intelligent systems"
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 scroll-animate"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content - Enhanced with better alignment and visual hierarchy */}
      <div className="flex flex-col md:flex-row justify-between  mx-auto h-full w-full gap-10  px-20 max-md:px-10 py-16">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center scroll-animate">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Intelligent Living at Your Fingertips</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            From smart lighting and climate control to security, entertainment, and shading, our solutions put your entire home at your fingertips — whether through sleek touch panels, your smartphone, or just your voice.
          </p>
          <div className="h-1 w-20 bg-[#43b0ce] my-6"></div>
          <p className="text-gray-700 text-lg leading-relaxed">
            With Infolite, you don't just automate your home — you transform it into a living, responsive space that adapts to you. Experience the future of personalized, energy-efficient, and intelligent living, designed to make every day smoother, safer, and more enjoyable.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-2 border-2 border-[#43b0ce] text-[#43b0ce] hover:bg-[#43b0ce] hover:text-white rounded-md transition-colors duration-300">
              Learn More
            </button>
            <button className="px-6 py-2 bg-gray-800 text-white hover:bg-gray-700 rounded-md transition-colors duration-300">
              Schedule Demo
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center scroll-animate">
          <div className="relative p-4 rounded-lg">
            <div className="absolute inset-0 bg-[#43b0ce] opacity-10 rounded-3xl transform rotate-3"></div>
            <img 
              className="relative max-w-full h-[60vh] rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-700" 
              src="/phonewithKitchen.png" 
              alt="Smart Home Control" 
            />
          </div>
        </div>
      </div>

      {/* Products Section - Enhanced with better spacing and animations */}
      <div className="  px-20 max-md:px-10 py-16 bg-white">
        <div className=" mx-auto">
          <div className="flex items-center gap-4 mb-12 scroll-animate">
            <h2 className="text-4xl font-bold">Our <span className="text-[#43b0ce]">Products</span></h2>
            <div className="h-px bg-gray-300 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productImg.map((product, index) => (
              <div key={index} className="scroll-animate" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section - New section */}
     <Testimonials></Testimonials>
     <CtaSection></CtaSection>

      {/* Contact Section */}
      <div className="scroll-animate">
        <ContactUs 
          para1="Interested in Our Home Automation System?" 
          para2="Let's Connect"
        />
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}