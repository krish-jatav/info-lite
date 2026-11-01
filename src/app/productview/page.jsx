"use client"

import ProductViewSection from "../components/productviewSection/ProductViewSection";
import UnderlinedHeading from "../components/UnderLine";



export default function ProductView() {
  return (
    <div>
    <div className="relative w-full   bg-black">
        <img
          src="productss.png"
          alt="Products Hero"
          className=" inset-0 w-full max-h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-[#000000c0] bg-opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-16">
          {/* <h1 className="text-white max-md:text-[1.5rem] md:text-5xl font-bold ">
            Products View
          </h1>    */}
         <span className="text-Skyy py-2 ">
           <UnderlinedHeading headingText="Products View"></UnderlinedHeading>
         </span>
        
        </div>
      </div>
      <div>
        <ProductViewSection></ProductViewSection>
      </div>
    </div>
  );
}