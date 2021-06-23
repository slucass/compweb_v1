import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/service',
    text: 'service',
  },
  {
    id: 3,
    url: '/verticals',
    text: 'verticals',
  },
  {
    id: 4,
    url: '/technology',
    text: 'technology',
  },
  {
    id: 5,
    url: '/contact',
    text: 'contact',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
];
