import React, { useState } from 'react';
import Button from './Button';
import TopMenu from './TopMenu';
import '../App.css';
import NavigationPaths from '../Routes/NavigationPaths';

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
      <TopMenu showMenu={showMenu} menuList = {NavigationPaths}/>
    </div>
  );
};

export default Header;
