import React from 'react';

export default class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        name: '',
        description: '',
        instructions: '',
        image_url: ''
      }
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange() {
    this.setState({
      recipe: {
        name: this.refs.name.value,
        description: this.refs.description.value,
        instructions: this.refs.instructions.value,
        image_url: this.refs.image_url.value
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.recipe);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input id='name' ref='name' type='text'
            onChange={this.onChange} value={this.state.name} />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input id='description' ref='description' type='text'
            onChange={this.onChange} value={this.state.description} />
        </div>
        <div>
          <label htmlFor='instructions'>Instructions</label>
          <input id='instructions' ref='instructions' type='text'
            onChange={this.onChange} value={this.state.instructions} />
        </div>
        <div>
          <label htmlFor='image_url'>Image URL</label>
          <input id='image_url' ref='image_url' type='text'
            onChange={this.onChange} value={this.state.image_url} />
        </div>
        <button>Add recipe</button>
      </form>
    );
  }
}
