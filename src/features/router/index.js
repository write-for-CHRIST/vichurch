import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../home'
import Group from '../group'
import {ProfileAdd, ProfileList, ProfileEdit} from '../profile'

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" exact component={Home} />
      <Route path="/profile/add" exact component={ProfileAdd} />
      <Route path="/profile/edit" exact component={ProfileEdit} />
      <Route path="/profile/list" exact component={ProfileList} />
      <Route path="/group" exact component={Group} />
    </div>
  </Router>
)

export default AppRouter
