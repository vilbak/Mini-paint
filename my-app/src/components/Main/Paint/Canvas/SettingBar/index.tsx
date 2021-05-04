import React from 'react';
import './style.scss';

const SettingBar = () => {
  return (
    <div className={'settingBar'}>
      <input type='number' min={1} max={50} />
    </div>
  );
};

export default SettingBar;
