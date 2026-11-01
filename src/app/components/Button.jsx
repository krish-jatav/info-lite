import React from 'react';

export const Button = ({ label, icon, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center cursor-pointer shadow-md gap-2 px-4 py-2  rounded-3xl border-1 border-[#43B0CE] ${className}`}
    >
      <span className='text-[#43B0CE] max-md:text-sm font-semibold'>{label}</span>
      {icon && <span className='text-[#43B0CE]'>{icon}</span>}
    </button>
  );
};
