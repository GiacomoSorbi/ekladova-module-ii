import React from "react";
import { Card, Image, ShoppingCart } from "../../../components";
import book from "../../../images/book.png";
import "./products.css";

const Products = ({ cart, setCart, onProductClick, productList }) => {
  return (
    <>
      <section id="productListSection" className="product-container-outer">
        <h1 className="h1-header">Bestsellers</h1>
        <div className="product-container">
          {productList.map((el) => {
            return (
              <div key={el.id} className="card-wrapper">
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
          <ShoppingCart
            setCart={setCart}
            buttonText="To checkout"
            cart={cart}
            path={"/checkout"}
          />
        </div>
      </section>
    </>
  );
};

export default Products;
