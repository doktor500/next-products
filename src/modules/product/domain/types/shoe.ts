import { BaseProduct } from "@/modules/product/domain/baseProduct";
import { ProductType } from "@/modules/product/domain/productType";

export const ShoeSizeCode = {
  UK: "UK",
} as const;

export type ShoeSizeCode = (typeof ShoeSizeCode)[keyof typeof ShoeSizeCode];

type ShoeSize = {
  value: number;
  code: string;
};

export type Shoe = BaseProduct & {
  type: typeof ProductType.SHOE;
  color: string;
  size: ShoeSize;
};
