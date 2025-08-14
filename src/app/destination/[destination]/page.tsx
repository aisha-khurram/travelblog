"use client"
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin, Calendar, Users, Star } from 'lucide-react';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';

// Destination data types
type DestinationKey = 'maldives' | 'turkey' | 'italy' | 'hunza';

type DestinationInfo = {
    name: string;
    country: string;
    description: string;
    longDescription: string;
    heroImage: string;
    bestTime: string;
    duration: string;
    difficulty: string;
    rating: number;
    highlights: string[];
    activities: string[];
};

const destinationsData: Record<DestinationKey, DestinationInfo> = {
    maldives: {
        name: 'Maldives',
        country: 'Maldives',
        description: 'A tropical paradise of crystal-clear waters, pristine white beaches, and luxurious overwater bungalows.',
        longDescription: 'The Maldives is a stunning archipelago of 1,192 coral islands grouped in 26 atolls, located in the Indian Ocean. Known for its crystal-clear turquoise waters, pristine white sandy beaches, and luxurious overwater bungalows, the Maldives offers an unparalleled tropical paradise experience. This destination is perfect for honeymooners, luxury travelers, and anyone seeking a peaceful escape from the world.',
        heroImage: '/maldives.jpg', 
        bestTime: 'November to April',
        duration: '5-7 days',
        difficulty: 'Easy',
        rating: 4.8,
        highlights: [
            'Overwater bungalows with glass floors',
            'World-class diving and snorkeling',
            'Pristine white sandy beaches',
            'Luxury spa treatments',
            'Water sports activities',
            'Romantic sunset cruises'
        ],
        activities: [
            'Snorkeling and Diving',
            'Water Sports',
            'Spa and Wellness',
            'Island Hopping',
            'Fishing',
            'Photography'
        ]
    },
    turkey: {
        name: 'Turkey',
        country: 'Turkey',
        description: 'Where East meets West, offering rich history, stunning landscapes, and vibrant culture.',
        longDescription: 'Turkey is a transcontinental country bridging Europe and Asia, offering an incredible blend of ancient history, stunning natural landscapes, and vibrant culture. From the fairy chimneys of Cappadocia to the thermal pools of Pamukkale, from the bustling bazaars of Istanbul to the Mediterranean coastline, Turkey provides diverse experiences for every type of traveler.',
        heroImage: '/turkey.jpg',
        bestTime: 'April to June, September to November',
        duration: '10-14 days',
        difficulty: 'Moderate',
        rating: 4.7,
        highlights: [
            'Hot air balloon rides in Cappadocia',
            'Historic sites in Istanbul',
            'Thermal pools of Pamukkale',
            'Mediterranean coastal towns',
            'Ancient ruins and archaeology',
            'Traditional Turkish cuisine'
        ],
        activities: [
            'Historical Tours',
            'Hot Air Ballooning',
            'Cultural Experiences',
            'Beach Activities',
            'Hiking',
            'Photography'
        ]
    },
    italy: {
        name: 'Italy',
        country: 'Italy',
        description: 'Art, culture, and Mediterranean beauty combined with world-renowned cuisine.',
        longDescription: 'Italy is a European country with a long Mediterranean coastline that has left a powerful mark on Western culture and cuisine. From the romantic canals of Venice to the ancient ruins of Rome, from the Renaissance art of Florence to the stunning Amalfi Coast, Italy offers an unmatched combination of art, history, culture, and natural beauty.',
        heroImage: '/italy.jpg',
        bestTime: 'April to June, September to October',
        duration: '7-12 days',
        difficulty: 'Easy to Moderate',
        rating: 4.9,
        highlights: [
            'Renaissance art and architecture',
            'Historic Roman landmarks', 
            'Scenic Amalfi Coast drives',
            'Authentic Italian cuisine',
            'Beautiful Tuscan countryside',
            'Romantic gondola rides in Venice'
        ],
        activities: [
            'Art and Museums',
            'Historical Tours',
            'Culinary Experiences',
            'Scenic Drives',
            'Wine Tasting',
            'Photography'
        ]
    },
    hunza: {
        name: 'Hunza Valley',
        country: 'Pakistan',
        description: 'A mountain paradise offering breathtaking peaks, pristine nature, and rich cultural heritage.',
        longDescription: 'Hunza Valley is a mountainous valley in the Gilgit-Baltistan region of Pakistan, often called "Shangri-La" for its breathtaking natural beauty. Surrounded by towering peaks including Rakaposhi, Ultar Sar, and parts of the Karakoram range, this valley offers stunning landscapes, friendly local culture, and some of the most spectacular mountain views in the world.',
        heroImage: '/hunza.jpg',
        bestTime: 'April to October',
        duration: '5-8 days',
        difficulty: 'Moderate to Challenging',
        rating: 4.6,
        highlights: [
            'Spectacular mountain views',
            'Ancient Baltit and Altit forts',
            'Traditional Hunza culture',
            'Karimabad town exploration',
            'Attabad Lake boat rides',
            'Local organic food and apricots'
        ],
        activities: [
            'Mountain Hiking',
        ]
    },

};

