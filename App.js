import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignInScreen from "./SignInScreen.js";
import SignUpScreen from "./SignUpScreen.js";
import TemplateRoute from "./TemplateRoute.js";
import "./index.css";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/sign-in" exact={true} component={SignInScreen} />

          <Route path="/sign-up" exact={true} component={SignUpScreen} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
