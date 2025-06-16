import React from 'react';

const ProfileCard = ({ name, imageUrl, bio }) => {
  return (
    <div className="flex flex-col items-center max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md hover:-translate-y-1 transition-transform duration-200">
      <img
        src={imageUrl}
        alt={`${name}'s profile`}
        className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500 mb-4"
      />
      <h2 className="text-lg font-bold text-gray-900 mb-2">{name}</h2>
      <p className="text-gray-700 text-sm text-center leading-relaxed">{bio}</p>
    </div>
  );
};

export default ProfileCard;