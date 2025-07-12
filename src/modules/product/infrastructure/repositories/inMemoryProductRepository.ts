import { ProductRepository } from "@/modules/product/application/repositories/productRepository";
import { ProductType } from "@/modules/product/domain/productType";
import { ProductCategory, Product } from "@/modules/product/domain/product";
import { MemoryUnit } from "@/modules/product/domain/types/smartPhone";
import { ShoeSizeCode } from "@/modules/product/domain/types/shoe";

export const products: Product[] = [
  {
    id: "1",
    name: "Designing Data-Intensive Applications",
    imageUrl: "/images/products/books/designing-data-intensive-applications.webp",
    type: ProductType.BOOK,
    isbn: "1449373321",
    pages: 614,
  },
  {
    id: "2",
    name: "New balance 327",
    imageUrl: "/images/products/shoes/new-balance-327.webp",
    type: ProductType.SHOE,
    color: "BLACK",
    size: { value: 8, code: ShoeSizeCode.UK },
  },
  {
    id: "3",
    name: "iPhone 16",
    imageUrl: "/images/products/smartphones/iphone-16.webp",
    type: ProductType.SMART_PHONE,
    memory: { size: 16, unit: MemoryUnit.GB },
  },
  {
    id: "4",
    name: "iPhone 16 Pro",
    imageUrl: "/images/products/smartphones/iphone-16-pro.webp",
    type: ProductType.SMART_PHONE,
    memory: { size: 32, unit: MemoryUnit.GB },
  },
];

export const inMemoryProductRepository: ProductRepository = {
  async getProductsBy<TYPE extends ProductType>(query: { type: TYPE }) {
    return products.filter((product): product is ProductCategory<TYPE> => product.type === query.type);
  },

  async getAll() {
    return products;
  },

  async deleteAll() {
    products.splice(0);
  },

  async save(...newProducts: Product[]) {
    products.push(...newProducts);
  },
};
