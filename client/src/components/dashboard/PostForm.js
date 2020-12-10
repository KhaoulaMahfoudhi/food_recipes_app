import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import { Button, Modal, Form } from 'react-bootstrap';
import { BiAddToQueue } from 'react-icons/bi';

const PostForm = ({ addPost }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    title: '',
    FirstName: '',
    description: '',
    ingredients: '',
    image: '',
    time: '',
    serving: '',
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
    addPost({
      title,
      FirstName,
      description,
      ingredients,
      image,
      time,
      serving,
    });
    handleClose();
    setFormData('');
  };

  return (
    <Fragment>
      <BiAddToQueue
        size="50px"
        onClick={handleShow}
        style={{ cursor: 'pointer', color: 'white' }}
      />
      <Modal show={show} onHide={handleClose} onSubmit={(e) => onSubmit(e)}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: ' rgb(44, 138, 232)' }}>
            {' '}
            Add a New Recipe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                placeholder="Enter Recipe Title"
                value={title}
                onChange={(e) => onChange(e)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>Time</Form.Label>
              <Form.Control
                name="time"
                placeholder="Cooking time ? "
                value={time}
                onChange={(e) => onChange(e)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>Serving</Form.Label>
              <Form.Control
                name="serving"
                placeholder="Serving ? "
                value={serving}
                onChange={(e) => onChange(e)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="FirstName"
                placeholder="Enter Your FirstName "
                value={FirstName}
                onChange={(e) => onChange(e)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Ingredient</Form.Label>
              <Form.Control
                name="ingredients"
                placeholder="Eggs, Flour, ..."
                value={ingredients}
                onChange={(e) => onChange(e)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                placeholder="Step1, Step2, ... "
                value={description}
                onChange={(e) => onChange(e)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                name="image"
                placeholder="Enter the Recipe Image URL "
                value={image}
                onChange={(e) => onChange(e)}
                required
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
            Add Recipe
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
