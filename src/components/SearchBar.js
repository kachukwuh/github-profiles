import React, { Component } from 'react';

class SearchBar extends Component {
  state = { username: '' };

  onInputChange = (e) => {
    this.setState({ username: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.username);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="input-field col s12">
            <label htmlFor="username">Search Username</label>
            <input
              onChange={this.onInputChange}
              value={this.state.username}
              type="text"
              id="username"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
