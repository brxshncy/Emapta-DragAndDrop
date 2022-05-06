import React, { ComponentType, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "./../contexts/UserContext";
import { UserContexType } from "./../@types/contextType";

export const RequireAuth = (Component: ComponentType) => (props: any) => {
  function NewComponent() {
    const { state } = useUserContext() as UserContexType;
    const { isLoggedIn, user } = state;
    if (isLoggedIn) {
      return <Component {...props} user={user} />;
    }
    return <Navigate to="/login" />;
  }

  return <NewComponent />;
};
