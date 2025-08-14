"use client"
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FaFacebookMessenger, FaBars, FaTimes } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiOutlinePinterest } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { useRouter } from 'next/navigation';

// Header Component
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-[#81BFDA]/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-orange-500">
                            TravelBlog
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-[#FADA7A] font-medium transition-colors duration-200">
                            Home
                        </Link>
                        <Link href="/aboutUs" className="text-gray-700 hover:text-[#FADA7A] font-medium transition-colors duration-200">
                            About Us
                        </Link>
                        <Link href="/contactUs" className="text-gray-700 hover:text-[#FADA7A] font-medium transition-colors duration-200">
                            Contact Us
                        </Link>
                        <Link href="/policies" className="text-gray-700 hover:text-[#FADA7A] font-medium transition-colors duration-200">
                            Policies
                        </Link>
                    </nav>

                    {/* Social Media Icons - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                            <FaFacebookMessenger className="text-xl" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors duration-200">
                            <FaInstagramSquare className="text-xl" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-200">
                            <AiOutlinePinterest className="text-xl" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-200">
                            <BiLogoGmail className="text-xl" />
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-orange-500 focus:outline-none focus:text-orange-500"
                        >
                            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden border-t border-gray-100 bg-[#81BFDA]">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link 
                                href="/" 
                                className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link 
                                href="/aboutUs" 
                                className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link 
                                href="/contactUs" 
                                className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </Link>
                            <Link 
                                href="/policies" 
                                className="block px-3 py-2 text-gray-700 hover:text-orange-500 font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                Policies
                            </Link>
                        </div>
                        
                        {/* Mobile Social Media Icons */}
                        <div className="flex items-center justify-center space-x-6 py-3 border-t border-gray-100">
                            <a href="#" className="text-gray-600 hover:text-blue-600">
                                <FaFacebookMessenger className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-pink-600">
                                <FaInstagramSquare className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-red-600">
                                <AiOutlinePinterest className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-red-500">
                                <BiLogoGmail className="text-xl" />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}