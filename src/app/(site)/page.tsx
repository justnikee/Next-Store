import prisma from "../../../lib/prisma"




export default async function Home() {
    const products = await prisma.product.findMany()
    console.log(products)
    return (
        <>
           {products.map((product) => (
            <div className="flex flex-col items-center justify-center bg-white w-60 h-full p-6text-center" key={product.id}>
                <span className="text-sm text-gray-600 text-center">Product Name: {product.name}</span>
                <span className="text-sm text-gray-600 text-center">Description: {product.description}</span>
                <span className="text-sm text-gray-600 text-center">Price: {product.price}$</span>
            </div>
           ))}
        </>
)
}