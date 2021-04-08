import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import Profile from "./views/Profile";
import ProjectBoard from "./views/ProjectBoard";
import NavBar from "./components/NavBar";
import "./App.css"

function App() {
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
      </div>
    </>
  );
}

export default App;
