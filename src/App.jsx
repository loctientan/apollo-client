import { BrowserRouter as Route, Switch, Redirect, Router } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Footer from "./layout/Footer/index";
import Header from "./layout/Header/index";
import Home from "./pages/Home/home";
import "./styles/app.scss";

function App() {
  return (
    <>
      <Header />   
      <Switch>
        <Redirect from="/Home" to="/" exact />
        <Route path="/">
          <Home />
        </Route>                 
      </Switch>
      <Footer />
      </>
  );
}

export default App;
