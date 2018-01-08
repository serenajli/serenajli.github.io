import React from 'react';
import './index.css';
import data from '../../config/data.json';
import picture from '../../assets/profile-pic.png';

const Home = () => (
  <div className="home container">
    <img
      className="display-picture"
      src={picture}
    />
    <div className="about-me">
      { data.home.text }
    </div>
  </div>
);

export default Home;