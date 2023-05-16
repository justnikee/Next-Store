import React from 'react'
import prisma from '../../../../lib/client'
import Image from 'next/image';
import { FC } from 'react';

interface PageProps {
  params: {
      clothingId: string
    }
}


const page: FC<PageProps> = async ({ params }) => {
  console.log(params.clothingId)
  const Products = await prisma.product.findMany();
  
  return (
    <div>
      <h1 className='text-xl text-center my-10 uppercase'>
        products
      </h1>
      <div className='grid grid-cols-4 gap-5 items-center justify-center'>
{
        Products.map(product => (
          <div key={product.id} className='flex flex-col justify-start'>

            <img
              src={product.image}
              height={400}
              width={400}
              loading='lazy'
              alt='product image'
            />
            <span>{product.name}</span>
            <span>{product.description}</span>
            <span>{product.price}</span>
              </div>
        ))
      }
      </div> 
    </div>
  )
}

export default page
