import React from 'react';
import BubbleField from '../components/BubbleField';
import MainBody from '../components/MainBody';
import SideMenu from '../components/SideMenu';

const Home = () => {
  return (
    <>
      <SideMenu menuList={["Bubble", "Bubble", "Bubble"]}/>
      <BubbleField />
    </>
  );
};

export default Home;
