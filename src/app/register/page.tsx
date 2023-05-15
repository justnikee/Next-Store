import React from 'react'
import {
  SignInButton,
  UserButton
} from '@clerk/nextjs'

import {   SignedOut,SignedIn
  } from '@clerk/nextjs/app-beta/client'

const page = () => {
  return (
    <div>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </div>
  )
}

export default page
