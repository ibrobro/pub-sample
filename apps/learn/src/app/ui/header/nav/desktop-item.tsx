import Link from 'next/link';


/* eslint-disable-next-line */
export interface HeaderNavDesktopItemProps {
  title: string;
  href: string;
}


export function HeaderNavDesktopItem({title, href}: HeaderNavDesktopItemProps) {
  return (
    <Link
      className='font-bold flex items-center' 
      href={href}
    >
      {title}
    </Link>
  );
}

export default HeaderNavDesktopItem;
