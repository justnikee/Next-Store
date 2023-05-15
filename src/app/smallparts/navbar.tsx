import React from 'react'
import Image from 'next/image'
import AnnouncementBar from './announcement-bar'
import LogoImage from '../../../public/LogoNegro-01_300x.webp'
import Link from 'next/link'

import {
  SignInButton,
  UserButton
} from '@clerk/nextjs'

import {   SignedOut,SignedIn
  } from '@clerk/nextjs/app-beta/client'

const Navbar = () => {
  return (
    <>
          <AnnouncementBar />
          <div className='flex flex-col justify-between items-center bg-white w-full py-4'>
              <div className='max-w-[1500px] px-10 w-full flex flex-col gap-5'>
                <div className='flex justify-between items-center w-full py'>
                      <span className='text-black text-lg w-1/3 text-left'>English</span>
                      <div className='w-1/3 flex justify-center'>
                          <Link href={'/'}>
                          <Image
                      height={100}
                      width={300}
                      alt='Brand Logo'
                      src={LogoImage} />
                          </Link>
                          
                      </div>
                      <div className='w-1/3 flex justify-end'>
                          <div className='flex gap-3 items-center'>
                <span className='h-7 w-7 block'>
                        <SignedIn>
                        <UserButton />
                        </SignedIn>
                        <SignedOut>
                    <SignInButton mode='modal'>
                                               <svg className='bg-transparent text-black' aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 64 64"><path d="M35 39.84v-2.53c3.3-1.91 6-6.66 6-11.41 0-7.63 0-13.82-9-13.82s-9 6.19-9 13.82c0 4.75 2.7 9.51 6 11.41v2.53c-10.18.85-18 6-18 12.16h42c0-6.19-7.82-11.31-18-12.16z"></path></svg>    

                        </SignInButton>
                        </SignedOut>




                  
                  {/* <Link href={'/register'}>

                  </Link> */}
                      </span> 
                     <span className='h-7 w-7 block' >
                      <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 64 64"><path d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42"></path></svg>
                          </span>
                      <span className='h-7 w-7 block' >
                        <svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 64 64"><g fill="none" stroke="#000" strokeWidth="2"><path d="M25 26c0-15.79 3.57-20 8-20s8 4.21 8 20"></path><path d="M14.74 18h36.51l3.59 36.73h-43.7z"></path></g></svg>                      \
                    </span>
                  </div>
                      </div>
                </div> 
          <div className='flex gap-7 items-center justify-center'>
                          <Link className='text-[12px] uppercase  text-black ' href={'/'}>Home</Link>
                          <Link className='text-[12px] uppercase  text-black ' href={'/collection/new-arrivels'}>New Arrivels</Link>
                          <Link className='text-[12px] uppercase  text-black ' href={'/collection/bags'}>Bags</Link>
                          <Link className='text-[12px] uppercase  text-black ' href={'/collection/clothing'}>Clothing</Link>
                          <Link className='text-[12px] uppercase  text-black ' href={'/collection/accessories'}>Accessories</Link>
                </div>
                  
              </div>
          </div>
    </>
  )
}

export default Navbar
