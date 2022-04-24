import React from "react";
import ProductCard from "../components/product/ProductCard";

function SearchProductCpn(props) {
  return (
    <div className="text-center">
      <input
        type={"text"}
        id={"searchProductBox"}
        placeholder="nhập mã và click 'thêm'"
      />
      <button className="my-btn my-btn-default ml-2">thêm</button>
    </div>
  );
}

function ProductCartCpn(props) {
  const [lsProduct, setLsProduct] = React.useState(
    [...Array(5).keys()].map((key) => {
      const quantity = parseInt(Math.random() * 10) + 1;
      return {
        name: `Sản phẩm ${key + 1}`,
        sku: "SP" + `${key + 1}`.padStart(3, "0"),
        price: parseInt(Math.random() * 100000),
        image: `https://picsum.photos/200?random=${key + 1}`,
        quantity: quantity,
        stock: quantity + 5,
      };
    })
  );

  function updateProduct(oldProduct, newProduct) {
    let newLsProduct = lsProduct.map((product) => {
      if (product === oldProduct) return { ...newProduct };
      else return product;
    });
    setLsProduct(newLsProduct);
  }

  const ProductElements = [];
  lsProduct.forEach((product) => {
    console.log(product.sku);
    const Product = (
      <ProductCard
        key={product.sku}
        product={product}
        updateProduct={updateProduct}
      />
    );
    ProductElements.push(Product);
  });

  return <div className="flex flex-col space-y-1">{ProductElements}</div>;
}

function OderNewPage(props) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col">
        <h1 className="mb-4 text-center">CREATE ORDER</h1>
        <SearchProductCpn />
        <ProductCartCpn />
      </div>
    </div>
  );
}

export default OderNewPage;
