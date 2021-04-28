import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import Profile from './Profile';
import BestBooks from './BestBooks.js';
import MyFavoriteBooks from './MyFavoriteBooks';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
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

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
             <Switch>
              <Route exact path="/">
              {this.props.auth0.isAuthenticated &&  <MyFavoriteBooks />}
              {this.props.auth0.isAuthenticated && <BestBooks getBooks = {this.getBooks} books = {this.state.books} />}
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
