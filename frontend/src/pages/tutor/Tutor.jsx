import React from "react";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";
import BindrRoute from "../../components/BindrRoute";
import SearchResult from "../student/SearchResult";
import Home from "../Home";
import Verify from "./Verify";

const name = "first last";

const Tutor = (props) => {
  let { path, url } = useRouteMatch();

  const TutorDashboard = () => {
    return (
      <div className="flex-row">
        <h1>Tutor Dashboard</h1>
        <ul className="ml-8">
          <li>
            <Link to={`${path}/verify`}>Verification</Link>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <Switch>
        <Route path={path + "/verify"}>
          <Verify />
        </Route>
        <Route exact path={path}>
          <TutorDashboard />
        </Route>
      </Switch>
    </>
  );
};
export default Tutor;
