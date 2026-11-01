import ContactUs from "../components/contactUs/ContactUs";
import { CtaSection } from "../components/CtaSection";
import { Testimonials } from "../components/Testimonials";
import UnderlinedHeading from "../components/UnderLine";

export default function ContactPage() {
  return (
    <div>
        <div className="relative w-full   ">
               <img
                 src="productss.png"
                 alt="Products Hero"
                 className=" inset-0 w-full max-h-[50vh] object-cover"
               />
               <div className="absolute inset-0 bg-[#000000c0] bg-opacity-10" />
               <div className="absolute inset-0 flex flex-col leading- items-center justify-center text-center px-4 md:px-16">
                <div className="text-Skyy py-2 ">
                 <UnderlinedHeading headingText="Let’s Innovate Together"></UnderlinedHeading>  
                </div>
              <p className="text-white ">We're here to help. Reach out for support, inquiries, or collaborations.</p>
               </div>
             </div>
    <ContactUs></ContactUs> 
    </div>
  );
}