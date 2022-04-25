import React from "react";
import CustomerInfoInput from "../components/product/CustomerInfoInput";
import OrderSummary from "../components/product/OrderSummary";
import OrderTypeSelector from "../components/product/OrderTypeSelector";
import ProductCart from "../components/product/ProdcutCart";
import ProductSelector from "../components/product/ProductSelector";
import { useStore } from "../stores/useProductStore";
import * as mockDatas from "../mocks/mockData";

function OderNewPage(props) {
  // orderType: 1:$, 2:Bank, 3:COD
  const [order, setOrder] = React.useState({ orderType: "1" });
  const [customerInfo, setCustomerInfo] = React.useState({});

  const lsProduct = useStore((state) => state.lsProduct);
  const setLsProduct = useStore((state) => state.setLsProduct);
  const addProduct = useStore((state) => state.addProduct);
  const removeProduct = useStore((state) => state.removeProduct);

  React.useEffect(() => {
    (async () => {
      const lsProduct = await mockDatas.getLsProduct();
      setLsProduct(lsProduct);
    })();
  }, [setLsProduct]);

  // event ProductSelector::onSelect
  function onSelectProduct(product) {
    addProduct(product);
  }

  // event ProductCart::onUpdate
  function onUpdateProduct(oldProduct, newProduct) {
    let newLsProduct = lsProduct.map((product) => {
      if (product === oldProduct) return { ...newProduct };
      else return product;
    });

    setLsProduct(newLsProduct);
  }

  // event ProductCart::onDelete
  function onDeleteProduct(product) {
    console.log('delete pro');
    removeProduct(product);
  }

  // event OrderTypeSelector::onChange
  function onChangeOrderType(value) {
    setOrder((order) => ({ ...order, orderType: value }));
  }

  // event CustomerInfoInput::onUpdate
  function onUpdateCustomerInfo(value) {
    setCustomerInfo(value)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col space-y-4">
        <h1 className="mb-4 text-center">CREATE ORDER</h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="md:flex-1 space-y-4">
            <ProductSelector onSelect={onSelectProduct} />
            <ProductCart
              className="my-card"
              lsProduct={lsProduct}
              onUpdate={onUpdateProduct}
              onDelete={onDeleteProduct}
            />
          </div>
          <div className="space-y-4 md:pt-2 md:w-2/5">
            <OrderTypeSelector
              selectedValue={order.orderType}
              onChange={(value) => onChangeOrderType(value)}
            />
            <OrderSummary className="my-card" order={order} lsProduct={lsProduct} />
            <CustomerInfoInput
              className="my-card"
              customerInfo={customerInfo}
              onUpdate={onUpdateCustomerInfo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OderNewPage;
