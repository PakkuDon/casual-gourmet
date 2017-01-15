import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import RecipeReview from './RecipeReview';

export default class Recipe extends React.Component {
  componentDidMount() {
    this.props.getRecipe(this.props.params.id);
  }

  onBookmark() {
    this.props.bookmarkRecipe(this.props.params.id);
  }

  render() {
    var recipe = this.props.recipe.details;
    var isBookmarked = false;
    if (recipe) {
      isBookmarked = this.props.user.profile &&
        this.props.user.profile.bookmarks.some(b => b.recipe.id === recipe.id);
    }

    return recipe ? (
      <div className='card recipe-card'>
        <div className='recipe-image' style={{ backgroundImage: `url('${recipe.image_url}')` }}>
        </div>
        <h2>{recipe.name}</h2>
        <div className='details'>
          Posted on {moment(recipe.createdAt).format('MMMM Do YYYY')} by <Link to={`/users/${recipe.author.id}`}>{recipe.author.username}</Link>
        </div>
        <div>
          {this.props.user.profile ? (
            isBookmarked ?
              (<button>Bookmarked</button>) :
              (<button onClick={this.onBookmark.bind(this)}>Bookmark</button>)
            ) : ''
          }
        </div>
        <p>{recipe.description}</p>
        <h3>Instructions</h3>
        <div>
          {recipe.instructions}
        </div>
        <h3>Reviews</h3>
        {
          recipe.reviews.map(review => (
            <RecipeReview key={review.id} review={review} />
          ))
        }
      </div>
    ) : (
      <div className='card recipe-card'></div>
    );
  }
}
