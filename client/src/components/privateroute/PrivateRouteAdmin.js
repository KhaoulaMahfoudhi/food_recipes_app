import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({
  component: Component,
  auth: { isAdmin, loading, isAuthenticated },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      loading ? (
        <Spinner />
      ) : isAdmin && isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/Adminlogin" />
      )
    }
  />
);
PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(PrivateRoute);
