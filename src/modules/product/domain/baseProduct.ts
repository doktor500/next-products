import { ProductType } from "@/modules/product/domain/productType";

export type BaseProduct = {
  id: string;
  name: string;
  imageUrl: string;
  type: ProductType;
};
