export default function NotFound() {
    return (
        <div className="p-8 text-center">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p className="mt-4">The page you are looking for does not exist.</p>
            <a href="/" className="text-blue-500">Go back to Home</a>
        </div>
    );
}
