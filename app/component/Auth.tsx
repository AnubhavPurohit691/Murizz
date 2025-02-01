"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import { Button } from './regular/Button'

const Auth = () => {
    const session=useSession()
  return (
    <div>
        {session.data?.user && <Button onClick={()=>signOut()} >Logout</Button>}
        {!session.data?.user && <Button onClick={()=>signIn()} >Signin</Button>}
    </div>
  )
}

export default Auth