import { useState } from 'react';
import { Testimonials } from '../Testimonials';
import { CtaSection } from '../CtaSection';
import ContactUs from '../contactUs/ContactUs';
import UnderlinedHeading from '../UnderLine';

// ProductReview component for displaying product information
export default function ProductViewSection({ 
  productName = "iLite Pro Max Panel",
  tagline = "Experience the Future of Smart Living",
  description = "A next-generation smart control solution designed to seamlessly connect, control, and elevate every aspect of your home or commercial space. With its elegant design, cutting-edge technology, and intuitive user interface, it transforms the way you interact with your environment—bringing unmatched convenience, efficiency, and style.",
  image = "/product-image.jpg",
  features = [
    { title: "Elegant Touch Interface", description: "" },
    { title: "Centralized Smart Control", description: "" },
    { title: "Customizable Modes", description: "" },
    { title: "Energy Efficiency", description: "" },
    { title: "Seamless Integration", description: "" },
    { title: "Secure & Reliable", description: "" }
  ],
  specs = [
    { 
      category: "Display", 
      details: "Capacitive multi-touch screen, full HD resolution" 
    },
    { 
      category: "Connectivity", 
      details: "Wi-Fi, Zigbee, Z-Wave, Bluetooth, Ethernet" 
    },
    { 
      category: "Power Supply", 
      details: "Low-voltage operation with battery backup" 
    },
    { 
      category: "Dimensions", 
      details: "Sleek profile with wall-mount or table-top options" 
    },
    { 
      category: "Compatibility", 
      details: "Works with Alexa, Google Assistant, Apple HomeKit, and more" 
    }
  ]
}) {
  const [expandedSpec, setExpandedSpec] = useState(null);

  // Function to toggle expanded spec on mobile
  const toggleSpec = (index) => {
    if (expandedSpec === index) {
      setExpandedSpec(null);
    } else {
      setExpandedSpec(index);
    }
  };

  // Function to get first letter for colorful spec icons
  const getFirstLetter = (text) => text.charAt(0);

  return (
    <div className=" mx-auto  py-8 bg-white rounded-lg shadow-sm">
      {/* Product Header */}
      <div className="mb-8 px-20 max-md:px-10">
        <h2 className="text-lg font-medium text-Skyy mb-2">{tagline}</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{productName}</h1>
            <p className="text-gray-600 text-justify leading-relaxed">{description}</p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-full max-w-xs">
              <img 
                src="promax.png" 
                alt={productName} 
                className="w-full h-auto object-contain rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-12 px-20 max-md:px-10">
        <h2 className="text-xl font-bold text-gray-800  border-gray-200 pb-2 mb-6">
         <UnderlinedHeading  headingText=" Key Features"></UnderlinedHeading>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-800">{feature.title}</h3>
              {feature.description && (
                <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications */}
      <div>
        <h2 className="text-xl font-bold text-gray-800  border-gray-200 pb-2 mb-6 px-20 max-md:px-10">
          <UnderlinedHeading headingText=" Technical Specifications"></UnderlinedHeading>
        </h2>
        
        {/* Desktop view - table layout */}
        <div className="hidden md:grid grid-cols-3 gap-6 px-20 max-md:px-10">
          {specs.map((spec, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mb-3 bg-Skyy`}>
                {getFirstLetter(spec.category)}
              </div>
              <h3 className="font-medium text-gray-800 mb-2">{spec.category}</h3>
              <p className="text-sm text-gray-600">{spec.details}</p>
            </div>
          ))}
        </div>
        
        {/* Mobile view - accordion style */}
        <div className="md:hidden space-y-3 px-20 max-md:px-10">
          {specs.map((spec, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button 
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                onClick={() => toggleSpec(index)}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white font-bold mr-3 bg-blue-500`}>
                    {getFirstLetter(spec.category)}
                  </div>
                  <span className="font-medium">{spec.category}</span>
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform ${expandedSpec === index ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSpec === index && (
                <div className="px-4 pb-4 pt-1">
                  <p className="text-sm text-gray-600">{spec.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Testimonials></Testimonials>
      <CtaSection></CtaSection>
      <ContactUs></ContactUs>

    </div>
  );
}