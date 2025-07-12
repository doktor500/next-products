import { Card } from "@/components/Card";
import { SmartPhone } from "@/modules/product/domain/types/smartPhone";

export const SmartPhoneCard = ({ product }: { product: SmartPhone }) => {
  return (
    <Card name={product.name} image={product.imageUrl}>
      <p className="flex items-center gap-2 text-gray-300">
        <span className="font-medium text-gray-100">Memory:</span>
        <span>
          {product.memory.size} {product.memory.unit}
        </span>
      </p>
    </Card>
  );
};
