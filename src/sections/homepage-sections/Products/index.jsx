import React, { useState, useEffect } from "react";
import { Card, Image, ShoppingCart } from "../../../components";
import book from "../../../images/book.png";
import "./products.css";
import { productList } from "../../../utilities";

const Products = () => {
  const [cart, setCart] = useState([]);

  const onProductClick = (event) => {
    productList.map((el) => {
      if (el.id === event.currentTarget.id)
        setCart(
          cart
            .filter((el) => {
              return el.id !== event.currentTarget.id;
            })
            .concat(el)
        );
    });
    console.log(event.currentTarget.id);
  };

  const onDeleteClick = (event) => {
    setCart(
      cart.filter((el) => {
        return el.id !== event.currentTarget.parentNode.id;
      })
    );
  };

  return (
    <>
      <section className="product-container-outer">
        <h1 className="product-heading">Bestsellers</h1>
        <div className="product-container">
          {productList.map((el) => {
            return (
              <div className="card-wrapper">
                <Card
                  onClick={onProductClick}
                  id={el.id}
                  className="product-card"
                >
                  <Image src={book} className="product-image" alt="book" />
                  <p className="product-card-text">{el.name}</p>
                  <p className="product-card-text">£{el.price}</p>
                </Card>
              </div>
            );
          })}
          <ShoppingCart onClick={onDeleteClick} cart={cart} />
        </div>
      </section>
    </>
  );
};

export default Products;
