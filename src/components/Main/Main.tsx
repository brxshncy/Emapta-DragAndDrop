import React from "react";
import { RequireAuth } from "../../hoc/RequireAuth";

interface IMainProps {
  test?: string;
}
export const Main: React.FC<IMainProps> = ({ test }) => {
  console.log("test", test);
  return <div>Main</div>;
};

export default RequireAuth(Main);
