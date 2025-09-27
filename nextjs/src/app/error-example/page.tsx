async function getData(){
    const shouldError = Math.random() > 0.5;
   
    return[
        {
            id : 1,name : "Product 1",price : 100
        },
        {
            id : 2,name : "Product 2",price : 200
        },
        {
            id : 3,name : "Product 3",price : 300
        },
    ]
}

export default async function ErrorExample(){
    const data = await getData();
    return(
        <>
        <div>
            <h1>Product List</h1>
            <div className="grid gap-4">
                {
                    data.map(data =>(
                        <div key={data.id}>
                            <p>{data.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}