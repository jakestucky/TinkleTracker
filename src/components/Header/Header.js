import React from 'react';
import './Header.css';
import star from './star1.png';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Header = () => (
  <header>
    <div className='head'>
      <img height='150px' src={star} />
      <h1>TinkleTracker</h1>
    </div>
  </header>
);

export default Header;
