import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen.js";
import SignInScreen from "./SignInScreen.js";
import SignUpScreen from "./SignUpScreen.js";
import ProductScreen from "./ProductScreen.js";
import TemplateRoute from "./TemplateRoute.js";
import Header from "./Header.js";
import aboutUs from "./our-team.js";
import './index.css';



function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Switch>
          <TemplateRoute path="/" exact={true} component={HomeScreen} />
          <Route path="/sign-in" exact={true} component={SignInScreen} />
          <Route path="/pricing" exact={true} component={ProductScreen} />
          <Route path="/sign-up" exact={true} component={SignUpScreen} />
          <Route path="/our-team" exact={true} component={aboutUs} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
