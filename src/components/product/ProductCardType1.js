function ProductCardType1({ product, className }) {
  console.log(ProductCardType1.name);

  return (
    <div className={`relative ${className || ""}`}>
      <div className={`flex items-center space-x-4`}>
        <div className="flex-shrink-0">
          <img
            className="w-16 h-16 rounded-sm"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="flex-grow">
          <p>
            <span className="font-medium">{product.name}</span> - SKU:{" "}
            {product.sku}
          </p>
          <div className="flex flex-row">
            <div className="flex-grow">SL: x{product.quantity}</div>{" "}
            <div>
              {(product.quantity * product.price).toLocaleString()} {"vnđ"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardType1;
