import { FaArrowRight } from 'react-icons/fa'
import { Button } from './Button'
import Link from 'next/link'

export const CtaSection = () => {
  return (
   <div className='px-20 py-10 max-md:px-10'>
     <div className="w-full bg-[#182232] rounded-xl overflow-hidden p-8 md:p-10  relative">
      {/* Subtle gradient decoration in corner */}
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <path
            d="M0,100 L100,0 L100,100 L0,100 Z"
            fill="url(#grad1)"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4BB1D6" />
              <stop offset="100%" stopColor="#4BB1D6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          <span className="text-gray-200"><span className='text-Skyy'>Infolite</span> Ready to Elevate </span>
          <span className="text-Skyy">Your Space </span>
          {/* <span className="text-gray-200"> Helped </span> */}
          <span className="text-Skyy">with Smart Technology?</span>
        </h1>
        
        <h2 className="text-xl md:text-3xl font-bold text-gray-200 mb-6">
         Let’s build smarter, safer, and more connected spaces — together.
        </h2>
        
        <p className="text-gray-400 mb-8">
        Let our experts tailor a solution that fits your vision.
        </p>
        
        {/* Arrow decoration */}
        <div className="hidden md:block absolute bottom-8 right-48 opacity-50">
          <svg width="150" height="50" viewBox="0 0 150 50">
            <path 
              d="M0,25 L140,25 M130,15 L140,25 L130,35" 
              stroke="rgba(255,255,255,0.3)" 
              strokeWidth="2" 
              fill="none" 
            />
          </svg>
        </div>
        
        <div className="flex justify-start">
         <Link href="/contact">
          <button className=" cursor-pointer bg-transparent hover:bg-gray-800 text-Skyy font-medium py-2 px-5 rounded-full border border-Skyy transition-all duration-300 flex items-center">
            Get In Touch
            <FaArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300"></FaArrowRight>
          </button>
         </Link>
        </div>
      </div>
    </div>
   </div>
  )
}
