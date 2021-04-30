import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './modules/Header';
import IsLoadingAndError from './modules/IsLoadingAndError';
import Footer from './modules/Footer';
import Profile from './modules/Profile';
import BestBooks from './modules/BestBooks.js';
import MyFavoriteBooks from './modules/MyFavoriteBooks';
import BookModal from './modules/BookModal';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      books: [],
      showModal: false,
      title: '',
      status: '',
      bookIndex: 0,
      error: {},
      isError: false
    };
  }

  getBooks = async (e) => {
    try {
      const booksUrl = `http://localhost:3001/books/?email=phony@email.com`;
      const response = await axios.get(booksUrl);

      this.setState({
        books: response.data,
        isError: false
      });
    } catch (error) {
      this.setState({
        error, 
        isError: true
      });
    }
  }

  getTitle = (e) => {
    this.setState({title: e.target.value})
  }

  getStatus = (e) => {
    this.setState({status: e.target.value})
  }

  createBook = async (e) => {
    try{
      e.preventDefault();

      const API = 'http://localhost:3001';
      const newBook = await axios.post(`${API}/books`, {email: "phony@email.com", books:[{
        name: this.state.title,
        status: this.state.status
      }]});

      const newBookArray = newBook.data;
      this.setState({books: newBookArray});
    } catch (error) {
      console.error(error);
    }
  }

  deleteBook = (e) => {
    this.setState({bookIndex:Number(e.target.value)})
  }

  getEmail = (e) => {
    this.setState({email: e.target.value});
  }

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
             <Switch>
              <Route exact path="/">
              {this.props.auth0.isAuthenticated && 
                <Container fluid>
                  <MyFavoriteBooks
                  showModal={(e) => {this.setState({showModal: true})}}
                  />
                </Container>
              }
              <BookModal 
              showModal={this.state.showModal}
              hideModal={(e) => {this.setState({showModal: false})}}
              getTitle={this.getTitle}
              getStatus={this.getStatus}
              createBook={this.createBook}
              getEmail={this.getEmail}
              />
              {this.props.auth0.isAuthenticated && <BestBooks
              getBooks = {this.getBooks}
              books = {this.state.books}
              deleteBook = {this.deleteBook}
              
              />}
              </Route>
              <Route exact path="/profile">
                {this.props.auth0.isAuthenticated && <Profile/>}
              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
