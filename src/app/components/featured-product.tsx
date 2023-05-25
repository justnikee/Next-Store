import React from 'react'
import prisma from '../../../lib/client'

const Featuredproduct = async() => {

    const products = await prisma.product.findMany()
    console.log(products)
  return (
    <>
      <div>
        {
          products.map((product) => (
            <div key={ product.id }>
              <span>{product.name}</span>
              <span>{product.description}</span>
              <span>{ product.price }</span>
            </div>
          ))
        }
        </div>
    </>
  )
}

export default Featuredproduct
