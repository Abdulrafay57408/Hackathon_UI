export default function ShopList() {
    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 p-4">
                <h2 className="text-xl">Filters</h2>
                {/* Add filter options here */}
            </div>

            {/* Product List */}
            <div className="w-3/4 p-4">
                <h1 className="text-3xl font-bold">Shop List</h1>
                <div className="space-y-4 mt-4">
                    {/* Product List Items */}
                    <div className="product-list-item">Product 1</div>
                    <div className="product-list-item">Product 2</div>
                    <div className="product-list-item">Product 3</div>
                    <div className="product-list-item">Product 4</div>
                </div>
            </div>
        </div>
    );
}
