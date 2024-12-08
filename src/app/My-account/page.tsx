export default function MyAccount() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center">My Account</h1>
            <div className="mt-8">
                <h2 className="text-2xl">Login</h2>
                <form className="space-y-4 mt-4">
                    <div>
                        <label className="block">Email</label>
                        <input type="email" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block">Password</label>
                        <input type="password" className="w-full p-2 border rounded" />
                    </div>
                    <button type="submit" className="btn w-full">Login</button>
                </form>
                <div className="mt-4 text-center">
                    <p>Don't have an account? <a href="/register" className="text-blue-500">Sign up</a></p>
                </div>
            </div>
        </div>
    );
}
