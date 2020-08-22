import React from 'react';
import Repo from './Repo';

const ReposList = ({ repos }) => {
  const renderedList = repos.map((repo) => {
    return <Repo key={repo.id} repo={repo} />;
  });

  return <div>{renderedList}</div>;
};

export default ReposList;
