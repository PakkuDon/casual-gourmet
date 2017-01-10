import React from 'react';

export default class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addRecipe({
      name: this.refs.name.value,
      description: this.refs.description.value,
      instructions: this.refs.instructions.value,
      image_url: this.refs.image_url.value
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input id='name'
            ref='name'
            type='text' />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input id='description'
            ref='description'
            type='text' />
        </div>
        <div>
          <label htmlFor='instructions'>Instructions</label>
          <input id='instructions'
            ref='instructions'
            type='text' />
        </div>
        <div>
          <label htmlFor='image_url'>Image URL</label>
          <input id='image_url'
            ref='image_url'
            type='text' />
        </div>
        <button>Add recipe</button>
      </form>
    );
  }
}
