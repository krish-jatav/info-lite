"use client";

import { GoArrowUpRight } from "react-icons/go";
import { Button } from "../components/Button";
import { ServiceCard } from "../components/services/ServiceCard";
import { aboutData } from "../data/Data";
import ContactUs from "../components/contactUs/ContactUs";
import { FaPuzzlePiece, FaRocket, FaHeadphonesAlt, FaExpandAlt, FaLock, FaUsers, FaAward, FaHistory } from 'react-icons/fa';
import { TbRotate360 } from 'react-icons/tb';
import OurMission from "../components/ourMission/OurMission";
import { Testimonials } from "../components/Testimonials";
import { CtaSection } from "../components/CtaSection";
import UnderlinedHeading from "../components/UnderLine";

export default function AboutUsPage() {
  // Enhanced features with descriptions
  const features = [
    { 
      icon: <TbRotate360 size={40} className="text-sky-600" />, 
      title: '360° Solution',
      description: 'End-to-end solutions that cover all aspects of your IT needs'
    },
    { 
      icon: <FaPuzzlePiece size={40} className="text-sky-600" />, 
      title: 'Retrofit',
      description: 'Seamlessly integrate our solutions with your existing infrastructure'
    },
    { 
      icon: <FaExpandAlt size={40} className="text-sky-600" />, 
      title: 'Scalable',
      description: 'Our solutions grow with your business, from startup to enterprise'
    },
    { 
      icon: <FaRocket size={40} className="text-sky-600" />, 
      title: 'Innovation & Research',
      description: 'Continuously advancing our solutions through cutting-edge research'
    },
    { 
      icon: <FaLock size={40} className="text-sky-600" />, 
      title: 'Secure & Encrypted',
      description: 'Enterprise-grade security to protect your sensitive data'
    },
    { 
      icon: <FaHeadphonesAlt size={40} className="text-sky-600" />, 
      title: '24/7 Support',
      description: 'Always available technical support whenever you need assistance'
    },
  ];

  // Company stats
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Clients Worldwide" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Customer Support" },
  ];

  // Team members
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    },
    {
      name: "John Smith",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    },
    {
      name: "Emily Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    },
    {
      name: "Michael Johnson",
      role: "Customer Success Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  // Company timeline
  const timeline = [
    { year: "2013", event: "InfoLite founded with a vision to revolutionize IT solutions" },
    { year: "2016", event: "Expanded services to include cloud infrastructure solutions" },
    { year: "2019", event: "Launched our proprietary security framework" },
    { year: "2021", event: "Reached milestone of 300+ global clients" },
    { year: "2024", event: "Introduced AI-powered analytics platform" }
  ];

  return (
    <div className="w-full relative h-full">
      {/* Hero Section - Enhanced with overlay gradient and animated text */}
      <div className="relative w-full bg-black">
        <img
          src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About Us Hero"
          className="inset-0 w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00000080] to-[#000000c0]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-16">
          <h1 className="text-white max-md:text-[2rem] md:text-3xl font-bold mb-4 animate-fade-in">
            
            <UnderlinedHeading headingText="About InfoLite"></UnderlinedHeading>
          </h1>
          
          <p className="text-white  animate-fade-in-delay">
            Transforming businesses through innovative technology solutions
          </p>
        </div>
      </div>

      {/* Company Introduction */}
      <div className="container mx-auto px-10 md:px-20 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-6">
              {aboutData.para3 || "Founded in 2013, InfoLite has been at the forefront of technological innovation, delivering cutting-edge solutions to businesses worldwide. Our team of dedicated experts combines deep technical knowledge with creative problem-solving to help organizations thrive in the digital age."}
            </p>
            <p className="text-lg text-gray-700">
              We believe in building long-term relationships with our clients through transparency, reliability, and exceptional service. Our solutions are designed not just to meet today's challenges but to anticipate tomorrow's opportunities.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-sky-100 rounded-lg rotate-3"></div>
              <img 
                src="aboutt2.jpg" 
                alt="About InfoLite" 
                className="relative rounded-lg shadow-xl w-full h-auto z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-sky-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Mission Component */}
      <OurMission />

      {/* Our Journey/Timeline */}
   

      {/* Core Values */}
      <div className="bg-sky-50 py-16">
        <div className="container mx-auto px-10 md:px-20">
          <h2 className="text-3xl md:text-4xl text-para font-bold mb-6 text-center">Our Core Values</h2>
          <p className="text-lg text-center max-w-3xl text-para mx-auto mb-12">
            At InfoLite, our values guide every decision we make and every solution we deliver.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers size={32} className="text-sky-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Client-Centered</h3>
              <p className="text-gray-600">We prioritize our clients' needs in everything we do, ensuring solutions that truly make a difference.</p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward size={32} className="text-sky-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every project, delivering high-quality solutions that exceed expectations.</p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHistory size={32} className="text-sky-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">We embrace change and continuously innovate to stay ahead of industry trends and technologies.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="container mx-auto text-para px-10 md:px-20 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6  text-center">Meet Our Leadership</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Our talented team brings together decades of industry experience with fresh, innovative perspectives.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button label="Join Our Team" icon={<GoArrowUpRight />} />
        </div>
      </div>

      {/* Why Choose InfoLite - Enhanced features section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-10 md:px-20">
          <h2 className="text-3xl md:text-4xl text-para font-bold mb-6 text-center">Why Choose InfoLite?</h2>
          <p className="text-lg text-center max-w-3xl text-para mx-auto mb-12">
            InfoLite offers reliable, customized solutions backed by ongoing support and maintenance. We focus on quality, long-term performance, and dedicated customer service to meet your unique needs.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white text-para rounded-lg flex flex-col justify-center items-center p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6 text-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions We Provide - Commented out but kept for reference
      <div className="py-16">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Solutions We Provide</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            {aboutData.solutionPara || "We offer comprehensive solutions tailored to meet diverse industry needs, combining cutting-edge technology with expert implementation."}
          </p>
          <ServiceCard count={3} />
          <div className="text-center mt-12">
            <Button label="View All Services" icon={<GoArrowUpRight />} />
          </div>
        </div>
      </div>
      */}

      {/* Testimonials */}
     <Testimonials></Testimonials>
     <CtaSection></CtaSection>

      {/* Enhanced Contact Section */}
      <ContactUs heading="Get In Touch With Us" />

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          opacity: 0;
          animation: fadeIn 0.6s ease-out 0.3s forwards;
        }
      `}</style>
    </div>
  );
}