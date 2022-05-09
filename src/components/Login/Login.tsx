import React, { useState } from "react";
import { useUserContext } from "./../../contexts/UserContext";
import { ILoginForm } from "./../../@types/loginForm";
import { authService } from "./../../services/api/auth";
import { LOG_IN } from "../../constants/userActionConstants";
import { UserContexType } from "../../@types/contextType";
import { useNavigate } from "react-router-dom";
import { AsyncStorage } from "../../services/storage/async-storage";

export const Login = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState<ILoginForm>({
    email: "",
    password: "",
  });
  const [invalidCredentials, setInvalidCredentials] = useState<boolean>(false);

  const { dispatch } = useUserContext() as UserContexType;

  const inputHandler = (key: string, value: string) => {
    setLoginForm({
      ...loginForm,
      [key]: value,
    });
  };

  const handleLogin = async () => {
    const isAuthorized = authService.login(loginForm);
    if (isAuthorized) {
      setInvalidCredentials(false);
      await AsyncStorage.setItem("user", loginForm.email).then(() => {
        dispatch({
          type: LOG_IN,
          payload: loginForm,
        });
        navigate("/");
      });
    }
    setInvalidCredentials(true);
  };

  return (
    <div className="container mx-auto my-auto flex h-screen  items-center justify-center">
      <div className="mx-auto flex w-400 flex-col justify-between  rounded-md border bg-white shadow-sm">
        <div className="mt-3 flex justify-center p-3">
          Login to your Account
        </div>
        <div className="flex flex-col justify-between p-5">
          <input
            type="text"
            placeholder="Enter Email"
            className="mb-3 rounded border p-2 shadow-sm"
            onChange={(e) => inputHandler(e.target.name, e.target.value)}
            name="email"
            value={loginForm.email}
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="mb-3 border p-2 shadow-sm"
            onChange={(e) => inputHandler(e.target.name, e.target.value)}
            name="password"
            value={loginForm.password}
          />
          {invalidCredentials && (
            <span className="mb-3 w-full rounded bg-red-400 p-2 text-center">
              Invalid Email and password combination
            </span>
          )}
          <button
            onClick={handleLogin}
            className="mt-2 rounded-md border  bg-green-600 p-1 text-white hover:bg-green-700 "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
