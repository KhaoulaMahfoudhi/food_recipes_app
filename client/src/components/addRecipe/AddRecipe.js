import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { BiAddToQueue } from "react-icons/bi";

import "./addrecipe.css";

export const AddRecipe = ({ addRecipe }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Image, setImage] = useState("");
  const [Rate, setRate] = useState();

  const submitRecipe = () => {
    let newRecipe = {
      name: Name,
      description: Description,
      img: Image,
      rating: Rate,
    };
    console.log(newRecipe);
    addRecipe(newRecipe);
    handleClose();
  };

  return (
    <>
      <BiAddToQueue size="50px" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Movie Name "
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Movie Description "
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setRate(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitRecipe}>
            Add Recipe
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
