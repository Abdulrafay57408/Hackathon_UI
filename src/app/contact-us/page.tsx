import Link from 'next/link';

export default function ContactUs() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <header className="bg-purple-500 text-white py-6 px-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold text-white">Hekto</h1>
                    <nav className="space-x-4">
                        <Link href="/" passHref>
                            <span className="hover:underline text-white">Home</span>
                        </Link>
                        <Link href="/shop" passHref>
                            <span className="hover:underline text-white">Shop</span>
                        </Link>
                        <Link href="/about-us" passHref>
                            <span className="hover:underline text-white">About Us</span>
                        </Link>
                        <Link href="/contact-us" passHref>
                            <span className="hover:underline text-white">Contact Us</span>
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-purple-700 text-center mb-4">Contact Us</h1>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                    {/* Left Section */}
                    <div>
                        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Information About Us</h2>
                        <p className="text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
                            ultrices tristique amet erat vitae eget dolor los bibendum quam.
                        </p>
                        <div className="space-y-2 text-gray-700">
                            <p>
                                <span className="font-semibold text-purple-700">Tel:</span> 877-67-88-99
                            </p>
                            <p>
                                <span className="font-semibold text-purple-700">E-Mail:</span> shop@store.com
                            </p>
                            <p>
                                <span className="font-semibold text-purple-700">Address:</span> 20 Margaret St, London,
                                Great Britain, 3NM98-LK
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div>
                        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Contact Way</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li className="text-purple-600">Support Forum – Available 24/7</li>
                            <li className="text-purple-600">Free standard shipping on all orders</li>
                        </ul>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-purple-700 mb-4">Get in Touch</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block mb-1 text-purple-700">Your Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-3 border border-gray-300 rounded text-gray-700"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-purple-700">Your Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded text-gray-700"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-purple-700">Subject</label>
                            <input
                                type="text"
                                placeholder="Enter subject"
                                className="w-full p-3 border border-gray-300 rounded text-gray-700"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-purple-700">Your Message</label>
                            <textarea
                                placeholder="Enter your message"
                                className="w-full p-3 border border-gray-300 rounded text-gray-700 h-32"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
                        >
                            Send Mail
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-200 py-8 mt-12">
                <div className="container mx-auto text-center">
                    <p className="text-purple-700">&copy; 2024 Hekto. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
