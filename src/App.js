import React from "react";
import "./App.css";
import "reactstrap";
import "bootstrap";
import NavigationBar from "./components/navbar";
import FooterBar from "./components/footerbar";
import AutoCarousel from "./components/carousel";

import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <>
      <header>
        <NavigationBar></NavigationBar>
      </header>
      <div className="container">
        <AutoCarousel></AutoCarousel>
      </div>
      <footer>
        <FooterBar></FooterBar>
      </footer>
    </>
  );
}

export default App;
