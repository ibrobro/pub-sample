import { numToCurrString } from '@/app/lib/formatter';
import { CubeIcon } from '@heroicons/react/24/solid';


export interface ProductCardProps {
  category: string;
  title: string;
  price: number;
}


export default function ProductCard({ category, title, price }: ProductCardProps) {
  return (
    <div className='bg-slate-500 drop-shadow-md border-2 text-white p-10 rounded-md'>
      <h3 className='inline-block md:block text-[#101010] font-bold uppercase text-sm'>{ category }</h3>
      {' '}
      <h4 className='inline-block md:block text-md font-bold text-4xl capitalize'>{ title }</h4>
      <div className='flex place-content-center my-10'>
        <CubeIcon className='size-40 md:size-60 text-center' />
      </div>
      <span className='font-bold text-xl'>{ numToCurrString(price ?? 0, 'id-ID', 'IDR' ) }</span>
    </div>
  )
}