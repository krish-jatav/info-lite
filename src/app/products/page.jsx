import Category from "../components/category/Category";
import ContactUs from "../components/contactUs/ContactUs";
import { CtaSection } from "../components/CtaSection";
import ProductCard from "../components/productCards/ProductCards";
import SearchInput from "../components/SearchInput";
import { Testimonials } from "../components/Testimonials";
import UnderlinedHeading from "../components/UnderLine";
import { productImg } from "../data/Data";

export default function ProductsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full   ">
        <img
          src="productss.png"
          alt="Products Hero"
          className=" inset-0 w-full max-h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-[#000000c0] bg-opacity-10" />
        <div className="absolute inset-0 flex flex-col leading- items-center justify-center text-center px-4 md:px-16">
         <div className="text-Skyy py-2 ">
          <UnderlinedHeading headingText="Products"></UnderlinedHeading>  
         </div>
          <p className="max-md:text-sm text-[1rem] text-[#FFF]">
           Smart. Sleek. Built to Illuminate Innovation
          </p>   
          {/* <p className="text-base md:text-[1rem] text-white">
            Discover next-gen systems built for performance
          </p> */}
        </div>
      </div>

      {/* Main Content */}
      <div className=" mx-auto px-20 max-md:px-10 py-12">
        {/* Intro Text */}
        <div className=" mb-12">
          <p className=" max-md:text-sm text-[1.5rem] text-center text-para max-w-4xl mx-auto">
            Explore advanced technology and audiovisual solutions that elevate security, efficiency, and user experience.
          </p>
        </div>

        {/* Products Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar - Search and Categories */}
          <div className="w-full md:w-1/4 lg:w-1/5">
            <div className="sticky top-0">
              <div className="mb-6">
                <SearchInput />
              </div>
              <Category />
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productImg.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Testimonials></Testimonials>
      <CtaSection></CtaSection>
      <ContactUs></ContactUs>
    </div>
  );
}