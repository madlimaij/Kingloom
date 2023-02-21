import React, { useState } from 'react';
import '../App.css';
import Button from './Button';

const BubbleField: React.FC = () => {
  const [color, setColor] = useState('#ffffff');
  const [bubbleCount, setBubbleCount] = useState(78);

  const removeBubbles = (e: any) => {
    //@Todo: remove anys
    setBubbleCount(bubbleCount - 1);
    handleColor(e);
  };
  const addBubbles = (e: any) => {
    setBubbleCount(bubbleCount + 1);
    handleColor(e);
  };
  const handleColor = (e: any) => {
    // let n = (Math.random() * 0xfffff * 1000000).toString(16);
    // setColor('#' + n.slice(0, 6));
    let m = (Math.random() * 0xfffff * 1000000).toString(16);
    e.currentTarget.style.setProperty('--button-bg-color', '#' + m.slice(0, 6));
  };

  const style = { '--button-bg-color': color };
  const arrayOfButtons = [];
  for (let i = 0; i < bubbleCount; i++) {
    arrayOfButtons.push(
      <Button
        onClick={handleColor}
        className={'bubble'}
        style={style}
        key={i}
      />
    );
  }

  return (
    <div className="bubble-field">
      <div>
        <Button
          onClick={addBubbles}
          className={'bubble add-button'}
          style={style}
        ></Button>
        {/* <div className='more-tooltip'>Click me for more!</div> */}
        <Button
          onClick={removeBubbles}
          className={'bubble remove-button'}
          style={style}
        ></Button>
        {/* <div className='less-tooltip'>Less bubbles, yes!</div> */}
        {arrayOfButtons}
      </div>
    </div>
  );
};

export default BubbleField;
