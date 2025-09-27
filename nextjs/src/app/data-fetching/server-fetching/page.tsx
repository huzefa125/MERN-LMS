interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    thumbnail: string;
}

interface ProductResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

async function getProducts(): Promise<ProductResponse> {
    const response = await fetch('https://dummyjson.com/products', {
        next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
        throw new Error("Failed to fetch products!");
    }
    return response.json();
}

export default async function ServerSideDataFetching() {
    try {
        const data = await getProducts();
        
        return (
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-4">Server Side Data Fetching</h1>
                <p className="text-lg text-gray-600 mb-6">
                    This page demonstrates server-side data fetching with real API data
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <h2 className="text-2xl font-semibold mb-2">API Data</h2>
                    <p className="text-gray-700">
                        Total products: <span className="font-bold">{data.total}</span> | 
                        Showing: <span className="font-bold">{data.products.length}</span> products
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.products.map((product) => (
                        <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                            <img 
                                src={product.thumbnail} 
                                alt={product.title}
                                className="w-full h-48 object-cover rounded mb-3"
                            />
                            <h3 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h3>
                            <p className="text-gray-600 mb-2">Category: {product.category}</p>
                            <p className="text-2xl font-bold text-green-600">${product.price}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <a 
                        href="/data-fetching" 
                        className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors"
                    >
                        ← Back to Data Fetching
                    </a>
                </div>
            </div>
        );
    } catch (error) {
        return (
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-4 text-red-600">Error</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Failed to fetch products. Please try again later.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-red-700">
                        Error: {error instanceof Error ? error.message : 'Unknown error'}
                    </p>
                </div>
            </div>
        );
    }
}