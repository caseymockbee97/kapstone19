import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./views/Login";
import Profile from "./views/Profile";
import ProjectBoard from "./views/ProjectBoard";
import NavBar from "./components/NavBar";
import "./App.css";
import { useStore } from "./store/store";

function App() {
  const user = useStore((state) => state.user);
  return (
    <>
      <div className="main">
        <NavBar />
        <Switch>
          {/* <Route path="/logout">
      <Logout /> 
    </Route> */}
          <Route path="/projectBoard/:projectId">
            <ProjectBoard />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
        {!user && <Redirect to="/" />}
      </div>
    </>
  );
}

export default App;
