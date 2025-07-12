import { Card } from "@/components/Card";
import { Book } from "@/modules/product/domain/types/book";

export const BookCard = ({ product }: { product: Book }) => {
  return (
    <Card name={product.name} image={product.imageUrl}>
      <p className="flex items-center gap-2 text-gray-300">
        <span className="font-medium text-gray-100">ISBN:</span>
        <span>{product.isbn}</span>
      </p>
      <p className="flex items-center gap-2 text-gray-300">
        <span className="font-medium text-gray-100">Pages:</span>
        <span>{product.pages}</span>
      </p>
    </Card>
  );
};
