
"use client"
import { useState } from 'react';
import UnderlinedHeading from '../UnderLine';
import Link from 'next/link';
import { Button } from '../Button';
import { GoArrowUpRight } from 'react-icons/go';
// import { ArrowRight } from 'lucide-react';

const OurMission = () => {
  const [hoverMission, setHoverMission] = useState(false);
  const [hoverVision, setHoverVision] = useState(false);
  
  return (
    <section className="py-20 px-10 md:px-20 bg-white">
      <div className="">
        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* Mission Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-sky-100 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-Skyy rounded-full mr-2"></span>
              <p className="text-sm text-Skyy  font-semibold">ABOUT US</p>
            </div>
            <h2 className="text-4xl  max-md:text-[1.5rem] font-bold text-gray-900 leading-tight">
              Our <span className="text-Skyy">Mission</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
             At InfoLite, we don’t just deliver technology — we build the future with you. Our mission is to empower businesses with cutting-edge solutions that make life simpler, safer, and more connected. Every system we craft is tailored to your unique vision
            </p>
          

                <Link href="/about">

              <Button label="Learn More" icon={<GoArrowUpRight></GoArrowUpRight>}></Button>
             </Link>
          </div>

          {/* Mission Image */}
          <div className="w-full transform transition-all duration-500 hover:scale-105">
            <div className="relative rounded-2xl overflow-hidden shadow-md">
              <img
                src="mission2.jpg"
                alt="Our Mission"
                className="w-full object-cover h-full"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div> */}
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Vision Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md transform transition hover:scale-105 duration-300">
              <img
                src="mission4.png"
                alt="Vision Image 1"
                className="w-full h-full p-1 rounded-3xl object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md transform transition hover:scale-105 duration-300">
              <img
                src="mission5.png"
                alt="Vision Image 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden shadow-md transform transition hover:scale-105 duration-300 mt-4">
              <img
                src="vision.png"
                alt="Vision Image 3"
                className="w-full  object-cover"
              />
            </div>
          </div>

          {/* Vision Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-sky-100 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-Skyy rounded-full mr-2"></span>
              <p className="text-sm text-Skyy font-semibold">WHAT WE DO</p>
            </div>
            <h2 className="text-4xl  max-md:text-[1.5rem] font-bold text-gray-900 leading-tight">
              Our <span className="text-Skyy">Vision</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
             At InfoLite, our vision is to drive innovation that transforms lives and businesses. We aim to be a global leader in delivering intelligent, future-ready solutions that foster growth, enhance experiences, and shape a smarter, more connected world.
            </p>
           
             <Link href="/about">

              <Button label="Learn More" icon={<GoArrowUpRight></GoArrowUpRight>}></Button>
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;