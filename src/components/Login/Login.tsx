import axios from "axios";
import React, { ContextType, useState } from "react";
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
      await AsyncStorage.setItem("user", JSON.stringify(loginForm)).then(() => {
        dispatch({
          type: LOG_IN,
          payload: loginForm,
        });
        navigate("/");
      });
    }
  };

  return (
    <div className="container mx-auto my-auto flex justify-center items-center h-screen">
      <div className="w-2/4 mx-auto flex justify-between flex-col bg-slate-300  border border-slate-200 rounded-md">
        <div className="flex justify-center p-3 mt-3">
          Login to your Account
        </div>
        <div className="flex justify-between flex-col p-5">
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
            className="border p-1 rounded-md border-slate-500"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
