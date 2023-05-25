import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextResponse) {
    const data = await prisma.product.findMany()


    return NextResponse.json(data)
}


// export async function POST(request: Request) {
//     const { name, description,  price ,image}: Partial<Products> = await request.json();

//     if (!name || !description || !price || !image) return NextResponse.json({"message" : "Fields are missing!"});
   

//     const product = await prisma.product.create({
//         data:
//         {
//             name,
//             description,
//             image,
//             price
//         }
//     })


    
    
//     return NextResponse.json(product)


// }