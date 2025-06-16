import React from 'react';
import ProfileCard from './components/ProfileCard.jsx';

const App = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800 p-6">
      <h1 className="text-2xl font-bold text-gray-100 mb-6">Profile Card</h1>
      <ProfileCard
        name="Rimfat Timnan Simon"
        imageUrl="https://res.cloudinary.com/dderwjbjk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1750084180/dev_timmy_ppdamn.jpg" 
        bio=" With a keen eye for detail and a passion for problem-solving, I create intuitive and engaging user experiences using HTML, CSS, JavaScript, ReactJS, 
        and Tailwind CSS. As a versatile developer, I thrive on tackling diverse projects—from e-commerce to education—aiming to enhance user satisfaction and drive engagement.." 
      />
    </div>
  );
};

export default App;