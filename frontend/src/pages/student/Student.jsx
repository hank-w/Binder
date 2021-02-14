import React from "react";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";
import BindrRoute from "../../components/BindrRoute";
import SearchResult from "./SearchResult";
import Home from "../Home";
import Browse from "./Browse";
import TutorProfile from "./TutorProfile";

const Student = (props) => {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/search`}>
        <Home />
      </Route>
      <Route path={`${path}/search/:searchRequest`}>
        <SearchResult />
      </Route>

      <Route exact path={`${path}/browse`}>
        <Browse />
      </Route>
      <Route path={`${path}/browse/:tutorId`}>
        <TutorProfile />
      </Route>
      <Route exact path={path}>
        <div className="flex-row">
          <h1>Your student dashboard</h1>
          <div>Interesting links and stuff can go here</div>
          <ul className="ml-8">
            <li>
              <Link to={`${path}/search`}>Search</Link>
            </li>
            <li>
              <Link to={`${path}/browse`}>Browse tutors</Link>
            </li>
          </ul>
        </div>
      </Route>
    </Switch>
  );
};
export default Student;
