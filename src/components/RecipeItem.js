import React from 'react';
import { Link } from 'react-router';

export default (props) => (
  <div className='recipe-item card'>
    <Link to={`/recipes/${props.recipe.id}`}>{props.recipe.name}</Link>
  </div>
);
