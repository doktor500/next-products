import { inMemoryProductRepository as productRepository } from "@/modules/product/infrastructure/repositories/inMemoryProductRepository";
import { ProductType } from "@/modules/product/domain/productType";
import { AllProducts } from "@/app/products/_components/AllProducts";
import { ProductList } from "@/app/products/_components/ProductList";

type SearchParams = Promise<{ type: ProductType | undefined }>;

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const { type } = await searchParams;
  const products = await (type ? productRepository.getProductsBy({ type }) : productRepository.getAll());

  return type ? <ProductList products={products} /> : <AllProducts products={products} />;
}
