import React, { useState } from "react";
import "./shoppingCart.css";
import { Button } from "..";
import { Link } from "react-router-dom";

const ShoppingCart = ({ cart, setCart, buttonText, path, onButtonClick }) => {
  let totalPrice = 0;
  // let [price, setPrice] = useState(0);
  const onDeleteClick = (event) => {
    localStorage.removeItem(event.currentTarget.parentNode.id);
    setCart(
      cart.filter((el) => {
        return el.id !== event.currentTarget.parentNode.id;
      })
    );
    console.log(cart);
  };
  return (
    <>
      <div className="cart-notice">
        {cart.map((el) => {
          totalPrice += el.price;

          return (
            <>
              <p className="oneItem" id={el.id}>
                {el.name} - £{el.price}
                <span
                  onClick={onDeleteClick}
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
        <Link to={path}>
          <Button
            disabled={cart.length ? false : true}
            className="contactForm-button"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ShoppingCart;
