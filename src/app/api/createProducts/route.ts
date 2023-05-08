import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../../prisma/client"

export async function GET(req: NextApiRequest, res: NextApiResponse) {
          const data =  await prisma.product.findMany()
          return res.status(200).json(data)
}

export async function POST(req: Request) {
       const body = await req.json()
       console.log(body)

       return new Response('ok')
}