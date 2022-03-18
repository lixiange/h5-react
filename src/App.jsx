import React, { Component } from "react";
import { AppWrapper, WechatShareRoute, AppRoute } from "./Components/BasePage";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import List from "./pages/cart";
import ProductDetail from "./pages/productDetail";
import "./static/style/common.scss";

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppRoute exact path="/shop" tabRoute>
          <Shop />
        </AppRoute>
        <AppRoute exact path="/cart" tabRoute>
          <Cart />
        </AppRoute>
        <AppRoute exact path="/list" tabRoute>
          <List />
        </AppRoute>
        <AppRoute exact path="/productDetail/:pid">
          <ProductDetail />
        </AppRoute>
      </AppWrapper>
    );
  }
}
export default App;
