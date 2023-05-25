import React from 'react'

const page = async ({params}: {params: {clothing: string}}) => {

  const products = await fetch(`/api/products/${params.clothing}`)
  const res = products.json()
  
  console.log(params.clothing)
  return (
    <div>
      dynamic page
      {params.clothing}
    </div>
  )
}

export default page

