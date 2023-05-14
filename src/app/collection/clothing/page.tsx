import React from 'react'
import prisma from '../../../../lib/client'
import Image from 'next/image';

const Clothing =async() => {
  const Products = await prisma.product.findMany();
  
  return (
    <div>
      <h1>
        products
      </h1>
      {
        Products.map(product => (
          <div key={product.id}>

            {/* <Image
              src={product.image}
              height={400}
              width={400}
              loading='lazy'
              alt='product image'
            /> */}
            <span>{product.name}</span>
            <span>{product.description}</span>
            <span>{product.price}</span>
              </div>
        ))
      }
    </div>
  )
}

export default Clothing
