import React, { CSSProperties, MouseEventHandler } from 'react';

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  style?: Record<string, string | number>;
  className: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, style, className }) => {
  return (
    <button className={className} onClick={onClick} style={style}></button>
  );
};

export default Button;
