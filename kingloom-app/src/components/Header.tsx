import React, { useState } from 'react';
import Button from './Button';
import TopMenu from './TopMenu';
import '../App.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <header>
        <Button onClick={handleMenu} className={'bubble menu-button'} />
        <h1>Web Development Playground</h1>
      </header>
      <TopMenu showMenu={showMenu} />
    </div>
  );
};

export default Header;
