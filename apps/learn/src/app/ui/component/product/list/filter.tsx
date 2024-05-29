'use client'
import { Radio } from "shared-tw-next-ui";


export interface ProductListFilterProps {
  filterRadioChanged?: Function
}


export default function ProductListFilter({ filterRadioChanged }: ProductListFilterProps) {
  return (
    <div>
      <h3 className="font-bold">Filter</h3>
      <div 
          onChange={ e => {} } 
          className="grid grid-cols-1 *:mb-8 mt-4"
      >
        <Radio text="Filter 1" />
        <Radio text="Filter 2" />
        <Radio text="Filter 3" />
      </div>
    </div>
  );
}