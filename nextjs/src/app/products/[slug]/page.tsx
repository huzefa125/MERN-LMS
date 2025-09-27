
async function productDetails({
    params,
}: {
    params: { slug: string }
}) {
    const {slug} = await params
    console.log(slug,slug);
    
  return (
    <div>product details : `${slug}`</div>
    )
}

export default productDetails;