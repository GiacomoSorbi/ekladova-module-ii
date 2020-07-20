import React, { useState } from "react";
import "./Checkout-container.css";
import { ShoppingCart, Button, Image } from "../../../components";
import { Link } from "react-router-dom";
import cat from "../../../images/cat.png";

const CheckoutContainer = ({ cart, setCart }) => {
  const [checkout, setCheckout] = useState(false);

  const onButtonClick = () => {
    setCheckout(true);
    setTimeout(() => setCart([]), 1500);
  };

  return (
    <section className="checkout">
      <div className="c-container">
        <div className="c-display">
          {cart.length && !checkout ? (
            <ShoppingCart
              setCart={setCart}
              cart={cart}
              buttonText="Checkout"
              onButtonClick={onButtonClick}
            />
          ) : checkout ? (
            <>
              <p>Thank you!</p>
              <Image src={cat} />
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
    </section>
  );
};

export default CheckoutContainer;
