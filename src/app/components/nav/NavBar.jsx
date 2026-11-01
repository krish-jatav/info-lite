"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect, useRef } from 'react'
import { RiCloseLargeFill, RiMenu2Fill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

export default function NavBar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const mobileMenuRef = useRef(null)
  const mobileMenuButtonRef = useRef(null)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Add shadow when scrolled
      if (currentScrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setVisible(false)
      } else {
        // Scrolling up or at top
        setVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close mobile menu if click is outside the menu and not on the menu toggle button
      if (
        mobileMenuOpen &&
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false)
      }
    }

    // Add event listener when mobile menu is open
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    
    // Clean up event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileMenuOpen])

  // Navigation links
  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Products", href: "/products" },
    { text: "Services", href: "/service" },
    { text: "Resources & Catalogs", href: "/resources" },
    { text: "About us", href: "/about" },
    { text: "Contact us", href: "/contact" }
  ]

  return (
    <div 
      className={`sticky top-0 z-50 w-full bg-white transition-transform duration-300 ${
        scrolled ? 'shadow-md' : ''
      } ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Top bar with contact info */}
      <div className='px-10 max-md:px-4 max-md:py-4'>
        <div className='flex justify-between items-center'>
            {/* Mobile Navigation Button */}
            <div className='md:hidden'>
              <button
                ref={mobileMenuButtonRef}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className='p-2 cursor-pointer focus:outline-none'
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <RiCloseLargeFill size={24} />
                ) : (
                  <RiMenu2Fill size={24} />
                )}
              </button>
            </div>
          <Link href="/" className='flex items-center'>
            <img className='w-20 md:w-28 p-1' src="logo-r.png" alt="Logo" />
          </Link>
           
          <div className='flex items-center gap-4'>
            <span className='text-sm md:text-base text-para md:flex justify-center items-center gap-2 hidden sm:block'> <span><MdEmail size={20}></MdEmail></span> sales@info-lite.com</span>
            <span className='text-sm md:text-base text-para md:flex justify-center items-center gap-2 hidden sm:block'> <span><FaPhone size={18}></FaPhone></span> +971 55 573 2379</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='flex items-center'>
              <FaLinkedin color='#41B2CD' size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className='border-t max-md:hidden border-gray-200 max-md:px-4'>
        <div className='px-10 py-3'>
          <div className='flex justify-end items-center'>
            {/* Desktop Navigation */}
            <div className='hidden md:flex gap-10'>
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href
                return (
                  <Link 
                    key={index} 
                    href={link.href} 
                    className={`hover:text-Skyy transition-colors relative`}
                  >
                    <span className={`font-medium text-base lg:text-lg ${isActive ? 'text-Skyy' : ''}`}>
                      {link.text}
                    </span>
                    {isActive && (
                      <span className="absolute bottom-2 left-0 w-full h-0.5 bg-Skyy -mb-3"></span>
                    )}
                  </Link>
                )
              })}
            </div>      
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          ref={mobileMenuRef} 
          className='md:hidden bg-white shadow-lg absolute w-full'
        >
          <div className='container mx-auto'>
            <div className='flex flex-col py-3 px-4 space-y-3'>
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href
                return (
                  <Link 
                    key={index} 
                    href={link.href}
                    className={`py-2 px-2 rounded transition-colors ${
                      isActive ? 'bg-gray-100 border-l-4 border-Skyy' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className={`font-medium ${isActive ? 'text-Skyy' : ''}`}>
                      {link.text}
                    </span>
                  </Link>
                )
              })}
              
              {/* Mobile contact info */}
              <div className='pt-2 border-t border-gray-200 mt-2'>
                <p className='text-sm py-1 flex items-center gap-2'><span><MdEmail size={15}></MdEmail></span>sales@info-lite.com</p>
                <p className='text-sm py-1 flex items-center gap-2'><span><FaPhone size={15}></FaPhone></span>+971 55 573 2379</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}