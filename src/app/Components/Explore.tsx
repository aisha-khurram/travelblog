'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Explore() {
    const router = useRouter();

    const destinations = [
        {
            id: 'maldives',
            name: 'Maldives',
            description: 'Crystal clear waters and overwater bungalows',
            image: '/maldives.jpg' 
        },
        {
            id: 'turkey',
            name: 'Turkey',
            description: 'Rich history meets stunning landscapes',
            image: '/turkey.jpg' 
        },
        {
            id: 'italy',
            name: 'Italy',
            description: 'Art, culture, and Mediterranean beauty',
            image: '/italy.jpg' 
        },
        {
            id: 'hunza',
            name: 'Hunza',
            description: 'Mountain paradise in northern Pakistan',
            image: '/hunza.jpg' 
        }
    ];

    const handleDestinationClick = (destinationId: string) => {
        router.push(`/destination/${destinationId}`);
    };

    return (
        <section id="explore-section" className="py-16 bg-gradient-to-br from-[#B1F0F7] via-[#81BFDA] to-[#F5F0CD]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
                        Explore Destinations
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
                        Discover breathtaking places around the world that will create memories to last a lifetime
                    </p>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {destinations.map((destination) => (
                        <div
                            key={destination.id}
                            className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            onClick={() => handleDestinationClick(destination.id)}
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={destination.image}
                                    alt={destination.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Hover Content */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="bg-[#FADA7A] text-gray-800 font-semibold py-2 px-6 rounded-full hover:bg-[#F5F0CD] transition-colors duration-200">
                                        Explore Now
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#81BFDA] transition-colors duration-200">
                                    {destination.name}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {destination.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link href="/destinations">
                        <button className="bg-[#81BFDA] hover:bg-[#B1F0F7] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                            View All Destinations
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}