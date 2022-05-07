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
      await AsyncStorage.setItem("user", loginForm.email).then(() => {
        dispatch({
          type: LOG_IN,
          payload: loginForm,
        });
        navigate("/");
      });
    }
  };

  return (
    <div className="container mx-auto my-auto flex h-screen items-center justify-center">
      <div className="mx-auto flex w-2/4 flex-col justify-between rounded-md  border border-slate-200 bg-slate-300">
        <div className="mt-3 flex justify-center p-3">
          Login to your Account
        </div>
        <div className="flex flex-col justify-between p-5">
          <input
            type="text"
            placeholder="Enter Email"
            className="mb-3 p-2"
            onChange={(e) => inputHandler(e.target.name, e.target.value)}
            name="email"
            value={loginForm.email}
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="mb-3 p-2"
            onChange={(e) => inputHandler(e.target.name, e.target.value)}
            name="password"
            value={loginForm.password}
          />
          <button
            onClick={handleLogin}
            className="rounded-md border border-slate-500 p-1"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
