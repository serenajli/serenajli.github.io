import React from 'react';

import './index.css';
import data from '../../config/data.json';

const Footer = () => (
  <div className="footer">
    <div className="social-links">
      {
        data.social.map(socialLink => (
          <a
            key={socialLink.title}
            href={socialLink.link}
          >
            <i className={socialLink.icon} aria-hidden="true">
            </i>
            {socialLink.title}
          </a>
        ))
      }
    </div>
    <hr />
    <div className="copyright">Copyright 2017 Serena Li.</div>
  </div>
);

export default Footer;