import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error404 from "../pages/Error404";
import Layout from "../components/Layout";
import ShoppingCart from "../pages/ShoppingCart";

const PageRoutes = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart/:id?" component={ShoppingCart} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={Error404} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default PageRoutes;
