import React from 'react';
import '../App.css'; //?
import { NavType } from '../Routes/NavigationPaths';

type SideMenuProps = {
  menuList: any
}

const SideMenu: React.FC<SideMenuProps> = ({ menuList }) => {
  return (
    <div className={`side-menu`}>
      <div>
        <ul className="menu-list side">
          {menuList.map((menuItem:any) => (
            <li>{menuItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
