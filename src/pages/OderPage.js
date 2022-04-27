import React from "react";
import { useParams } from "react-router-dom";

import OrderCpn from "../components/order/OrderCpn";
import { useToggle } from "../hooks/useToggle";

function OderPage(props) {
  let { orderNo } = useParams();

  const {isState: isEdit, toggle: toggleEdit} = useToggle();

  return <OrderCpn orderNo={orderNo} isEdit={isEdit} toggleMode={toggleEdit}/>;
}

export default OderPage;
