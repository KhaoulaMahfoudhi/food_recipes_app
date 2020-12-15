import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCommentAdmin } from '../../actions/post';
import { Button, Form } from 'react-bootstrap';
import '../post/comment.css';
const PostForm = ({ deleteCommentAdmin, postId, comment }) => {
  return (
    <Fragment>
      <div className="container">
        <Form>
          <div className="dialogbox">
            <div className="body">
              <span className="tip tip-up"></span>
              <span style={{ marginLeft: '10px', marginTop: '17px' }}>
                <i className="fas fa-user" />
              </span>

              <h1 className="largeName">{comment.FirstName} : </h1>

              <div className="message">
                <span>{comment.text}</span>
              </div>
              <div className="Comment-btn">
                <Button
                  variant="danger"
                  style={{ color: 'white', marginTop: '8px' }}
                  onClick={() => deleteCommentAdmin(postId, comment._id)}
                >
                  <i className="far fa-times"></i>
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </Fragment>
  );
};

PostForm.propTypes = {
  deleteCommentAdmin: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  comments: state.comments,
});

export default connect(mapStateToProps, { deleteCommentAdmin })(PostForm);
