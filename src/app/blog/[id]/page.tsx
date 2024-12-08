import { useRouter } from 'next/router';

export default function BlogPost() {
    const router = useRouter();
    const { id } = router.query; // Fetch the blog post ID from the URL

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">Blog Post {id}</h1>
            <div className="mt-8">
                <p>Full content of Blog Post {id}...</p>
                <div className="mt-4">
                    <a href="/blog" className="text-blue-500">Back to Blog List</a>
                </div>
            </div>
        </div>
    );
}
