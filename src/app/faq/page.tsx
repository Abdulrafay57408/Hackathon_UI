export default function FAQ() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center">Frequently Asked Questions</h1>
            <div className="space-y-4 mt-8">
                <div className="faq-item">
                    <h2 className="text-xl font-bold">How do I place an order?</h2>
                    <p className="text-gray-600">To place an order, simply add products to your cart and proceed to checkout.</p>
                </div>
                <div className="faq-item">
                    <h2 className="text-xl font-bold">What payment methods do you accept?</h2>
                    <p className="text-gray-600">We accept credit cards, PayPal, and other secure payment methods.</p>
                </div>
                <div className="faq-item">
                    <h2 className="text-xl font-bold">Can I change my order after it&apos;s placed?</h2>
                    <p className="text-gray-600">
                        Once an order is placed, you can contact us to request changes, but we cannot guarantee modifications after processing.
                    </p>
                </div>
            </div>
        </div>
    );
}
