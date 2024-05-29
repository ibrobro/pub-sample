import { CubeIcon } from "@heroicons/react/24/solid";
import { kalam } from "@/app/ui/fonts";
import { numToCurrString } from "@/app/lib/formatter";


export default function Page() {
  return( 
    <div className="w-full grid md:grid-cols-3 md:grid-rows-1 gap-4 min-h-[50vh]">
      <div className="flex items-center justify-center rounded border drop-shadow-md">
        <CubeIcon className='size-40 md:size-60 text-center' />
      </div>
      <div className="md:col-span-2">
        <h2 className={`${kalam.className} font-bold text-4xl text-red`}>
          Product Details
        </h2>
        <div>
          <span className='font-bold text-xl'>
            { numToCurrString(Math.random() * 5000000, 'id-ID', 'IDR' ) }
          </span>
        </div>
        <p className="mt-10">
          Here we can show details about your product.
        </p>
      </div>
    </div>
  )
}