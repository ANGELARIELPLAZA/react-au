import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () =>{
  return (
    <nav className='navbar__container-lists'>
      <ul className='container-lists__menu-list'>
        <li className='menu-list__item'>
          <NavLink to="/login" className='menu-list__link'>
            <i className='fa-solid fa-user'></i>
            <span className='menu-list__title'>Login</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

