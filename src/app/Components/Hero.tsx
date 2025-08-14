'use client' 

import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                
                <Image
                    src="/banner.jpg"
                    alt="Travel destination"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 via-transparent to-orange-600/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-6">
                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                        A journey beyond horizons
                        <br />
                        <span className="text-[#FADA7A]">where dreams take flight</span>
                    </h1>
                    
                    {/* Subheading */}
                    <p className="text-lg sm:text-xl lg:text-2xl text-[#F5F0CD] max-w-2xl mx-auto leading-relaxed">
                        Discover breathtaking destinations, hidden gems, and unforgettable adventures 
                        that will inspire your next great escape.
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <button className="bg-[#81BFDA] hover:bg-[#B1F0F7] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Start Your Journey
                        </button>
                        <button 
                            onClick={() => document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-transparent border-2 border-[#FADA7A] text-[#FADA7A] hover:bg-[#FADA7A] hover:text-gray-900 font-semibold py-4 px-8 rounded-full transition-all duration-300"
                        >
                            Explore Destinations
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
