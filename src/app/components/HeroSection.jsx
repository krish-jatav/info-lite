import Link from "next/link";
import { IoArrowDownCircle, IoArrowForwardCircle } from "react-icons/io5";
import { Button } from "./Button";

export default function HeroSection() {
  return (
    <div className="relative max-md:h-[90vh] h-[80vh] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black to-[#41b1cd2d] z-10"
          aria-hidden="true"
        />
        <img
          src="https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Background Sky"
          className="h-full w-full object-cover"
        />
      </div>



      <div className="relative z-20 flex flex-col justify-center px-6 md:px-12 lg:px-4 h-full max-w-7xl mx-auto">
        <div className="max-w-7xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Where <span className='text-sky-500'>Innovation</span> Meets Elegance Technology That Transforms
          </h1>

          <p className="text-white/90 text-lg md:text-xl mb-12 max-w-lg">
           Experience technology designed to inspire — sleek, smart, and built to transform the way you live, work, and connect.
          </p>

          <div className="flex gap-4">
          
            <Button label="Start a project" icon={<IoArrowForwardCircle size={20}></IoArrowForwardCircle>}>

            </Button>
            <Link href="/service">
            {/* ll */}
            
            <Button label="Our Services" icon={<IoArrowDownCircle size={20}></IoArrowDownCircle>}></Button>
            </Link>
            
          
          </div>
        </div>
      </div>
    </div>
  );
}