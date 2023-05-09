import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../../lib/client"

export async function POST(req: NextApiRequest, res: NextApiResponse) {
       const { name, description, price, catagory } = req.body;
       
       if (!name || !description || !price || !catagory) {
            return res.status(418).json({error: "Please Fill all the feilds"}) 
       }

      const newProduct = await prisma.product.create({
              name,
              description,
              price,
              catagory
       })
       res.status(201).json(newProduct)
}