import React, { useState } from 'react';
import './App.css';
import BubbleField from './components/BubbleField';

function App() {
  const numberOfBubbles = 16
  return (
    <div className="App">
      <header className="App-header">
        <h1>Web Development Playground</h1>
      </header>
      <div className="main-body">
        <div className="bubble-field">
          <div>
            <BubbleField numberOfBubbles = {numberOfBubbles}/>
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
