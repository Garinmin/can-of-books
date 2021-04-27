import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider
    domain="dev-tspstq3y.us.auth0.com"
    clientId="kTHj6tB9wsVs69nQGWMe24zjv6NXAICO"
    redirectUri="https://ecstatic-mcnulty-5aa466.netlify.app/"
  >
    <React.StrictMode>
     <App />
    </React.StrictMode>,
  </Auth0Provider>,

  
  document.getElementById('root')
);
