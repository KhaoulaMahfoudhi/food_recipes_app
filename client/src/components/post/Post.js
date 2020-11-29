import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spinner, Button } from 'react-bootstrap';
import { getPost } from '../../actions/post';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import './post.css';
const Post = ({ getPost, post: { recipe, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);
  return loading || recipe === null ? (
    <Spinner animation="border" variant="danger" />
  ) : (
    <Fragment>
      <div className="post">
        <div className="flexContainer">
          <div className="polaroid">
            <img className="image" src={recipe.image} alt="recipe" />
            <div className="x-largeP">{recipe.title}</div>
            <div className="large">
              {' '}
              <span>Ingredients:</span>
              {recipe.ingredients.map((ingredient) => (
                <li className="list">{ingredient}</li>
              ))}
            </div>
            <div className="large">
              {' '}
              <span>Description:</span>
              {recipe.description.map((desc) => (
                <p>{desc}</p>
              ))}
            </div>
          </div>
        </div>
        <div>
          <CommentForm postId={recipe._id} />
        </div>

        <div>
          <Link to="/posts">
            <Button
              variant="secondary"
              style={{
                margin: '20px',
                padding: ' 0.4rem 1.3rem',
                fontSize: '1rem',
              }}
            >
              GO Back
            </Button>
          </Link>
        </div>

        <div>
          <footer className="main-footer">
            <div className="section__inner">
              <i className="fas fa-cookie-bite"></i>{' '}
              <Link className="linkFooter" to="/">
                <span> So YummY </span>
              </Link>
              <p>
                ©2018-2020 SO YummY, by{' '}
                <Link className="linkFooter" to="/about">
                  <span> Khaoula </span>
                </Link>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
