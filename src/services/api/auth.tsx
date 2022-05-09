import { ILoginForm } from "./../../@types/loginForm";

const authorizedEmail = "test@vroom.com.au";
const authorizedPassword = "frontendtest2022";

export const authService = {
  login: (payload: ILoginForm) => {
    const { email, password } = payload;
    return email === authorizedEmail && password === authorizedPassword;
  },
  logout: () => {
    localStorage.removeItem("user");
  },
};
