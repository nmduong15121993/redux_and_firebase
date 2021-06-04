import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ path = '', exact = false, component = null, ...props }) => {
  return localStorage.getItem('user_data') ? (
    <Route path={props.path} exact={props.exact}>
      {component}
    </Route>
  ) : (
    <Redirect to="/login" />
  );
};
export { PrivateRoute };