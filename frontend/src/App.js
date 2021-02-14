import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import Home from "./pages/Home";
import LandingPage from "./pages/Landing";
import BindrRoute from "./components/BindrRoute";
import Student from "./pages/student/Student";
import Tutor from "./pages/tutor/Tutor";
import Settings from "./pages/Settings";
import Sessions from "./pages/student/Sessions";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <BindrRoute path="/home">
          <Home />
        </BindrRoute>
        {/*  Main paths */}
        <BindrRoute path="/student">
          <Student />
        </BindrRoute>
        <BindrRoute path="/tutor">
          <Tutor />
        </BindrRoute>

        {/* User specific */}
        <BindrRoute path="/profile">
          <Profile />
        </BindrRoute>
        <BindrRoute path="/sessions">
          <Sessions />
        </BindrRoute>

        <Route>
          {/* Redirect to /home by default */}
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
