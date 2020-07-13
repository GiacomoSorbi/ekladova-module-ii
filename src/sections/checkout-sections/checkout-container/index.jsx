import React, { useState } from "react";
import "./Checkout-container.css";
import { ShoppingCart, Button } from "../../../components";

const CheckoutContainer = ({ children }) => {
  const itemDisplay = localStorage.getItem("cart items: ");

  const [checkoutCart, setCheckoutCart] = useState(JSON.parse(itemDisplay));
  const [checkout, setCheckout] = useState(false);

  const onButtonClick = () => {
    setCheckout(true);
  };

  return (
    <div className="c-container">
      <div className="c-display">
        {checkoutCart.length && checkout === false ? (
          <ShoppingCart
            setCart={setCheckoutCart}
            cart={checkoutCart}
            buttonText="Checkout"
            onButtonClick={onButtonClick}
          />
        ) : checkout ? (
          <>
            <p>Thank you!</p>
            <a href="/#productListSection">
              <Button className="contactForm-button">Buy more stuff</Button>
            </a>
          </>
        ) : (
          <>
            <p>Add some items to checkout</p>
            <a href="/#productListSection">
              <Button className="contactForm-button">To products</Button>
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutContainer;
