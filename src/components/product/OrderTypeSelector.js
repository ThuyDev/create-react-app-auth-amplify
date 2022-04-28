import { paymentMethods } from "../../utils/constants";

const lsOrderType = [
  {
    id: "orderType-cash",
    value: "1",
    label: paymentMethods["1"],
  },
  {
    id: "orderType-bank",
    value: "2",
    label: paymentMethods["2"],
  },
];

function OrderTypeSelector({ selectedValue, onChange, className }) {
  console.log(OrderTypeSelector.name);

  return (
    <div className={`flex flex-row space-x-8 px-8 ${className || ""}`}>
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
          <label className="ml-2" htmlFor={type.id}>
            {type.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default OrderTypeSelector;
