'use client';

import  Header  from '../Components/Header';
import Footer from '../Components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPage() {
    const teamMembers = [
        {
            name: 'Sarah Johnson',
            role: 'Founder & CEO',
            image: '/emp2.jpg',
            bio: 'A passionate traveler with over 15 years of experience exploring the world. Sarah founded TravelBlog to share authentic travel experiences and help others discover amazing destinations.',
            expertise: ['Travel Planning', 'Cultural Immersion', 'Adventure Travel']
        },
        {
            name: 'Michael Chen',
            role: 'Travel Photographer',
            image: '/emp.jpg',
            bio: 'Professional photographer capturing the world\'s most beautiful moments. Michael\'s stunning images bring destinations to life and inspire wanderlust in our readers.',
            expertise: ['Photography', 'Visual Storytelling', 'Destination Coverage']
        },
        {
            name: 'Emma Rodriguez',
            role: 'Content Director',
            image: '/emp3.jpg',
            bio: 'Experienced travel writer and editor who crafts compelling stories about destinations, cultures, and experiences. Emma ensures every piece of content is engaging and informative.',
            expertise: ['Travel Writing', 'Content Strategy', 'Cultural Research']
        },
        {
            name: 'David Kim',
            role: 'Travel Consultant',
            image: '/emp1.jpg',
            bio: 'Former tour guide and travel expert who provides insider knowledge and practical advice. David helps readers plan their perfect trips with local insights and tips.',
            expertise: ['Trip Planning', 'Local Knowledge', 'Budget Travel']
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#B1F0F7] via-[#81BFDA] to-[#F5F0CD]">
            <Header />
            
            {/* Hero Section */}
            <section className="pt-20 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6">
                        About TravelBlog
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We're passionate travelers dedicated to sharing authentic experiences, 
                        inspiring adventures, and helping you discover the world's most amazing destinations.
                    </p>
                </div>
            </section>

            {/* Company Information */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Founded in 2018, TravelBlog began as a simple passion project by a group of friends 
                                    who wanted to share their travel experiences with the world. What started as a small 
                                    blog has grown into a comprehensive travel resource trusted by thousands of travelers.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    We believe that travel is more than just visiting new places – it's about immersing 
                                    yourself in different cultures, creating meaningful connections, and growing as a person. 
                                    Our mission is to inspire and empower you to explore the world with confidence and curiosity.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Today, we're proud to have helped countless travelers plan their dream vacations, 
                                    discover hidden gems, and create unforgettable memories around the globe.
                                </p>
                            </div>
                            <div className="relative h-96 rounded-xl overflow-hidden">
                                <Image
                                    src="/team.jpg"
                                    alt="TravelBlog team exploring the world"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-[#FADA7A] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-center">
                                To inspire and empower travelers to explore the world authentically, 
                                providing reliable information, insider tips, and genuine experiences 
                                that make every journey meaningful and memorable.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-[#81BFDA] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-center">
                                To become the world's most trusted and inspiring travel community, 
                                where every traveler can find authentic experiences, connect with 
                                like-minded adventurers, and discover their next great adventure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The passionate individuals behind TravelBlog who make your travel dreams come true
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                                    <p className="text-[#81BFDA] font-semibold mb-3">{member.role}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                                    
                                    <div className="space-y-2">
                                        <h4 className="text-sm font-semibold text-gray-700">Expertise:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {member.expertise.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="bg-[#FADA7A] text-gray-800 text-xs px-2 py-1 rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#FADA7A] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Authenticity</h3>
                            <p className="text-gray-600">
                                We believe in sharing real, honest experiences and genuine recommendations 
                                that you can trust for your own adventures.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#81BFDA] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Passion</h3>
                            <p className="text-gray-600">
                                Our love for travel drives everything we do, from the destinations 
                                we feature to the stories we share with our community.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#B1F0F7] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
                            <p className="text-gray-600">
                                We're building a global community of travelers who support, 
                                inspire, and learn from each other's experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Journey?</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Join our community of passionate travelers and discover your next adventure
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/destinations">
                                <button className="bg-[#81BFDA] hover:bg-[#B1F0F7] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                                    Explore Destinations
                                </button>
                            </Link>
                            <Link href="/contactUs">
                                <button className="bg-[#FADA7A] hover:bg-[#F5F0CD] text-gray-800 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                                    Get in Touch
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

