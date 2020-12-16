import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { deleteUser } from '../../actions/users';
import './users.css';
const UserCard = ({ deleteUser, user }) => {
  return (
    <div className="PostsContainer">
      <Card
        className="PostCard"
        style={{
          width: '18rem',
        }}
      >
        <Card.Img variant="top" className="images" src={user.avatar} />

        <Card.Body style={{ width: '300px' }}>
          <Card.Title className="x-largeD">
            {user.FirstName} {user.LastName}
          </Card.Title>
          <Card.Title className="largeD">{user.bio}</Card.Title>

          <div className="btnDlt">
            <Button
              onClick={(e) => deleteUser(user._id)}
              variant="danger"
              style={{ marginTop: '5px' }}
            >
              <i className="far fa-trash-alt"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

UserCard.propTypes = {
  auth: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  deleteUser,
})(UserCard);
