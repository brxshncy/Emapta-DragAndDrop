import React from "react";
import { authService } from "./../../services/api/auth";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import { UserContexType } from "../../@types/contextType";
import { LOG_OUT } from "../../constants/userActionConstants";

interface IHeaderProps {
  user?: string;
}
export const Header: React.FC<IHeaderProps> = ({ user }) => {
  const { dispatch } = useUserContext() as UserContexType;
  const { logout } = authService;
  const navigate = useNavigate();
  const handleLogout = () => {
    logout().then(() => {
      dispatch({
        type: LOG_OUT,
      });
      navigate("/login");
    });
  };
  return (
    <div className="border-b-1 flex justify-end  bg-white p-5 text-slate-900 shadow-sm ">
      {user}
      <div className="ml-5">
        <a
          className="cursor-pointer underline underline-offset-4 hover:text-slate-900"
          onClick={handleLogout}
        >
          Logout
        </a>
      </div>
    </div>
  );
};
