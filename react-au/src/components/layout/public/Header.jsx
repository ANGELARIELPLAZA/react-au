import React from 'react';
import { Nav } from './Nav';
export const Header = () => {
  return (
    <header className='layout__navbar'>
      <div className='navbar__header'>
        <p className='navbar__title'>
        Boletos_AU
        </p>
      </div>
      <Nav></Nav>
    </header>
  );
};
