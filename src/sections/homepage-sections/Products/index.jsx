import React, { useState } from "react";
import { Card, Image } from "../../../components";
import book from "../../../images/book.png";
import "./products.css";
import { productList } from "../../../utilities";

const Products = () => {
  const [cart, setCart] = useState([]);
  const [click, setClick] = useState(false);

  const onProductClick = (event) => {
    setClick(true);
    setTimeout(() => setClick(false), 1000);
    productList.map((el) => {
      el.id === event.target.id || el.id + "card" === event.target.id
        ? setCart(
            cart
              .filter((el) => {
                return (
                  el.id !== event.target.id &&
                  el.id + "card" !== event.target.id
                );
              })
              .concat(el)
          )
        : console.log("No");
    });
    console.log(event.target.id);
  };

  return (
    <>
      <section className="product-container-outer">
        <div id="productCart" className={click ? "cart-notice" : "hidden"}>
          {cart.map((el) => {
            return (
              <>
                <p>
                  {el.name} - £{el.price}
                </p>
              </>
            );
          })}
        </div>
        <h1 className="product-heading">Bestsellers</h1>
        <div className="product-container">
          {productList.map((el) => {
            return (
              <div id={el.id} onClick={onProductClick} className="card-wrapper">
                <Card className="product-card">
                  <Image
                    // id={el.id + "card"}
                    src={book}
                    className="product-image"
                    alt="book"
                  />
                  <p className="product-card-text">{el.name}</p>
                  <p className="product-card-text">£{el.price}</p>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
