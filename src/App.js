import React from "react";
import "./App.css";
import { Homepage, About, Portfolio } from "./pages";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
      </Switch>
    </div>
  );
}

export default App;
