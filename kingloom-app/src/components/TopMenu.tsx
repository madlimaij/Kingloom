import React from 'react';
import "../App.css"

type TopMenuProps = {
    showMenu: boolean
}

const TopMenu:React.FC<TopMenuProps> = ({showMenu}) => {
  return (
    <div className={`menu ${showMenu ? 'show' : ''}`}>
     <ul className="menu-list">
        <li>Bubble</li>
        <li>bubble</li>
        <li>bubble</li>
      </ul>
  </div>

  );
};

export default TopMenu;
