"use client";
import { useState } from 'react';
import {  MdLocationOn, MdMail, MdOutlinePhoneEnabled, MdPhone } from "react-icons/md";
import UnderlinedHeading from '../UnderLine';
import { Button } from '../Button';

export default function ContactUs({ para1}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact:'',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
     if (!formData.contact.trim()) newErrors.contact = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'message is required';
    
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '', contact:'' });
        setTimeout(() => setSubmitSuccess(false), 3000);
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
    

      <div className=" mx-auto px-20 max-md:px-10 py-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-5">
            <div>
              <p className='text-xl font-medium text-para '>{para1}</p>
              
            <div className='text-para'>
               <UnderlinedHeading headingText="Contact Us"></UnderlinedHeading>
            </div>
              {/* <p className='text-xl font-medium text-[#43b0ce] '>{para2}</p> */}
              <p className="text-para  text-[1.2rem] pt-5 max-md:text-[1rem]">
              Let’s bring your vision to life. Reach out to our
               team — we’re here to answer your questions, explore your ideas,
               and craft solutions tailored just for you. We can’t wait to hear from you!
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                <MdPhone></MdPhone>
                </div>
                <div className="ml-3">
                  <p className="text-para">+971 55 573 2379</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                    <MdMail></MdMail>
                </div>
                <div className="ml-3">
                  <p className="text-para">sales@info-lite.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                <MdLocationOn></MdLocationOn>
                </div>
                <div className="ml-3">
                  <p className="text-para">
                    Office 17B- Block C VL08 SRTI Park<br />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white w-full rounded-lg  p-1 flex justify-center items-center py-5">
            <form onSubmit={handleSubmit} className="space-y-5 w-full  max-md:px-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Enter your name'
                  className={`w-full placeholder-[#bdb9b9] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='Enter a valid email address'
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full placeholder-[#bdb9b9] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

                 <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="contact"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder='Enter your phone number'
                  className={`w-full placeholder-[#bdb9b9] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                    errors.contact ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.contact && (
                  <p className="mt-1 text-sm text-red-500">{errors.contact}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  className={`w-full placeholder-[#bdb9b9] px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <div>
            <Button label="Submit" className='px-6'>
                  <button
                  type="submit"
                  disabled={isSubmitting}
                  className=" "
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </Button>
                {submitSuccess && (
                  <p className="mt-2 text-sm text-green-600">
                    Your message has been sent successfully!
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}