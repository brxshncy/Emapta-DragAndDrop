import React, { ComponentType } from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "./../contexts/UserContext";
import { UserContexType } from "./../@types/contextType";
import { Header } from "./../components/Header/Header";

export const RequireAuth = (Component: ComponentType) => (props: any) => {
  function NewComponent() {
    const { state } = useUserContext() as UserContexType;
    const { isLoggedIn, user } = state;

    if (isLoggedIn) {
      return (
        <div className="h-screen bg-blue-500 ">
          <Header user={user} />
          <div className="px-10 py-5">
            <Component {...props} user={user} />
          </div>
        </div>
      );
    }
    return <Navigate to="/login" />;
  }

  return <NewComponent />;
};
