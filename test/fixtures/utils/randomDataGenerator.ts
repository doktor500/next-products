import { faker } from "@faker-js/faker";

export const randomDataGenerator = {
  anId: () => faker.string.uuid(),
  aNumber: () => faker.number.int({ max: 1000 }),
  anIsbn: () => faker.number.int({ max: 99999999 }).toString(),
  anImageUrl: () => faker.image.url(),
  aColor: () => faker.color.human(),
};
