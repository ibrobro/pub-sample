'use client'
import { signIn } from "next-auth/react";


export default function GhSigninButton() {

  return (
    <button className="border p-2 bg-red m-2 rounded" onClick={ () => { signIn() } }>Sign via Github</button>
  )
}