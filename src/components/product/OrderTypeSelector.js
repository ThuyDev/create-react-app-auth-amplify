const lsOrderType = [
  {
    id: "orderType-cash",
    value: "1",
    label: "Cash"
  },
  {
    id: "orderType-bank",
    value: "2",
    label: "Bank"
  },
  {
    id: "orderType-cod",
    value: "3",
    label: "COD"
  },
];

function OrderTypeSelector({ selectedValue, onChange }) {
  return (
    <div className="flex flex-row space-x-8 px-8">
      {lsOrderType.map((type) => (
        <div key={type.id}>
          <input
            type={"radio"}
            name={"orderType"}
            id={type.id}
            value={type.value}
            checked={type.value === selectedValue}
            onChange={(e) => onChange && onChange(e.target.value)}
          />
          <label className="ml-2" htmlFor={type.id}>{type.label}</label>
        </div>
      ))}
    </div>
  );
}

export default OrderTypeSelector;