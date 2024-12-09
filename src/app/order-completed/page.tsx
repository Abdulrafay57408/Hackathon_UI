import Link from 'next/link';

export default function OrderCompleted() {
    return (
        <div className="p-8 text-center">
            <h1 className="text-4xl font-bold">Order Completed!</h1>
            <p className="mt-4">Thank you for your purchase. Your order is on its way!</p>
            <p className="mt-2">Order ID: #12345</p>
            <div className="mt-8">
                <Link href="/" className="btn">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
