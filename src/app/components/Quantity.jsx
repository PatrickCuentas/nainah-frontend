export function Quantity({
  quantity,
  increment,
  decrement,
  minQuantity,
  maxQuantity
}) {
  return (
    <div className="inline-flex flex-wrap items-center border-[1px] border-solid border-gray-400">
      <button
        className="group px-4 py-3 transition-all"
        onClick={decrement}
        disabled={quantity <= minQuantity}
      >
        <span
          className={`font-bold tracking-[1px] ${
            quantity <= minQuantity
              ? "text-gray-300"
              : "text-gray-400 group-hover:text-cpink-300"
          } `}
        >
          -
        </span>
      </button>
      <div className="px-4 py-3">
        <span className="font-bold tracking-[1px] text-gray-400">
          {quantity}
        </span>
      </div>
      <button
        className="group px-4 py-3 transition-all"
        onClick={increment}
        disabled={quantity >= maxQuantity}
      >
        <span
          className={`font-bold tracking-[1px] ${
            quantity >= maxQuantity
              ? "text-gray-300"
              : "text-gray-400 group-hover:text-cpink-300"
          } `}
        >
          +
        </span>
      </button>
    </div>
  );
}
