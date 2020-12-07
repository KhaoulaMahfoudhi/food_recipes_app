import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editPost } from '../../actions/post';
import { Button, Modal, Form } from 'react-bootstrap';

const PostForm = ({ editPost, recipe }) => {
  function refreshPage() {
    window.location.reload(false);
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    title: recipe.title,
    FirstName: recipe.FirstName,
    description: recipe.description,
    ingredients: recipe.ingredients,
    image: recipe.image,
    time: recipe.time,
    serving: recipe.serving,
  });
  const {
    title,
    FirstName,
    description,
    ingredients,
    image,
    time,
    serving,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    editPost(recipe._id, {
      title,
      FirstName,
      description,
      ingredients,
      image,
      time,
      serving,
    });

    handleClose();
    refreshPage();
  };

  return (
    <Fragment>
      <Button
        onClick={handleShow}
        variant="warning"
        style={{ marginTop: '5px' }}
      >
        <i className="fas fa-edit"></i>
      </Button>
      <Modal show={show} onHide={handleClose} onSubmit={(e) => onSubmit(e)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: ' rgb(44, 138, 232)' }}>
            Edit Recipe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                placeholder={recipe.title}
                value={title}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>Time</Form.Label>
              <Form.Control
                name="time"
                placeholder={recipe.time}
                value={time}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>Serving</Form.Label>
              <Form.Control
                name="serving"
                placeholder={recipe.serving}
                value={serving}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>FirstName</Form.Label>
              <Form.Control
                name="FirstName"
                placeholder={recipe.FirstName}
                value={FirstName}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Ingredient</Form.Label>
              <Form.Control
                name="ingredients"
                placeholder={recipe.ingredients}
                value={ingredients}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                placeholder={recipe.description}
                value={description}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                name="image"
                placeholder={recipe.image}
                value={image}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            type="submit"
            variant="primary"
            value="Submit"
            onClick={(e) => onSubmit(e)}
          >
            Edit Recipe
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

PostForm.propTypes = {
  editPost: PropTypes.func.isRequired,
};

export default connect(null, { editPost })(PostForm);
