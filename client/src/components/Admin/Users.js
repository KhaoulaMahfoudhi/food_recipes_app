import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../../actions/users';
import { Spinner } from 'react-bootstrap';
import UserCard from './UserCard';
import './users.css';

const Users = ({ getUsers, post: { users, loading } }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="UsersContainer">
      {loading ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        <Fragment>
          <div className="users">
            {users.map((user) => (
              <UserCard key={user._id} user={user} />
            ))}
          </div>
        </Fragment>
      )}

      <div>
        <footer className="main-footer">
          <div className="section__inner">
            <i className="fas fa-cookie-bite"></i>{' '}
            <Link className="linkFooter" to="/">
              <span> So YummY </span>
            </Link>
            <p>
              ©2018-2020 SO YummY, by
              <span> Khaoula </span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.users,
});

export default connect(mapStateToProps, { getUsers })(Users);
