import { Metadata } from "next";

// Generate metadata for dynamic routes
export async function generateMetadata({ params }: {
    params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const slugValue = slug[0]; // Get the first slug parameter

    const dummyData = {
        "1": {
            title: "One",
            description: "This is the first dynamic page with metadata"
        },
        "2": {
            title: "Two", 
            description: "This is the second dynamic page with metadata"
        },
        "3": {
            title: "Three",
            description: "This is the third dynamic page with metadata"
        }
    };

    const pageData = dummyData[slugValue as keyof typeof dummyData] || {
        title: "Dynamic Page",
        description: "A dynamically generated page"
    };

    return {
        title: `${pageData.title} - Metadata Example`,
        description: pageData.description,
        keywords: ["Next.js", "metadata", "dynamic", "SEO"],
        authors: [{ name: "Your Name" }],
        openGraph: {
            title: `${pageData.title} - Metadata Example`,
            description: pageData.description,
            type: "website",
            locale: "en_US",
        },
        twitter: {
            card: "summary_large_image",
            title: `${pageData.title} - Metadata Example`,
            description: pageData.description,
        },
    };
}

export default async function DynamicMetadataExample({ params }: {
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } = await params;
    const slugValue = slug[0];

    const dummyData = {
        "1": {
            title: "One"
        },
        "2": {
            title: "Two"
        },
        "3": {
            title: "Three"
        }
    }

    const pageData = dummyData[slugValue as keyof typeof dummyData] || {
        title: "Dynamic Page"
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-4">{pageData.title}</h1>
            <p className="text-lg text-gray-600 mb-4">
                This is a dynamic route page with slug: <code className="bg-gray-100 px-2 py-1 rounded">{slugValue}</code>
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Metadata Features:</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>Dynamic title generation</li>
                    <li>SEO-friendly descriptions</li>
                    <li>Open Graph tags for social sharing</li>
                    <li>Twitter Card support</li>
                    <li>Keywords for search engines</li>
                </ul>
            </div>
        </div>
    )
}