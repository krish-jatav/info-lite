import ContactUs from "../components/contactUs/ContactUs";
import { CtaSection } from "../components/CtaSection";
import { ServiceCard } from "../components/services/ServiceCard";
import { Testimonials } from "../components/Testimonials";
import UnderlinedHeading from "../components/UnderLine";

export default function ServicePage() {
  return (
    <div>
      <div className=''>
 <div className="relative w-full   ">
        <img
          src="productss.png"
          alt="Products Hero"
          className=" inset-0 w-full max-h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-[#000000c0] bg-opacity-10" />
        <div className="absolute inset-0 flex flex-col leading- items-center justify-center text-center px-4 md:px-16">
         <div className="text-Skyy py-2 ">
          <UnderlinedHeading headingText="Our Services"></UnderlinedHeading>  
         </div>
          <p className="max-md:text-sm text-[1rem] text-[#FFF]">
            Technology that Works Harder
          </p>   
          {/* <p className="text-base md:text-[1rem] text-white">
            Discover next-gen systems built for performance
          </p> */}
        </div>
      </div>
        <div>
          {/* <ServiceCard></ServiceCard> */}
      <div className="">
            <ServiceCard></ServiceCard>
      </div>
      <Testimonials></Testimonials>
      <CtaSection></CtaSection>
      <ContactUs></ContactUs>
        </div>
      </div>
    </div>
  )
}
