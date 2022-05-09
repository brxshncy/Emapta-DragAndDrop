import React from "react";
import { authService } from "./../../services/api/auth";
import { useNavigate } from "react-router-dom";

interface IHeaderProps {
  user?: string;
}
export const Header: React.FC<IHeaderProps> = ({ user }) => {
  const { logout } = authService;
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="flex justify-end bg-blue-900 p-5 text-white">
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
