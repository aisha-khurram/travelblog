'use client';

import  Header  from '../Components/Header';
import Footer from '../Components/Footer';
import { useState } from 'react';

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#B1F0F7] via-[#81BFDA] to-[#F5F0CD]">
            <Header />
            
            {/* Hero Section */}
            <section className="pt-20 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Have questions about our destinations? Want to plan your next adventure? 
                        We'd love to hear from you and help make your travel dreams come true.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81BFDA] focus:border-transparent transition-all duration-200"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81BFDA] focus:border-transparent transition-all duration-200"
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81BFDA] focus:border-transparent transition-all duration-200"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="trip-planning">Trip Planning</option>
                                        <option value="destination-info">Destination Information</option>
                                        <option value="partnership">Partnership Opportunity</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#81BFDA] focus:border-transparent transition-all duration-200 resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#81BFDA] hover:bg-[#B1F0F7] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information + Address + Map */}
                        <div className="space-y-8">
                            {/* Contact Information */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-[#FADA7A] rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Email</h4>
                                            <p className="text-gray-600">hello@travelblog.com</p>
                                            <p className="text-gray-600">support@travelblog.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-[#81BFDA] rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Phone</h4>
                                            <p className="text-gray-600">+1 (555) 123-4567</p>
                                            <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-[#B1F0F7] rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Office</h4>
                                            <p className="text-gray-600">123 Travel Street</p>
                                            <p className="text-gray-600">Adventure City, AC 12345</p>
                                            <p className="text-gray-600">United States</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Physical Address */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Physical Address</h3>
                                <p className="text-gray-700">TravelBlog HQ</p>
                                <p className="text-gray-700">123 Travel Street</p>
                                <p className="text-gray-700">Adventure City, AC 12345</p>
                                <p className="text-gray-700">United States</p>
                            </div>

                            {/* Embedded Google Map */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg overflow-hidden">
                                <iframe
                                    title="TravelBlog Office Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509616!2d144.95373631590403!3d-37.81627974202126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778c1f0a4c6c0!2sVictoria%20State%20Library!5e0!3m2!1sen!2s!4v1614644827083!5m2!1sen!2s"
                                    width="100%"
                                    height="320"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

