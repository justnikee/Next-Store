import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  // await prisma.product.create({
  //   data: {
  //     name: "AnyItem",
  //     description: "This is very usefull itme that will help you always.",
  //     price: 10,
  //   }
  // })

  const products = await prisma.product.findMany()

  console.log(products)

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

  export default prisma