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
import { useNavigate } from "react-router-dom";

/* TODO:
1. Btn Clear
2. Btn Save
3. OrderSummary: popup ChietKhau
4. real API Save
5. real data ProductSelector
 */
function OrderCpn({ orderNo = null, isEdit = null, toggleMode = null }) {
  console.log(OrderCpn.name);

  const mode = orderNo ? (isEdit ? "edit" : "view") : "new";

  const navigate = useNavigate();

  const {
    order,
    onSelectProduct,
    onChangeOrderType,
    onUpdateCustomerInfo,
    onUpdateProduct,
    onDeleteProduct,
    onClear,
    onSave,
    reload,
    isChanged,
  } = useOrderCpn(orderNo);

  function clickClear() {
    onClear();
    if (orderNo) toggleMode && toggleMode();
  }

  function clickSave() {
    onSave()
      .then((retOrder) => {
        if (!orderNo) {
          // - switch to view order page
          navigate(`/order/${retOrder.orderNo}`);
        } else {
          // toggle to mode 'view'
          toggleMode && toggleMode();
          // and reload data
          reload();
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }

  if (!order) return <PageNotFound />;

  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex flex-col space-y-4">
        <div>
          <h2 hidden={mode === "new"} className="mb-4 text-center">
            Số đơn hàng:{" "}
            <span className="w-32 text-3xl font-medium tracking-widest">
              {orderNo?.toUpperCase()}
            </span>
          </h2>
          <h1 hidden={mode !== "new"} className="mb-4 text-center">
            CREATE ORDER
          </h1>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 ">
          {/* Product List */}
          {mode === "view" ? (
            <div className="space-y-4 md:flex-1">
              <div className="h-8"></div>
              <ProductList
                className="my-card"
                lsProduct={order.lsProduct || []}
              />
            </div>
          ) : (
            <div className="space-y-4 md:flex-1">
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
            {/* Payment Method */}
            {mode === "view" ? (
              <div className="py-auto h-8 px-4">
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
            {/* Order summary */}
            <OrderSummary
              className="my-card"
              order={order}
              lsProduct={order.lsProduct || []}
            />
            {/* Customer info */}
            <CustomerInfoInput
              className="my-card"
              customerInfo={order.customerInfo || {}}
              onUpdate={onUpdateCustomerInfo}
              mode={mode === "view" ? "view" : "edit"}
            />
            {/* Buttons */}
            <div className="w-full text-center">
              {mode === "view" ? (
                <>
                  <button className="my-btn" onClick={(e) => toggleMode()}>
                    Sửa thông tin
                  </button>
                  <button
                    className="my-btn ml-2"
                    onClick={(e) => window.history.back()}
                  >
                    Close
                  </button>
                </>
              ) : (
                <>
                  <button className="my-btn" onClick={(e) => clickClear()}>
                    Hủy thay đổi
                  </button>
                  <button
                    className="my-btn ml-2"
                    disabled={
                      !order.lsProduct ||
                      order.lsProduct.length === 0 ||
                      !isChanged()
                    }
                    onClick={(e) => clickSave()}
                  >
                    Lưu
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCpn;
