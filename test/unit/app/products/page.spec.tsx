import { screen } from "@testing-library/react";

import Page from "@/app/products/page";
import { inMemoryProductRepository } from "@/modules/product/infrastructure/repositories/inMemoryProductRepository";
import { ProductType } from "@/modules/product/domain/productType";
import { aBook, aSmartPhone } from "@/test/fixtures/product.fixture";
import { renderAsync } from "@/test/unit/utils/reactTestUtils";

describe("products page", () => {
  const book = aBook();
  const smartPhone = aSmartPhone();

  beforeEach(async () => {
    await inMemoryProductRepository.deleteAll();
    await inMemoryProductRepository.save(book, smartPhone);
  });

  it("can display all products", async () => {
    const searchParams = Promise.resolve({ type: undefined });
    await renderAsync(<Page searchParams={searchParams} />);

    expect(screen.getByText(book.name)).toBeVisible();
    expect(screen.getByText(smartPhone.name)).toBeVisible();
  });

  it("filters products by type when it's available in the search params", async () => {
    const searchParams = Promise.resolve({ type: ProductType.BOOK });
    await renderAsync(<Page searchParams={searchParams} />);

    expect(screen.getByText(book.name)).toBeVisible();
    expect(screen.queryByText(smartPhone.name)).not.toBeInTheDocument();
  });
});
