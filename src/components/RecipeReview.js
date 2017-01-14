import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

export default ({ review }) => (
  <div className='review card'>
    <p>{review.content}</p>
    <p>- {review.score} / 5</p>
    <div>- {moment(review.createdAt).format('DD/MM/YYYY')} by <Link to={`/users/${review.user.id}`}>{review.user.username}</Link></div>
  </div>
);
