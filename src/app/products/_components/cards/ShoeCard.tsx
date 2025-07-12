import { Card } from "@/components/Card";
import { Shoe } from "@/modules/product/domain/types/shoe";
import { format } from "@/utils/stringUtils";

export const ShoeCard = ({ product }: { product: Shoe }) => {
  return (
    <Card name={product.name} image={product.imageUrl}>
      <p className="flex items-center gap-2 text-gray-300">
        <span className="font-medium text-gray-100">Color:</span>
        <span>{format(product.color)}</span>
      </p>
      <p className="flex items-center gap-2 text-gray-300">
        <span className="font-medium text-gray-100">Size:</span>
        <span>
          {product.size.value} {product.size.code}
        </span>
      </p>
    </Card>
  );
};
