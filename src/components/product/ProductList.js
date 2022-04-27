import ProductCardType1 from "./ProductCardType1";

function ProductList({ lsProduct, className }) {
    console.log(ProductList.name);

    const ProductElements = [];
    lsProduct.forEach((product, i) => {
      const Product = (
        <ProductCardType1
          className={
            i > 0 ? "border-t border-t-gray-300 dark:border-t-gray-600" : ""
          }
          key={product.sku}
          product={product}
        />
      );
      ProductElements.push(Product);
    });
  
    return (
      <div className={`flex flex-col space-y-1 ${className || ""}`}>
        {ProductElements.length === 0 ? (
          <span className="mx-auto">Không có sản phẩm nào</span>
        ) : (
          ProductElements
        )}
      </div>
    );
}

export default ProductList