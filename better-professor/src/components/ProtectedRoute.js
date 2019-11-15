// This function allows us to block access to components that require authorization.
// Additionally, if we aren't logged in, this component routes us to the login component.

import React from "react";
import { Route, Redirect } from "react-router-dom";


export default function ProtectedRoute(props) {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={renderProps => {
        if (localStorage.getItem("token")) {
          return <Component {...renderProps} />;
        } else {
          return <Redirect to="/Login" />;
        }
      }}
    />
  );
}
