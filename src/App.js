import React, { useState } from "react";
import "./App.css";
import { Homepage, About, Portfolio, Checkout } from "./pages";
import { Switch, Route } from "react-router-dom";
import { productList } from "./utilities";
function App() {
  const [cart, setCart] = useState([]);

  const onProductClick = (event) => {
    productList.map((el) => {
      if (el.id === event.currentTarget.id) {
        setCart(
          cart
            .filter((el) => {
              return el.id !== event.currentTarget.id;
            })
            .concat(el)
        );

        console.log(localStorage);
      }
    });
  };

  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Homepage
              cart={cart}
              setCart={setCart}
              onProductClick={onProductClick}
              productList={productList}
            />
          )}
        />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route
          path="/checkout"
          exact
          component={() => <Checkout cart={cart} setCart={setCart} />}
        />
      </Switch>
    </div>
  );
}

export default App;
