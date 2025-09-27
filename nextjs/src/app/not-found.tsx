"use client";

import { useRouter } from "next/navigation";

function notFound(){
    const router = useRouter();
    return (
        <div>
            <h1>The page is not found or not exists</h1>
            <button onClick={()=> router.push('/')} className="bg-black p-5 text-white">Go to HomePage</button>
        </div>
    )
}

export default notFound;