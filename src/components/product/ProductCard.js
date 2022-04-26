import DeleteIcon from "../../svg-icons/DeleteIcon";
import ProductQntSelector from "./ProductQntSelector";

function ProductCard({ product, onUpdate, onDelete, className }) {
  console.log(ProductCard.name);

  function setQuantity(quantity) {
    onUpdate && onUpdate(product, { ...product, quantity });
  }

  function deleteProduct() {
    onDelete && onDelete(product);
  }

  return (
    <div className={`relative ${className || ""}`}>
      <div className="absolute top-0 right-1">
        <button onClick={(e) => deleteProduct()}>
          <DeleteIcon className="w-3 h-3 rounded-full text-red-500 hover:text-red-700" />{" "}
        </button>
      </div>

      <div className={`flex items-center space-x-4`}>
        <div className="flex-shrink-0">
          <img
            className="w-16 h-16 rounded-sm"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="flex-1">
          <p className="font-medium">{product.name}</p>
          <p className="text-gray-500 dark:text-gray-400">{product.sku}</p>
          <p className="text-gray-500 dark:text-gray-400">
            {product.price.toLocaleString()} {"vnđ"}
          </p>
        </div>
        <div className="mt-4 flex flex-row text-xl font-semibold">
          <ProductQntSelector
            quantity={product.quantity}
            setQuantity={setQuantity}
            maxQuantity={product.stock}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
