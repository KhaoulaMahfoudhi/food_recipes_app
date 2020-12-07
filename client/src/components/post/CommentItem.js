import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editComment, deleteComment } from '../../actions/post';
import { Button, Form } from 'react-bootstrap';
import './comment.css';
const PostForm = ({ editComment, deleteComment, postId, comment, auth }) => {
  const [editstate, setEditState] = useState(false);
  const [data, setData] = useState({ text: comment.text });
  const { text } = data;
  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    if (editstate) {
      editComment(postId, comment._id, {
        text,
      });
    }
    setEditState(!editstate);
  };

  return (
    <Fragment>
      <div className="commentBox">
        <div className="contentText">
          <span style={{ marginLeft: '20px', marginTop: '15px' }}>
            <i className="fas fa-user fa-2x" />
          </span>

          <h1 className="largeName">{comment.FirstName} : </h1>

          <p className="largeText">
            {editstate ? (
              <Form.Control
                name="text"
                placeholder={comment.text}
                value={text}
                onChange={(e) => onChange(e)}
              />
            ) : (
              <p>{text}</p>
            )}
          </p>
        </div>

        <div className="btnDelite">
          {!auth.loading && comment.user === auth.user._id && (
            <Button
              variant="danger"
              style={{ color: 'white', marginTop: '15px' }}
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
              style={{ color: 'white', marginTop: '15px' }}
              onClick={(e) => onSubmit(e)}
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
