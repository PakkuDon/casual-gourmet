import React from 'react';

export default class ReviewFrom extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    this.props.reviewRecipe(
      this.refs.content.value,
      this.refs.score.value,
      this.props.params.id
    );
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div>
          <label htmlFor='review-content'>Review</label>
          <textarea ref='content' id='review-content'></textarea>
        </div>
        <div>
          <label htmlFor='review-score'>Score</label>
          <select id='review-score' ref='score'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
        <button>Add Review</button>
      </form>
    );
  }
}
