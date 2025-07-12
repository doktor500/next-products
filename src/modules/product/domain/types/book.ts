import { BaseProduct } from "@/modules/product/domain/baseProduct";
import { ProductType } from "@/modules/product/domain/productType";

export type Book = BaseProduct & {
  type: typeof ProductType.BOOK;
  isbn: string;
  pages: number;
};
