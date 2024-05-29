import { ReactNode } from 'react';


export interface FloatingHeaderSubMenuProps {
  active: boolean;
  onClose: Function;
  children?: ReactNode;
}


export function FloatingHeaderSubMenu({
  active, onClose, children
}: FloatingHeaderSubMenuProps) {
  
  return (
    <div 
      className={`md:flex w-full py-4 transition-transform duration-1000 ease-in-out 
          ${active 
              ? `scale-y-1 `
              : `scale-y-0 ` 
          } 
      `}
    >
      { children }
    </div>
  )
}