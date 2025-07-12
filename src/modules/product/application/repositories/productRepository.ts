import { ProductType } from "@/modules/product/domain/productType";
import { ProductCategory, Product } from "@/modules/product/domain/product";

export interface ProductRepository {
  getProductsBy<TYPE extends ProductType>(query: { type: TYPE }): Promise<ProductCategory<TYPE>[]>;
  getAll(): Promise<Product[]>;
  deleteAll(): Promise<void>;
  save(...products: Product[]): Promise<void>;
}
