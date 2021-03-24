import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import HomePage from "./components/HomePage";
import OrderMode from "./components/OrderMode";
import Products from "./components/Products";
import ReviewPage from "./components/ReviewPage";
import ProductPage from "./components/ProductPage";
import SearchPage from "./components/SearchPage";
import BranchPage from "./components/BranchPage";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/area">
            <OrderMode></OrderMode>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>
          <Route exact path="/review">
            <ReviewPage></ReviewPage>
          </Route>
          <Route exact path="/product">
            <ProductPage></ProductPage>
          </Route>
          <Route exact path="/search">
            <SearchPage></SearchPage>
          </Route>
          <Route exact path="/branch">
            <BranchPage></BranchPage>
          </Route>
          <Route exact path="/checkout">
            <CheckoutPage></CheckoutPage>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
