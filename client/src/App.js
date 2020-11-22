import { Fragment, useState } from 'react';
import './App.css';
import NavBar from './components/Navbare/Navbar';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const login = () => setIsAuth(true);
  const logout = () => setIsAuth(false);
  return (
    <Fragment>
      <NavBar isAuth={isAuth} login={login} logout={logout} />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Fragment>
  );
};

export default App;
