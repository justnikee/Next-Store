import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../lib/client";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextResponse) {
    const data = await prisma.product.findMany();

    if (req.method == 'GET') {
        return NextResponse.json(data)
    }
}