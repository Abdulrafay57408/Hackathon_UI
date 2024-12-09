"use client";

import products from "@/data/products"; // Assume this includes product details
import ProductCard from "@/components/ProductCard"; // Assumed reusable component
import { useState } from "react";
import Link from "next/link"; // Import Link from next/link

export default function ShopPage() {
    const [viewMode, setViewMode] = useState("list");

    return (
        <div className="min-h-screen bg-[#F9FAFB]">
            {/* Header Section */}
            <header className="bg-purple-500 text-white py-6 px-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold text-white">Hekto</h1>
                    <nav className="space-x-6">
                        <Link href="/" className="hover:underline text-whit">Home</Link>             
                        <Link href="/shop" className="hover:underline text-white">Shop</Link>
                        <Link href="/about-us" className="hover:underline text-white">About Us</Link>
                        <Link href="/contact-us" className="hover:underline text-white">Contact Us</Link>
                       
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <div className="container mx-auto flex mt-8 px-4">
                {/* Filters Sidebar */}
                <aside className="w-1/4 p-6 bg-white shadow-md rounded-lg text-gray-800">
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
            <footer className="bg-[#1A202C] text-white py-12">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h4 className="font-bold text-[#FFD700] mb-4">Hekto</h4>
                        <p>Contact Info</p>
                        <p>17 Princess Road, London</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#FFD700] mb-4">Categories</h4>
                        <ul className="space-y-1">
                            <li>Laptops & Computers</li>
                            <li>Cameras & Photography</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#FFD700] mb-4">Customer Care</h4>
                        <ul className="space-y-1">
                            <li>My Account</li>
                            <li>Discount</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#FFD700] mb-4">Pages</h4>
                        <ul className="space-y-1">
                            <li>Shop</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <p className="text-center text-gray-400 mt-8">©Webecy - All Rights Reserved</p>
            </footer>
        </div>
    );
}
