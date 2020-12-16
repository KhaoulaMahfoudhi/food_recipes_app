import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { deletePost } from '../../actions/post';
import '../dashboard/dashboard.css';

const PostCard = ({ deletePost, recipe }) => {
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
            <Link to={`/showposts/${recipe._id}`}>
              <Button variant="light">
                <i className="fas fa-comment"></i>
                {recipe.comments.length > 0 && (
                  <span> {recipe.comments.length}</span>
                )}
              </Button>
            </Link>
            <Link to={`/showposts/${recipe._id}`}>
              <Button variant="light">
                <i className="fas fa-info-circle"></i>
              </Button>
            </Link>
            <Button onClick={(e) => deletePost(recipe._id)} variant="danger">
              <i className="far fa-trash-alt"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

PostCard.propTypes = {
  recipe: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default connect(null, {
  deletePost,
})(PostCard);
