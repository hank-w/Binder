import React from "react";
import { Route } from "react-router-dom";
import Sidebar from "./Sidebar";
const BindrRoute = (props) => {
  return (
    <div className="flex">
      <Sidebar />

      <Route {...props}>{props.children}</Route>
    </div>
  );
};
export default BindrRoute;
