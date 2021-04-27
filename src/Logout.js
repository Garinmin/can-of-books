import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './Login.css';
import { useAuth0 } from '@auth0/auth0-react';

function Logout() {
  const { logout } = useAuth0();
  return <Button onClick={logout}>Log out</Button>;
}
export default Logout;
