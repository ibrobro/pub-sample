import { kalam } from "@/app/ui/fonts";
import { Radio } from "shared-tw-next-ui";
import ProductCard from "@/app/ui/component/product/card";
import ProductListFilter from "@/app/ui/component/product/list/filter";
import ProductListModel from "@/app/ui/component/product/list/model";


async function getProducts() {
  return new Array(10).fill(0).map((v, i) => (
    {
      title: `Product number #${i}`,
      category: `Category #${i}`,
      price: Math.random() * 5000000
    }
  ));
}


export default async function Page() {
  const products = await getProducts();

  const productsElements = products.map((p, i) => (
    <ProductCard 
      title={p.title}
      category={p.category}
      price={p.price}
      key={i}
    />
  ))

  return (
    <div>
      <h2 className={`${kalam.className} font-bold text-lg mb-10`}>Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="grid grid-cols-2">
          <ProductListFilter />
          <ProductListModel  />
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            { productsElements }
          </div>
        </div>
      </div>

    </div>
  )
}