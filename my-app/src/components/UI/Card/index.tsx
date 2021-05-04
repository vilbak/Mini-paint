import React from 'react';

import './style.css'

const Card = (props:any) => {
  return (
    <div className={` card ${props.className}`}>{props.children}</div>
  );
};

export default Card;
