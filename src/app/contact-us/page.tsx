export default function ContactUs() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center">Contact Us</h1>
            <form className="mt-8 space-y-4">
                <div>
                    <label className="block">Name</label>
                    <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label className="block">Email</label>
                    <input type="email" className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label className="block">Message</label>
                    <textarea className="w-full p-2 border rounded"></textarea>
                </div>
                <button type="submit" className="btn w-full">Send Message</button>
            </form>
            <div className="mt-8 text-center">
                <p>Or reach us at: contact@company.com</p>
                <p>Phone: +1 234 567 890</p>
            </div>
        </div>
    );
}
