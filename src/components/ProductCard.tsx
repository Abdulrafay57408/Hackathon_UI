export default function ProductCard({
    image,
    name,
    price,
}: {
    image: string;
    name: string;
    price: number;
}) {
    return (
        <div className="border p-4 rounded-lg shadow">
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-bold mt-2">{name}</h3>
            <p className="text-gray-600">${price.toFixed(2)}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                View Details
            </button>
        </div>
    );
}
