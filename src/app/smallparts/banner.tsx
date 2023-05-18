import React from 'react'
import banerImage from '../../../public/banner.webp'
import Image from 'next/image'

const Banner = () => {
    return (
      <section>
    <div className="flex h-[70vh] w-screen relative">
          <Image
              alt='banner Image'
              loading='lazy'
              src={banerImage}
              className='object-cover' 
          >    
          </Image>
          <div className='absolute top-1/2 left-1/2'>
                    <h4>Air Jorden High 1 OG</h4>
                    <h2>You Don’t Need a Cape <br/> to take a flight</h2>
          </div>
            </div>
            </section>
  )
}

export default Banner
