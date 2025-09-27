export default async function OptionalProductFilter({params} :
    {params:Promise<{slug? : string[]}>;}){
    const {slug} = await params;
    return (
        <div>
            <h1>Product Filter</h1>
        </div>
    )
}