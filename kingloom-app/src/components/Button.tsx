import React, { MouseEventHandler } from 'react';

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: Record<string, string | number>;
  className: string;
  children?: any
};

const Button: React.FC<ButtonProps> = ({ onClick, style, className, children }) => {
  return (
    <button className={className} onClick={onClick} style={style}>{children}</button>
  );
};

export default Button;
