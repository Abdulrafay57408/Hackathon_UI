export default function ProductDetails({ params }: { params: { id: string } }) {
    const { id } = params;

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">Product Details</h1>
            <div className="mt-4">
                <p>Product Name: Product {id}</p>
                <p>Price: $100</p>
                <p>Description: Detailed product description here.</p>
                <button className="btn mt-4">Add to Cart</button>
                <h2 className="text-xl mt-8">Related Products</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                    <div className="product-card">Related Product 1</div>
                    <div className="product-card">Related Product 2</div>
                    <div className="product-card">Related Product 3</div>
                </div>
            </div>
        </div>
    );
}
