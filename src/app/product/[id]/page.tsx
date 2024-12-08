import { useRouter } from "next/router";

export default function ProductDetails() {
    const router = useRouter();
    const { id } = router.query; // Product ID from URL

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">Product Details</h1>
            <div className="mt-4">
                {/* Replace with actual product details */}
                <p>Product Name: Product {id}</p>
                <p>Price: $100</p>
                <p>Description: Detailed product description here.</p>

                <button className="btn mt-4">Add to Cart</button>

                {/* Related Products */}
                <h2 className="text-xl mt-8">Related Products</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                    {/* Related Product Cards */}
                    <div className="product-card">Related Product 1</div>
                    <div className="product-card">Related Product 2</div>
                    <div className="product-card">Related Product 3</div>
                </div>
            </div>
        </div>
    );
}
