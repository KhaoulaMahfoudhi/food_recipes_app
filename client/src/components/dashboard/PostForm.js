import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost, editPost } from '../../actions/post';
import { Button, Modal, Form } from 'react-bootstrap';
import { BiAddToQueue } from 'react-icons/bi';

const PostForm = ({ addPost, edit, editPost, recipe, _id }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    title: '',
    FirstName: '',
    description: '',
    ingredients: '',
    image: '',
  });
  const { title, FirstName, description, ingredients, image } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    edit
      ? editPost(_id, { title, FirstName, description, ingredients, image })
      : addPost({
          title,
          FirstName,
          description,
          ingredients,
          image,
        });
    handleClose();
  };

  return (
    <Fragment>
      {edit ? (
        <Button onClick={handleShow} variant="warning">
          <i className="fas fa-edit"></i>
        </Button>
      ) : (
        <BiAddToQueue size="50px" onClick={handleShow} />
      )}
      <Modal show={show} onHide={handleClose} onSubmit={(e) => onSubmit(e)}>
        <Modal.Header closeButton>
          <Modal.Title>{edit ? 'Edit Recipe' : 'Add a New Recipe'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                placeholder={edit ? recipe.title : 'Enter Recipe Title '}
                value={title}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>FirstName</Form.Label>
              <Form.Control
                name="FirstName"
                placeholder={edit ? recipe.FirstName : 'Enter Your FirstName '}
                value={FirstName}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Ingredient</Form.Label>
              <Form.Control
                name="ingredients"
                placeholder="ingredients..."
                value={ingredients}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                placeholder="description ... "
                value={description}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                name="image"
                placeholder={
                  edit ? recipe.image : 'Enter the Recipe Image URL '
                }
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
            {edit ? 'Edit Recipe' : 'Add Recipe'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost, editPost })(PostForm);
