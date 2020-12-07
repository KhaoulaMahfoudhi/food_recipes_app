import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../../actions/post';
import { Spinner } from 'react-bootstrap';
import PostCard from './PostCard';
import PostForm from './PostForm';
import { RecipeSearch } from '../searchField/RecipeSearch';
import './dashboard.css';

const Dashboard = ({ getPosts, post: { recipes, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  const [nameSearch, setNameSearch] = useState('');
  return (
    <div className="DashboardContainer">
      <RecipeSearch setNameSearch={setNameSearch} />
      {loading ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        <Fragment>
          <PostForm />
          <div className="posts">
            {recipes
              .filter((recipe) =>
                recipe.title.toLowerCase().includes(nameSearch.toLowerCase())
              )
              .map((recipe) => (
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
Dashboard.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Dashboard);
