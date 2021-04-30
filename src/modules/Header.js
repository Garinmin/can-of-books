import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../Header.css';
import { withAuth0 } from '@auth0/auth0-react';
import Logout from './Logout';
import Login from './Login';

class Header extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='p-2'>
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/" className='mr-2'>Home</Link>
        {this.props.auth0.isAuthenticated && <Link to="/profile" className='mr-3'>Profile</Link>}
        {this.props.auth0.isAuthenticated ?  <Logout /> : <Login /> }
      </Navbar>
    );
  }
}

export default withAuth0(Header);
