import React from "react";
import { Banner, Pen, Textboxes, Products, Contact } from "../../sections";

const Homepage = ({ cart, setCart, onProductClick, productList }) => {
  return (
    <>
      <Banner />
      <Pen />
      <Textboxes />
      <Products
        cart={cart}
        setCart={setCart}
        onProductClick={onProductClick}
        productList={productList}
      />
      <Contact />
    </>
  );
};

export default Homepage;
