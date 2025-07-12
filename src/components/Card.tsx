import { PropsWithChildren } from "react";
import Image from "next/image";

export const Card = ({ name, image, children }: PropsWithChildren<{ name: string; image: string }>) => {
  return (
    <div className="my-4 rounded-lg bg-gray-700 p-4 shadow-md transition-shadow hover:shadow-lg">
      <h3 className="mb-2 text-lg font-semibold text-gray-100">{name}</h3>
      <div className="flex justify-between">
        <div className="space-y-1 text-gray-300">{children}</div>
        <Image src={image} alt={name} width={100} height={100} />
      </div>
    </div>
  );
};
