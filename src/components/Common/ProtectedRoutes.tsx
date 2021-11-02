import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({children, ...restOfProps}: any) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Route {...restOfProps} render={({ location }) => {
        return isAuthenticated === 'true'
          ? children
          : <Redirect to={{
              pathname: '/login',
              state: { from: location }
            }} />
      }} />
  );
}

export default ProtectedRoute;