import React, { useState } from "react";
import "./App.css";
import Header from "./common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./common/footer/Footer.jsx";
import Login from "./components/account/Login.jsx";
import Signup from "./components/account/SignUp.jsx";
import Cart from "./components/cark/Cart.jsx";
import Home from "./components/home/Home.jsx";
import ProductForm from "./components/product/ProductForm.jsx";

function App() {
  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path="/" exact>
            <Home CartItem={CartItem} />
          </Route>
          <Route path="/cark" exact>
            <Cart
              CartItem={CartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
              setCartItem={setCartItem}
            />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/crearProducto" exact>
            <ProductForm />
          </Route>
          <Route path="/ProductForm" exact>
            <ProductForm />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
