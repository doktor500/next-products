import { inMemoryProductRepository } from "@/modules/product/infrastructure/repositories/inMemoryProductRepository";
import { ProductType } from "@/modules/product/domain/productType";
import { aBook, aShoe, aSmartPhone } from "@/test/fixtures/product.fixture";

describe("in memory product repository", () => {
  const book = aBook();
  const shoe = aShoe();
  const smartPhone1 = aSmartPhone({ name: "iphone 16" });
  const smartPhone2 = aSmartPhone({ name: "iphone 16 pro" });

  beforeEach(async () => {
    await inMemoryProductRepository.deleteAll();
    await inMemoryProductRepository.save(book, shoe, smartPhone1, smartPhone2);
  });

  it("allows to search products by type", async () => {
    const books = await inMemoryProductRepository.getProductsBy({ type: ProductType.BOOK });
    const shoes = await inMemoryProductRepository.getProductsBy({ type: ProductType.SHOE });
    const smartPhones = await inMemoryProductRepository.getProductsBy({ type: ProductType.SMART_PHONE });

    expect(books).toEqual([book]);
    expect(shoes).toEqual([shoe]);
    expect(smartPhones).toEqual([smartPhone1, smartPhone2]);
  });

  it("allows to get all products", async () => {
    const allProducts = await inMemoryProductRepository.getAll();
    expect(allProducts).toEqual([book, shoe, smartPhone1, smartPhone2]);
  });
});
