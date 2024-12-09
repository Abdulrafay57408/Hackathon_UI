import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-purple-600 text-white">
            <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Hekto</h3>
                    <p className="text-gray-200 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                    <form className="flex items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-l-lg bg-white text-black outline-none w-full"
                        />
                        <button className="bg-primary px-4 py-2 rounded-r-lg text-white">
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Categories */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Categories</h4>
                    <ul className="space-y-2">
                        <li>Living Room</li>
                        <li>Bedroom</li>
                        <li>Dining</li>
                        <li>Office</li>
                    </ul>
                </div>

                {/* Customer Care */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Customer Care</h4>
                    <ul className="space-y-2">
                        <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
                        <li>Returns</li> 
                        <li>Shipping</li> 
                        <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Pages */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Pages</h4>
                    <ul className="space-y-2">
                        <li><Link href="/" className="hover:underline">Home</Link></li>
                        <li><Link href="/shop" className="hover:underline">Shop</Link></li>
                        <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
                        <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-400 mt-8"></div>

            <div className="container mx-auto py-6 text-center">
                <p>&copy; 2024 Hekto. All Rights Reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Sitemap</li>
                </div>
            </div>
        </footer>
    );
}
