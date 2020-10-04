import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error404 from "../pages/Error404";
import Layout from "../components/Layout";
import ShoppingCart from "../pages/ShoppingCart";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";

const AppRoutes = () => {  

  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }

      setChecking(false)

    });
  }, [dispatch, setChecking, setIsLoggedIn])

  if (checking){
    return (
      <h1>Loading...</h1>
    )
  }

  return (
  <BrowserRouter>
    <div>
      <Layout>
        <Switch>
          <PublicRoute 
            isAuth={isLoggedIn}
            path="/login" component={Login}
          
          />
          <PublicRoute 
            isAuth={isLoggedIn}
            exact path="/register" component={Register} 
          />
          <PrivateRoute 
            isAuth={isLoggedIn}
            exact path="/" component={Home}
          />
          <PrivateRoute 
            isAuth={isLoggedIn}
            exact path="/cart" component={ShoppingCart} 
          />
          <PrivateRoute 
            isAuth={isLoggedIn}
            exact path="/product/:id" component={Product}
          />
          
          
          <Route component={Error404} />
        </Switch>
      </Layout>
    </div>
  </BrowserRouter>
  )};

export default AppRoutes;
