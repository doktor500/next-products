import { sample } from "lodash";

import { Book } from "@/modules/product/domain/types/book";
import { randomDataGenerator } from "@/test/fixtures/utils/randomDataGenerator";
import { ProductType } from "@/modules/product/domain/productType";
import { Shoe, ShoeSizeCode } from "@/modules/product/domain/types/shoe";
import { MemoryUnit, SmartPhone } from "@/modules/product/domain/types/smartPhone";

export const aBook = (book?: Partial<Book>): Book => {
  return {
    id: randomDataGenerator.anId(),
    name: sample(["Designing data intensive applications", "The pragmatic programmer", "Clean architecture"]),
    imageUrl: randomDataGenerator.anImageUrl(),
    type: ProductType.BOOK,
    isbn: randomDataGenerator.anIsbn(),
    pages: randomDataGenerator.aNumber(),
    ...book,
  };
};

export const aShoe = (shoe?: Partial<Shoe>): Shoe => {
  return {
    id: randomDataGenerator.anId(),
    name: sample(["Adidas", "Nike", "New balance"]),
    imageUrl: randomDataGenerator.anImageUrl(),
    type: ProductType.SHOE,
    color: randomDataGenerator.aColor(),
    size: { value: sample([7, 8, 9]), code: ShoeSizeCode.UK },
    ...shoe,
  };
};

export const aSmartPhone = (smartPhone?: Partial<SmartPhone>): SmartPhone => {
  return {
    id: randomDataGenerator.anId(),
    name: sample(["iPhone 16", "iPhone 16 pro", "Nothing phone 3"]),
    imageUrl: randomDataGenerator.anImageUrl(),
    type: ProductType.SMART_PHONE,
    memory: { size: sample([16, 32, 64]), unit: MemoryUnit.GB },
    ...smartPhone,
  };
};
