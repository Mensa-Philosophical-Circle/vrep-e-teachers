import React from 'react';

const GenerateAvatar = ({ profile, width, height, fontSize, borderRadius }) => {
  return (
    <div
      className="custom-avatar"
      style={{
        width: width ? width : '60px',
        height: height ? height : '60px',
        fontSize: fontSize ? fontSize : '20px',
        borderRadius: borderRadius ? borderRadius : '50%',
      }}
    >
      {profile.first_name.charAt(0).toUpperCase() + profile.last_name.charAt(0).toUpperCase()}
    </div>
  );
};

export const GenerateCourseAvatar = ({ name, width, height, fontSize, borderRadius }) => {
  return (
    <div
      className="custom-avatar"
      style={{
        width: width ? width : '60px',
        height: height ? height : '60px',
        fontSize: fontSize ? fontSize : '20px',
        borderRadius: borderRadius ? borderRadius : '50%',
      }}
    >
      {console.log(name, 'name...')}
      {name.slice(0, 3).toUpperCase()}
    </div>
  );
};

export default GenerateAvatar;

