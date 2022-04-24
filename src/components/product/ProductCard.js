import ProductQntSelector from "./ProductQntSelector";

function ProductCard({ product, updateProduct }) {
  function setQuantity(quantity) {
    updateProduct(product, { ...product, quantity });
  }

  return (
    <div className="flex items-center space-x-4 my-card">
      <div className="flex-shrink-0">
        <img
          className="w-24 h-24 rounded-sm"
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
      <div className="flex flex-row text-xl font-semibold">
        <ProductQntSelector
          quantity={product.quantity}
          setQuantity={setQuantity}
          maxQuantity={product.stock}
        />
      </div>
    </div>
  );
}

export default ProductCard;
