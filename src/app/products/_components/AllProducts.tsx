import { groupBy } from "lodash";

import { Product } from "@/modules/product/domain/product";
import { ProductList } from "@/app/products/_components/ProductList";
import { format } from "@/utils/stringUtils";

export const AllProducts = ({ products }: { products: Product[] }) => {
  const productsByType = groupBy(products, (product: Product) => product.type);

  return (
    <div className="bg-gray-900">
      {Object.entries(productsByType).map(([type, products]) => (
        <ProductGroup key={type} type={type} products={products} />
      ))}
    </div>
  );
};

const ProductGroup = ({ type, products }: { type: string; products: Product[] }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-8 w-lg gap-y-2 rounded-lg bg-gray-800 px-6">
        <h2 className="my-2 text-2xl font-bold text-gray-100">{format(type)}</h2>
        <ProductList products={products} />
      </div>
    </div>
  );
};
