'use client'


import HeaderNav from "@/app/ui/header/nav/nav";
import HeaderCompanyLogo from "@/app/ui/header/company-logo";
import HeaderSocmedButtons from "@/app/ui/header/socmed-buttons";
import AuthArea from "@/app/ui/header/auth/area";
import { useEffect, useState } from "react";
import ToolTip from "@/app/ui/component/tooltip";
import HeaderNavDesktop from "@/app/ui/header/nav/desktop";


/* eslint-disable-next-line */
export interface HeaderProps {}


export function Header(props: HeaderProps) {
  const [onTop, setOnTop] = useState(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== undefined && !mounted) {
      setMounted(true);
    }
    return(() => {
      if (mounted) setMounted(false);
    })
  });

  useEffect(() => {
    function handleScrollChange() {
      setOnTop(window.scrollY <= 10);
    }
    if (mounted) {
      document.addEventListener('scroll', handleScrollChange, { passive: true });
    } 
    return(() => {
      if (mounted) {
        document.removeEventListener('scroll', handleScrollChange);
      }
    });
  }, [mounted]);

  return (
    <div 
      id='main-menu'
      className={`
          fixed z-20 w-screen bg-blue text-white transition-transform duration-300 ease-in 
          ${ onTop 
              ? `translate-y-0 `
              : `-translate-y-full `
          }
      `}
    >
      <nav className="flex flex-row items-center px-10 py-5 justify-between">
        <HeaderCompanyLogo />
        <HeaderNavDesktop />
        <ToolTip content={<p className='italic text-sm'>Put your social media accounts link here.</p>}>
          <HeaderSocmedButtons />
        </ToolTip>
        <AuthArea />
        <HeaderNav />
      </nav>
      
    </div>
  );
}

export default Header;
