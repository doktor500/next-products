import { ProductType } from "@/modules/product/domain/productType";
import { Book } from "@/modules/product/domain/types/book";
import { Shoe } from "@/modules/product/domain/types/shoe";
import { SmartPhone } from "@/modules/product/domain/types/smartPhone";

export type ProductCategory<TYPE extends ProductType> = Extract<Product, { type: TYPE }>;
export type Product = Book | Shoe | SmartPhone;
