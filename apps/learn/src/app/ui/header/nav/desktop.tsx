import HeaderNevDesktopItem from "@/app/ui/header/nav/desktop-item";
import HeaderNavDesktopProducts from "@/app/ui/header/nav/desktop-products";

/* eslint-disable-next-line */
export interface HeaderNavDesktopProps {}


export function HeaderNavDesktop() {
  
  return (
    <div className="hidden md:flex grow gap-10 justify-center">
      <HeaderNavDesktopProducts />
      <HeaderNevDesktopItem href="/profile" title="Profile" />
      <HeaderNevDesktopItem href="about" title="About" />
    </div>
  );
}

export default HeaderNavDesktop;
