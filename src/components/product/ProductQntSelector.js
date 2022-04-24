import MinusIcon from "../../svg-icons/MinusIcon";
import PlusIcon from "../../svg-icons/PlusIcon";

function ProductQntSelector({ quantity, setQuantity, maxQuantity }) {
  const num = parseInt(quantity || "1");
  const maxNum = maxQuantity ? parseInt(maxQuantity) : null;

  const updateQuantity = (quantity) => {
    if (quantity > 0 && (!maxNum || quantity <= maxNum))
      setQuantity && setQuantity(quantity);
  };

  const disableMinus = num <= 1;
  const disablePlus = maxNum && num >= maxNum;

  return (
    <div className="flex flex-row items-center space-x-2">
      <button
        className={` ${disableMinus ? "text-gray-700" : "text-blue-500"}`}
        disabled={disableMinus}
        onClick={() => {
          updateQuantity(num - 1);
        }}
      >
        <MinusIcon />
      </button>
      <input
        className="w-16 text-center"
        type={"number"}
        value={quantity}
        min="0"
        max={`${maxNum ? maxNum : ""}`}
        onChange={(e) => {
          updateQuantity(e.target.value);
        }}
      />
      <button
        className={` ${disablePlus ? "text-gray-700" : "text-blue-500"}`}
        disabled={disablePlus}
        onClick={() => {
          updateQuantity(num + 1);
        }}
      >
        <PlusIcon />
      </button>
    </div>
  );
}

export default ProductQntSelector;
