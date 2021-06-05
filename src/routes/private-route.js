import React from 'react';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  return localStorage.getItem('user_data') ? children : (
    <Redirect to="/login" />
  );
};
export { PrivateRoute };