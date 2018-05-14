import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import AddTask from './AddTask';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/add-task' component={AddTask}/>
    </Switch>
  </BrowserRouter>
)

export default Router;