import React from 'react';
import './Repo.css';

const Repo = ({ repo }) => {
  return (
    <div className="repo card">
      <div className="card-content">
        <h3 className="card-title">
          <a href={repo.html_url}>{repo.name}</a>
        </h3>
        <p>Forks: {repo.forks_count}</p>
        <p>Watchers: {repo.watchers_count}</p>
      </div>
    </div>
  );
};

export default Repo;
