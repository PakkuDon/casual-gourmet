import React from 'react';
import { Link } from 'react-router';

export default (props) => (
  <div className='recipe-item card'>
    <div className='recipe-image' style={{ backgroundImage: `url('${props.recipe.image_url}')` }}></div>
    <Link to={`/recipes/${props.recipe.id}`}>{props.recipe.name}</Link>
  </div>
);
