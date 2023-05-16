import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/client";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextResponse) {
    const data = prisma.product.findMany();
    return NextResponse.json(data)
}