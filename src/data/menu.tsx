import MenuItems from '../interfaces/MenuItems';

// React & FontAwesome
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const menu: MenuItems[] = [
  {
    page: 'Portfolio',
    url: '/portfolio'
  },
  {
    page: 'About',
    url: '/about'
  },
  {
    page: 'Contact',
    url: '/contact'
  },
  {
    page: <FontAwesomeIcon icon={faGithub} size="2x" />,
    url: 'https://github.com/jenniferkirwin'
  }
];

export default menu;