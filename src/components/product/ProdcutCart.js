import React from "react";
import ProductCard from "./ProductCard";

function ProductCart({ lsProduct, onUpdate, onDelete, className }) {
  console.log(ProductCart.name);

  const ProductElements = [];
  lsProduct.forEach((product, i) => {
    const Product = (
      <ProductCard
        className={
          i > 0 ? "border-t border-t-gray-300 dark:border-t-gray-600" : ""
        }
        key={product.sku}
        product={product}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    );
    ProductElements.push(Product);
  });

  return (
    <div className={`flex flex-col space-y-1 ${className || ""}`}>
      {ProductElements.length === 0 ? (
        <span className="mx-auto">Chưa có sản phẩm nào</span>
      ) : (
        ProductElements
      )}
    </div>
  );
}

export default ProductCart;
