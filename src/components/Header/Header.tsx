import React from "react";
import { IUser } from "../../@types/userTypes";

interface IHeaderProps {
  user?: string;
}
export const Header: React.FC<IHeaderProps> = ({ user }) => {
  return (
    <div className="flex justify-end bg-blue-900 p-5 text-white">
      {user}
      <div className="ml-5">
        <a className="cursor-pointer underline underline-offset-4 hover:text-slate-900">
          Logout
        </a>
      </div>
    </div>
  );
};
