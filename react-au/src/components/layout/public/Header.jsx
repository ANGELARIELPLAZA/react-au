import React from 'react';
import { Nav } from './Nav';
export const Header = () => {
  return (
    <header className='layout__navbar'>
      <div className='navbar__header'>
        <p className='navbar__title'>
        itsmo
        </p>
      </div>
      <Nav></Nav>
    </header>
  );
};
