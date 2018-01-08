import React from 'react';
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

import logo from '../../assets/logo.png';
import './index.css';

const navigations = [
  {
    title: 'home',
    link: '/',
  },
  {
    title: 'work',
    link: '/work',
  },
  {
    title: 'travel',
    link: '/travel',
  },
  {
    title: 'blog',
    link: '/blog',
  },
];


const Header = ({ location }) => (
  <div className="header">
    <img className="logo" src={logo} />
    <div className="links">
      {
        navigations.map(navigation => (
          <NavLink
            key={navigation.title}
            to={navigation.link}
            className={
              navigation.link === location.pathname ?
                'active-path' : ''
            }
          >
            {navigation.title}
          </NavLink>
        ))
      }
    </div>
    <div>

    </div>
  </div>
);

const HeaderWrapper = withRouter(Header);
export default HeaderWrapper;