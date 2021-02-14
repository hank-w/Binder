import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import Home from "./pages/Home";
import LandingPage from "./pages/Landing";
import BindrRoute from "./components/BindrRoute";

function App() {
  return (
    <Router>
      <Switch>
        <BindrRoute path="/home">
          <Home />
        </BindrRoute>
        <BindrRoute path="/search">
          <Home />
        </BindrRoute>
        <BindrRoute path="/browse">
          <Home />
        </BindrRoute>
        <BindrRoute path="/sessions">
          <Home />
        </BindrRoute>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
