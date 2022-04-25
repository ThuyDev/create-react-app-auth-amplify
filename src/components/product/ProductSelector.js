import React from "react";
import * as mockDatas from "../../mocks/mockData";

function ProductSelector({ onSelect, className }) {
  // console.log(ProductSelector.name);

  const [sku, setSku] = React.useState("");

  function selectProduct() {
    if (sku && onSelect)
      (async () => {
        const newProduct = await mockDatas.getProduct(sku);
        onSelect(newProduct);
        setSku("");
      })();
  }

  return (
    <div className={`text-center ${className || ""}`}>
      <input
        type={"text"}
        id={"searchProductBox"}
        placeholder="nhập SKU và click 'thêm'"
        value={sku}
        onChange={(e) => setSku(e.target.value)}
      />
      <button
        className="my-btn my-btn-default ml-2"
        onClick={() => selectProduct()}
      >
        thêm
      </button>
    </div>
  );
}

export default ProductSelector;
