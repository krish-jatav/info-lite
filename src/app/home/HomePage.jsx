import { Button } from '../components/Button';
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { ServiceCard } from '../components/services/ServiceCard';
import { GoArrowUpRight } from "react-icons/go";
import OurMission from '../components/ourMission/OurMission';
import ContactUs from '../../app/components/contactUs/ContactUs';
import Link from 'next/link';
import OurClients from '../components/ourClient/OurClients';
import UnderlinedHeading from '../components/UnderLine';
import TrustUs from '../components/trustUs/TrustUs';
import { Testimonials } from '../components/Testimonials';
import { CtaSection } from '../components/CtaSection';
import HeroSection from '../components/HeroSection';
import { HomeServicesCard } from '../components/HomeServicesCard';
// import SlideShowCarousel  from '../components/SlideShow';
// import { BiArrowBack } from 'react-icons/bi';
import { ourServicesData } from '../data/Data';

export default function HomePage() {
  // const heroSlides = [
  //   {
  //     image: "modern.png",
  //     title: (
  //       <>
  //         Where <span className="text-[#2395b4]">Innovation</span> Meets Elegance Technology That Transforms
  //       </>
  //     ),
  //     button: (
  //       <Button
  //         label="Contact Us"
  //         icon={<MdOutlinePhoneEnabled />}
  //       />
  //     ),
  //   },
  //   {
  //     image: "servicess.png",
  //     title: (
  //       <>
  //         Where <span className="text-[#2395b4]">Innovation</span> Meets Elegance Technology That Transforms
  //       </>
  //     ),
  //     button: (
  //       <Button
  //         label="Contact Us"
  //         icon={<MdOutlinePhoneEnabled />}
  //       />
  //     ),
  //   },
  //   {
  //     image: "servicess.png",
  //     title: (
  //       <>
  //         Where <span className="text-[#2395b4]">Innovation</span> Meets Elegance Technology That Transforms
  //       </>
  //     ),
  //     button: (
  //       <Button
  //         label="Contact Us"
  //         icon={<MdOutlinePhoneEnabled />}
  //       />
  //     ),
  //   },
  // ];
  

  return (
    <div className="w-full relative h-full">
       {/* <div className=" relative w-full h-full max-md:h-full bg-black">
        <img
          src="modern.png"
          alt="aboutUs"
          className="w-full h-[90vh] max-md:h-auto object-cover"
        />
        <div className="absolute inset-0 bg-[#00000016] bg-opacity-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-16 text-center">
          <h2 className="text-white text-[3rem] max-md:text-[1rem]  font-bold mb-4">
           Where <span className='text-sky-500'>Innovation</span> Meets Elegance Technology That Transforms
          </h2>   
           <Button
            label="Contact Us"
            icon={<MdOutlinePhoneEnabled />}
            className=" bg-[#ffff]  text-white font-bold py-2 px-4 rounded"    ></Button>
        </div>
      </div> */}
      <HeroSection></HeroSection>

       <OurMission></OurMission>

      <div className='max-md:flex  max-md:flex-col max-md:px-10 py-10 pt-4   justify-center items-center  w-full'>
      
        <div className=' text-para  flex justify-center items-center  mx-auto'>
          <UnderlinedHeading headingText="Explore Our Services" />
        </div>
        <div className=' text-center flex justify-center items-center mx-auto'>
          <p className='max-md:text-sm max-w-7xl text-2xl max-md:text-justify text-para py-5 leading-relaxed  '>InfoLite empowers businesses with cutting-edge ICT solutions, from structured cabling and networks to unified communications, cybersecurity, and IT infrastructure. We deliver reliable, scalable, and secure systems that seamlessly connect and drive digital transformation in a rapidly evolving world.</p>
        </div>
      
      </div>
       <div className="container mx-auto md:px-20 px-10  ">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {ourServicesData.map((item, index) => (
               <HomeServicesCard
               key={index}
                 id={index + 1}
                 Img={item.Img}
                 title={item.title}
                 description={item.description}
               />
             ))}
           </div>
         </div>
  <Link href="service" className=' flex justify-center items-center py-10 '>
          <Button label="View Services" icon={<GoArrowUpRight></GoArrowUpRight>}></Button>
        </Link>
      <div>
        {/* <ServiceCard count={9}></ServiceCard> */}
        {/* <div className='flex justify-center py-5'>
          <Link href="">
            <Button
              label="Explore More"
              icon={<GoArrowUpRight />}
            />
          </Link>
        </div> */}
      </div>
<TrustUs></TrustUs>
      <div>
        <OurClients></OurClients>
      </div>
      
     <Testimonials></Testimonials>
     <CtaSection></CtaSection>
      <ContactUs heading="Contact Us"></ContactUs>
    </div>
  )
}