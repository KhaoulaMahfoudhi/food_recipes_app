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
import Post from './components/post/Post';
import AdminLogin from './components/auth/AdminLogin';
import Users from './components/Admin/Users';
import DashboardAdmin from './components/Admin/DashboardAdmin';
import PrivateRouteAdmin from './components/privateroute/PrivateRouteAdmin';
import PostItem from './components/Admin/PostItem';
import LandingAdmin from './components/Admin/LandingAdmin';

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
      <section>
        <Alert />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Adminlogin" component={AdminLogin} />
          <PrivateRoute exact path="/posts" component={Dashboard} />
          <PrivateRoute exact path="/posts/:id" component={Post} />
          <PrivateRouteAdmin
            exact
            path="/showPosts"
            component={DashboardAdmin}
          />
          <PrivateRouteAdmin exact path="/showposts/:id" component={PostItem} />
          <PrivateRouteAdmin exact path="/users" component={Users} />
          <PrivateRouteAdmin
            exact
            path="/landingadmin"
            component={LandingAdmin}
          />
        </Switch>
      </section>
    </Fragment>
  );
};

export default App;
