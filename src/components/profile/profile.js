import React from 'react';
import './profile.css';
import Posts from './posts';
import ProfileInfo from './profile-info'

const Profile = ({postData}) => {
  return (
    <div className="main-content">

        <ProfileInfo/>
        <Posts postData={postData}/>
      </div>
  )
}

export default Profile;