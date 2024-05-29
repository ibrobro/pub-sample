/* eslint-disable-next-line */
export interface HeaderCompanyLogoProps {}
import Link from 'next/link';
import { kalam } from '@/app/ui/fonts';

export function HeaderCompanyLogo(props: HeaderCompanyLogoProps) {
  return (
    <Link href='/'>
      <h1 className={`${kalam.className} text-yellow text-xl font-300`}>Your Company Logo!</h1>
    </Link>
  );
}

export default HeaderCompanyLogo;
