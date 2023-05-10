import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../../lib/client"

type RequestBody = {
       name: string;
       description: string;
       price: number;
}


export async function POST(req: NextApiRequest, res: NextApiResponse) {
       const { name, description, price }: RequestBody = req.body;

       if (!name || !description || !price ) {
              return res.status(418).json({ error: "Please Fill all the feilds" });
       }

       const newProduct = await prisma.product.create({
              data: {
                     name,
                     description,
                     price,
              }
       });
       res.status(201).json(newProduct);
}