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
              className='absolute top-0 left-0 w-full h-screen object-contain my-4' 
          >    
          </Image>
          <div>
                    <h4>Air Jorden High 1 OG</h4>
                    <h2>You Don’t Need a Cape <br/> to take a flight</h2>
          </div>
            </div>
            </section>
  )
}

export default Banner
