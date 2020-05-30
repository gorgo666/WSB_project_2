/** @format */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUserGraduate,
  faGraduationCap,
  faHeart,
  faBriefcase,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const lis = [
  {
    to: '/',
    exact: 'exact',
    name: 'STRONA GŁÓWNA',
    icon: faHome,
  },
  {
    to: '/education',
    exact: 'exact',
    name: 'EDUKACJA',
    icon: faUserGraduate,
  },
  {
    to: '/courses',
    exact: 'exact',
    name: 'KURSY',
    icon: faGraduationCap,
  },
  {
    to: '/hobby',
    exact: 'exact',
    name: 'HOBBY',
    icon: faHeart,
  },
  {
    to: '/work',
    exact: 'exact',
    name: 'PRACE',
    icon: faBriefcase,
  },
  {
    to: '/contact',
    exact: 'exact',
    name: 'KONTACT',
    icon: faEnvelope,
  },
];

const Ul = () => (
  <ul>
    {lis.map((item) => {
      return (
        <li key={item.to}>
          <NavLink
            style={{ textDecoration: 'none' }}
            exact
            to={item.to}
            activeClassName='active'
          >
            {' '}
            {window.innerWidth > 731 ? (
              item.name
            ) : (
              <FontAwesomeIcon icon={item.icon} />
            )}
          </NavLink>
        </li>
      );
    })}
  </ul>
);

export default Ul;
