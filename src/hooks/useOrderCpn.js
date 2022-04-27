import React from "react";
import { useNavigate } from "react-router-dom";
import { useOrderStore } from "../stores/useOrderStore";

// useOrder hook provide: an order state and funcions
// - order state: state of an order
// - onChangeOrderType: update order.orderType state
// - onChangeOrderType: update order.orderType state
// - onUpdateCustomerInfo: update order.customerInfo state
// - onSelectProduct: update order.lsProduct state (add 1 product to order)
// - onUpdateProduct: update order.lsProduct state (change product info)
// - onDeleteProduct: update order.lsProduct state (remove a product from order)
// - initData: reset order
export function useOrderCpn(orderNo) {
  const navigate = useNavigate();

  const getInitOrder = useOrderStore((state) => state.getInitOrder);
  const getOrder = useOrderStore((state) => state.getOrder);
  const getNewOrderNo = useOrderStore((state) => state.getNewOrderNo);
  const addOrder = useOrderStore((state) => state.addOrder);
  const updateOrder = useOrderStore((state) => state.updateOrder);

  const [order, setOrder] = React.useState(null);
  React.useEffect(() => {
    setOrder(orderNo ? getOrder(orderNo) : getInitOrder());
  }, [getInitOrder, getOrder, orderNo]);

  function onSelectProduct(product) {
    if (!product.sku) return;

    // find product existed
    const existProduct = order.lsProduct.find((p) => p.sku === product.sku);

    // if new sku
    if (!existProduct)
      return setOrder({ ...order, lsProduct: [...order.lsProduct, product] });

    // increase quantity 1
    const lsProductUpdated = order.lsProduct.map((p) => {
      if (p !== existProduct) {
        return p;
      } else {
        return { ...p, quantity: parseInt(p.quantity) + 1 };
      }
    });
    setOrder({
      ...order,
      lsProduct: lsProductUpdated,
    });
  }

  // event OrderTypeSelector::onChange
  function onChangeOrderType(value) {
    setOrder((order) => ({ ...order, orderType: value }));
  }

  // event CustomerInfoInput::onUpdate
  function onUpdateCustomerInfo(value) {
    setOrder((order) => ({ ...order, customerInfo: value }));
  }

  // reset component data
  function initData() {
    setOrder(orderNo ? getOrder(orderNo) : getInitOrder());
  }

  // event ProductCart::onUpdate
  function onUpdateProduct(oldProduct, newProduct) {
    let newLsProduct = order.lsProduct.map((product) => {
      if (product === oldProduct) return { ...newProduct };
      else return product;
    });
    setOrder({ ...order, lsProduct: newLsProduct });
  }

  // event ProductCart::onDelete
  function onDeleteProduct(product) {
    setOrder({
      ...order,
      lsProduct: order.lsProduct.filter((p) => p !== product),
    });
  }

  // event button::onClear
  function onClear() {
    // TODO: - confirm popup
    // - confirmed: clear input
    initData();
  }

  // event button::onSave
  function onSave() {
    // [TODO] - confirm popup
    // [TODO] - call real api save data

    let newOrderNo;
    if (!orderNo) newOrderNo = getNewOrderNo();

    // save order
    if (orderNo) updateOrder(order);
    else addOrder({ orderNo: newOrderNo, ...order });

    // // - switch to view order page
    navigate(`/order/${orderNo || newOrderNo}`);

    // // - init data
    initData();
  }

  return {
    order,
    onChangeOrderType,
    onUpdateCustomerInfo,
    onSelectProduct,
    onUpdateProduct,
    onDeleteProduct,
    onClear, 
    onSave,
  };
}
