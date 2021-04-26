import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Login from './Login.js';
/* import Logout from './Logout.js';
 */import Footer from './Footer';
import MyFavoriteBooks from './MyFavoriteBooks';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Login />
{/*             <Logout />
 */}            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
              {this.props.auth0.isAuthenticated ? <MyFavoriteBooks /> : <Login /> }
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);


