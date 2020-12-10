import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editComment, deleteComment } from '../../actions/post';
import { Button, Form } from 'react-bootstrap';
import './comment.css';
const PostForm = ({ editComment, deleteComment, postId, comment, auth }) => {
  const [editstate, setEditState] = useState(false);
  const [text, setText] = useState(comment.text);
  return (
    <Fragment>
      <div className="container">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            if (editstate) {
              editComment(postId, comment._id, {
                text,
              });
            }
            setEditState(!editstate);
          }}
        >
          <div className="dialogbox">
            <div className="body">
              <span className="tip tip-up"></span>
              <span style={{ marginLeft: '10px', marginTop: '17px' }}>
                <i className="fas fa-user" />
              </span>

              <h1 className="largeName">{comment.FirstName} : </h1>

              <div className="message">
                {editstate ? (
                  <Form.Control
                    name="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={comment.text}
                  />
                ) : (
                  <span>{text}</span>
                )}
              </div>
              <div className="Comment-btn">
                {!auth.loading && comment.user === auth.user._id && (
                  <Button
                    variant="danger"
                    style={{ color: 'white', marginTop: '8px' }}
                    onClick={() => deleteComment(postId, comment._id)}
                  >
                    <i className="far fa-times"></i>
                  </Button>
                )}
                {!auth.loading && comment.user === auth.user._id && (
                  <Button
                    variant="warning"
                    value="Submit"
                    type="submit"
                    style={{ color: 'white', marginTop: '8px' }}
                  >
                    {editstate ? (
                      <i
                        className="fas fa-check-circle"
                        style={{ color: 'white' }}
                      ></i>
                    ) : (
                      <i className="fas fa-edit" style={{ color: 'white' }}></i>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Form>
      </div>
    </Fragment>
  );
};

PostForm.propTypes = {
  editComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  comments: state.comments,
});

export default connect(mapStateToProps, { deleteComment, editComment })(
  PostForm
);
