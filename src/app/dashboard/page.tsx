"use client"

import React, { useState } from 'react'
import toast from 'react-hot-toast'


const Dashboard = () => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const response = await fetch(`/api/createProducts`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      name,
      description,
      price,
    })
  });
  try {
    const data = await response.json();
    if (data.error) {
      toast.error("This didn't work.");
    } else {
      // handle success case
    }
  } catch (error) {
    console.error("Failed to parse response as JSON", error);
  }
}



  return (
    <div className='h-screen w-screen flex justify-center items-center'>
          <div className='flex itmes-center justify-between w-1/2'>
              <h2>Products</h2>
              <div>
                  <form onSubmit={handleSubmit} action="" className='flex flex-col gap-5 '>
                      <input type='text'  placeholder='Product Name' value={name}  onChange={(e) => setName(e.target.value)}/>
                      <input type='text'  placeholder='Product Description' value={description}  onChange={(e) => setDescription(e.target.value)} />
                      <input type='number'  placeholder='Product Price' value={price}  onChange={(e) => setPrice(e.target.value)}/>
                      <button>Create Product</button>
                  </form>
              </div>
          </div>
    </div>
  )
}

export default Dashboard
