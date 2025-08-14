'use client';

import Header  from '../Components/Header';
import Link from 'next/link';

export default function PoliciesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#B1F0F7] via-[#81BFDA] to-[#F5F0CD]">
            <Header />
            
            {/* Hero Section */}
            <section className="pt-20 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6">
                        Our Policies
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Important information about how we operate, protect your privacy, 
                        and ensure a safe and enjoyable experience for all our users.
                    </p>
                </div>
            </section>

            {/* Policies Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        {/* Terms of Service */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    By using TravelBlog, you agree to these terms and conditions. 
                                    Our services are provided "as is" and we reserve the right to 
                                    modify these terms at any time.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Acceptable Use</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Use our content for personal, non-commercial purposes only</li>
                                    <li>Respect intellectual property rights and copyright laws</li>
                                    <li>Do not engage in spam, harassment, or harmful activities</li>
                                    <li>Provide accurate and truthful information when contacting us</li>
                                </ul>
                                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Limitation of Liability</h3>
                                <p>
                                    TravelBlog is not responsible for any damages, losses, or injuries 
                                    that may occur during your travels. Always verify information 
                                    independently and travel responsibly.
                                </p>
                            </div>
                        </div>

                        {/* Privacy Policy */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    We are committed to protecting your privacy and ensuring the security 
                                    of your personal information. This policy explains how we collect, 
                                    use, and protect your data.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Information We Collect</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Contact information (name, email, phone) when you reach out to us</li>
                                    <li>Usage data and analytics to improve our services</li>
                                    <li>Cookies and similar technologies for website functionality</li>
                                    <li>Information you voluntarily share in comments or feedback</li>
                                </ul>
                                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How We Use Your Information</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Respond to your inquiries and provide customer support</li>
                                    <li>Improve our website and services based on usage patterns</li>
                                    <li>Send you relevant travel updates and newsletters (with consent)</li>
                                    <li>Ensure website security and prevent fraud</li>
                                </ul>
                                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Data Protection</h3>
                                <p>
                                    We implement appropriate security measures to protect your personal 
                                    information. We do not sell, trade, or rent your personal data to third parties.
                                </p>
                            </div>
                        </div>

                        {/* Content Policy */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Content Policy</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    We strive to provide accurate, helpful, and inspiring travel content. 
                                    Our content policy ensures quality and reliability for our readers.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Content Standards</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>All content is thoroughly researched and fact-checked</li>
                                    <li>We prioritize authentic, first-hand experiences</li>
                                    <li>Content is regularly updated to maintain accuracy</li>
                                    <li>We disclose any sponsored or affiliate content</li>
                                </ul>
                                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">User-Generated Content</h3>
                                <p>
                                    We welcome constructive feedback and comments. However, we reserve 
                                    the right to remove content that violates our community guidelines.
                                </p>
                            </div>
                        </div>

                        {/* Travel Disclaimer */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Travel Disclaimer</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Travel information and recommendations provided on TravelBlog are 
                                    for informational purposes only and should not be considered as 
                                    professional travel advice.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Important Notes</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Always verify current travel requirements and restrictions</li>
                                    <li>Check with official sources for visa and health requirements</li>
                                    <li>Consider purchasing comprehensive travel insurance</li>
                                    <li>Be aware of local laws and customs in your destination</li>
                                    <li>Travel responsibly and respect local communities</li>
                                </ul>
                                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Emergency Information</h3>
                                <p>
                                    In case of emergencies while traveling, contact local emergency 
                                    services or your country's embassy/consulate for assistance.
                                </p>
                            </div>
                        </div>

                        {/* Cookie Policy */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Cookie Policy</h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    We use cookies and similar technologies to enhance your browsing 
                                    experience and provide personalized content.
                                </p>
                                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Types of Cookies We Use</h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                                    <li><strong>Marketing Cookies:</strong> Deliver relevant content and advertisements</li>
                                </ul>
                                <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Managing Cookies</h3>
                                <p>
                                    You can control and manage cookies through your browser settings. 
                                    However, disabling certain cookies may affect website functionality.
                                </p>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Questions About Our Policies?</h2>
                            <p className="text-gray-700 mb-6">
                                If you have any questions about our policies or need clarification 
                                on any terms, please don't hesitate to reach out to us.
                            </p>
                            <Link href="/contactUs">
                                <button className="bg-[#81BFDA] hover:bg-[#B1F0F7] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
