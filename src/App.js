import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ProfileDetails from './components/ProfileDetails';
import ReposList from './components/ReposList';
import axios from 'axios';

class App extends Component {
  state = { profile: {}, repos: [] };

  onFormSubmit = async (username) => {
    const profile = await axios.get(`https://api.github.com/users/${username}`);

    const repos = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:%20asc`
    );

    this.setState({ profile: profile.data });
    this.setState({ repos: repos.data });
  };

  render() {
    return (
      <div className="container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <ProfileDetails profile={this.state.profile} />
        <ReposList repos={this.state.repos} />
      </div>
    );
  }
}

export default App;
