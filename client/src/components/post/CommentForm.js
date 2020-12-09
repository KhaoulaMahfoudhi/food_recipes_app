import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';
import './comment.css';
import { Form, Button } from 'react-bootstrap';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState(' ');
  return (
    <div className="CommentContainer">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >
        <Form.Label className="large"> Leave a Comment</Form.Label>
        <div className="containerformBtn">
          <div className="inputComment">
            <Form.Control
              className="commentinput"
              name="text"
              placeholder="comment the post"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <div>
            <Button
              variant="danger"
              style={{ marginLeft: '10px' }}
              value="Submit"
              type="submit"
            >
              Comment
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
