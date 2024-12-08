export default function AboutUs() {
    return (
        <div className="about-us-page">
            {/* Header Section */}
            <header className="bg-purple-500 text-white py-6 px-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">Hekto</h1>
                    <nav className="space-x-4">
                        <a href="/" className="hover:underline">Home</a>
                        <a href="/blog" className="hover:underline">Blog</a>
                        <a href="/shop" className="hover:underline">Shop</a>
                        <a href="/contact-us" className="hover:underline">Contact Us</a>
                    </nav>
                </div>
            </header>

            {/* About Us Section */}
            <div className="container mx-auto py-16 px-4">
                <h2 className="text-center text-3xl font-bold mb-4">About Us</h2>

                <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
                    <div className="lg:w-1/2">
                        <img
                            src="path-to-your-image.jpg"
                            alt="Business Meeting"
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <h3 className="text-2xl font-bold mb-4">Know About Our Ecommerce Business, History</h3>
                        <p className="text-gray-700 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices
                            tristique amet erat vitae eget dolor. Massa faucibus tristique vitae lobortis quis
                            bibendum quam.
                        </p>
                        <a
                            href="/contact-us"
                            className="bg-pink-500 text-white px-6 py-2 rounded inline-block"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-6">Our Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: "🚚", title: "Free Delivery" },
                            { icon: "💰", title: "100% Cash Back" },
                            { icon: "🏆", title: "Quality Product" },
                            { icon: "⏰", title: "24/7 Support" },
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h4 className="font-bold mb-2">{feature.title}</h4>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="container mx-auto py-16 px-4">
                <h3 className="text-2xl font-bold text-center mb-8">Our Client Say!</h3>
                <div className="text-center">
                    <p className="font-bold mb-2">Selina Gomez</p>
                    <p className="text-gray-500 italic mb-4">CEO at WebNinja</p>
                    <p className="text-gray-700 max-w-xl mx-auto">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non dui risus quam vel
                        sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam."
                    </p>
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
