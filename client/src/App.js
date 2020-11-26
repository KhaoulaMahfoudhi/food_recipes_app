import { Fragment, useEffect } from 'react';
import './App.css';
import NavBar from './components/Navbare/Navbar';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import About from './components/About/About';
import Alert from './components/alert/Alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import store from './store/store';
import PrivateRoute from './components/privateroute/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Fragment>
      <NavBar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <section className="container">
        <Alert />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </section>
    </Fragment>
  );
};

export default App;
