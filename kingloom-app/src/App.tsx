import React from 'react';
import './App.css';
import BubbleField from './components/BubbleField';
import Footer from './components/Footer';
import Header from './components/Header';
import MainBody from './components/MainBody';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div>
      <Header />
      <MainBody>
        <SideMenu />
        <BubbleField />
      </MainBody>
      <Footer />
    </div>
  );
}

export default App;
