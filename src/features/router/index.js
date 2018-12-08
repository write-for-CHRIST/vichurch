import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../home'
import Group from '../group'
import Profile from '../profile'

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/group" exact component={Group} />
    </div>
  </Router>
)

export default AppRouter