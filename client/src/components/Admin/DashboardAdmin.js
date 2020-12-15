import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPostsAdmin } from '../../actions/post';
import { Spinner } from 'react-bootstrap';
import PostCard from './PostCard';
import '../dashboard/dashboard.css';

const DashboardAdmin = ({ getPostsAdmin, post: { recipes, loading } }) => {
  useEffect(() => {
    getPostsAdmin();
  }, [getPostsAdmin]);

  return (
    <div className="DashboardContainer">
      {loading ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        <Fragment>
          <div className="posts">
            {recipes.map((recipe) => (
              <PostCard key={recipe._id} recipe={recipe} />
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
DashboardAdmin.propTypes = {
  getPostsAdmin: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPostsAdmin })(DashboardAdmin);
