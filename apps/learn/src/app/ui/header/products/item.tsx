import type { Product } from '@/app/ui/header/products/products';
import { kalam } from '@/app/ui/fonts';
import { CubeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { numToCurrString } from '@/app/lib/formatter';


export default function productsItem({product}: {product: Product}) {
  return (
    <Link href='/product/detail'>
      <div className='border-2 rounded p-2 flex flex-col items-center justify-center'>
        <CubeIcon className='size-40 text-blue-500' />
        <h4 className={`${kalam.className} text-center text-2xl text-yellow capitalize`}>
          {product?.name || ''}
        </h4>
        <span className='font-bold'>{numToCurrString(product?.price || 0, 'id-ID', 'IDR' )}</span>
      </div>
    </Link>
  )
}