import React, { useState } from 'react';
import './App.css';
import BubbleField from './components/BubbleField';
import Button from './components/Button';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const numberOfBubbles = 42;
  const handleMenu = () => {
    console.log("Clicked!")
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <header>
        <Button onClick={handleMenu} className={'bubble menu-button'} />
        <h1>Web Development Playground</h1>
      </header>
      <div className={`menu ${showMenu ? "show": ""}`}>
        <ul className='menu-list'>
          <li>Bubble</li>
          <li>bubble</li>
          <li>bubble</li>
        </ul>
      </div> 
      <div className="main-body">
        <div className="bubble-field">
          <div>
            <BubbleField numberOfBubbles={numberOfBubbles} />
          </div>
        </div>
      </div>
      <footer>
        <p>Contact info:</p>
        <address>
          <a href="madlimai.joe@gmail.com">madlimai.joe@gmail.com</a>
          <br />
          <a href="https://www.linkedin.com/in/madlimaijoe">Linkedin</a>
        </address>
      </footer>
    </div>
  );
}

export default App;
