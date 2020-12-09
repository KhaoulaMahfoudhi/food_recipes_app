import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { addLike, removeLike, deletePost, addPost } from '../../actions/post';
import './dashboard.css';
import EditForm from '../post/EditForm';
const PostCard = ({ addLike, removeLike, deletePost, auth, recipe }) => {
  return (
    <div className="PostsContainer">
      <Card
        className="PostCard"
        style={{
          width: '18rem',
        }}
      >
        <Card.Img variant="top" className="images" src={recipe.image} />

        <div className="Card-over">
          {' '}
          <Card>
            <Card.Title
              style={{ textAlign: 'center', marginTop: '5px', color: '#333' }}
            >
              <i
                className="far fa-clock"
                style={{ color: 'rgb(184, 52, 95)' }}
              ></i>{' '}
              {recipe.time}
            </Card.Title>
            <Card.Title style={{ textAlign: 'center', color: '#333' }}>
              <i
                className="fas fa-users"
                style={{ color: 'rgb(184, 52, 95)' }}
              ></i>{' '}
              {recipe.serving}{' '}
            </Card.Title>
          </Card>
        </div>

        <Card.Body style={{ width: '300px' }}>
          <Card.Title className="x-largeD">{recipe.title}</Card.Title>
          <Card.Title className="largeD">
            {' '}
            <span style={{ color: 'rgb(240, 174, 209)' }}>
              posted by:{' '}
            </span>{' '}
            {recipe.FirstName ? recipe.FirstName : 'So YummY'}{' '}
          </Card.Title>
          <Card.Title className="largeD">
            <span style={{ color: 'rgb(240, 174, 209)' }}>Posted on: </span>
            <Moment format="YYYY/MM/DD">{recipe.date}</Moment>
          </Card.Title>
          <div className="btnBox">
            <Button onClick={(e) => addLike(recipe._id)} variant="light">
              <i className="fas fa-thumbs-up" />{' '}
              {recipe.likes.length > 0 && <span>{recipe.likes.length}</span>}
            </Button>
            <Button onClick={(e) => removeLike(recipe._id)} variant="light">
              <i className="fas fa-thumbs-down" />
            </Button>

            <Link to={`/posts/${recipe._id}`}>
              <Button variant="light">
                <i className="fas fa-comment"></i>
                {recipe.comments.length > 0 && (
                  <span> {recipe.comments.length}</span>
                )}
              </Button>
            </Link>
            <Link to={`/posts/${recipe._id}`}>
              <Button variant="light">
                <i className="fas fa-info-circle"></i>
              </Button>
            </Link>
          </div>
          <div className="btnDltMdfy">
            {!auth.loading && recipe.user === auth.user._id && (
              <EditForm recipe={recipe} />
            )}
            {!auth.loading && recipe.user === auth.user._id && (
              <Button
                onClick={(e) => deletePost(recipe._id)}
                variant="danger"
                style={{ marginTop: '5px' }}
              >
                <i className="far fa-trash-alt"></i>
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

PostCard.propTypes = {
  recipe: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  addLike,
  removeLike,
  deletePost,
  addPost,
})(PostCard);
