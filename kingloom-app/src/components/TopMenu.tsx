import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { NavType } from '../Routes/NavigationPaths';

type TopMenuProps = {
  showMenu: boolean;
  menuList: NavType[];
};

const TopMenu: React.FC<TopMenuProps> = ({ showMenu, menuList }) => {
  return (
    <div className={`menu ${showMenu ? 'show' : ''}`}>
      <ul className="menu-list">
        {menuList.map((menuItem) => (
          <li key={menuItem.name}><Link to={menuItem.path} className="menu-item">{menuItem.name}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default TopMenu;
