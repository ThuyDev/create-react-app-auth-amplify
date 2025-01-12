import MinusIcon from "../../svg-icons/MinusIcon";
import PlusIcon from "../../svg-icons/PlusIcon";

function ProductQntSelector({ quantity, setQuantity, maxQuantity, className }) {
  const num = parseInt(quantity || "1");
  const maxNum = maxQuantity ? parseInt(maxQuantity) : null;

  const updateQuantity = (quantity) => {
    if (quantity > 0 && (!maxNum || quantity <= maxNum))
      setQuantity && setQuantity(quantity);
  };

  const disableMinus = num <= 1;
  const disablePlus = maxNum && num >= maxNum;

  return (
    <div className={`flex flex-row items-center space-x-2 ${className || ""}`}>
      <button
        className="text-blue-500 disabled:bg-inherit disabled:text-gray-700"
        disabled={disableMinus}
        onClick={() => {
          updateQuantity(num - 1);
        }}
      >
        <MinusIcon className="w-4 h-4" />
      </button>
      <input
        className="w-12 text-center"
        type={"number"}
        value={quantity}
        min="0"
        max={`${maxNum ? maxNum : ""}`}
        onChange={(e) => {
          updateQuantity(e.target.value);
        }}
      />
      <button
        className="text-blue-500 disabled:bg-inherit disabled:text-gray-700"
        disabled={disablePlus}
        onClick={() => {
          updateQuantity(num + 1);
        }}
      >
        <PlusIcon className="w-4 h-4" />
      </button>
    </div>
  );
}

export default ProductQntSelector;
