function OrderSummary({ order, lsProduct, className }) {
  console.log(OrderSummary.name);

  const { discount } = order;
  const amount = (lsProduct || []).reduce(
    (preVal, product) => preVal + product.price * product.quantity,
    0
  );
  const total = (amount || 0) - (discount || 0);

  return (
    <div className={`flex flex-col space-y-1 ${className || ""}`}>
      <div className="flex flex-row dark:text-gray-400">
        <div className="flex-1">Tổng tiền hàng</div>
        <div className="text-right">{(amount || 0).toLocaleString()} vnđ</div>
      </div>
      <div className="flex flex-row border-b border-b-gray-300 dark:text-gray-400 dark:border-b-gray-600">
        <div className="flex-1">Chiết khấu</div>
        <div className="text-right">{(discount || 0).toLocaleString()} vnđ</div>
      </div>
      <div className="flex flex-row">
        <div className="flex-1 font-medium">Thành tiền</div>
        <div className="text-right font-medium">
          {total.toLocaleString()} vnđ
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
