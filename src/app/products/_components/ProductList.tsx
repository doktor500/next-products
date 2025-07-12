import { match } from "ts-pattern";

import { Product } from "@/modules/product/domain/product";
import { ProductType } from "@/modules/product/domain/productType";
import { BookCard } from "@/app/products/_components/cards/BookCard";
import { Book } from "@/modules/product/domain/types/book";
import { Shoe } from "@/modules/product/domain/types/shoe";
import { ShoeCard } from "@/app/products/_components/cards/ShoeCard";
import { SmartPhone } from "@/modules/product/domain/types/smartPhone";
import { SmartPhoneCard } from "@/app/products/_components/cards/SmartPhoneCard";

const { BOOK, SHOE, SMART_PHONE } = ProductType;

export const ProductList = ({ products }: { products: Product[] }) => {
  return products.map((product) => {
    return match(product)
      .with({ type: BOOK }, (book: Book) => <BookCard key={book.id} product={book} />)
      .with({ type: SHOE }, (shoe: Shoe) => <ShoeCard key={shoe.id} product={shoe} />)
      .with({ type: SMART_PHONE }, (phone: SmartPhone) => <SmartPhoneCard key={phone.id} product={phone} />)
      .exhaustive();
  });
};
