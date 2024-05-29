'use client'
import { useSession, signIn, signOut } from "next-auth/react"


export default function HeaderAuthArea() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-end h-full grow md:grow-0 ml-4 gap-4">
      {session 
          ? 
            <>
              <span>Hi { session?.user?.name }</span>        
              <button className="font-bold" onClick={ () => { signOut() } }>Sign Out</button>
            </>
          : 
            <button className="font-bold" onClick={ () => { signIn() } }>Sign In</button>
      }
    </div>
  )
}