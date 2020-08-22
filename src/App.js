import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ProfileDetails from './components/ProfileDetails';
import ReposList from './components/ReposList';
import axios from 'axios';

class App extends Component {
  state = { profile: {}, repos: [], profileError: '', reposError: '' };

  onFormSubmit = async (username) => {
    // Profile Details
    await axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        this.setState({ profile: res.data });
      })
      .catch((err) => {
        this.setState({ profileError: 'Sorry, User Not Found!' });
      });

    // Repos List
    await axios
      .get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:%20asc`
      )
      .then((res) => {
        this.setState({ repos: res.data });
      })
      .catch((err) => {
        this.setState({ reposError: 'User has no public repos!' });
      });
  };

  render() {
    return (
      <div className="container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <ProfileDetails
          profile={this.state.profile}
          profileError={this.state.profileError}
        />
        <ReposList repos={this.state.repos} />
      </div>
    );
  }
}

export default App;
