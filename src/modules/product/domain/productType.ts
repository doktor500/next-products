export const ProductType = {
  BOOK: "BOOK",
  SHOE: "SHOE",
  SMART_PHONE: "SMART_PHONE",
} as const;

export type ProductType = (typeof ProductType)[keyof typeof ProductType];
