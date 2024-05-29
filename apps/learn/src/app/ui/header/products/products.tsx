import ProductsItem from "./item";
import { kalam } from '@/app/ui/fonts';
import React from 'react';
import Link from 'next/link';


export type Product = {
  name: string;
  price: number;
}


export interface ProductsProps {
  toggleShow: (state: boolean) => void;
}


export default function Products({toggleShow}: ProductsProps) {
  const products = [
    {name: 'tesla', price: 23400},
    {name: 'electric', price: 23600}, 
    {name: 'rocker', price: 23900},
    {name: 'product 5', price: 54640},
  ];

  const prods = products?.map((p, i) => <ProductsItem product={p} key={i} /> )

  return (
   <div 
    className="bg-blue p-10" 
    onMouseEnter={ () => toggleShow(true) } 
    onMouseLeave={ () => toggleShow(false) }
  >
      <h3 className={`${kalam.className} text-yellow text-xl`} >
        Swift Access!
      </h3>
      <p className="mb-5 italic">To certain products or services.</p>
      <div className="flex divide-x-2 gap-5">
        <div 
          className="grow grid grid-rows-1 grid-flow-col gap-5"
          onClick={ () => toggleShow(false) }
        >
          { prods }
        </div>
        <div className="w-1/4 pl-5">
          <p className="mb-10">
            This section gives quick access to certain products or services featured for your visitors.
          </p>
          <Link href='/product/list'>
            <button 
              type="button" 
              className="p-2 bg-red transition duration-300 hover:scale-105 rounded-md border font-bold"
              onClick={ () => toggleShow(false) }
            >
              More Products..
            </button>
          </Link>
        </div>
      </div>
   </div> 
  )
}