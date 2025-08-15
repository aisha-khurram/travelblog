import Image from 'next/image';

export default function Testimonial() {
	return (
		<section className="py-20 bg-gradient-to-br from-white via-[#F5F0CD] to-[#B1F0F7]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<p className="text-xs font-semibold tracking-widest uppercase text-gray-700">Trusted by Travelers</p>
					<h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-800">
						What <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#81BFDA] to-[#FADA7A]">Travelers</span> Say
					</h2>
					<p className="mt-4 text-lg text-gray-700">Real stories from our community of explorers</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
						<div className="mb-4">
							<svg className="w-10 h-10 text-[#FADA7A]" fill="currentColor" viewBox="0 0 20 20"><path d="M7.5 4A3.5 3.5 0 004 7.5V9a3 3 0 003 3h1v1a3 3 0 01-3 3H4a1 1 0 100 2h1a5 5 0 005-5V7.5A3.5 3.5 0 007.5 4zM15.5 4A3.5 3.5 0 0012 7.5V9a3 3 0 003 3h1v1a3 3 0 01-3 3h-1a1 1 0 100 2h1a5 5 0 005-5V7.5A3.5 3.5 0 0015.5 4z"/></svg>
						</div>
						<p className="text-gray-700 leading-relaxed">“The itineraries and tips were spot on. Our Maldives trip was unforgettable!”</p>
						<div className="mt-6">
							<p className="font-semibold text-gray-900">Ayesha K.</p>
							<p className="text-sm text-gray-600">Karachi, Pakistan</p>
						</div>
					</div>

					<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
						<div className="mb-4">
							<svg className="w-10 h-10 text-[#FADA7A]" fill="currentColor" viewBox="0 0 20 20"><path d="M7.5 4A3.5 3.5 0 004 7.5V9a3 3 0 003 3h1v1a3 3 0 01-3 3H4a1 1 0 100 2h1a5 5 0 005-5V7.5A3.5 3.5 0 007.5 4zM15.5 4A3.5 3.5 0 0012 7.5V9a3 3 0 003 3h1v1a3 3 0 01-3 3h-1a1 1 0 100 2h1a5 5 0 005-5V7.5A3.5 3.5 0 0015.5 4z"/></svg>
						</div>
						<p className="text-gray-700 leading-relaxed">“Turkey recommendations were amazing. We loved Cappadocia and Istanbul food tours.”</p>
						<div className="mt-6">
							<p className="font-semibold text-gray-900">Marco R.</p>
							<p className="text-sm text-gray-600">Rome, Italy</p>
						</div>
					</div>

					<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
						<div className="mb-4">
							<svg className="w-10 h-10 text-[#FADA7A]" fill="currentColor" viewBox="0 0 20 20"><path d="M7.5 4A3.5 3.5 0 004 7.5V9a3 3 0 003 3h1v1a3 3 0 01-3 3H4a1 1 0 100 2h1a5 5 0 005-5V7.5A3.5 3.5 0 0015.5 4z"/></svg>
						</div>
						<p className="text-gray-700 leading-relaxed">“Great budget tips for Italy. The guides helped us plan a perfect two-week trip.”</p>
						<div className="mt-6">
							<p className="font-semibold text-gray-900">Emily W.</p>
							<p className="text-sm text-gray-600">London, UK</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
