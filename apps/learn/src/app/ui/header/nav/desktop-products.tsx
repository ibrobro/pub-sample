'use client'
import { useEffect, useMemo, useRef, useState } from 'react';
import { DebounceClass } from 'shared-browser-util';
import { createPortal } from 'react-dom';
import Products from '@/app/ui/header/products/products';

/* eslint-disable-next-line */
export interface NavDProductsProps {}

  
export default function HeaderNavDesktopProducts(props: NavDProductsProps) {
  const [show, setShow] = useState<boolean>(false);
  const [onClient, setOnClient] = useState<boolean>(false);
  const mainMenu = useRef<HTMLElement | null>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOnClient(true);
      mainMenu.current = document.getElementById('main-menu')!
    }
  });

  useEffect(() => {    
    if (show && onClient) {
      document.body.classList.add('stop-scrolling');
    } else {
      document.body.classList.remove('stop-scrolling');
    }

  }, [show, onClient])

  const debounceClass = useMemo(() => {
    return new DebounceClass();
  }, []);

  function toggleShow(state: boolean) {
    debounceClass.debounce(setShow, 450)(state);
  };

  console.log(onClient);
  console.log(mainMenu.current?.offsetHeight);
  return (
    <div className="inline-block">
      <button 
          className="h-full font-bold"
          onMouseEnter={ () => toggleShow(true) }
          onMouseLeave={ () => toggleShow(false) }
      >
        Products and Services
      </button>
      { (onClient && mainMenu.current) && createPortal(
            <div className={` 
                fixed  
                w-full 
                transition duration-500 ease-in-out 
                text-white  
                ${show ? 'scale-y-100 translate-y-0 ' : 'scale-y-0 -translate-y-1/2 '}
             `}
             style={{top: `${mainMenu.current.offsetHeight-1}px`}}
            >
              <Products 
                toggleShow={ toggleShow }
              />
            </div>,
            document.body!
        )  
      }
    </div>
  );
}
