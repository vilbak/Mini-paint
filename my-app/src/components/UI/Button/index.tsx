import React from 'react';


import './style.css'

const Button = (props:any) => {
  return (
    <button
      type={props.type || 'button'}
      className={` button ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
