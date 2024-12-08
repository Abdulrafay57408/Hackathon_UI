"use client";

import products from "@/data/products"; // Assume this includes product details
import ProductCard from "@/components/ProductCard"; // Assumed reusable component
import { useState } from "react";

export default function ShopPage() {
    const [viewMode, setViewMode] = useState("list");

    return (
        <div className="min-h-screen bg-[#F9FAFB]">
            {/* Header Section */}
            <header className="bg-[#7238C2] text-white p-4 flex items-center justify-between">
                <div className="text-3xl font-bold tracking-wide text-[#FFD700]">Hekto</div>
                <nav className="flex space-x-6">
                    <a href="/" className="text-lg text-white hover:text-[#FFD700] transition-colors">Home</a>
                    <a href="/about-us" className="text-lg text-white hover:text-[#FFD700] transition-colors">About Us</a>
                    <a href="/contact-us" className="text-lg text-white hover:text-[#FFD700] transition-colors">Contact</a>
                    <a href="#" className="text-lg text-white hover:text-[#FFD700]">Login</a>
                </nav>
            </header>

            {/* Main Content */}
            <div className="flex mt-8">
                {/* Filters Sidebar */}
                <aside className="w-1/4 p-4 bg-white shadow-md rounded-lg text-gray-800">
                    <h2 className="text-xl font-semibold mb-4 text-[#7238C2]">Product Brand</h2>
                    <ul className="space-y-2">
                        <li><input type="checkbox" className="mr-2" />Coaster Furniture</li>
                        <li><input type="checkbox" className="mr-2" />Fusion Dot High Fashion</li>
                        <li><input type="checkbox" className="mr-2" />Unique Furniture Restor</li>
                        <li><input type="checkbox" className="mr-2" />Dream Furniture Flipping</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6 mb-4 text-[#7238C2]">Discount Offer</h2>
                    <ul className="space-y-2">
                        <li><input type="checkbox" className="mr-2" />20% Cashback</li>
                        <li><input type="checkbox" className="mr-2" />5% Cashback Offer</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6 mb-4 text-[#7238C2]">Rating Item</h2>
                    <ul className="space-y-2">
                        <li><input type="radio" name="rating" className="mr-2" />⭐⭐⭐⭐⭐</li>
                        <li><input type="radio" name="rating" className="mr-2" />⭐⭐⭐⭐</li>
                    </ul>
                </aside>

                {/* Products Section */}
                <main className="w-3/4 p-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold text-[#7238C2]">Ecommerce Accessories & Fashion Items</h2>
                        <div>
                            <button
                                className={`px-4 py-2 border rounded-lg ${
                                    viewMode === "grid" ? "bg-[#7238C2] text-white" : "bg-white text-[#7238C2]"
                                }`}
                                onClick={() => setViewMode("grid")}
                            >
                                Grid View
                            </button>
                            <button
                                className={`ml-4 px-4 py-2 border rounded-lg ${
                                    viewMode === "list" ? "bg-[#7238C2] text-white" : "bg-white text-[#7238C2]"
                                }`}
                                onClick={() => setViewMode("list")}
                            >
                                List View
                            </button>
                        </div>
                    </div>
                    <div
                        className={`${
                            viewMode === "grid" ? "grid grid-cols-3 gap-6" : "space-y-4"
                        }`}
                    >
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                {...product}
                            />
                        ))}
                    </div>
                </main>
            </div>

            {/* Footer Section */}
            <footer className="bg-[#1A202C] text-white mt-8">
                <div className="p-6 flex justify-between">
                    <div>
                        <h3 className="font-bold mb-2 text-[#FFD700]">Hekto</h3>
                        <p>Contact Info</p>
                        <p>17 Princess Road, London</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2 text-[#FFD700]">Categories</h3>
                        <ul className="space-y-1">
                            <li>Laptops & Computers</li>
                            <li>Cameras & Photography</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2 text-[#FFD700]">Customer Care</h3>
                        <ul className="space-y-1">
                            <li>My Account</li>
                            <li>Discount</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
