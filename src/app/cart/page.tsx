import Link from 'next/link';

export default function ShoppingCart() {
  return (
    <div className="shopping-cart-container font-sans text-gray-700">
            <header className="bg-purple-500 text-white py-6 px-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">Hekto</h1>
                    <nav className="space-x-4">
                        <Link href="/" className="hover:underline">Home</Link>
                        <Link href="/shop" className="hover:underline">Shop</Link>
                        <Link href="/about-us" className="hover:underline text-white">About Us</Link>
                        <Link href="/contact-us" className="hover:underline">Contact Us</Link>
                    </nav>
                </div>
            </header>

      {/* Main Content */}
      <main className="py-8 px-16">
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
        <div className="flex space-x-8">
          {/* Product List */}
          <div className="w-3/4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b text-left">
                  <th className="p-2">Product</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(4)].map((_, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-2">Product {i + 1}</td>
                    <td className="p-2">$3200</td>
                    <td className="p-2">
                      <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="w-16 border px-2"
                      />
                    </td>
                    <td className="p-2">$3200</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Update Cart
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Clear Cart
              </button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="w-1/4">
            <div className="border p-4 rounded-lg mb-4">
              <h3 className="text-lg font-bold mb-2">Cart Totals</h3>
              <p>Subtotal: $3200</p>
              <p>Totals: $3200</p>
              <button className="bg-green-500 text-white px-4 py-2 mt-4 w-full">
                Proceed to Checkout
              </button>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Calculate Shipping</h3>
              <input
                type="text"
                placeholder="Country"
                className="w-full border px-2 py-1 mb-2"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full border px-2 py-1 mb-2"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border px-2 py-1 mb-2"
              />
              <button className="bg-blue-500 text-white px-4 py-2 w-full">
                Calculate Shipping
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-16 text-sm">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold">Hekto</h3>
            <p>Contact Info</p>
            <p>17 Princess Road, London, UK</p>
          </div>
          <div>
            <h3 className="font-bold">Categories</h3>
            <ul>
              <li>Laptops</li>
              <li>Cameras</li>
              <li>Smartphones</li>
              <li>Headphones</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Customer Care</h3>
            <ul>
              <li>My Account</li>
              <li>Returns</li>
              <li>Order Tracking</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Pages</h3>
            <ul>
              <li>Blog</li>
              <li>Shop</li>
              <li>Pre-Built Pages</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-4">©2024 Hekto. All Rights Reserved</p>
      </footer>
    </div>
  );
}
