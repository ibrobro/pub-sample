'use client'


import { useState } from "react";
import clsx from "clsx";


/* eslint-disable-next-line */
export interface HeaderNavProps {}


export function HeaderNav(props: HeaderNavProps) {
  const [show, setShow] = useState<boolean>(false);


  return (
    <div className="md:hidden inline-block ml-4 flex flex-row justify-end">
      <button 
        className="font-bold"
        onClick={ (e) => { e.preventDefault(); setShow(!show); } }
      >
        Menu
      </button>
      <div
        className={`
        ${clsx(show
          ? 'translate-x-0 scale-x-100 '
          : '-translate-x-2/4 scale-x-0 '
        )}
        transition duration-700 ease-in-out
        fixed h-dvh w-dvw p-10 top-0 left-0
        bg-gray-50
        text-black
        font-bold
      `}
        onClick={ (e) => { e.preventDefault(); setShow(false) } }
      >
        <div className='text-right'>
          <button onClick={ () => setShow(false) }>Close</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;
