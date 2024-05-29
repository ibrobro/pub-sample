'use client'
import { Radio } from "shared-tw-next-ui";


export interface ProductListModelProps {
  modelRadioChanged?: Function
}


export default function ProductListModel({ modelRadioChanged }: ProductListModelProps) {
  return (
    <div>
      <h3 className="font-bold">Model</h3>
      <div 
          onChange={ e => {} } 
          className="grid grid-cols-1 *:mb-8 mt-4"
      >
        <Radio text="Model 1" />
        <Radio text="Model 2" />
      </div>
    </div>
  );
}