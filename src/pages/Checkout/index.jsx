import React from "react";
import { CheckoutContainer } from "../../sections";

const Checkout = ({ cart, setCart }) => {
  return <CheckoutContainer cart={cart} setCart={setCart} />;
};

export default Checkout;
