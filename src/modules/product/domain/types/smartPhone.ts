import { BaseProduct } from "@/modules/product/domain/baseProduct";
import { ProductType } from "@/modules/product/domain/productType";

export const MemoryUnit = {
  GB: "GB",
  MB: "MB",
} as const;

export type MemoryUnit = (typeof MemoryUnit)[keyof typeof MemoryUnit];

export type SmartPhone = BaseProduct & {
  type: typeof ProductType.SMART_PHONE;
  memory: { size: number; unit: MemoryUnit };
};
