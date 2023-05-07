
export async function GET(req: Request) {
       return new Response('hii I\'m the response')
}

export async function POST(req: Request) {
       const body = await req.json()
       console.log(body)

       return new Response('ok')
}