import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";

import Navbar from "./components/Navbar";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import Home from "./pages/Home";
import Transfer from "./pages/Transfer";

import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/transfer" exact component={Transfer} />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
