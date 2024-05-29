'use client'
import { signIn } from "next-auth/react";
import { kalam } from '@/app/ui/fonts';
import { useEffect, useState, useCallback, useMemo } from "react";


export default function SignIn() {

  return (
    <div className='flex w-full h-screen max-h-[40vh] mt-[12vh] place-content-center text-white'>
      <div className='grid grid-cols-1 p-10 bg-red rounded-md border justify-center items-center'>
        <h2 className={`${kalam.className} text-2xl font-bold text-start mb-10`}>Sign In</h2>
          <button className="mb-4 p-2 border rounded w-fit bg-blue font-bold transition duration-300 hover:scale-105"  onClick={ () => signIn('google') }>
            Sign In With Google
          </button>
          <button className="mb-4 p-2 border rounded w-fit bg-blue font-bold transition duration-300 hover:scale-105" onClick={ () => signIn('github') }>
            Sign In With Github
          </button>
        </div>
    </div>
  )
}