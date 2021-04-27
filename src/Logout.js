import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Login.css';
import { useAuth0 } from '@auth0/auth0-react';


function Logout() {
  const { logout } = useAuth0();
  
  return (

    <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log Out</Card.Title>
          <Card.Text>
            Click Below to Log Out
          </Card.Text>
            <Button onClick={() => {
            logout({ returnTo: window.location.origin });
            }}>Log out</Button>
        </Card.Body>
      </Card>
  );
}
export default Logout;
