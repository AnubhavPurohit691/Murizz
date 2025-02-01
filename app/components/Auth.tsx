"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Auth = () => {
    const session=useSession()
  return (
    <div>
        {session.data?.user && <button onClick={()=>signOut()} className='bg-blue-500 p-6 text-white'>Logout</button>}
        {!session.data?.user && <button onClick={()=>signIn()} className='bg-blue-500 p-6 text-white'>Signin</button>}
    </div>
  )
}

export default Auth