import create from "zustand";
import { persist } from "zustand/middleware";
import moment from "moment";

var lsMonthStr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C"];

// get order by orderNo
function getOrder(store, orderNo) {
  return store.lsOrder.filter((o) => o.orderNo === orderNo)[0] || null;
}

function getNewOrderNo(store) {
  const today = moment();
  const orderNoPre = `A${today.year() % 10}${lsMonthStr[today.month()]}`;

  const lsOrderNo = store.lsOrder
    .filter((o) => o.orderNo.startsWith(orderNoPre))
    .map(({ orderNo }) => orderNo);

  if (lsOrderNo.length === 0) {
    return orderNoPre + "0001";
  } else {
    const maxOrderNo = lsOrderNo.reduce((preVal, orderNo) =>
      preVal < orderNo ? orderNo : preVal
    );

    const maxNo = parseInt(maxOrderNo.substring(3)) + 1;

    return orderNoPre + `${maxNo}`.padStart(4, "0");
  }
}

function addOrder(setStore, order) {
  setStore((state) => ({
    lsOrder: [...state.lsOrder, order],
  }));
}

function updateOrder(setStore, order) {
  setStore((state) => ({
    lsOrder: state.lsOrder.map((o) => {
      if (o.orderNo !== order.orderNo) return o;
      else return { ...order };
    }),
  }));
}

function removeOrder(setStore, order) {
  setStore((state) => ({
    lsOrder: state.lsOrder.filter((o) => o !== order),
  }));
}

function clear(setStore) {
  setStore({ lsOrder: [] });
}

// get an initial order object
function getInitOrder() {
  return {
    lsProduct: [],
    customerInfo: {
      customerTel: "",
      customerName: "",
      customerAddress: "",
    },
    orderType: "1",
  };
}

function cloneOrder(order) {
  return {
    ...order,
    lsProduct: order.lsProduct.map((p) => ({ ...p })),
    customerInfo: { ...order.customerInfo },
  };
}

export const useOrderStore = create(
  persist(
    (set, get) => ({
      lsOrder: [],
      // get order by orderNo
      getOrder: (orderNo) => getOrder(get(), orderNo),
      // get order by orderNo
      getNewOrderNo: () => getNewOrderNo(get()),
      // add new order
      addOrder: (order) => addOrder(set, order),
      // update order
      updateOrder: (order) => updateOrder(set, order),
      // remove an order
      removeOrder: (order) => removeOrder(set, order),
      // clear store
      clear: () => clear(set),
      // get an initial order
      getInitOrder: () => getInitOrder(),
      // get an initial order
      cloneOrder: () => cloneOrder(),
    }),
    {
      name: "order-store",
    }
  )
);
