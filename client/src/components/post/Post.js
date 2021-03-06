import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spinner, Button } from 'react-bootstrap';
import { getPost } from '../../actions/post';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
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
        <Fragment>
          {' '}
          <CommentForm key={recipe._id} postId={recipe._id} />
        </Fragment>

        <Fragment>
          {recipe.comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              postId={recipe._id}
            />
          ))}
        </Fragment>
        <Fragment>
          <Link to="/posts">
            <Button
              variant="secondary"
              style={{
                margin: '10px 8px 8px 100px',
                padding: ' 0.4rem 1.3rem',
                fontSize: '1rem',
              }}
            >
              GO Back
            </Button>
          </Link>
        </Fragment>

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
  auth: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
