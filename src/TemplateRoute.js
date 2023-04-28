import React from "react";
import { Route } from "react-router-dom";
import Footer from "./Footer";

function TemplateRoute(props) {
  return (
    <React.Fragment>
      

      <Route
        path={props.path}
        exact={props.exact}
        component={props.component}
      />

      <Footer />
    </React.Fragment>
  );
}

export default TemplateRoute;
