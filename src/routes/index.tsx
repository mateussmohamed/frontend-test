import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import ProtectedRoute from "@b8/components/protected-route";

import Home from "@b8/modules/home";
import Welcome from "@b8/modules/welcome";
import SignIn from "@b8/modules/signin";
import SignUp from "@b8/modules/signup";
import RecoverPassword from "@b8/modules/recover-password";

function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/recover-password">
          <RecoverPassword />
        </Route>
        <ProtectedRoute exact path="/welcome">
          <Welcome />
        </ProtectedRoute>
        <ProtectedRoute exact path="/home">
          <Home />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
