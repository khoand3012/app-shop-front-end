import React from "react";
import "./App.css";
import NavigationBar from "./components/navbar";
import FooterBar from "./components/footerbar";

import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import Contacts from "./contacts";
import Products from "./products/index";
import About from "./about";
import Home from "./home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <NavigationBar></NavigationBar>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contacts} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
      </Switch>
      <footer>
        <FooterBar></FooterBar>
      </footer>
    </Router>
  );
}

export default App;
