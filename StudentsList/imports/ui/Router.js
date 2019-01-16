import React, { Component, Fragment } from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router';

import App from './App';
import Edit from './Edit';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/students/:id" component={Edit} />
    </Switch>
  </BrowserRouter>
)

export default Router;
