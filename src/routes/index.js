import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './private-route';
import { Login } from '../features/login';
import { HomePage } from '../features/home-page';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </PrivateRoute>
      </Switch>
    </Router>
  );
};
export { Routes };