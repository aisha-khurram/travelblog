'use client';

import Link from 'next/link';

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-16 bg-gradient-to-br from-[#F5F0CD] via-[#B1F0F7] to-[#81BFDA] text-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					{/* Brand */}
					<div>
						<h3 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#81BFDA] via-[#B1F0F7] to-[#FADA7A]">
							TravelBlog
						</h3>
						<p className="mt-4 text-base leading-relaxed text-gray-700">
							Inspiring authentic journeys with expertly crafted guides, handpicked destinations,
							and stories that spark your next adventure.
						</p>
					</div>

					{/* Quick Links */}
					<nav>
						<h4 className="text-xs font-semibold tracking-widest uppercase text-gray-900/80">Quick Links</h4>
						<ul className="mt-5 space-y-3">
							<li>
								<Link href="/" className="group inline-flex items-center gap-2 text-gray-800 font-medium hover:text-gray-900">
									<svg className="w-4 h-4 text-[#FADA7A] transition-transform group-hover:translate-x-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L9.586 11H4a1 1 0 110-2h5.586L7.293 6.707A1 1 0 118.707 5.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/></svg>
									<span className="underline-offset-4 decoration-[#FADA7A]/60 group-hover:underline">Home</span>
								</Link>
							</li>
							<li>
								<Link href="/aboutUs" className="group inline-flex items-center gap-2 text-gray-800 font-medium hover:text-gray-900">
									<svg className="w-4 h-4 text-[#FADA7A] transition-transform group-hover:translate-x-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L9.586 11H4a1 1 0 110-2h5.586L7.293 6.707A1 1 0 118.707 5.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/></svg>
									<span className="underline-offset-4 decoration-[#FADA7A]/60 group-hover:underline">About Us</span>
								</Link>
							</li>
							<li>
								<Link href="/destinations" className="group inline-flex items-center gap-2 text-gray-800 font-medium hover:text-gray-900">
									<svg className="w-4 h-4 text-[#FADA7A] transition-transform group-hover:translate-x-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L9.586 11H4a1 1 0 110-2h5.586L7.293 6.707A1 1 0 118.707 5.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/></svg>
									<span className="underline-offset-4 decoration-[#FADA7A]/60 group-hover:underline">Destinations</span>
								</Link>
							</li>
							<li>
								<Link href="/contactUs" className="group inline-flex items-center gap-2 text-gray-800 font-medium hover:text-gray-900">
									<svg className="w-4 h-4 text-[#FADA7A] transition-transform group-hover:translate-x-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L9.586 11H4a1 1 0 110-2h5.586L7.293 6.707A1 1 0 118.707 5.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/></svg>
									<span className="underline-offset-4 decoration-[#FADA7A]/60 group-hover:underline">Contact Us</span>
								</Link>
							</li>
							<li>
								<Link href="/policies" className="group inline-flex items-center gap-2 text-gray-800 font-medium hover:text-gray-900">
									<svg className="w-4 h-4 text-[#FADA7A] transition-transform group-hover:translate-x-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L9.586 11H4a1 1 0 110-2h5.586L7.293 6.707A1 1 0 118.707 5.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/></svg>
									<span className="underline-offset-4 decoration-[#FADA7A]/60 group-hover:underline">Policies</span>
								</Link>
							</li>
						</ul>
					</nav>

					{/* Contact */}
					<div>
						<h4 className="text-xs font-semibold tracking-widest uppercase text-gray-900/80">Stay Connected</h4>
						<p className="mt-4 text-gray-700 leading-relaxed">Have a question or a story to share?</p>
						<p className="text-gray-700">
							Email: <a href="mailto:hello@travelblog.com" className="font-semibold underline decoration-[#FADA7A]/60 underline-offset-4 hover:text-gray-900">hello@travelblog.com</a>
						</p>
					</div>
				</div>
			</div>

			<div className="border-t border-white/50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-700">
					<p className="italic">© {year} TravelBlog. All rights reserved.</p>
					<p className="text-gray-700">
						Built for explorers • <Link href="/policies" className="font-medium underline decoration-[#FADA7A]/60 underline-offset-4 hover:text-gray-900">Read our policies</Link>
					</p>
				</div>
			</div>
		</footer>
	);
}
