import React from "react";

function SearchProductCpn(props) {
  return (
    <div className="text-center">
      <input
        type={"text"}
        id={"searchProductBox"}
        placeholder="nhập mã/tên và click 'thêm'"
      />
      <button className="btn btn-default ml-2">thêm</button>
    </div>
  );
}

function ProductCartCpn(props) {
  const [lsProduct, setLsProduct] = React.useState(
    [...Array(3).keys()].map((key) => ({
      name: `Sản phẩm ${key + 1}`,
      sku: "SP" + `${key + 1}`.padStart(3, "0"),
      price: parseInt(Math.random() * 100000),
      image: `https://picsum.photos/200?random=${key + 1}`,
      quantity: parseInt(Math.random() * 10),
    }))
  );

  console.log(lsProduct);

  const ProductElements = [];
  lsProduct.forEach((product) => {
    console.log(product.sku);
    const Product = (
      <div key={product.sku}>
        {product.name} - {product.sku} - {product.price}
        <img src={product.image} alt={product.name} />
      </div>
    );
    ProductElements.push(Product);
  });

  return <div className="flex flex-col space-y-1">{ProductElements}</div>;
}

function OderNewPage(props) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col">
        <h1 className="mb-4 text-center">CREATE ORDER</h1>
        <SearchProductCpn />
        <ProductCartCpn />
      </div>
    </div>
  );
}

export default OderNewPage;
