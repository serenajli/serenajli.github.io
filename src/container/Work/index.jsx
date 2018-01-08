import React from 'react';
import './index.css';
import data from '../../config/data.json';
import cleanslate from '../../assets/cleanslate.png';
import accenture from '../../assets/accenture.png';
import kpmg from '../../assets/kpmg.png';

const Work = () => (
  <div className="work container">
    <div className="work-description">
      { data.work.text }
    </div>
    <div className="work-logos">
      <img src={accenture} />
      <img src={kpmg} />
      <img src={cleanslate} />
    </div>
  </div>
);

export default Work;