type DestinationPageProps = {
    params: {
        destination: string;
    };
};

export default function destination({ params }: DestinationPageProps) {
    const { destination } = params;

    // Ensure the destination is a valid key
    const destinationKey = destination.toLowerCase() as DestinationKey;
    const destinationInfo = destinationsData[destinationKey];

    // If destination not found, show 404
    if (!Object.prototype.hasOwnProperty.call(destinationsData, destinationKey)) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#B1F0F7] to-[#F5F0CD]">
            {/* Back Button */}
            <div className="bg-[#81BFDA]/95 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link 
                        href="/"
                        className="inline-flex items-center text-white hover:text-[#FADA7A] transition-colors duration-200"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-96 md:h-[500px] overflow-hidden">
                <Image
                    src={destinationInfo.heroImage}
                    alt={destinationInfo.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            {destinationInfo.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
                            {destinationInfo.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* About Section */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">About {destinationInfo.name}</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {destinationInfo.longDescription}
                            </p>
                        </div>

                        {/* Highlights Section */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Highlights</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {destinationInfo.highlights.map((highlight: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <Star className="w-5 h-5 text-[#FADA7A] fill-current" />
                                        <span className="text-gray-700">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Trip Info Card */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Trip Information</h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <MapPin className="w-5 h-5 text-[#81BFDA]" />
                                    <div>
                                        <p className="font-medium text-gray-800">Location</p>
                                        <p className="text-gray-600">{destinationInfo.country}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <Calendar className="w-5 h-5 text-[#81BFDA]" />
                                    <div>
                                        <p className="font-medium text-gray-800">Best Time</p>
                                        <p className="text-gray-600">{destinationInfo.bestTime}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <Users className="w-5 h-5 text-[#81BFDA]" />
                                    <div>
                                        <p className="font-medium text-gray-800">Duration</p>
                                        <p className="text-gray-600">{destinationInfo.duration}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Star className="w-5 h-5 text-[#FADA7A] fill-current" />
                                    <div>
                                        <p className="font-medium text-gray-800">Rating</p>
                                        <p className="text-gray-600">{destinationInfo.rating}/5.0</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Activities Card */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Activities</h3>
                            <div className="space-y-2">
                                {destinationInfo.activities.map((activity, index) => (
                                    <div key={index} className="bg-[#B1F0F7]/50 rounded-lg px-4 py-2">
                                        <span className="text-gray-700 font-medium">{activity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact CTA */}
                        <div className="bg-gradient-to-r from-[#81BFDA] to-[#B1F0F7] rounded-2xl p-6 shadow-lg text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Ready to Explore?</h3>
                            <p className="text-white/90 mb-6">Contact us to plan your perfect trip to {destinationInfo.name}</p>
                            <button className="bg-[#FADA7A] hover:bg-[#F5F0CD] text-gray-800 font-semibold py-3 px-6 rounded-full transition-colors duration-200">
                                Plan Your Trip
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}