import Header from "@/components/Header";  // Import the Header component
import Footer from "@/components/Footer";  // Import the Footer component
import Image from "next/image";            // Import Image component

export default function Home() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <section className="bg-purple-100">
        <div className="container mx-auto flex flex-col lg:flex-row items-center py-16 px-6">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-primary">
              New Furniture Collection Trends in 2020
            </h1>
            <p className="mt-4 text-gray-700">
              Explore the latest modern furniture trends with Hekto. Stylish, comfortable, and practical designs tailored for modern living.
            </p>
            <button className="mt-6 px-6 py-3 bg-secondary text-white rounded-lg shadow-lg hover:bg-primary">
              Shop Now
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image src="/path-to-chair-image.jpg" alt="Chair" width={500} height={500} />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-4">Featured Products</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Repeat Product Cards */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-4 text-center"
            >
              <Image src={`/path-to-product${i + 1}.jpg`} alt={`Product ${i + 1}`} width={300} height={300} />
              <h3 className="mt-4 text-lg font-bold text-purple-700 mb-4">Comfort Handy Craft</h3>
              <p className="mt-2 text-secondary">$60.00</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Products Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center text-purple-700 mb-4">Latest Products</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Repeat Product Cards */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-4 text-center"
              >
                <Image src={`/path-to-latest-product${i + 1}.jpg`} alt={`Latest Product ${i + 1}`} width={300} height={300} />
                <h3 className="mt-4 text-lg font-bold text-purple-700 mb-4">Modern Chair</h3>
                <p className="mt-2 text-secondary">$70.00</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-4">Trending Products</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-4 text-center"
            >
              <Image src={`/path-to-trending-product${i + 1}.jpg`} alt={`Trending Product ${i + 1}`} width={300} height={300} />
              <h3 className="mt-4 text-lg font-bold text-purple-700 mb-4">Ergonomic Chair</h3>
              <p className="mt-2 text-secondary">$80.00</p>
            </div>
          ))}
        </div>
      </section>

      {/* Discount Section */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">20% Discount on All Products</h2>
          <p className="mt-4 text-gray-700">Grab this limited-time offer and enjoy discounts on your favorite furniture items.</p>
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-secondary">
            Shop Now
          </button>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Get Latest Updates by Subscribing to Our Newsletter</h2>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-lg"
            />
            <button className="px-6 py-2 bg-secondary text-white rounded-lg shadow-lg hover:bg-primary">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
