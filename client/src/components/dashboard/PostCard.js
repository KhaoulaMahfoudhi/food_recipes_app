import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { addLike, removeLike, deletePost, addPost } from '../../actions/post';
import './dashboard.css';
const PostCard = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  recipe: { _id, title, FirstName, image, user, likes, comments, date },
}) => {
  return (
    <div className="PostsCard">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" className="images" src={image} />
        <Card.Body>
          <Card.Title className="x-largeD">{title}</Card.Title>
          <Card.Title>
            {' '}
            posted by: {FirstName ? FirstName : 'khaoula'}{' '}
          </Card.Title>
          <Card.Title>
            Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
          </Card.Title>

          {comments.length > 0 && <Card.Text>{comments.text}</Card.Text>}

          <Button onClick={(e) => addLike(_id)} variant="primary">
            <i className="fas fa-thumbs-up" />{' '}
            {likes.length > 0 && <span>{likes.length}</span>}
          </Button>
          <Button onClick={(e) => removeLike(_id)} variant="primary">
            <i className="fas fa-thumbs-down" />
          </Button>
          {!auth.loading && user !== auth.user._id && (
            <Button onClick={(e) => deletePost(_id)} variant="danger">
              delete
            </Button>
          )}
          <Link to={`/posts/${_id}`}>
            <Button style={{ margin: '5px' }} variant="primary">
              details
            </Button>
          </Link>
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
