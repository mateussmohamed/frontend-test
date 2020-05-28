import React, { useState, useEffect } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { isAuthenticated } from "@b8/services/auth";

const ProtectedRoute = ({ children, ...rest }: RouteProps) => {
  const [isLogged, setReady] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkIfLogged = async () => {
    try {
      await isAuthenticated();

      setReady(true);
      setLoading(false);
    } catch (error) {
      setReady(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    checkIfLogged();

    return () => undefined;
  }, [rest.path]);

  if (loading) return null;

  return (
    <Route {...rest}>
      {isLogged ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
          }}
        />
      )}
    </Route>
  );
};

export default ProtectedRoute;
