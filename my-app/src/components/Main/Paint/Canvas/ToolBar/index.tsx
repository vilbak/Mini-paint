import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { setBrush, setRect } from '../../../../../store/actions';
import { setCircle } from '../../../../../store/actions/tools';


const Toolbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="toolbar">
      <button className="toolbar__btn brush" onClick={() => dispatch(setBrush())} />
      <button className="toolbar__btn rect" onClick={() => dispatch(setRect())} />
      <button className="toolbar__btn circle" onClick={()=>dispatch(setCircle())}/>
      <input style={{ marginLeft: 10 }} type="color" />
      <div className={'settingBar'}>
        <label>Width of the line</label>
        <input type='number' min={1} max={50} />
      </div>
    </div>
  );
};

export default Toolbar;
