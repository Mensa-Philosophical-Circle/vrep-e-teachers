import '../styles/header.css';
import React, { useEffect } from 'react';
import avatarIcon from '../assets/avatar-icon.png';
import { getUser } from '../hooks/useStorage';
import GenerateAvatar from '../util/generateAvatar';
export default function Header(props) {
  const profile = getUser();

  return (
    <>
      <article className="header">
        <article className="heading-text">
          <h1>{props.title}</h1>
        </article>
        <div className="row mobileHide">
          <div className="user-name">
            <p style={{ fontSize: 22, fontWeight: 600 }}>
              {profile.first_name} {profile.last_name}
            </p>
            <p>Teacher</p>
          </div>
          {profile.photo ? (
            <img
              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
              className="avatar-image"
              src={profile.photo}
              alt={profile.first_name}
            />
          ) : (
            <GenerateAvatar profile={profile} />
          )}
        </div>
      </article>
    </>
  );
}

