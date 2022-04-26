import React from "react";
import CustomerInfoInput from "../components/product/CustomerInfoInput";
import OrderSummary from "../components/product/OrderSummary";
import OrderTypeSelector from "../components/product/OrderTypeSelector";
import ProductCart from "../components/product/ProdcutCart";
import ProductSelector from "../components/product/ProductSelector";
import { useStore } from "../stores/useProductStore";

const orderInitData = { orderType: "1" }

/* TODO:
1. Btn Clear
2. Btn Save
3. OrderSummary: popup ChietKhau
4. real API Save
5. real data ProductSelector
 */
function OderNewPage(props) {
  console.log(OderNewPage.name);

  // orderType: 1:$, 2:Bank, 3:COD
  const [order, setOrder] = React.useState(orderInitData);
  const [customerInfo, setCustomerInfo] = React.useState({});

  const lsProduct = useStore((state) => state.lsProduct);
  const setLsProduct = useStore((state) => state.setLsProduct);
  const addProduct = useStore((state) => state.addProduct);
  const removeProduct = useStore((state) => state.removeProduct);

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
    console.log("delete pro");
    removeProduct(product);
  }

  // event OrderTypeSelector::onChange
  function onChangeOrderType(value) {
    setOrder((order) => ({ ...order, orderType: value }));
  }

  // event CustomerInfoInput::onUpdate
  function onUpdateCustomerInfo(value) {
    setCustomerInfo(value);
  }

  // event button::onClear
  function onClear() {
    // TODO: - confirm popup
    // - confirmed: clear input
    setLsProduct([]);
    setCustomerInfo({});
    setOrder(orderInitData)
  }

  // event button::onSave
  function onSave() {
    // TODO: - confirm popup
    // - call real api save data
    setLsProduct([]);
    // - switch to view order page
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col space-y-4">
        <h1 className="mb-4 text-center">CREATE ORDER</h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="md:flex-1 space-y-4">
            <ProductSelector className="h-8" onSelect={onSelectProduct} />
            <ProductCart
              className="my-card"
              lsProduct={lsProduct}
              onUpdate={onUpdateProduct}
              onDelete={onDeleteProduct}
            />
          </div>
          <div className="space-y-4 md:w-2/5">
            <OrderTypeSelector
              className="h-8"
              selectedValue={order.orderType}
              onChange={(value) => onChangeOrderType(value)}
            />
            <OrderSummary
              className="my-card"
              order={order}
              lsProduct={lsProduct}
            />
            <CustomerInfoInput
              className="my-card"
              customerInfo={customerInfo}
              onUpdate={onUpdateCustomerInfo}
            />
            <div className="w-full text-center">
              <button className="my-btn" onClick={(e) => onClear()}>
                Clear
              </button>
              <button
                className="my-btn ml-2"
                disabled={!lsProduct || lsProduct.length === 0}
                onClick={(e) => onSave()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OderNewPage;
