import React, { useState } from 'react';
import '../App.css';
import Button from './Button';

type BubbleFieldProps = {
  numberOfBubbles: number;
};

const BubbleField: React.FC<BubbleFieldProps> = ({ numberOfBubbles }) => {
  const [color, setColor] = useState('#ffffff');

  const handleColor = (e: any) => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    setColor('#' + n.slice(0, 6));
  };

  const style = { '--button-bg-color': color };

  const arrayOfButtons = [];
  for (let i = 0; i < numberOfBubbles; i++) {
    arrayOfButtons.push(
      <Button onClick={handleColor} className={'bubble'} style={style} key={i} />
    );
  }
  return <div className="bubble-field">{arrayOfButtons}</div>;
};

export default BubbleField;
