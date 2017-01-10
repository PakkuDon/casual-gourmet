import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from './containers/Root';
import Home from './containers/HomeContainer';
import AddRecipe from './components/AddRecipe';
import Recipe from './components/Recipe';
import RecipeList from './containers/RecipeListContainer';
import Registration from './components/Registration';
import Login from './components/Login';
import Profile from './containers/ProfileContainer';

export default (
  <Route path='/' component={Root}>
    <IndexRoute component={Home} />
    <Route path='/account/login' component={Login} />
    <Route path='/account/register' component={Registration} />
    <Route path='/recipes' component={RecipeList} />
    <Route path='/recipes/new' component={AddRecipe} />
    <Route path='/recipes/:id' component={Recipe} />
    <Route path='/users/:id' component={Profile} />
  </Route>
);
