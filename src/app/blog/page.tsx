export default function Blog() {
    return (
        <div className="blog-page">
            {/* Header Section */}
            <header className="bg-purple-500 text-white py-6 px-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">Hekto</h1>
                    <nav className="space-x-4">
                        <a href="/" className="hover:underline">Home</a>
                        <a href="/about-us" className="hover:underline">About Us</a>
                        <a href="/shop" className="hover:underline">Shop</a>
                        <a href="/contact-us" className="hover:underline">Contact Us</a>
                    </nav>
                </div>
            </header>

            {/* Blog Section */}
            <div className="container mx-auto py-16 px-4">
                <h2 className="text-center text-3xl font-bold mb-4">Our Blog</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Blog Post 1 */}
                    <div className="blog-post bg-white rounded-lg shadow-lg p-6">
                        <img
                            src="path-to-your-image-1.jpg"
                            alt="Blog Post 1"
                            className="w-full h-40 object-cover rounded-t-lg mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2">Blog Post Title 1</h3>
                        <p className="text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique nisl orci viverra...
                        </p>
                        <a
                            href="/blog/1"
                            className="text-pink-500 font-bold hover:underline"
                        >
                            Read more
                        </a>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="blog-post bg-white rounded-lg shadow-lg p-6">
                        <img
                            src="path-to-your-image-2.jpg"
                            alt="Blog Post 2"
                            className="w-full h-40 object-cover rounded-t-lg mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2">Blog Post Title 2</h3>
                        <p className="text-gray-600 mb-4">
                            Suspendisse varius enim in eros elementum tristique. Donec id elit non mi...
                        </p>
                        <a
                            href="/blog/2"
                            className="text-pink-500 font-bold hover:underline"
                        >
                            Read more
                        </a>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="blog-post bg-white rounded-lg shadow-lg p-6">
                        <img
                            src="path-to-your-image-3.jpg"
                            alt="Blog Post 3"
                            className="w-full h-40 object-cover rounded-t-lg mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2">Blog Post Title 3</h3>
                        <p className="text-gray-600 mb-4">
                            Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor...
                        </p>
                        <a
                            href="/blog/3"
                            className="text-pink-500 font-bold hover:underline"
                        >
                            Read more
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h4 className="font-bold mb-4">Hekto</h4>
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            className="w-full p-2 rounded mb-4"
                        />
                        <button className="bg-pink-500 text-white px-4 py-2 rounded">Sign Up</button>
                        <p className="text-gray-400 mt-4">Contact Info</p>
                        <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Categories</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Laptops & Computers</li>
                            <li>Cameras & Photography</li>
                            <li>Smart Phones & Tablets</li>
                            <li>Video Games & Consoles</li>
                            <li>Waterproof Headphones</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Customer Care</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>My Account</li>
                            <li>Discount</li>
                            <li>Returns</li>
                            <li>Orders History</li>
                            <li>Order Tracking</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Pages</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Blog</li>
                            <li>Browse the Shop</li>
                            <li>Category</li>
                            <li>Pre-Built Pages</li>
                            <li>WooCommerce Pages</li>
                        </ul>
                    </div>
                </div>
                <p className="text-center text-gray-500 mt-8">©Webecy - All Rights Reserved</p>
            </footer>
        </div>
    );
}
