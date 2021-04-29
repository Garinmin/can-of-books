import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../MyFavoriteBooks.css";

class MyFavoriteBooks extends React.Component {
  render() {
    return (
      <Jumbotron inline>
        <h1>My Favorite Books</h1>
        <p>This is a collection of my favorite books</p>
        <Card className="m-0" style={{ width: "18rem" }}>
          <Form className="p-3">
            <Form.Group className="mb-3">
              <Form.Label>Enter a book's title</Form.Label>
              <Form.Control type="text" placeholder="Title"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>What condition is it in?</Form.Label>
              <Form.Control type="text" placeholder="Condition"></Form.Control>
            </Form.Group>
            <Button>Submit</Button>
          </Form>
        </Card>
      </Jumbotron>
    );
  }
}

export default MyFavoriteBooks;
