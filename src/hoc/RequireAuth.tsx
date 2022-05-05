import React, { ComponentType } from "react";
import { Navigate } from "react-router-dom";

export const RequireAuth = (Component: ComponentType) => (props: any) => {
  function NewComponent() {
    const isLoggedIn = false;

    if (isLoggedIn) {
      return <Component {...props} test={"what"} />;
    }
    return <Navigate to="/login" />;
  }

  return <NewComponent />;
};
