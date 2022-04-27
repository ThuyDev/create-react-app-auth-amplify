import React from "react";

import CustomerInfoInput from "../product/CustomerInfoInput";
import OrderSummary from "../product/OrderSummary";
import OrderTypeSelector from "../product/OrderTypeSelector";
import ProductCart from "../product/ProdcutCart";
import ProductSelector from "../product/ProductSelector";
import { useOrderCpn } from "../../hooks/useOrderCpn";
import PageNotFound from "../../pages/PageNotFound";
import ProductList from "../product/ProductList";
import { paymentMethods } from "../../utils/constants";

/* TODO:
1. Btn Clear
2. Btn Save
3. OrderSummary: popup ChietKhau
4. real API Save
5. real data ProductSelector
 */
function OrderCpn({ orderNo = null, isEdit = null, toggleMode = null }) {
  console.log(OrderCpn.name);

  const {
    order,
    onSelectProduct,
    onChangeOrderType,
    onUpdateCustomerInfo,
    onUpdateProduct,
    onDeleteProduct,
    onClear,
    onSave,
  } = useOrderCpn(orderNo);

  if (!order) return <PageNotFound />;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col space-y-4">
        <h1 className="mb-4 text-center">CREATE ORDER</h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {!isEdit ? (
            <div className="md:flex-1 space-y-4">
              <div className="h-8 px-4 py-auto">
                <button className="my-btn my-btn-link">Edit</button>
              </div>
              <ProductList
                className="my-card"
                lsProduct={order.lsProduct || []}
              />
            </div>
          ) : (
            <div className="md:flex-1 space-y-4">
              <ProductSelector className="h-8" onSelect={onSelectProduct} />
              <ProductCart
                className="my-card"
                lsProduct={order.lsProduct || []}
                onUpdate={onUpdateProduct}
                onDelete={onDeleteProduct}
              />
            </div>
          )}
          <div className="space-y-4 md:w-2/5">
            {!isEdit ? (
              <div className="h-8 px-4 py-auto">
                <p>
                  PT thanh toán:{" "}
                  <span className="font-medium">
                    {paymentMethods[order.orderType]}
                  </span>
                </p>
              </div>
            ) : (
              <OrderTypeSelector
                className="h-8"
                selectedValue={order.orderType}
                onChange={(value) => onChangeOrderType(value)}
              />
            )}
            <OrderSummary
              className="my-card"
              order={order}
              lsProduct={order.lsProduct || []}
            />
            <CustomerInfoInput
              className="my-card"
              customerInfo={order.customerInfo || {}}
              onUpdate={onUpdateCustomerInfo}
            />
            <div className="w-full text-center">
              <button className="my-btn" onClick={(e) => onClear()}>
                Hủy thay đổi
              </button>
              <button
                className="my-btn ml-2"
                disabled={!order.lsProduct || order.lsProduct.length === 0}
                onClick={(e) => onSave()}
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCpn;
