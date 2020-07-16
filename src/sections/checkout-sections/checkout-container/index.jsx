import React, { useState } from "react";
import "./Checkout-container.css";
import { ShoppingCart, Button } from "../../../components";
import { Link } from "react-router-dom";

const CheckoutContainer = ({ cart, setCart }) => {
  const [checkout, setCheckout] = useState(false);

  const onButtonClick = () => {
    setCheckout(true);
    setTimeout(() => setCart([]), 1000);
  };

  return (
    <div className="checkout">
      <div className="c-container">
        <div className="c-display">
          {cart.length && checkout === false ? (
            <ShoppingCart
              setCart={setCart}
              cart={cart}
              buttonText="Checkout"
              onButtonClick={onButtonClick}
            />
          ) : checkout ? (
            <>
              <p>Thank you!</p>
            </>
          ) : (
            <>
              <p>Add some items to checkout</p>
              <Link to="/#productListSection">
                <Button className="contactForm-button">To products</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutContainer;
