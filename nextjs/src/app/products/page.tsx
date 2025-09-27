import Link from "next/link";

export default function Products(){
    const products = [
            {id: '1', name : " Mobile", price : 20000},
            {id: '2', name : " Laptop", price : 50000},
            {id: '3', name : " TV", price : 30000},
    ]
    return(
        <>
        <h1 className="text-3xl justify-center font-bold m-4">Products </h1>
            <div className="grid gap-4">
                {
                    products.map(products=>(
                        <div key={products.id} className="border p-4 rounded">
                            <h2>{products.name}</h2>
                            <p>${products.price}</p>
                            <Link href={`products/${products.id}`}>
                                view Details
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    )
}