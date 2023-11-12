import Image from "next/image";
import Link from "next/link";
import { parseUrl } from "../helpers/helpers";
import { Quantity } from "@/app/components/Quantity";

export default function ProductList({
  product_title,
  title,
  newPrice,
  oldPrice,
  image
}) {
  return (
    <Link href={`/products/${parseUrl(product_title)}`}>
      <div className="group overflow-hidden z-0">
        <Image
          src={image}
          width={300}
          height={300}
          alt={title}
          className="w-full h-full aspect-[9/13]"
        />
        <div className="group-hover:-translate-y-8 bg-white transition-all duration-300 pt-5 relative z-[999] h-[150px] overflow-hidden">
          <div className=" overflow-hidden">
            <p className="text-black text-lg font-bold">{title}</p>
            <div className="flex flex-wrap justify-between">
              <p className="font-bold text-[#01A7A3] text-md">{newPrice}</p>
              <p className="line-through text-cgray-200 text-md">{oldPrice}</p>
            </div>
            <div className="hidden group-hover:block">
              <div className="flex flex-wrap justify-between mt-4">
                <Quantity
                  quantity={0}
                  increment={() => {}}
                  decrement={() => {}}
                  minQuantity={0}
                  maxQuantity={0}
                />
                <button className="inline-flex flex-wrap items-center border-[1px] border-solid border-gray-400 px-[1rem]">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
