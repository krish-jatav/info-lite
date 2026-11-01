"use client";
import React from 'react';

const UnderlinedHeading = ({ headingText, tag: Tag = 'h1' }) => {
  return (
    <div className="inline-block relative text-left max-md:text-center">
      <Tag className="inline-block text-3xl  max-md:text-[1.5rem] font-bold leading-16 max-md:leading-10 max-md:py-2">
        {headingText}
      </Tag>
      <div className="absolute left-0 -bottom-1 w-full h-[4px]  bg-[#43B0CE] rounded-md max-md:mx-auto" />
    </div>
  );
};

export default UnderlinedHeading;
