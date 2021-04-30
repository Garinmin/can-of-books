import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default class BookModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.showModal}>
        <Modal.Header>
          <h4>Add a book to the collection</h4>
        </Modal.Header>
        <Form className='p-3'>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Enter your email</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="name@example.com"
            onChange={this.props.getEmail}
            ></Form.Control>
          </Form.Group>
          <Form.Group className='mb-3'>
          <Form.Label>Enter some information about the book</Form.Label>
            <Form.Control
              type='text'
              placeholder="What's the title?"
              onChange={this.props.getTitle}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type='text'
              placeholder='What condition is it in?'
              onChange={this.props.getStatus}
            ></Form.Control>
          </Form.Group>
          <Button className='mr-2' onClick={this.props.createBook}>
            Add it
          </Button>
          <Button onClick={this.props.hideModal}>I'm done</Button>
        </Form>
      </Modal>
    );
  }
}
