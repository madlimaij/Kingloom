import React, { useState } from 'react';
import '../App.css';

type BubbleFieldProps = {
  numberOfBubbles: number;
};

const BubbleField: React.FC<BubbleFieldProps> = ({ numberOfBubbles }) => {
  const [color, setColor] = useState('#ffffff');

  const handleColor = (e: any) => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    setColor('#' + n.slice(0, 6));
  };

  const arrayOfButtons = [];
  for (let i = 0; i < numberOfBubbles; i++) {
    arrayOfButtons.push(
      <button
        className="bubble"
        onClick={handleColor}
        style={{ backgroundColor: color }}
        key={i}
      ></button>
    );
  }
  return <div className="bubble-field">{arrayOfButtons}</div>;
};

export default BubbleField;
