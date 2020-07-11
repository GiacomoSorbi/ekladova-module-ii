import React from "react";
import "./shoppingCart.css";
import { Button } from "..";

const ShoppingCart = ({ cart, onClick }) => {
  let totalPrice = 0;
  return (
    <>
      <div className="cart-notice">
        {cart.map((el) => {
          totalPrice += el.price;

          return (
            <>
              <p id={el.id}>
                {el.name} - £{el.price}
                <span
                  onClick={onClick}
                  className="deleteIcon"
                  role="img"
                  aria-label="delete"
                >
                  ❌
                </span>
              </p>
            </>
          );
        })}
        <p className={cart.length ? "totalPrice" : "hidden"}>
          Total: £{totalPrice}
        </p>
        <a href="/">
          <Button
            disabled={cart.length ? false : true}
            className="contactForm-button"
          >
            To checkout
          </Button>
        </a>
      </div>
    </>
  );
};

export default ShoppingCart;
