import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Transfer from "./pages/Transfer";

import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/transfer" exact component={Transfer} />
        </Switch>
      </Router>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
