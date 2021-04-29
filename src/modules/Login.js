import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../Login.css';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
   
    const { loginWithRedirect } = useAuth0();
    return <Button 
    onClick={() => loginWithRedirect()}
    className='float-left'
    >Log In</Button>;
 
}

export default Login;
