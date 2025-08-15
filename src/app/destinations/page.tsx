'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function DestinationsPage() {
    const router = useRouter();

    const destinations = [
        {
            id: 'maldives',
            name: 'Maldives',
            description: 'Crystal clear waters and overwater bungalows',
            longDescription: 'Experience the ultimate tropical paradise with pristine white sand beaches, crystal clear turquoise waters, and luxurious overwater bungalows. The Maldives offers world-class diving, snorkeling, and relaxation in one of the most beautiful island destinations on Earth.',
            image: '/maldives.jpg',
            highlights: ['Overwater Bungalows', 'Crystal Clear Waters', 'Coral Reefs', 'Luxury Resorts'],
            bestTime: 'November to April',
            duration: '7-10 days'
        },
        {
            id: 'turkey',
            name: 'Turkey',
            description: 'Rich history meets stunning landscapes',
            longDescription: 'Discover the perfect blend of East and West in Turkey, where ancient ruins, bustling bazaars, and stunning landscapes create an unforgettable travel experience. From the historic streets of Istanbul to the otherworldly landscapes of Cappadocia.',
            image: '/turkey.jpg',
            highlights: ['Historic Istanbul', 'Cappadocia Hot Air Balloons', 'Ancient Ruins', 'Turkish Cuisine'],
            bestTime: 'March to May, September to November',
            duration: '10-14 days'
        },
        {
            id: 'italy',
            name: 'Italy',
            description: 'Art, culture, and Mediterranean beauty',
            longDescription: 'Immerse yourself in the rich culture, art, and history of Italy. From the ancient ruins of Rome to the romantic canals of Venice, from the art treasures of Florence to the stunning Amalfi Coast, Italy offers something for every traveler.',
            image: '/italy.jpg',
            highlights: ['Ancient Rome', 'Venetian Canals', 'Renaissance Art', 'Mediterranean Cuisine'],
            bestTime: 'April to June, September to October',
            duration: '12-16 days'
        },
        {
            id: 'hunza',
            name: 'Hunza',
            description: 'Mountain paradise in northern Pakistan',
            longDescription: 'Experience the breathtaking beauty of the Karakoram Mountains in Hunza Valley. This remote paradise offers stunning mountain vistas, ancient forts, and a unique culture that has remained largely unchanged for centuries.',
            image: '/hunza.jpg',
            highlights: ['Karakoram Mountains', 'Ancient Forts', 'Mountain Trekking', 'Local Culture'],
            bestTime: 'May to October',
            duration: '8-12 days'
        }
    ];

    const handleDestinationClick = (destinationId: string) => {
        router.push(`/destination/${destinationId}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#B1F0F7] via-[#81BFDA] to-[#F5F0CD]">
            <Header />

            {/* Destinations Header */}
            <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">All Destinations</h1>
                            <p className="text-gray-600 mt-2">Discover amazing places around the world</p>
                        </div>
                        <Link href="/" className="bg-[#81BFDA] hover:bg-[#B1F0F7] text-white font-semibold py-2 px-6 rounded-full transition-all duration-300">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>

            {/* Destinations Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {destinations.map((destination) => (
                        <div
                            key={destination.id}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                            onClick={() => handleDestinationClick(destination.id)}
                        >
                            {/* Image */}
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={destination.image}
                                    alt={destination.name}
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h2 className="text-3xl font-bold text-white mb-2">{destination.name}</h2>
                                    <p className="text-white/90 text-lg">{destination.description}</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <p className="text-gray-700 text-base leading-relaxed mb-6">
                                    {destination.longDescription}
                                </p>

                                {/* Highlights */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Highlights</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {destination.highlights.map((highlight, index) => (
                                            <span
                                                key={index}
                                                className="bg-[#FADA7A] text-gray-800 text-sm px-3 py-1 rounded-full"
                                            >
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Travel Info */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Best Time</h4>
                                        <p className="text-gray-800">{destination.bestTime}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Duration</h4>
                                        <p className="text-gray-800">{destination.duration}</p>
                                    </div>
                                </div>

                                {/* Explore Button */}
                                <button className="w-full bg-[#81BFDA] hover:bg-[#B1F0F7] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                                    Explore {destination.name}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-20">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready for Your Next Adventure?</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Start planning your dream vacation today and create memories that will last a lifetime.
                    </p>
                    <Link href="/contactUs">
                        <button className="bg-[#FADA7A] hover:bg-[#F5F0CD] text-gray-800 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Contact Us to Plan Your Trip
                        </button>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}

