import Link from 'next/link';


/* eslint-disable-next-line */
export interface HeaderNavItemProps {
  title: string;
  href: string;
}


export function HeaderNavItem({title, href}: HeaderNavItemProps) {
  return (
    <Link href={href} className='capitalize font-medium'>{title}</Link>
  );
}

export default HeaderNavItem;
