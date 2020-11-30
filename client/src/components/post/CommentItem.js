import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/post';
import { Button } from 'react-bootstrap';
import './comment.css';

const CommentItem = ({
  postId,
  comment: { _id, text, FirstName, user },
  auth,
  deleteComment,
}) => {
  return (
    <div
      className="commentBox"
      style={{
        backgroundColor: 'white',
        width: '40%',
        marginBottom: '0px',
        border: 'solid 2px rgb(210, 49, 62)',
      }}
    >
      <div className="contentName">
        <div>
          <span style={{ Color: '#FFF', marginLeft: '20px' }}>
            <i className="fas fa-user fa-2x" />
          </span>
        </div>
        <div className="largeName">{FirstName} : </div>
        <div className="largeText">{text}</div>
      </div>
      <div className="deletebtn">
        {!auth.loading && user === auth.user._id && (
          <Button
            variant="dark"
            style={{ color: 'white' }}
            onClick={() => deleteComment(postId, _id)}
          >
            <i className="far fa-trash-alt"></i>
          </Button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
