import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './views/Login';
import Profile from './views/Profile';
import ProjectBoard from './views/ProjectBoard';
import NavBar from './components/NavBar';
import { useStore } from './store/store';
import About from './views/About';
import Footer from './views/Footer';
import Fof from './components/FofComponent';

function App() {
  const user = useStore((state) => state.user);
  return (
    <>
      <div className="main">
        <NavBar />
        <div className="content-wrap">
          <Switch>
            <Route path="/projectBoard/:projectId">
              <ProjectBoard />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="*">
              <Fof />
            </Route>
          </Switch>
          {!user && <Redirect to="/" />}
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
