"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { ourClientsData } from "../../data/Data";
import UnderlinedHeading from "../UnderLine";

export default function OurClients() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const controls = useAnimationControls();

  // Calculate the width of all items to determine animation distance
  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }

    // Start the animation
    controls.start({
      x: -width,
      transition: {
        ease: "linear",
        duration: 200,
        repeat: Infinity,
        repeatType: "loop"
      }
    });
  }, [width, controls]);

  return (
    <div>
      <div className="pt-10 ">
        <div className="flex justify-center items-center py-10 max-md:py-5 text-para">
          <UnderlinedHeading headingText="Our Clients" />
        </div>
      </div>

      <div className="text-center py-10  px-20 max-md:px-10 relative overflow-hidden">
        <div className="overflow-hidden w-full h-[20vh]" ref={carousel}>
          <motion.div
            className="flex gap-8 md:gap-20"
            animate={controls}
          >
            {/* First set of logos */}
            {ourClientsData.map((client, index) => (
              <div
                key={`first-${index}`}
                className="w-28 md:w-[15vw] h-24 md:h-[18vh] p-4 md:p-10 rounded-xl shadow-md overflow-hidden flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {ourClientsData.map((client, index) => (
              <div
                key={`second-${index}`}
                className="w-28 md:w-[15vw] h-24 md:h-[18vh] p-4 md:p-10 rounded-xl shadow-md overflow-hidden flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}