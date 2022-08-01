// Example for Context API - in order the state of isLoggedIn to be used everywhere in the app
import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false
});

export default AuthContext;