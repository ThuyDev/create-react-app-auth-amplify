function CustomerInfoInput({
  mode = "edit",
  customerInfo,
  onUpdate,
  className,
}) {
  console.log(CustomerInfoInput.name);

  const { customerTel, customerName, customerAddress } = customerInfo;

  function onChangeInput(name, value) {
    onUpdate({ ...customerInfo, [name]: value });
  }

  return (
    <div className={`flex flex-col space-y-1 ${className || ""}`}>
      <h4 className="pb-1 font-medium">Thông tin khách hàng:</h4>

      <div className="flex flex-row">
        <label htmlFor="customer-name" className="w-24">
          SĐT
        </label>
        <input
          id="customer-name"
          className="flex-1"
          type={"text"}
          value={customerTel || ""}
          onChange={(e) => onChangeInput("customerTel", e.target.value)}
          disabled={mode === "view"}
        />
      </div>
      <div className="flex flex-row">
        <label htmlFor="customer-name" className="w-24">
          Tên
        </label>
        <input
          id="customer-name"
          className="flex-1"
          type={"text"}
          value={customerName || ""}
          onChange={(e) => onChangeInput("customerName", e.target.value)}
          disabled={mode === "view"}
        />
      </div>
      <div className="flex flex-row">
        <label htmlFor="customer-name" className="w-24">
          Địa chỉ
        </label>
        <input
          id="customer-name"
          className="flex-1"
          type={"text"}
          value={customerAddress || ""}
          onChange={(e) => onChangeInput("customerAddress", e.target.value)}
          disabled={mode === "view"}
        />
      </div>
    </div>
  );
}

export default CustomerInfoInput;
