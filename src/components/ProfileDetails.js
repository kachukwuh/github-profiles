import React from 'react';
import './ProfileDetails.css';

const ProfileDetails = ({ profile }) => {
  if (!profile.name) {
    return <div></div>;
  }

  return (
    <div className="profile-details card">
      <div className="row">
        <div className="image-section col s12 m4 l4">
          <img src={profile.avatar_url} alt={profile.name} />
          <a className="waves-effect waves-light btn" href={profile.html_url}>
            View Profile
          </a>
        </div>
        <div className="contents col s12 m8 l8">
          <h2>{profile.name}</h2>
          <div className="divider"></div>
          <p className="flow-text">{profile.bio}</p>
          <div className="profile-icons">
            <p className="flow-text">
              <i className="small material-icons">person</i>
              <br />
              {profile.following}
            </p>
            <p className="flow-text">
              <i className="small material-icons">group_add</i>
              <br />
              {profile.followers}
            </p>
            <p className="flow-text">
              <i className="small material-icons">location_on</i>
              <br />
              {profile.location}
            </p>
          </div>
          <p className="flow-text">
            Website: <a href={`http://${profile.blog}`}>{profile.blog}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
