/* eslint-disable-next-line */
export interface FooterProps {}
import Link from 'next/link';


export function Footer(props: FooterProps) {
  return (
    <div className="flex justify-center bg-black text-white">
      <div className="flex justify-around gap-4 grid-col mt-10 mb-10 text-sm">
        <span>Company Name @2024</span>
        <Link href='/product/list' className='font-extralight'>Products n Services</Link>
        <Link href='/profile' className='font-extralight'>Profile</Link>
        <Link href='/about' className='font-extralight'>About</Link>
      </div>
    </div>
  );
}

export default Footer;
