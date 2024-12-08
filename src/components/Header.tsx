import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-purple-600 text-white">
      {/* Top Bar */}
      <div className="bg-purple-800 py-2 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <p>Get 50% Off on Selected Items | Shop Now</p>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <span>English</span>
              <select className="bg-purple-800 text-white outline-none">
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/home">
          <h1 className="text-3xl font-bold cursor-pointer">Hekto</h1>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/home" className="hover:underline">
            Home
          </Link>
          <Link href="/shop" className="hover:underline">
            Shop
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/about-us" className="hover:underline">
            About Us
          </Link>
          <Link href="/contact-us" className="hover:underline">
            Contact Us
          </Link>
        </nav>

        {/* About Us Button */}
        <div>
          <Link href="/about-us">
            <button className="bg-purple-800 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              About Us
            </button>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 rounded-l-lg"
          />
          <button className="bg-primary px-4 py-2 rounded-r-lg text-white">
            Search
          </button>
        </div>

        {/* User Actions */}
        <div className="flex space-x-4 items-center">
          <Link href="/login" className="hover:underline">
            Login
          </Link>
          <Link href="/cart" className="hover:underline">
            <div className="relative">
              Cart
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
                2 {/* Example item count */}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
