import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import BindrRoute from "../../components/BindrRoute";
import SearchResult from "../student/SearchResult";
import Home from "../Home";

const Tutor = (props) => {
  let { path, url } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path + "/search"}>
          <Home />
        </Route>
        <Route path={`${path}/:searchRequest`}>
          <SearchResult />
        </Route>
        <Route path={path + "/tutor"}>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default Tutor;
