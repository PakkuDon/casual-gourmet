import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Recipe from './containers/RecipeContainer';
import RecipeList from './containers/RecipeListContainer';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/recipes' component={RecipeList} />
    <Route path='/recipes/:id' component={Recipe} />
  </Route>
);
