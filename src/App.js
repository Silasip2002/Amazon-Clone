import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { render } from "@testing-library/react";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: "",
        });
      }
    });

    return () => {
      // Any clean up are going here...
      unsubscribe();
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
