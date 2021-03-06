import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../Login.css';
import { useAuth0 } from '@auth0/auth0-react';

function Logout() {
  const { logout } = useAuth0();
  return <Button onClick={async () => {
    logout({
      returnTo: process.env.REACT_APP_REDIRECT_URI
    });
  }}
  className='float-left'>Log out</Button>;
}
export default Logout;
